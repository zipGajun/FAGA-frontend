import React, { useState } from "react";
import VoteTopic from "../components/VoteTopic";
import BettingPanel from "../components/BettingPanel";
import "./VotePage.css";
import "../components/VoteTopic.css";
import "../components/BettingPanel.css";

const Vote = () => {
  // 서버에서 가져올 데이터라고 가정
  const [agreePool, setAgreePool] = useState(135700);
  const [disagreePool, setDisagreePool] = useState(89100);
  const [userCoins, setUserCoins] = useState(5000);
  const [userBet, setUserBet] = useState<{
    side: "agree" | "disagree";
    amount: number;
  } | null>(null);

  const handleBet = (side: "agree" | "disagree", amount: number) => {
    if (userBet) return; // 이미 베팅했다면 중복 방지

    // 실제로는 API를 통해 서버에 베팅 정보를 전송합니다.
    setUserCoins(userCoins - amount);
    if (side === "agree") {
      setAgreePool(agreePool + amount);
    } else {
      setDisagreePool(disagreePool + amount);
    }
    setUserBet({ side, amount });
  };

  return (
    <main className="main-content">
      <header className="main-header">
        <h2>Today's Vote</h2>
      </header>
      <div className="vote-page-layout">
        <div className="vote-topic-section">
          <VoteTopic agreePool={agreePool} disagreePool={disagreePool} />
        </div>
        <div className="vote-betting-section">
          <BettingPanel
            userCoins={userCoins}
            onBet={handleBet}
            userBet={userBet}
          />
        </div>
      </div>
    </main>
  );
};

export default Vote;
