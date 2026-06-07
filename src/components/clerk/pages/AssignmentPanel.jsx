import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { clerkRequests, ofcBoys } from '../mock-data/clerkData'

function AssignmentPanel() {
  return (
    <DashboardLayout title="Assignment Panel" subtitle="Clerk workflow" badge="OfcBoy Assignment">
      <PageHeader eyebrow="Assign" title="Assign OfcBoy" description="Pair accepted requests with available office boys." />
      <section className="split-grid">
        <div className="panel-card">
          <h3>Requests</h3>
          <DataTable
            rows={clerkRequests}
            columns={[
              { key: 'requestId', label: 'ID' },
              { key: 'service', label: 'Service' },
              { key: 'status', label: 'Status', type: 'status' }
            ]}
          />
        </div>
        <div className="panel-card">
          <h3>OfcBoy Availability</h3>
          <DataTable
            rows={ofcBoys}
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'area', label: 'Area' },
              { key: 'load', label: 'Load' },
              { key: 'status', label: 'Status', type: 'status' }
            ]}
          />
          <button type="button" className="btn form-submit">Assign OfcBoy</button>
        </div>
      </section>
    </DashboardLayout>
  )
}

export default AssignmentPanel
