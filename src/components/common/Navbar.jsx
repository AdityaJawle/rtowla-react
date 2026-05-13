import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext';

function Navbar() {
  
  const {isLoggedIn, user, logout} = useContext(LoginContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav>

      <div className="nav-left">

        <Link to="">RTOWLA</Link>

        <Link to="">Home</Link>

        <Link to="/sell">Sell</Link>

        <Link to="/purchase">Purchase</Link>

        <Link to="/about">About Us</Link>

        <Link to="/contact">Contact Us</Link>

      </div>

      <div className="nav-right">

        {isLoggedIn ? (
          <>
            <Link to="/guest-dashboard" className="profile-badge">
              <i className="fa-solid fa-user-check"></i>
              <span>{user?.name || user?.email || 'Guest User'}</span>
            </Link>

            <button type="button" className="nav-action" onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link to = "/login" aria-label="Login">
              <i className="fa-solid fa-circle-user"></i>
            </Link>

            <Link to="/register" aria-label="Register">
              <i className="fa-solid fa-user"></i>
            </Link>
          </>
        )}

      </div>

    </nav>
  )
}

export default Navbar
