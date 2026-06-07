import { DashboardLayout, DataTable, PageHeader, StatCard } from '../../dashboard'
import { assignedTasks } from '../mock-data/ofcBoyData'

function OfcBoyDashboard() {
  return (
    <DashboardLayout
      title="OfcBoy Dashboard"
      subtitle="Field task management"
      badge="OfcBoy"
      actions={[
        { to: '/ofcboy/assigned-tasks', label: 'Assigned Tasks', icon: 'fa-solid fa-list-check' },
        { to: '/ofcboy/pickup-tasks', label: 'Pickup Tasks', icon: 'fa-solid fa-box-open' },
        { to: '/ofcboy/delivery-tasks', label: 'Delivery Tasks', icon: 'fa-solid fa-truck' },
        { to: '/ofcboy/inspection-tasks', label: 'Vehicle Inspection', icon: 'fa-solid fa-clipboard-check' }
      ]}
    >
      <section className="stat-grid">
        <StatCard icon="fa-solid fa-list-check" label="Assigned" value="3" note="Today and tomorrow" />
        <StatCard icon="fa-solid fa-box" label="Pickup" value="1" note="Document collection" />
        <StatCard icon="fa-solid fa-truck-fast" label="Delivery" value="1" note="Ready for dispatch" />
      </section>

      <PageHeader eyebrow="Tasks" title="Assigned Tasks" description="Current field work allocated by clerk." />
      <DataTable
        rows={assignedTasks}
        columns={[
          { key: 'id', label: 'Task ID' },
          { key: 'requestId', label: 'Request' },
          { key: 'type', label: 'Type' },
          { key: 'customer', label: 'Customer' },
          { key: 'due', label: 'Due' },
          { key: 'status', label: 'Status', type: 'status' }
        ]}
      />
    </DashboardLayout>
  )
}

export default OfcBoyDashboard
