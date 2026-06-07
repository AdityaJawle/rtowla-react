import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { users } from '../mock-data/superAdminData'

function UserManagement() {
  return (
    <DashboardLayout title="User Management" subtitle="SuperAdmin workflow" badge="Users">
      <PageHeader eyebrow="Users" title="User Overview Tables" description="Review platform users across Guest, Clerk, OfcBoy, Admin, and SuperAdmin roles.">
        <input className="dashboard-search" type="search" placeholder="Search user" />
      </PageHeader>
      <DataTable
        rows={users}
        columns={[
          { key: 'id', label: 'User ID' },
          { key: 'name', label: 'Name' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status', type: 'status' },
          { key: 'lastLogin', label: 'Last Login' }
        ]}
      />
    </DashboardLayout>
  )
}

export default UserManagement
