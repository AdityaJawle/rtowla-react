import { DashboardLayout, PageHeader, Timeline } from '../../dashboard'
import { activityTimeline } from '../mock-data/superAdminData'

function ActivityMonitoring() {
  return (
    <DashboardLayout title="Activity Monitoring" subtitle="SuperAdmin workflow" badge="Timeline">
      <PageHeader eyebrow="Activity" title="Activity Timeline UI" description="Platform activity indicators and monitoring notes." />
      <section className="panel-card">
        <Timeline items={activityTimeline} />
      </section>
    </DashboardLayout>
  )
}

export default ActivityMonitoring
