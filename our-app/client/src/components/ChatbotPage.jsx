import React, { useState } from 'react';
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Welcome! I can help you with DSA topics and how to use the DSA Recommendation System app. Please ask your question." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Expanded DSA topics and app-usage keywords
  const allowedKeywords = [
    // DSA topics
    'dsa', 'data structure', 'data structures', 'algorithm', 'algorithms', 'array', 'arrays', 'linked list', 'linked lists', 'stack', 'queue', 'tree', 'trees', 'binary tree', 'binary search tree', 'bst', 'avl tree', 'red black tree', 'heap', 'heaps', 'priority queue', 'graph', 'graphs', 'adjacency list', 'adjacency matrix', 'bfs', 'dfs', 'breadth first search', 'depth first search', 'topological sort', 'dijkstra', 'bellman ford', 'floyd warshall', 'kruskal', 'prim', 'minimum spanning tree', 'mst', 'shortest path', 'hash', 'hash table', 'hash map', 'hashing', 'set', 'map', 'dictionary', 'trie', 'segment tree', 'fenwick tree', 'binary indexed tree', 'suffix tree', 'suffix array', 'disjoint set', 'union find', 'recursion', 'dynamic programming', 'dp', 'memoization', 'tabulation', 'greedy', 'divide and conquer', 'backtracking', 'sliding window', 'two pointer', 'bit manipulation', 'sorting', 'searching', 'binary search', 'linear search', 'merge sort', 'quick sort', 'bubble sort', 'selection sort', 'insertion sort', 'counting sort', 'radix sort', 'bucket sort', 'shell sort', 'top k', 'kth largest', 'kth smallest', 'lru cache', 'lfu cache', 'time complexity', 'space complexity', 'big o', 'big o notation', 'asymptotic', 'complexity', 'optimization', 'coding problem', 'leetcode', 'hackerrank', 'competitive programming',
    // App usage
    'quiz', 'score', 'login', 'signup', 'register', 'language', 'java', 'python', 'c++', 'javascript', 'how to use', 'app', 'recommendation', 'user guide', 'help', 'instructions', 'features', 'usage', 'start', 'account', 'select language', 'choose language', 'test', 'exam', 'assessment', 'easy', 'intermediate', 'difficult', 'hard', 'level', 'levels', 'progress', 'marks', 'grade', 'tracking', 'achievement', 'badge', 'streak', 'performance', 'mode', 'learning mode', 'theory', 'practice', 'theory mode', 'practice mode', 'quiz mode', 'step', 'steps', 'tutorial', 'walkthrough', 'beginner', 'getting started', 'first time', 'new user'
  ];

  const isAllowed = (question) => {
    return allowedKeywords.some(keyword => question.toLowerCase().includes(keyword));
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setLoading(true);

    // Out-of-context filter
    if (!isAllowed(input)) {
      setMessages(msgs => [...msgs, { sender: 'bot', text: "Sorry, I can only help with DSA topics or how to use the DSA Recommendation System app." }]);
      setLoading(false);
      return;
    }

    // Add context to short user inputs
    let userInput = input.trim();
    if (userInput.split(/\s+/).length <= 3) {
      userInput = `Explain this in the context of DSA or the app: ${userInput}`;
    }
    // Gemini 2.0 Flash API call (with improved prompt)
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const prompt = `You are an expert assistant for the DSA Recommendation System app. Here's how the app works:

**App Features:**
1. **Language Selection**: Users can choose from Telugu, Hindi, English, or Tamil for the interface
2. **Authentication**: Sign up and login functionality for personalized experience
3. **Programming Language Selection**: Choose from Java, Python, C++, or JavaScript for DSA problems
4. **Quiz System**: Three difficulty levels - Easy, Intermediate, and Hard
5. **Score Tracking**: View and track your quiz performance and progress

**How to Use the App:**
1. **Getting Started**: Select your preferred language (Telugu/Hindi/English/Tamil)
2. **Account Setup**: Sign up with email/password or login if you have an account
3. **Choose Programming Language**: Select Java, Python, C++, or JavaScript based on your preference
4. **Take Quiz**: Start with Easy level, then progress to Intermediate and Hard
5. **View Scores**: Check your performance and track improvement over time

**Quiz Levels:**
- **Easy**: Basic DSA concepts, suitable for beginners
- **Intermediate**: Moderate complexity problems, for those with some DSA knowledge
- **Hard**: Advanced algorithms and data structures, for experienced users

If the user asks about DSA topics, provide detailed explanations including:
- What the topic is
- Its types and variations
- Time and space complexity
- Real-world applications
- Implementation examples

**Special Instructions for All DSA Topics:**
For ANY DSA topic (arrays, strings, linked lists, queues, stacks, recursion, trees, graphs, heaps, BFS, DFS, sorting, searching, dynamic programming, etc.), provide detailed conceptual explanations including:
- What the topic is and its purpose
- Types and variations of the data structure/algorithm
- Time and space complexity analysis
- Real-world applications and use cases
- Key concepts and principles
- How it works conceptually

This applies to all DSA concepts: arrays, strings, linked lists, queues, stacks, recursion, trees (binary, BST, AVL), graphs, heaps, BFS, DFS, sorting algorithms, searching algorithms, dynamic programming, greedy algorithms, and more.

If the question is not related to DSA or the app, politely reply: 'Sorry, I can only help with questions about DSA or how to use the DSA Recommendation System app.'

User: ${userInput}`;
      const payload = {
        contents: [
          { role: "user", parts: [{ text: prompt }] }
        ]
      };
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );
      const data = await response.json();
      const botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get a response.";
      setMessages(msgs => [...msgs, { sender: 'bot', text: botText }]);
    } catch (e) {
      setMessages(msgs => [...msgs, { sender: 'bot', text: "Sorry, there was an error connecting to the assistant." }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', border: 'none', borderRadius: 16, background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', padding: 0, overflow: 'hidden', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ background: 'linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)', padding: 20, textAlign: 'center' }}>
        <h2 style={{ margin: 0, color: '#fff', fontWeight: 700, letterSpacing: 1 }}>DSA Chatbot</h2>
        <div style={{ fontSize: 24, marginTop: 4 }}>🤖</div>
      </div>
      <div style={{ minHeight: 240, maxHeight: 320, overflowY: 'auto', background: 'rgba(255,255,255,0.95)', padding: 16 }}>
        {messages.map((msg, i) => {
          if (msg.sender === 'bot') {
            // Split response into lines, remove leading stars, and highlight heading
            const lines = msg.text.split(/\r?\n/).map(line => line.replace(/^\s*\*+\s*/, ''));
            return (
              <div key={i} style={{ textAlign: 'left', margin: '12px 0' }}>
                {lines.map((line, idx) => (
                  idx === 0 ? (
                    <div key={idx} style={{
                      background: '#f8f9fa',
                      color: '#333',
                      padding: '10px 16px',
                      borderRadius: '16px 16px 16px 4px',
                      display: 'inline-block',
                      fontWeight: 700,
                      fontSize: 18,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                      marginBottom: lines.length > 1 ? 4 : 0
                    }}>{line}</div>
                  ) : (
                    <div key={idx} style={{
                      background: '#f8f9fa',
                      color: '#333',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      display: 'inline-block',
                      fontWeight: 500,
                      fontSize: 15,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                      marginTop: 2
                    }}>{line}</div>
                  )
                ))}
              </div>
            );
          } else {
            return (
              <div key={i} style={{ textAlign: 'right', margin: '12px 0' }}>
                <span style={{
                  background: 'linear-gradient(90deg, #f7971e 0%,rgb(242, 236, 71) 100%)',
                  color: '#222',
                  padding: '10px 16px',
                  borderRadius: '16px 16px 4px 16px',
                  display: 'inline-block',
                  fontWeight: 500,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                }}>{msg.text}</span>
              </div>
            );
          }
        })}
        {loading && <div style={{ color: '#888', fontStyle: 'italic' }}>Bot is typing...</div>}
      </div>
      <div style={{ display: 'flex', gap: 8, background: 'rgba(255,255,255,0.95)', padding: 16, borderTop: '1px solid #eee' }}>
        <input
          style={{ flex: 1, padding: 12, borderRadius: 8, border: '1px solid #bbb', fontSize: 16, outline: 'none', background: '#f8fafc', color: '#222', fontWeight: 500 }}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Ask about DSA or the app..."
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '0 20px', fontWeight: 700, fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 2px 8px rgba(102,126,234,0.15)' }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage; 