import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import { DashboardLayout, StatCard } from '../dashboard'
import { guestServices, requestHistory } from './mock-data/guestData'

function GuestDashboard() {
  const { user } = useContext(LoginContext)

  return (
    <DashboardLayout
      title={user?.name || 'Guest User'}
      subtitle="Welcome"
      badge="Guest Dashboard"
      actions={[
        { to: '/guest-dashboard/service-request', label: 'Service Request', icon: 'fa-solid fa-file-circle-plus' },
        { to: '/guest-dashboard/sell-vehicle', label: 'Sell Vehicle', icon: 'fa-solid fa-car' },
        { to: '/guest-dashboard/purchase-vehicle', label: 'Purchase Vehicle', icon: 'fa-solid fa-handshake' },
        { to: '/guest-dashboard/request-history', label: 'Request History', icon: 'fa-solid fa-clock-rotate-left' }
      ]}
    >
      <section className="stat-grid">
        <StatCard icon="fa-solid fa-file-lines" label="Total Requests" value={requestHistory.length} note="Mock account history" />
        <StatCard icon="fa-solid fa-spinner" label="In Progress" value="1" note="Currently active" />
        <StatCard icon="fa-solid fa-circle-check" label="Completed" value="1" note="Delivered services" />
      </section>

      <section className="service-options">
        {guestServices.map((service) => (
          <Link to="/guest-dashboard/service-request" className="service-card" key={service.title}>
            <i className={service.icon}></i>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </Link>
        ))}
      </section>
    </DashboardLayout>
  )
}

export default GuestDashboard
