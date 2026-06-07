import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { clerkRequests } from '../mock-data/clerkData'

function IncomingRequests() {
  return (
    <DashboardLayout title="Incoming Requests" subtitle="Clerk workflow" badge="Review Queue">
      <PageHeader eyebrow="Requests" title="New Service Requests" description="Frontend-only request intake list for clerk review." />
      <DataTable
        rows={clerkRequests}
        columns={[
          { key: 'requestId', label: 'Request ID' },
          { key: 'customer', label: 'Customer' },
          { key: 'service', label: 'Service' },
          { key: 'vehicle', label: 'Vehicle' },
          { key: 'status', label: 'Status', type: 'status' }
        ]}
      />
    </DashboardLayout>
  )
}

export default IncomingRequests
