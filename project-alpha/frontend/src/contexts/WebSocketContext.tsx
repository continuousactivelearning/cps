import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { WS_BASE_URL } from '../config/api';

interface WebSocketContextType {
  connect: (token: string) => void;
  disconnect: () => void;
  sendMessage: (message: any) => void;
  isConnected: boolean;
  connectionStatus: 'connecting' | 'connected' | 'disconnected' | 'error';
  socket: Socket | null;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};

interface WebSocketProviderProps {
  children: React.ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected' | 'error'>('disconnected');
  const socketRef = useRef<Socket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const maxReconnectAttempts = 5;

  const connect = useCallback((token: string) => {
    if (socketRef.current?.connected) {
      console.log('Socket.IO already connected');
      return;
    }

    try {
      console.log('Attempting WebSocket connection with token:', token ? 'present' : 'missing');
      setConnectionStatus('connecting');
      const socket = io(WS_BASE_URL, {
        auth: { token },
        transports: ['websocket', 'polling']
      });
      socketRef.current = socket;

      socket.on('connect', () => {
        console.log('Socket.IO connected');
        setIsConnected(true);
        setConnectionStatus('connected');
        reconnectAttemptsRef.current = 0;
      });

      socket.on('disconnect', (reason) => {
        console.log('Socket.IO disconnected:', reason);
        setIsConnected(false);
        setConnectionStatus('disconnected');
        
        // Attempt to reconnect if not manually disconnected
        if (reason !== 'io client disconnect' && reconnectAttemptsRef.current < maxReconnectAttempts) {
          reconnectAttemptsRef.current++;
          const delay = Math.min(1000 * Math.pow(2, reconnectAttemptsRef.current), 30000);
          console.log(`Attempting to reconnect in ${delay}ms (attempt ${reconnectAttemptsRef.current}/${maxReconnectAttempts})`);
          
          reconnectTimeoutRef.current = setTimeout(() => {
            connect(token);
          }, delay);
        }
      });

      socket.on('connect_error', (error) => {
        console.error('Socket.IO connection error:', error);
        setConnectionStatus('error');
      });

    } catch (error) {
      console.error('Error creating Socket.IO connection:', error);
      setConnectionStatus('error');
    }
  }, []);

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }
    
    setIsConnected(false);
    setConnectionStatus('disconnected');
    reconnectAttemptsRef.current = 0;
  }, []);

  const sendMessage = useCallback((message: any) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit('send_message', message);
    } else {
      console.warn('Socket.IO is not connected. Cannot send message:', message);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  const value: WebSocketContextType = {
    connect,
    disconnect,
    sendMessage,
    isConnected,
    connectionStatus,
    socket: socketRef.current,
  };

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
}; 
