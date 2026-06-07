# RTOWALA

RTOWALA is a Vite + React frontend for a Vehicle Service Management System. It covers RTO-related service requests, vehicle selling, vehicle purchasing, internal clerk work, office boy field tasks, admin approvals, and super admin monitoring.

The current project is frontend-only. Backend APIs, authentication, authorization, database schema, Spring Boot entities, repositories, services, and controllers are planned for a later phase.

## Roles

- Guest: creates service requests, lists vehicles for sale, browses purchase vehicles, and views request history.
- Clerk: reviews incoming requests, accepts or rejects work, assigns OfcBoy tasks, and checks request details.
- OfcBoy: manages assigned pickup, delivery, and vehicle inspection tasks.
- Admin: monitors services, reviews vehicle purchases, manages approvals, and records final price decisions.
- SuperAdmin: manages users, roles, audit logs, activity monitoring, and analytics.

## Features

- Public pages for home, sell, purchase, about, contact, login, and register.
- Guest dashboard with service cards for Vehicle Transfer, HP Cancellation, Duplicate RC, NOC, Insurance Services, Address Change, and Other Services.
- Guest pages for Service Request, Sell Vehicle, Purchase Vehicle, and Request History.
- Clerk pages for Incoming Requests, Work Table, Assignment Panel, and Request Details.
- OfcBoy pages for Assigned Tasks, Pickup Tasks, Delivery Tasks, and Vehicle Inspection Tasks.
- Admin pages for Service Monitoring, Vehicle Purchase Review, Approval Center, and Reports Dashboard.
- SuperAdmin pages for User Management, Role Management, Audit Logs, Activity Monitoring, and Analytics Dashboard.
- Reusable dashboard UI components for layouts, tables, status badges, timelines, stat cards, page headers, empty states, and detail drawers.
- Mock/static role data for frontend development until backend integration is available.

## Documentation

Project planning and workflow docs are available in `docs/`:

- `docs/SOFTWARE_REQUIREMENTS.md`
- `docs/WORKFLOW.md`
- `docs/FRONTEND_ARCHITECTURE.md`

## Tech Stack

- React 19
- Vite
- React Router DOM
- React Hook Form
- ESLint
- Global CSS in `src/index.css`
- Font Awesome icons from CDN

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

On Windows PowerShell, if script execution blocks `npm`, use:

```bash
npm.cmd run dev
```

### Build

```bash
npm run build
```

Windows PowerShell alternative:

```bash
npm.cmd run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Main Routes

```text
/                                  Home
/sell                              Public sell page
/purchase                          Public purchase page
/about                             About page
/contact                           Contact page
/login                             Login page
/register                          Register page

/guest-dashboard                   Guest dashboard
/guest-dashboard/service-request   Guest service request
/guest-dashboard/sell-vehicle      Guest sell vehicle form
/guest-dashboard/purchase-vehicle  Guest purchase vehicle table
/guest-dashboard/request-history   Guest request history

/clerk                             Clerk dashboard
/clerk/incoming-requests           Incoming requests
/clerk/work-table                  Clerk work table
/clerk/assignment-panel            OfcBoy assignment panel
/clerk/request-details             Request detail view

/ofcboy                            OfcBoy dashboard
/ofcboy/assigned-tasks             Assigned tasks
/ofcboy/pickup-tasks               Pickup tasks
/ofcboy/delivery-tasks             Delivery tasks
/ofcboy/inspection-tasks           Vehicle inspection form

/admin                             Admin dashboard
/admin/service-monitoring          Service monitoring
/admin/vehicle-purchase-review     Vehicle purchase review
/admin/approval-center             Admin approval center
/admin/reports-dashboard           Reports dashboard

/superadmin                        SuperAdmin dashboard
/superadmin/user-management        User management
/superadmin/role-management        Role management
/superadmin/audit-logs             Audit logs
/superadmin/activity-monitoring    Activity monitoring
/superadmin/analytics-dashboard    Analytics dashboard
```

## Project Structure

```text
rtowla/
+-- docs/
+-- public/
+-- guest/
+-- clerk/
+-- ofcboy/
+-- admin/
+-- superadmin/
+-- src/
|   +-- assets/
|   +-- components/
|   |   +-- common/
|   |   +-- dashboard/
|   |   +-- guest/
|   |   +-- clerk/
|   |   +-- ofcboy/
|   |   +-- admin/
|   |   +-- superadmin/
|   +-- context/
|   +-- App.jsx
|   +-- index.css
|   +-- main.jsx
+-- index.html
+-- package.json
+-- vite.config.js
```

## Shared Dashboard Components

Reusable dashboard components live in `src/components/dashboard/`:

- `DashboardLayout`
- `DataTable`
- `DetailDrawer`
- `EmptyState`
- `PageHeader`
- `StatCard`
- `StatusBadge`
- `Timeline`

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint checks |

## Notes

- All role workflows currently use mock/static data.
- The app uses JSX, matching the existing project setup.
- The backend can later replace mock-data modules with API service calls.
- The existing UI style is centralized in `src/index.css`; new pages extend that design rather than introducing a separate design system.
