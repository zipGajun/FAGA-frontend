import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaChartLine,
  FaComments,
  FaUsers,
  FaQuestionCircle,
  FaRobot,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const navItems = [
  { path: "/", name: "Dashboard", icon: <FaChartLine /> },
  { path: "/vote", name: "Vote", icon: <FaComments /> },
  { path: "/community", name: "Community", icon: <FaUsers /> },
  { path: "/qa", name: "Q&A", icon: <FaQuestionCircle /> },
  { path: "/ai", name: "AI", icon: <FaRobot /> }, // AI 항목 추가
];

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`dashboard-container ${
        isCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <span className="logo">{isCollapsed ? "F" : "FAGA"}</span>
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
        <div
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          <span>Collapse</span>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
