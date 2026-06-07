import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { purchaseReviews } from '../mock-data/adminData'

function VehiclePurchaseReview() {
  return (
    <DashboardLayout title="Vehicle Purchase Review" subtitle="Admin workflow" badge="Review">
      <PageHeader eyebrow="Purchase" title="Vehicle Purchase Review" description="Review seller expectations, inspection suggestions, and purchase readiness." />
      <DataTable
        rows={purchaseReviews}
        columns={[
          { key: 'id', label: 'Vehicle ID' },
          { key: 'vehicle', label: 'Vehicle' },
          { key: 'seller', label: 'Seller' },
          { key: 'expectedPrice', label: 'Expected' },
          { key: 'suggestedPrice', label: 'Suggested' },
          { key: 'status', label: 'Status', type: 'status' }
        ]}
      />
    </DashboardLayout>
  )
}

export default VehiclePurchaseReview
