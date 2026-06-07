import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { assignedTasks } from '../mock-data/ofcBoyData'

function OfcBoyTasks({ type = 'Assigned' }) {
  const rows = type === 'Assigned' ? assignedTasks : assignedTasks.filter((task) => task.type === type)

  return (
    <DashboardLayout title={`${type} Tasks`} subtitle="OfcBoy workflow" badge="Field Work">
      <PageHeader eyebrow="Tasks" title={`${type} Tasks`} description="Mock task list for pickup, delivery, and field coordination." />
      <DataTable
        rows={rows}
        columns={[
          { key: 'id', label: 'Task ID' },
          { key: 'requestId', label: 'Request' },
          { key: 'customer', label: 'Customer' },
          { key: 'address', label: 'Address' },
          { key: 'due', label: 'Due' },
          { key: 'status', label: 'Status', type: 'status' }
        ]}
      />
    </DashboardLayout>
  )
}

export default OfcBoyTasks
