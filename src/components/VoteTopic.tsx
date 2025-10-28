import React from "react";
import { FaCoins } from "react-icons/fa";
import "./VoteTopic.css";

interface VoteTopicProps {
  agreePool: number;
  disagreePool: number;
}

const VoteTopic: React.FC<VoteTopicProps> = ({ agreePool, disagreePool }) => {
  const totalPool = agreePool + disagreePool;
  const agreeRatio = totalPool > 0 ? (agreePool / totalPool) * 100 : 50;
  const disagreeRatio = totalPool > 0 ? (disagreePool / totalPool) * 100 : 50;

  // 배당률 계산 (소수점 두 자리까지)
  const agreePayout =
    agreePool > 0 ? (totalPool / agreePool).toFixed(2) : "0.00";
  const disagreePayout =
    disagreePool > 0 ? (totalPool / disagreePool).toFixed(2) : "0.00";

  return (
    <div className="vote-topic-container">
      <div className="topic-card">
        <span className="topic-tag">오늘의 투표</span>
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

      <div className="betting-status-card">
        <h4>베팅 현황</h4>
        <div className="total-pool">
          <FaCoins />
          <span>총 베팅액: {totalPool.toLocaleString()} 코인</span>
        </div>
        <div className="betting-bar">
          <div className="agree-bar" style={{ width: `${agreeRatio}%` }}>
            <span className="ratio-text">{agreeRatio.toFixed(1)}%</span>
          </div>
        </div>
        <div className="payout-info">
          <div className="payout-agree">
            <span className="payout-label">찬성 배당</span>
            <span className="payout-value">x{agreePayout}</span>
            <span className="pool-amount">{agreePool.toLocaleString()}</span>
          </div>
          <div className="payout-disagree">
            <span className="payout-label">반대 배당</span>
            <span className="payout-value">x{disagreePayout}</span>
            <span className="pool-amount">{disagreePool.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteTopic;
