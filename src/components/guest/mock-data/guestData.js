export const guestServices = [
  { title: 'Vehicle Transfer', icon: 'fa-solid fa-right-left', description: 'Ownership transfer support with document and RTO process tracking.' },
  { title: 'HP Cancellation', icon: 'fa-solid fa-file-circle-minus', description: 'Hypothecation termination request with bank document checklist.' },
  { title: 'Duplicate RC', icon: 'fa-solid fa-copy', description: 'Duplicate RC support for lost, damaged, or misplaced certificates.' },
  { title: 'NOC', icon: 'fa-solid fa-file-signature', description: 'No objection certificate request tracking for vehicle movement.' },
  { title: 'Insurance Services', icon: 'fa-solid fa-shield-halved', description: 'Insurance renewal, document update, and policy guidance.' },
  { title: 'Address Change', icon: 'fa-solid fa-location-dot', description: 'RC address update workflow with required proof checklist.' },
  { title: 'Other Services', icon: 'fa-solid fa-ellipsis', description: 'Custom RTO support request for uncommon service needs.' }
]

export const requestHistory = [
  { id: 'REQ-101', service: 'Vehicle Transfer', vehicle: 'MH 02 AB 4521', date: '06 Jun 2026', status: 'In Progress', payment: 'Online' },
  { id: 'REQ-099', service: 'Duplicate RC', vehicle: 'MH 47 CD 8422', date: '29 May 2026', status: 'Completed', payment: 'Cash' },
  { id: 'REQ-093', service: 'Address Change', vehicle: 'MH 01 KA 6720', date: '18 May 2026', status: 'Pending', payment: 'Online' }
]

export const purchaseVehicles = [
  { id: 'CAR-01', model: 'Hyundai Creta SX', maker: 'Hyundai', year: '2022', price: 'Rs. 11,90,000', status: 'Available' },
  { id: 'CAR-02', model: 'Tata Nexon XZ', maker: 'Tata', year: '2021', price: 'Rs. 8,40,000', status: 'Review' },
  { id: 'CAR-03', model: 'BMW 3 Series', maker: 'BMW', year: '2020', price: 'Rs. 28,75,000', status: 'Available' }
]
