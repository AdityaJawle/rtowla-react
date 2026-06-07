import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { roleHistory } from '../mock-data/superAdminData'

function RoleManagement() {
  return (
    <DashboardLayout title="Role Management" subtitle="SuperAdmin workflow" badge="Roles">
      <PageHeader eyebrow="Roles" title="Role Change History UI" description="Track role transitions for platform governance." />
      <DataTable
        rows={roleHistory}
        columns={[
          { key: 'id', label: 'Change ID' },
          { key: 'user', label: 'User' },
          { key: 'oldRole', label: 'Old Role' },
          { key: 'newRole', label: 'New Role' },
          { key: 'changedBy', label: 'Changed By' },
          { key: 'status', label: 'Status', type: 'status' }
        ]}
      />
    </DashboardLayout>
  )
}

export default RoleManagement
