import React from "react";
import "./GaugeCard.css";

interface GaugeCardProps {
  title?: string; // title을 선택적 prop으로 변경
  value: number;
  status: string;
}

const GaugeCard: React.FC<GaugeCardProps> = ({ title, value, status }) => {
  // 0(Extreme Fear) to 100(Extreme Greed)
  const getStatusColor = (currentStatus: string) => {
    switch (currentStatus) {
      case "Extreme Fear":
        return "#c0392b";
      case "Fear":
        return "#e67e22";
      case "Neutral":
        return "#f1c40f";
      case "Greed":
        return "#27ae60";
      case "Extreme Greed":
        return "#2ecc71";
      default:
        return "var(--text-light)";
    }
  };

  // 바늘이 -90도(왼쪽 끝)에서 90도(오른쪽 끝)까지 움직이도록 수정
  const rotation = (value / 100) * 180 - 90;

  return (
    <div className="card gauge-card">
      <div className="gauge-container">
        <div className="gauge-dial" />
        <div
          className="gauge-indicator"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <div className="gauge-value">{value}</div>
      </div>
      <p className="gauge-status" style={{ color: getStatusColor(status) }}>
        {status}
      </p>
    </div>
  );
};

export default GaugeCard;
