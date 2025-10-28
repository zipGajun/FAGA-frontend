import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Chat.css";

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  user: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "AI의 발전은 결국 인류에게 이득이 될 거라고 생각해요. 생산성이 극대화될 테니까요.",
      sender: "other",
      user: "Optimist",
    },
    {
      id: 2,
      text: "하지만 그 과정에서 수많은 사람들이 일자리를 잃게 될 위험은 어떻게 하죠?",
      sender: "other",
      user: "Realist",
    },
    {
      id: 3,
      text: "일자리 문제는 새로운 산업이 생겨나면서 자연스럽게 해결될 수 있다고 봅니다.",
      sender: "me",
      user: "You",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const message: Message = {
      id: Date.now(),
      text: newMessage,
      sender: "me",
      user: "You",
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="message-user">
              {msg.sender === "other" ? msg.user : ""}
            </div>
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chat-input-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메시지를 입력하세요..."
        />
        <button type="submit">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Chat;
