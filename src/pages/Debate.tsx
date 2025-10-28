import React from "react";
import DebateTopic from "../components/DebateTopic";
import Chat from "../components/Chat";
import "./DebatePage.css";
import "../components/DebateTopic.css";
import "../components/Chat.css";

const Debate = () => {
  return (
    <main className="main-content">
      <header className="main-header">
        <h2>Today's Debate</h2>
      </header>
      <div className="debate-page-layout">
        <div className="debate-topic-section">
          <DebateTopic />
        </div>
        <div className="debate-chat-section">
          <Chat />
        </div>
      </div>
    </main>
  );
};

export default Debate;
