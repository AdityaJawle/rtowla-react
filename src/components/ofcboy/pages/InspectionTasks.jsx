import { DashboardLayout, DataTable, PageHeader } from '../../dashboard'
import { inspectionItems } from '../mock-data/ofcBoyData'

function InspectionTasks() {
  return (
    <DashboardLayout title="Vehicle Inspection Tasks" subtitle="OfcBoy workflow" badge="Inspection">
      <PageHeader eyebrow="Inspection" title="Inspection Form UI" description="Record condition, remarks, suggested amount, photos, and completion status." />
      <section className="split-grid">
        <DataTable
          rows={inspectionItems}
          columns={[
            { key: 'vehicle', label: 'Vehicle' },
            { key: 'registration', label: 'Registration' },
            { key: 'condition', label: 'Condition' },
            { key: 'suggestedAmount', label: 'Suggested Amount' },
            { key: 'status', label: 'Status', type: 'status' }
          ]}
        />
        <form className="dashboard-form panel-card">
          <label>Vehicle Condition<select><option>Good</option><option>Average</option><option>Needs Repair</option></select></label>
          <label>Remarks<textarea rows="4" placeholder="Inspection remarks"></textarea></label>
          <label>Suggested Amount<input type="text" placeholder="Rs. 8,00,000" /></label>
          <label>Photo Upload<input type="file" accept=".jpg,.jpeg,.png" /></label>
          <label>Completion Status<select><option>Draft</option><option>Submitted</option><option>Completed</option></select></label>
          <button type="button" className="btn form-submit">Save Inspection</button>
        </form>
      </section>
    </DashboardLayout>
  )
}

export default InspectionTasks
