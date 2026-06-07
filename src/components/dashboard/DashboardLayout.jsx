import { Link } from 'react-router-dom'

function DashboardLayout({ title, subtitle, badge, actions = [], children }) {
  return (
    <main className="dashboard-page role-dashboard-page">
      <section className="dashboard-header">
        <div>
          <p>{subtitle}</p>
          <h1>{title}</h1>
        </div>
        {badge && <span className="dashboard-badge">{badge}</span>}
      </section>

      {actions.length > 0 && (
        <section className="dashboard-tabs" aria-label={`${title} navigation`}>
          {actions.map((action) => (
            <Link to={action.to} key={action.to}>
              {action.icon && <i className={action.icon}></i>}
              <span>{action.label}</span>
            </Link>
          ))}
        </section>
      )}

      <div className="dashboard-content">
        {children}
      </div>
    </main>
  )
}

export default DashboardLayout
