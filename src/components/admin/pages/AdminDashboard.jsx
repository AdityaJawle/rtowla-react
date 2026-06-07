import { DashboardLayout, DataTable, PageHeader, StatCard } from '../../dashboard'
import { adminStats, serviceMonitoring } from '../mock-data/adminData'

function AdminDashboard() {
  return (
    <DashboardLayout
      title="Admin Dashboard"
      subtitle="Service monitoring and approvals"
      badge="Admin"
      actions={[
        { to: '/admin/service-monitoring', label: 'Service Monitoring', icon: 'fa-solid fa-chart-simple' },
        { to: '/admin/vehicle-purchase-review', label: 'Purchase Review', icon: 'fa-solid fa-car-side' },
        { to: '/admin/approval-center', label: 'Approval Center', icon: 'fa-solid fa-circle-check' },
        { to: '/admin/reports-dashboard', label: 'Reports', icon: 'fa-solid fa-file-lines' }
      ]}
    >
      <section className="stat-grid">
        {adminStats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </section>
      <PageHeader eyebrow="Monitor" title="Service Monitoring" description="Track request status, clerk ownership, and operational delays." />
      <DataTable
        rows={serviceMonitoring}
        columns={[
          { key: 'id', label: 'Request' },
          { key: 'service', label: 'Service' },
          { key: 'owner', label: 'Owner' },
          { key: 'clerk', label: 'Clerk' },
          { key: 'status', label: 'Status', type: 'status' },
          { key: 'updated', label: 'Updated' }
        ]}
      />
    </DashboardLayout>
  )
}

export default AdminDashboard
