import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaChartLine,
  FaComments,
  FaUsers,
  FaQuestionCircle,
  FaRobot, // FaRobot 아이콘 추가
} from "react-icons/fa";

const navItems = [
  { path: "/", name: "Dashboard", icon: <FaChartLine /> },
  { path: "/debate", name: "Debate", icon: <FaComments /> },
  { path: "/community", name: "Community", icon: <FaUsers /> },
  { path: "/qa", name: "Q&A", icon: <FaQuestionCircle /> },
  { path: "/ai", name: "AI", icon: <FaRobot /> }, // AI 항목 추가
];

const Layout = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <span className="logo">FAGA</span>
        </div>
        <ul className="sidebar-menu">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} end>
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
