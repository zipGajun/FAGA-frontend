import React, { useState, useEffect } from "react";
import ChartCard from "./ChartCard";
import GaugeCard from "./components/GaugeCard";
import RecentOrdersTable from "./RecentOrdersTable";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import "./ChartCard.css";
import "./RecentOrdersTable.css";
import "./EditableTitle.css";
import "./components/GaugeCard.css";

const Dashboard = () => {
  // 임시 금융 데이터 (나중에 API로 교체 가능)
  const financialData = [
    {
      title: "Nasdaq",
      value: "19,935.43",
      change: "+1.2%",
      strokeColor: "#8884d8",
      data: [
        { name: "D-6", value: 19700 },
        { name: "D-5", value: 19750 },
        { name: "D-4", value: 19650 },
        { name: "D-3", value: 19800 },
        { name: "D-2", value: 19850 },
        { name: "D-1", value: 19900 },
        { name: "D-0", value: 19935 },
      ],
    },
    {
      title: "S&P 500",
      value: "5,521.12",
      change: "+0.8%",
      strokeColor: "#82ca9d",
      data: [
        { name: "D-6", value: 5480 },
        { name: "D-5", value: 5490 },
        { name: "D-4", value: 5500 },
        { name: "D-3", value: 5495 },
        { name: "D-2", value: 5510 },
        { name: "D-1", value: 5515 },
        { name: "D-0", value: 5521 },
      ],
    },
    {
      title: "Bitcoin",
      value: "$61,543",
      change: "-2.5%",
      strokeColor: "#ffc658",
      data: [
        { name: "D-6", value: 63000 },
        { name: "D-5", value: 63500 },
        { name: "D-4", value: 62000 },
        { name: "D-3", value: 62500 },
        { name: "D-2", value: 61000 },
        { name: "D-1", value: 61800 },
        { name: "D-0", value: 61543 },
      ],
    },
    {
      title: "Gold",
      value: "$2,320.50",
      change: "+0.5%",
      strokeColor: "#d0ed57",
      data: [
        { name: "D-6", value: 2300 },
        { name: "D-5", value: 2310 },
        { name: "D-4", value: 2305 },
        { name: "D-3", value: 2315 },
        { name: "D-2", value: 2325 },
        { name: "D-1", value: 2318 },
        { name: "D-0", value: 2320 },
      ],
    },
  ];

  // Fear & Greed Index를 위한 상태
  const [fearGreedIndex, setFearGreedIndex] = useState<{
    value: number;
    status: string;
  } | null>(null);

  // 컴포넌트가 처음 렌더링될 때 Fear & Greed Index 데이터를 가져오는 것을 시뮬레이션합니다.
  useEffect(() => {
    // 실제 구현에서는 이 부분에 API 호출 코드가 들어갑니다.
    // 예: fetch('https://my-proxy-server.com/api/fear-greed')
    //       .then(res => res.json())
    //       .then(data => setFearGreedIndex(data));

    // 지금은 목업(mock) 데이터를 사용합니다.
    const mockApiCall = setTimeout(() => {
      setFearGreedIndex({ value: 43, status: "Fear" });
    }, 1000); // 1초 후 데이터 로딩

    return () => clearTimeout(mockApiCall); // 컴포넌트 언마운트 시 클린업
  }, []);

  // 초기 주문 데이터
  const initialOrders = [
    {
      product: "Laptop Pro",
      number: "86234",
      payment: "Paid",
      status: "Delivered",
    },
    {
      product: "Mobile Phone",
      number: "86235",
      payment: "Due",
      status: "Pending",
    },
    {
      product: "Wireless Earbuds",
      number: "86236",
      payment: "Paid",
      status: "In Progress",
    },
    {
      product: "Smart Watch",
      number: "86237",
      payment: "Paid",
      status: "Delivered",
    },
    { product: "Keyboard", number: "86238", payment: "Due", status: "Return" },
  ];

  // 여러 주문 섹션을 관리하기 위한 state (id 추가)
  const [orderSections, setOrderSections] = useState([
    { id: 1, title: "Recent Orders", orders: initialOrders },
  ]);

  // 새 주문 섹션을 추가하는 함수
  const addOrderSection = () => {
    const newSection = {
      id: Date.now(), // 고유한 ID 생성
      title: `New Section ${orderSections.length}`,
      // 실제 앱에서는 API 호출 등으로 데이터를 가져옵니다. 여기서는 초기 데이터를 재사용합니다.
      orders: [...initialOrders].sort(() => 0.5 - Math.random()).slice(0, 3),
    };
    setOrderSections([...orderSections, newSection]);
  };

  // 섹션 제목을 변경하는 함수
  const handleTitleChange = (id: number, newTitle: string) => {
    setOrderSections(
      orderSections.map((section) => {
        if (section.id === id) {
          return { ...section, title: newTitle };
        }
        return section;
      })
    );
  };

  // 섹션을 삭제하는 함수
  const handleDeleteSection = (id: number) => {
    setOrderSections(orderSections.filter((section) => section.id !== id));
  };

  return (
    <main className="main-content">
      <header className="main-header">
        <h2>Dashboard</h2>
        <div className="header-actions">
          <div className="search-box">
            <FaSearch />
            <input type="text" placeholder="Search..." />
          </div>
          <FaBell className="action-icon" />
          <FaUserCircle className="action-icon" />
        </div>
      </header>

      {/* Stats Cards */}
      <section className="stats-cards">
        {financialData.map((item) => (
          <ChartCard
            key={item.title}
            title={item.title}
            value={item.value}
            change={item.change}
            data={item.data}
            strokeColor={item.strokeColor}
          />
        ))}
        {/* Fear & Greed Index 카드 */}
        {fearGreedIndex ? (
          <GaugeCard
            value={fearGreedIndex.value}
            status={fearGreedIndex.status}
          />
        ) : (
          <div className="card">Loading...</div>
        )}
      </section>

      <div className="orders-management">
        <div className="orders-header">
          <h2>Orders Overview</h2>
          <button onClick={addOrderSection} className="add-section-btn">
            + Add Section
          </button>
        </div>
        <div className="orders-grid">
          {orderSections.map((section) => (
            <RecentOrdersTable
              key={section.id}
              title={section.title}
              orders={section.orders}
              onTitleChange={(newTitle) =>
                handleTitleChange(section.id, newTitle)
              }
              onDelete={() => handleDeleteSection(section.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
