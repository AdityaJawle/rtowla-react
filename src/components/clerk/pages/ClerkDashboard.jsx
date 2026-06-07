import { useState } from 'react'
import { DashboardLayout, DataTable, DetailDrawer, PageHeader, StatCard } from '../../dashboard'
import { clerkRequests } from '../mock-data/clerkData'

function ClerkDashboard() {
  const [selectedRequest, setSelectedRequest] = useState(null)

  return (
    <DashboardLayout
      title="Clerk Dashboard"
      subtitle="Request intake and assignment"
      badge="Clerk"
      actions={[
        { to: '/clerk/incoming-requests', label: 'Incoming Requests', icon: 'fa-solid fa-inbox' },
        { to: '/clerk/work-table', label: 'Work Table', icon: 'fa-solid fa-table' },
        { to: '/clerk/assignment-panel', label: 'Assignment Panel', icon: 'fa-solid fa-user-plus' },
        { to: '/clerk/request-details', label: 'Request Details', icon: 'fa-solid fa-circle-info' }
      ]}
    >
      <section className="stat-grid">
        <StatCard icon="fa-solid fa-inbox" label="Incoming" value="3" note="Needs review" />
        <StatCard icon="fa-solid fa-user-check" label="Assigned" value="2" note="Active field tasks" />
        <StatCard icon="fa-solid fa-clock" label="Pending" value="1" note="Awaiting action" />
      </section>

      <PageHeader eyebrow="Queue" title="Incoming Requests" description="Accept, reject, or inspect requests before assignment." />
      <DataTable
        rows={clerkRequests}
        columns={[
          { key: 'requestId', label: 'Request ID' },
          { key: 'customer', label: 'Customer' },
          { key: 'service', label: 'Service' },
          { key: 'priority', label: 'Priority' },
          { key: 'status', label: 'Status', type: 'status' }
        ]}
        actionLabel="Details"
        onRowAction={setSelectedRequest}
      />

      <div className="action-row">
        <button type="button" className="btn compact-btn">Accept</button>
        <button type="button" className="btn compact-btn secondary-btn">Reject</button>
        <button type="button" className="btn compact-btn">Assign OfcBoy</button>
      </div>

      <DetailDrawer item={selectedRequest} title="Request Detail Drawer" onClose={() => setSelectedRequest(null)} />
    </DashboardLayout>
  )
}

export default ClerkDashboard
