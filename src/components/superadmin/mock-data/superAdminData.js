export const users = [
  { id: 'USR-01', name: 'Amit Sharma', role: 'Guest', status: 'Active', lastLogin: '08 Jun 2026' },
  { id: 'USR-02', name: 'Neha Verma', role: 'Clerk', status: 'Active', lastLogin: '07 Jun 2026' },
  { id: 'USR-03', name: 'Ravi Patil', role: 'OfcBoy', status: 'Active', lastLogin: '07 Jun 2026' },
  { id: 'USR-04', name: 'Meera Rao', role: 'Admin', status: 'Active', lastLogin: '06 Jun 2026' }
]

export const auditLogs = [
  { id: 'AUD-01', actor: 'Meera Rao', action: 'Approved final price', module: 'Admin', time: '08 Jun, 09:30 AM', status: 'Completed' },
  { id: 'AUD-02', actor: 'Neha Verma', action: 'Assigned OfcBoy', module: 'Clerk', time: '07 Jun, 04:10 PM', status: 'Completed' },
  { id: 'AUD-03', actor: 'System', action: 'Role update requested', module: 'SuperAdmin', time: '07 Jun, 01:05 PM', status: 'Review' }
]

export const activityTimeline = [
  { label: 'Peak Request Window', description: 'Most requests were created between 10 AM and 1 PM.', time: 'Today' },
  { label: 'Role Change', description: 'Clerk access reviewed for one staff account.', time: '07 Jun' },
  { label: 'Audit Review', description: 'Admin approval history exported for review.', time: '06 Jun' }
]

export const roleHistory = [
  { id: 'ROLE-01', user: 'Rohan Shah', oldRole: 'Guest', newRole: 'Clerk', changedBy: 'SuperAdmin', status: 'Completed' },
  { id: 'ROLE-02', user: 'Sameer Khan', oldRole: 'Guest', newRole: 'OfcBoy', changedBy: 'SuperAdmin', status: 'Completed' }
]
