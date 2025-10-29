import { Outlet } from 'react-router-dom'
import Header from './Header'
import './Layout.css'

const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content-wrapper">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
