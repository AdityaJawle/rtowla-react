import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { purchaseReviews } from '../mock-data/adminData'

function ApprovalCenter() {
  return (
    <DashboardLayout title="Approval Center" subtitle="Admin workflow" badge="Admin Decision">
      <PageHeader eyebrow="Approval" title="Admin Approval Center" description="Make approval decisions after request and inspection review." />
      <section className="split-grid">
        <DataTable
          rows={purchaseReviews}
          columns={[
            { key: 'id', label: 'ID' },
            { key: 'vehicle', label: 'Vehicle' },
            { key: 'seller', label: 'Seller' },
            { key: 'status', label: 'Status', type: 'status' }
          ]}
        />

        <form className="dashboard-form panel-card admin-decision">
          <h3>Admin Final Price Decision</h3>
          <p>This section belongs to Admin and records the final vehicle price after review.</p>
          <label>Selected Vehicle<select><option>Hyundai Creta SX</option><option>Tata Nexon XZ</option></select></label>
          <label>Suggested Amount<input type="text" defaultValue="Rs. 11,40,000" /></label>
          <label>Final Price<input type="text" placeholder="Enter admin final price" /></label>
          <label>Decision<select><option>Approved</option><option>Return For Clarification</option><option>Rejected</option></select></label>
          <label>Admin Remarks<textarea rows="4" placeholder="Reason for final decision"></textarea></label>
          <button type="button" className="btn form-submit">Save Admin Decision</button>
        </form>
      </section>
    </DashboardLayout>
  )
}

export default ApprovalCenter
