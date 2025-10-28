import React, { useState } from "react";
import { FaCoins, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./BettingPanel.css";

interface BettingPanelProps {
  userCoins: number;
  onBet: (side: "agree" | "disagree", amount: number) => void;
  userBet: { side: "agree" | "disagree"; amount: number } | null;
}

const BettingPanel: React.FC<BettingPanelProps> = ({
  userCoins,
  onBet,
  userBet,
}) => {
  const [betAmount, setBetAmount] = useState("");
  const [error, setError] = useState("");

  const handleBet = (side: "agree" | "disagree") => {
    const amount = parseInt(betAmount, 10);
    if (isNaN(amount) || amount <= 0) {
      setError("유효한 금액을 입력하세요.");
      return;
    }
    if (amount > userCoins) {
      setError("보유 코인이 부족합니다.");
      return;
    }
    setError("");
    onBet(side, amount);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 입력되도록
    setBetAmount(value);
  };

  return (
    <div className="betting-panel-container">
      <div className="user-info-card">
        <h4>나의 정보</h4>
        <div className="coin-balance">
          <span>보유 코인</span>
          <div className="coin-value">
            <FaCoins />
            <span>{userCoins.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {userBet ? (
        <div className="bet-result-card">
          <h4>베팅 완료</h4>
          <p>
            <span className={`bet-side ${userBet.side}`}>
              {userBet.side === "agree" ? "찬성" : "반대"}
            </span>
            에
            <span className="bet-amount">
              {userBet.amount.toLocaleString()} 코인
            </span>
            을 베팅했습니다.
          </p>
          <p className="bet-message">결과를 기다려주세요!</p>
        </div>
      ) : (
        <div className="betting-action-card">
          <h4>베팅하기</h4>
          <div className="bet-input-group">
            <input
              type="text"
              value={betAmount}
              onChange={handleAmountChange}
              placeholder="베팅할 코인"
            />
            <button
              className="max-btn"
              onClick={() => setBetAmount(userCoins.toString())}
            >
              MAX
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="bet-buttons">
            <button
              className="bet-btn agree"
              onClick={() => handleBet("agree")}
            >
              <FaThumbsUp /> 찬성
            </button>
            <button
              className="bet-btn disagree"
              onClick={() => handleBet("disagree")}
            >
              <FaThumbsDown /> 반대
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BettingPanel;
