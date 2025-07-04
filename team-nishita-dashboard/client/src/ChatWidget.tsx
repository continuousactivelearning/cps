import React, { useState, useRef, useEffect } from "react";

// --- Typing Indicator Component ---
const TypingIndicator: React.FC = () => (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "0"
  }}>
    <span style={{
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      background: "#222",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      flexShrink: 0,
    }}>⚙️</span>
    <span style={{
      display: "inline-block",
      background: "#f3f8f7",
      borderRadius: "16px 16px 16px 4px",
      padding: "14px 20px",
      minWidth: "44px",
      minHeight: "24px"
    }}>
      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          background: "#bdbdbd",
          borderRadius: "50%",
          animation: "typing-bounce 1s infinite alternate",
          animationDelay: "0s"
        }}></span>
        <span style={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          background: "#bdbdbd",
          borderRadius: "50%",
          animation: "typing-bounce 1s infinite alternate",
          animationDelay: "0.2s"
        }}></span>
        <span style={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          background: "#bdbdbd",
          borderRadius: "50%",
          animation: "typing-bounce 1s infinite alternate",
          animationDelay: "0.4s"
        }}></span>
      </span>
    </span>
  </div>
);

// --- Keyframes for Typing Animation ---
const typingKeyframes = `
@keyframes typing-bounce {
  0% { transform: translateY(0); opacity: 0.7; }
  50% { transform: translateY(-8px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.7; }
}
`;

// --- Responsive Hook (only for widget width) ---
function useResponsiveWidgetWidth() {
  const [width, setWidth] = useState(getWidth(window.innerWidth));
  function getWidth(windowWidth: number) {
    if (windowWidth >= 1200) return 450;
    if (windowWidth >= 900) return 380;
    return Math.floor(windowWidth * 0.98); // 98vw for smaller screens
  }
  useEffect(() => {
    function handleResize() {
      setWidth(getWidth(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

// --- Main ChatWidget Component ---
const ChatWidget: React.FC = () => {
  const width = useResponsiveWidgetWidth();

  const widgetStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    width: "clamp(320px, 30vw, 420px)",
    minWidth: "280px",
    maxWidth: "98vw",
    maxHeight: "600px",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    fontFamily: "Segoe UI, sans-serif",
  };
  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "36px",
    right: "36px",
    background: "#17695b",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "clamp(48px, 6vw, 84px)",
    height: "clamp(48px, 6vw, 84px)",
    fontSize: "clamp(24px, 3vw, 44px)",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
    zIndex: 1001,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  // --- Other styles (unchanged) ---
  const headerStyle: React.CSSProperties = {
    background: "#17695b",
    color: "#fff",
    padding: "20px 28px",
    fontWeight: 700,
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const headerIcons: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };
  const closeBtnStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "26px",
    cursor: "pointer",
    marginLeft: "8px",
  };
  const chatBodyStyle: React.CSSProperties = {
    flex: 1,
    overflowY: "auto",
    padding: "0 20px 16px 20px",
    background: "#f7f9fa",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  };
  const inputAreaStyle: React.CSSProperties = {
    display: "flex",
    borderTop: "1px solid #e0e0e0",
    padding: "18px",
    background: "#fff",
  };
  const agentBubble: React.CSSProperties = {
    background: "#f3f8f7",
    color: "#222",
    padding: "14px 20px",
    borderRadius: "16px 16px 16px 4px",
    maxWidth: "80%",
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    fontSize: "1.05rem",
  };
  const userBubble: React.CSSProperties = {
    background: "#17695b",
    color: "#fff",
    padding: "14px 20px",
    borderRadius: "16px 16px 4px 16px",
    maxWidth: "80%",
    alignSelf: "flex-end",
    fontSize: "1.05rem",
  };
  const agentIcon: React.CSSProperties = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#222",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    flexShrink: 0,
  };
  const poweredByStyle: React.CSSProperties = {
    fontSize: "13px",
    color: "#bbb",
    textAlign: "center",
    padding: "10px 0 14px 0",
    background: "#fff",
  };
  const inputStyle: React.CSSProperties = {
    flex: 1,
    padding: "12px 14px",
    border: "1px solid #ccc",
    borderRadius: "16px",
    outline: "none",
    fontSize: "1rem",
    color: "#222",
    background: "#fff",
  };
  const sendBtnStyle: React.CSSProperties = {
    marginLeft: "12px",
    background: "#17695b",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    fontSize: "24px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // --- State and logic ---
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "bot", text: "Hello! Welcome to the Interactive Learning Assistant. How can I help you with your studies today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inject keyframes for typing animation
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = typingKeyframes;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    setLoading(true);
    const userMessage = input;
    setInput("");
    try {
      const res = await fetch(import.meta.env.VITE_CHAT_URL || "http://localhost:5005/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { sender: "bot", text: data.reply }]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Sorry, I couldn't reach the chatbot server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!open && (
        <button style={buttonStyle} onClick={() => setOpen(true)} title="Chat">
          <span role="img" aria-label="chat">💬</span>
        </button>
      )}
      {open && (
        <div style={{ ...widgetStyle, width }}>
          <div style={headerStyle}>
            <span>Support Agent</span>
            <span style={headerIcons}>
              <button style={closeBtnStyle} onClick={() => setOpen(false)} title="Close">×</button>
            </span>
          </div>
          <div style={chatBodyStyle}>
            {messages.map((msg, idx) =>
              msg.sender === "bot" ? (
                <div
                  key={idx}
                  style={{
                    ...agentBubble,
                    marginTop: idx === 0 ? "40px" : "0"
                  }}
                >
                  <span style={agentIcon}>🤖</span>
                  <span>{msg.text}</span>
                </div>
              ) : (
                <div
                  key={idx}
                  style={{
                    ...userBubble,
                    marginTop: idx === 0 ? "200px" : "0"
                  }}
                >
                  {msg.text}
                </div>
              )
            )}
            {loading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
          <div style={inputAreaStyle}>
            <input
              style={inputStyle}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type here..."
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              style={sendBtnStyle}
              title="Send"
            >
              {loading ? "…" : "↑"}
            </button>
          </div>
          <div style={poweredByStyle}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
              <span role="img" aria-label="bot">🤖</span> Powered by <b>T6 & HuggingFace </b>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
