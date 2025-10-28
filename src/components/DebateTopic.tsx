import React, { useState, useMemo } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./DebateTopic.css";

const DebateTopic = () => {
  const [agreeVotes, setAgreeVotes] = useState(1357);
  const [disagreeVotes, setDisagreeVotes] = useState(891);
  const [voted, setVoted] = useState<"agree" | "disagree" | null>(null);

  const totalVotes = agreeVotes + disagreeVotes;
  const agreePercentage = useMemo(
    () => (totalVotes > 0 ? (agreeVotes / totalVotes) * 100 : 50),
    [agreeVotes, totalVotes]
  );
  const disagreePercentage = useMemo(
    () => (totalVotes > 0 ? (disagreeVotes / totalVotes) * 100 : 50),
    [disagreeVotes, totalVotes]
  );

  const handleVote = (type: "agree" | "disagree") => {
    if (voted) return; // 이미 투표했다면 중복 투표 방지

    if (type === "agree") {
      setAgreeVotes(agreeVotes + 1);
    } else {
      setDisagreeVotes(disagreeVotes + 1);
    }
    setVoted(type);
  };

  return (
    <div className="debate-topic-container">
      <div className="topic-card">
        <span className="topic-tag">오늘의 토론</span>
        <h3 className="topic-title">
          인공지능(AI)의 발전이 인류에게 위협이 될 것인가?
        </h3>
        <p className="topic-description">
          AI 기술은 의료, 교통, 산업 등 다양한 분야에서 혁신을 주도하고
          있습니다. 하지만 일각에서는 AI가 인간의 일자리를 대체하고, 통제
          불가능한 수준으로 발전하여 인류의 생존을 위협할 수 있다는 우려도
          제기됩니다.
        </p>
      </div>

      <div className="vote-card">
        <h4>투표 현황</h4>
        <div className="vote-status">
          <div className="vote-bar">
            <div className="agree-bar" style={{ width: `${agreePercentage}%` }}>
              <span className="percentage-text">
                {agreePercentage.toFixed(1)}%
              </span>
            </div>
            <div
              className="disagree-bar"
              style={{ width: `${disagreePercentage}%` }}
            >
              <span className="percentage-text">
                {disagreePercentage.toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="vote-labels">
            <span>찬성 {agreeVotes.toLocaleString()}</span>
            <span>반대 {disagreeVotes.toLocaleString()}</span>
          </div>
        </div>
        <div className="vote-actions">
          <button
            className={`vote-btn agree ${voted === "agree" ? "voted" : ""}`}
            onClick={() => handleVote("agree")}
            disabled={!!voted}
          >
            <FaThumbsUp /> 찬성
          </button>
          <button
            className={`vote-btn disagree ${
              voted === "disagree" ? "voted" : ""
            }`}
            onClick={() => handleVote("disagree")}
            disabled={!!voted}
          >
            <FaThumbsDown /> 반대
          </button>
        </div>
      </div>
    </div>
  );
};

export default DebateTopic;
