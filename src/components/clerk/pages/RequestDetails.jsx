import { DashboardLayout, PageHeader, Timeline } from '../../dashboard'
import { clerkRequests } from '../mock-data/clerkData'

function RequestDetails() {
  const request = clerkRequests[0]

  return (
    <DashboardLayout title="Request Details" subtitle="Clerk workflow" badge={request.requestId}>
      <PageHeader eyebrow="Detail" title={request.service} description={`${request.customer} - ${request.vehicle}`} />
      <section className="panel-card">
        <div className="detail-summary">
          <p><strong>Priority:</strong> {request.priority}</p>
          <p><strong>Status:</strong> {request.status}</p>
          <p><strong>Assigned To:</strong> {request.assignedTo}</p>
        </div>
        <Timeline items={request.timeline} />
      </section>
    </DashboardLayout>
  )
}

export default RequestDetails
