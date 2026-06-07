import { DashboardLayout, PageHeader, StatCard } from '../../dashboard'
import { adminStats } from '../mock-data/adminData'

function ReportsDashboard() {
  return (
    <DashboardLayout title="Reports Dashboard" subtitle="Admin workflow" badge="Reports">
      <PageHeader eyebrow="Reports" title="Operational Reports" description="Static report cards for future service analytics." />
      <section className="stat-grid">
        {adminStats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </section>
      <section className="panel-card">
        <h3>Detail Panels</h3>
        <p>Revenue, service completion, clerk workload, and approval turnaround reports will connect here when backend APIs are available.</p>
      </section>
    </DashboardLayout>
  )
}

export default ReportsDashboard
