import { DashboardLayout, DataTable, PageHeader, StatCard, Timeline } from '../../dashboard'
import { activityTimeline, users } from '../mock-data/superAdminData'

function SuperAdminDashboard() {
  return (
    <DashboardLayout
      title="SuperAdmin Dashboard"
      subtitle="Platform monitoring"
      badge="SuperAdmin"
      actions={[
        { to: '/superadmin/user-management', label: 'User Management', icon: 'fa-solid fa-users' },
        { to: '/superadmin/role-management', label: 'Role Management', icon: 'fa-solid fa-user-shield' },
        { to: '/superadmin/audit-logs', label: 'Audit Logs', icon: 'fa-solid fa-clipboard-list' },
        { to: '/superadmin/activity-monitoring', label: 'Activity', icon: 'fa-solid fa-timeline' },
        { to: '/superadmin/analytics-dashboard', label: 'Analytics', icon: 'fa-solid fa-chart-pie' }
      ]}
    >
      <section className="stat-grid">
        <StatCard icon="fa-solid fa-users" label="Users" value="124" note="All roles" />
        <StatCard icon="fa-solid fa-user-shield" label="Role Changes" value="2" note="This week" />
        <StatCard icon="fa-solid fa-clipboard-list" label="Audit Events" value="86" note="Mock logs" />
      </section>
      <PageHeader eyebrow="Overview" title="User Overview Tables" description="Platform-level user status and role visibility." />
      <DataTable
        rows={users}
        columns={[
          { key: 'id', label: 'User ID' },
          { key: 'name', label: 'Name' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status', type: 'status' },
          { key: 'lastLogin', label: 'Last Login' }
        ]}
      />
      <section className="panel-card">
        <h3>Activity Timeline UI</h3>
        <Timeline items={activityTimeline} />
      </section>
    </DashboardLayout>
  )
}

export default SuperAdminDashboard
