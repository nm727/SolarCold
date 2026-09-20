import { NavLink, useLocation } from 'react-router-dom'
import { Home, FolderKanban, Users, Image, MapPin, Sun, Leaf } from 'lucide-react'
import logoSolarcold from '../../assets/logo_solarcold.png'
import './Sidebar.css'

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/overview', label: 'Project Overview', icon: FolderKanban },
  { path: '/team', label: 'Our Team', icon: Users },
  { path: '/gallery', label: 'Gallery', icon: Image },
  { path: '/roadmap', label: 'Roadmap', icon: MapPin },
]

function Sidebar() {
  const location = useLocation()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <img src={logoSolarcold} alt="SolarCold" className="logo-icon-img" />
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-label">Navigation</div>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? 'nav-item--active' : ''}`}
            >
              <div className="nav-icon">
                <Icon size={20} />
              </div>
              <span className="nav-label-text">{item.label}</span>
              {isActive && <div className="nav-indicator" />}
            </NavLink>
          )
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-badge">
          <Sun size={14} />
          <span>Powered by Solar Energy</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
