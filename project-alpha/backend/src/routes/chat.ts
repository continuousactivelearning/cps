import express, { Request, Response, Router } from 'express';
import { authenticate } from '../middleware/auth';
import Chat from '../models/Chat';
import Notification from '../models/Notification';
import User from '../models/User';

const router: Router = express.Router();

// Get all chats for a user (student gets their chats, admin gets all chats)
router.get('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    let chats;
    if (req.user.role === 'admin') {
      chats = await Chat.find()
        .populate('studentId', 'username email')
        .populate('adminId', 'username email')
        .sort({ lastMessageAt: -1 });
    } else {
      chats = await Chat.find({ studentId: req.user.id })
        .populate('studentId', 'username email')
        .populate('adminId', 'username email')
        .sort({ lastMessageAt: -1 });
    }
    
    res.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error);
    res.status(500).json({ error: 'Failed to fetch chats' });
  }
});

// Get a specific chat by ID
router.get('/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const chat = await Chat.findById(req.params.id)
      .populate('studentId', 'username email')
      .populate('adminId', 'username email');
    
    if (!chat) {
      res.status(404).json({ error: 'Chat not found' });
      return;
    }
    
    // Check if user has access to this chat
    if (req.user.role !== 'admin' && chat.studentId.toString() !== req.user.id) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }
    
    res.json(chat);
  } catch (error) {
    console.error('Error fetching chat:', error);
    res.status(500).json({ error: 'Failed to fetch chat' });
  }
});

// Create a new chat (students only)
router.post('/', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.user.role !== 'student') {
      res.status(403).json({ error: 'Only students can create chats' });
      return;
    }
    
    const { subject, message } = req.body;
    
    if (!subject || !message) {
      res.status(400).json({ error: 'Subject and message are required' });
      return;
    }
    
    const chat = new Chat({
      studentId: req.user.id,
      subject,
      messages: [{
        sender: 'student',
        senderId: req.user.id,
        message,
        timestamp: new Date()
      }]
    });
    
    await chat.save();
    
    // Notify admins about new chat
    const admins = await User.find({ role: 'admin' });
    for (const admin of admins) {
      await Notification.create({
        userId: admin._id,
        type: 'chat_response',
        title: 'New Support Request',
        message: `New chat request from ${req.user.username}: ${subject}`,
        relatedData: { chatId: chat._id }
      });
    }
    
    const populatedChat = await Chat.findById(chat._id)
      .populate('studentId', 'username email')
      .populate('adminId', 'username email');
    
    res.status(201).json(populatedChat);
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ error: 'Failed to create chat' });
  }
});

// Send a message in a chat
router.post('/:id/messages', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const { message } = req.body;
    
    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }
    
    const chat = await Chat.findById(req.params.id);
    
    if (!chat) {
      res.status(404).json({ error: 'Chat not found' });
      return;
    }
    
    // Check if user has access to this chat
    if (req.user.role !== 'admin' && chat.studentId.toString() !== req.user.id) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }
    
    const newMessage = {
      sender: req.user.role,
      senderId: req.user.id,
      message,
      timestamp: new Date()
    };
    
    chat.messages.push(newMessage);
    
    // If admin is responding, set adminId and update status
    if (req.user.role === 'admin' && !chat.adminId) {
      chat.adminId = req.user.id;
      chat.status = 'in_progress';
    }
    
    await chat.save();
    
    // Notify the other party
    const recipientId = req.user.role === 'admin' ? chat.studentId : chat.adminId;
    if (recipientId) {
      await Notification.create({
        userId: recipientId,
        type: 'chat_response',
        title: 'New Message',
        message: `New message in chat: ${chat.subject}`,
        relatedData: { chatId: chat._id }
      });
    }
    
    const populatedChat = await Chat.findById(chat._id)
      .populate('studentId', 'username email')
      .populate('adminId', 'username email');
    
    res.json(populatedChat);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Close a chat (admin only)
router.put('/:id/close', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.user.role !== 'admin') {
      res.status(403).json({ error: 'Only admins can close chats' });
      return;
    }
    
    const chat = await Chat.findByIdAndUpdate(
      req.params.id,
      { status: 'closed' },
      { new: true }
    ).populate('studentId', 'username email')
     .populate('adminId', 'username email');
    
    if (!chat) {
      res.status(404).json({ error: 'Chat not found' });
      return;
    }
    
    // Notify student that chat is closed
    await Notification.create({
      userId: chat.studentId,
      type: 'system',
      title: 'Chat Closed',
      message: `Your support chat "${chat.subject}" has been closed by an admin.`,
      relatedData: { chatId: chat._id }
    });
    
    res.json(chat);
  } catch (error) {
    console.error('Error closing chat:', error);
    res.status(500).json({ error: 'Failed to close chat' });
  }
});

export default router; 
