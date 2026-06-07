import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { purchaseVehicles } from '../mock-data/guestData'

function PurchaseVehiclePage() {
  return (
    <DashboardLayout title="Purchase Vehicle" subtitle="Guest workflow" badge="Mock Inventory">
      <PageHeader
        eyebrow="Browse"
        title="Available Vehicles"
        description="Review static purchase vehicles and register interest from the frontend."
      >
        <input className="dashboard-search" type="search" placeholder="Search vehicle" />
      </PageHeader>

      <DataTable
        rows={purchaseVehicles}
        columns={[
          { key: 'model', label: 'Model' },
          { key: 'maker', label: 'Maker' },
          { key: 'year', label: 'Year' },
          { key: 'price', label: 'Price' },
          { key: 'status', label: 'Status', type: 'status' }
        ]}
        actionLabel="Interest"
        onRowAction={() => {}}
      />
    </DashboardLayout>
  )
}

export default PurchaseVehiclePage
