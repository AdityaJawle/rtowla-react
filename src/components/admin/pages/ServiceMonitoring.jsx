import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { serviceMonitoring } from '../mock-data/adminData'

function ServiceMonitoring() {
  return (
    <DashboardLayout title="Service Monitoring" subtitle="Admin workflow" badge="Live Mock">
      <PageHeader eyebrow="Filters" title="Monitor Services" description="Search and filter request progress across clerks and statuses.">
        <input className="dashboard-search" type="search" placeholder="Search service" />
        <select className="dashboard-filter" defaultValue="All"><option>All</option><option>Pending</option><option>In Progress</option><option>Accepted</option></select>
      </PageHeader>
      <DataTable
        rows={serviceMonitoring}
        columns={[
          { key: 'id', label: 'Request' },
          { key: 'service', label: 'Service' },
          { key: 'owner', label: 'Owner' },
          { key: 'clerk', label: 'Clerk' },
          { key: 'status', label: 'Status', type: 'status' },
          { key: 'updated', label: 'Updated' }
        ]}
      />
    </DashboardLayout>
  )
}

export default ServiceMonitoring
