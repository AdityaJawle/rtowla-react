export const clerkRequests = [
  {
    id: 'REQ-101',
    requestId: 'REQ-101',
    customer: 'Amit Sharma',
    service: 'Vehicle Transfer',
    vehicle: 'MH 02 AB 4521',
    priority: 'High',
    status: 'Pending',
    assignedTo: 'Unassigned',
    timeline: [
      { label: 'Request Created', description: 'Guest submitted vehicle transfer request.', time: '06 Jun, 10:15 AM' },
      { label: 'Document Check', description: 'RC and insurance uploaded for clerk review.', time: '06 Jun, 11:20 AM' }
    ]
  },
  {
    id: 'REQ-102',
    requestId: 'REQ-102',
    customer: 'Priya Nair',
    service: 'HP Cancellation',
    vehicle: 'MH 04 KL 1188',
    priority: 'Medium',
    status: 'Accepted',
    assignedTo: 'Ravi Patil',
    timeline: [
      { label: 'Accepted', description: 'Clerk accepted the request.', time: '05 Jun, 03:45 PM' },
      { label: 'Assigned', description: 'Pickup task assigned to OfcBoy.', time: '05 Jun, 04:10 PM' }
    ]
  },
  {
    id: 'REQ-103',
    requestId: 'REQ-103',
    customer: 'Nitin More',
    service: 'Duplicate RC',
    vehicle: 'MH 01 ZZ 9081',
    priority: 'Low',
    status: 'In Progress',
    assignedTo: 'Sameer Khan',
    timeline: [
      { label: 'Verification', description: 'Duplicate RC affidavit pending.', time: '04 Jun, 01:30 PM' }
    ]
  }
]

export const ofcBoys = [
  { id: 'OFC-1', name: 'Ravi Patil', area: 'Borivali', load: '3 Tasks', status: 'Available' },
  { id: 'OFC-2', name: 'Sameer Khan', area: 'Andheri', load: '5 Tasks', status: 'Busy' },
  { id: 'OFC-3', name: 'Kiran Pawar', area: 'Dahisar', load: '2 Tasks', status: 'Available' }
]
