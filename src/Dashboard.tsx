import React from "react";
import ChartCard from "./ChartCard";
import {
  FaTachometerAlt,
  FaProjectDiagram,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSearch,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import "./ChartCard.css";

const Dashboard = () => {
  const navItems = [
    { icon: <FaTachometerAlt />, name: "Dashboard" },
    { icon: <FaProjectDiagram />, name: "Projects" },
    { icon: <FaUsers />, name: "Team" },
    { icon: <FaChartBar />, name: "Reports" },
    { icon: <FaCog />, name: "Settings" },
  ];

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

  const recentOrders = [
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

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <span className="logo">FAGA</span>
        </div>
        <ul className="sidebar-menu">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={item.name === "Dashboard" ? "active" : ""}
            >
              <a href="#">
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
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
        </section>

        {/* Recent Orders */}
        <section className="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.product}</td>
                  <td>{order.number}</td>
                  <td>{order.payment}</td>
                  <td>
                    <span
                      className={`status ${order.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="#" className="show-all">
            Show All
          </a>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
