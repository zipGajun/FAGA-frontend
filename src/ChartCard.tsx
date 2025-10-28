import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import "./ChartCard.css";

// 데이터 타입 정의
interface ChartDataPoint {
  name: string;
  value: number;
}

interface ChartCardProps {
  title: string;
  value: string;
  change: string;
  data: ChartDataPoint[];
  strokeColor: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  value,
  change,
  data,
  strokeColor,
}) => {
  const isPositive = change.startsWith("+");

  return (
    <div className="card chart-card">
      <div className="chart-card-info">
        <h3>{title}</h3>
        <p className="value">{value}</p>
        <p className={`change ${isPositive ? "positive" : "negative"}`}>
          {change}
        </p>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                border: "none",
                borderRadius: "5px",
              }}
              labelStyle={{ display: "none" }}
              itemStyle={{ color: strokeColor }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={strokeColor}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
