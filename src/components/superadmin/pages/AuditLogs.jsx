import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { auditLogs } from '../mock-data/superAdminData'

function AuditLogs() {
  return (
    <DashboardLayout title="Audit Logs" subtitle="SuperAdmin workflow" badge="Audit">
      <PageHeader eyebrow="Logs" title="Audit Logs" description="Mock activity audit records for platform governance." />
      <DataTable
        rows={auditLogs}
        columns={[
          { key: 'id', label: 'Audit ID' },
          { key: 'actor', label: 'Actor' },
          { key: 'action', label: 'Action' },
          { key: 'module', label: 'Module' },
          { key: 'time', label: 'Time' },
          { key: 'status', label: 'Status', type: 'status' }
        ]}
      />
    </DashboardLayout>
  )
}

export default AuditLogs
