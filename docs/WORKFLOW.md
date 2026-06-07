# Workflow

## Navigation Flow

The app uses React Router through `src/components/Controller.jsx`. Public pages render inside `Layout`, which includes the fixed navbar, page outlet, and footer. Role dashboards are also registered in this routing tree so they share the existing shell and visual rhythm.

Primary navigation:

- Home -> Sell Vehicle
- Home -> Purchase Vehicle
- Home -> Login/Register -> Guest Dashboard
- Guest Dashboard -> Service Request, Sell Vehicle, Purchase Vehicle, Request History
- Clerk Dashboard -> Incoming Requests, Work Table, Assignment Panel, Request Details
- OfcBoy Dashboard -> Assigned Tasks, Pickup Tasks, Delivery Tasks, Vehicle Inspection
- Admin Dashboard -> Service Monitoring, Vehicle Purchase Review, Approval Center, Reports
- SuperAdmin Dashboard -> User Management, Role Management, Audit Logs, Activity, Analytics

## Service Request Workflow

1. Guest selects a service card such as Vehicle Transfer, HP Cancellation, Duplicate RC, NOC, Insurance Services, Address Change, or Other Services.
2. Guest fills a service request form with contact, vehicle, service, document, and payment preferences.
3. Clerk receives the request in Incoming Requests.
4. Clerk accepts or rejects the request.
5. Accepted requests can be assigned to an OfcBoy.
6. OfcBoy completes pickup, inspection, document, or delivery tasks.
7. Admin monitors progress and approval status.

## Vehicle Selling Workflow

1. Guest opens Sell Vehicle.
2. Guest enters model, maker, color, registration year, registration number, fancy number, expected price, and description.
3. Guest selects 2-5 image upload slots.
4. Guest selects available documents: RC, Insurance, PUC, Aadhar, PAN, Other.
5. Guest selects Online Payment or Cash Payment.
6. Clerk/Admin review the listing using mock review tables.
7. Admin records the final price decision in the approval area.

## Vehicle Purchase Workflow

1. Guest opens Purchase Vehicle.
2. Guest browses static vehicle listings.
3. Guest opens interest/purchase UI.
4. Clerk tracks inquiry follow-up.
5. Admin reviews vehicle purchase status and final pricing.

## OfcBoy Assignment Workflow

1. Clerk opens Assignment Panel.
2. Clerk selects a request and available OfcBoy.
3. Assignment appears in OfcBoy Assigned Tasks.
4. OfcBoy updates pickup, delivery, inspection, and completion status.

## Admin Approval Workflow

1. Admin opens Approval Center.
2. Admin reviews request details, documents, inspection remarks, and suggested amount.
3. Admin enters the final price decision.
4. Admin marks request as approved, returned for clarification, or rejected.

## SuperAdmin Monitoring Workflow

1. SuperAdmin opens monitoring dashboards.
2. SuperAdmin reviews users, roles, audit logs, activity timeline, role change history, and analytics.
3. SuperAdmin uses the data to identify operational delays, role changes, and platform-level issues.
