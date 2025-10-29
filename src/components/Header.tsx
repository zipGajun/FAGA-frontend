import { NavLink, Link } from 'react-router-dom'
import {
  FaUserCircle,
  FaBell,
  FaChartLine,
  FaSearch,
  FaComments,
  FaUsers,
  FaQuestionCircle,
  FaRobot,
} from 'react-icons/fa'
import './Header.css'
import { useAuth } from '../contexts/AuthContext'

const navItems = [
  { path: '/', name: 'Dashboard', icon: <FaChartLine /> },
  { path: '/vote', name: 'Vote', icon: <FaComments /> },
  { path: '/community', name: 'Community', icon: <FaUsers /> },
  { path: '/qa', name: 'Q&A', icon: <FaQuestionCircle /> },
  { path: '/ai', name: 'AI', icon: <FaRobot /> },
]

const Header = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <header className="app-header">
      <div className="header-left">
        <NavLink to="/" className="header-logo">
          FAGA
        </NavLink>
        <nav className="header-nav">
          {navItems.map((item) => (
            <NavLink to={item.path} key={item.name} className="nav-item">
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="user-profile-section">
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search..." />
        </div>
        {isLoggedIn ? (
          <div className="user-info">
            <button className="icon-button action-icon">
              <FaBell />
            </button>
            <button className="icon-button action-icon">
              <FaUserCircle />
            </button>
            <button className="logout-btn" onClick={logout}>
              로그아웃
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">
            로그인
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header