import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'

function GuestDashboard() {
  const { user } = useContext(LoginContext)

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <p>Welcome</p>
          <h1>{user?.name || 'Guest User'}</h1>
        </div>
        <span className="dashboard-badge">Guest Dashboard</span>
      </section>

      <section className="service-options">
        <Link to="/sell" className="service-card">
          <i className="fa-solid fa-car"></i>
          <h2>Vehicle Related Service</h2>
          <p>Sell vehicle, purchase vehicle, ownership transfer, RC update, hypothecation and address change services.</p>
        </Link>

        <Link to="/contact" className="service-card">
          <i className="fa-solid fa-id-card"></i>
          <h2>Driving Licence Related Service</h2>
          <p>Apply for licence help, renewal support, address update, duplicate licence and document guidance.</p>
        </Link>
      </section>
    </main>
  )
}

export default GuestDashboard
