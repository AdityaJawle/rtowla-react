import { DashboardLayout, PageHeader, StatCard } from '../../dashboard'

function AnalyticsDashboard() {
  return (
    <DashboardLayout title="Analytics Dashboard" subtitle="SuperAdmin workflow" badge="Analytics">
      <PageHeader eyebrow="Analytics" title="Platform Analytics" description="Static analytics placeholders for future reporting APIs." />
      <section className="stat-grid">
        <StatCard icon="fa-solid fa-chart-line" label="Requests" value="286" note="Month to date" />
        <StatCard icon="fa-solid fa-gauge-high" label="Completion Rate" value="82%" note="Mock KPI" />
        <StatCard icon="fa-solid fa-user-clock" label="Avg Turnaround" value="2.4 Days" note="Service cycle" />
      </section>
    </DashboardLayout>
  )
}

export default AnalyticsDashboard
