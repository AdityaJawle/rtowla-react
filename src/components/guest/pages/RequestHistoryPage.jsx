import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { requestHistory } from '../mock-data/guestData'

function RequestHistoryPage() {
  return (
    <DashboardLayout title="Request History" subtitle="Guest workflow" badge="Service Tracking">
      <PageHeader
        eyebrow="History"
        title="Previous Requests"
        description="Track submitted mock service requests and payment preference."
      />

      <DataTable
        rows={requestHistory}
        columns={[
          { key: 'id', label: 'Request ID' },
          { key: 'service', label: 'Service' },
          { key: 'vehicle', label: 'Vehicle' },
          { key: 'date', label: 'Date' },
          { key: 'payment', label: 'Payment' },
          { key: 'status', label: 'Status', type: 'status' }
        ]}
      />
    </DashboardLayout>
  )
}

export default RequestHistoryPage
