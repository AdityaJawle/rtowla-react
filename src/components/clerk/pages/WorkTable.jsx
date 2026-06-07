import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { clerkRequests } from '../mock-data/clerkData'

function WorkTable() {
  return (
    <DashboardLayout title="Work Table" subtitle="Clerk workflow" badge="Operations">
      <PageHeader eyebrow="Work" title="Active Clerk Work" description="Accepted and in-progress requests with current assignment status.">
        <input className="dashboard-search" type="search" placeholder="Search request" />
      </PageHeader>
      <DataTable
        rows={clerkRequests}
        columns={[
          { key: 'requestId', label: 'Request ID' },
          { key: 'service', label: 'Service' },
          { key: 'assignedTo', label: 'Assigned To' },
          { key: 'priority', label: 'Priority' },
          { key: 'status', label: 'Status', type: 'status' }
        ]}
      />
    </DashboardLayout>
  )
}

export default WorkTable
