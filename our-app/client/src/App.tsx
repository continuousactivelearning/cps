import React, { useState } from 'react'
import './App.css'
import ChatbotPage from './components/ChatbotPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatbotPage />
    </>
  )
}

export default App
