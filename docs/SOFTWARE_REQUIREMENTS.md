# Software Requirements

## Project Overview

RTOWALA is a frontend Vehicle Service Management System for RTO-related services, vehicle selling, and vehicle purchasing. The current application is a Vite + React single-page app using React Router, global CSS, Font Awesome icons, static assets, and mock/local state. Backend services, authentication, authorization, and database persistence are intentionally out of scope for this phase.

## User Roles

- Guest: submits service requests, lists vehicles for sale, browses purchase vehicles, and checks request history.
- Clerk: reviews incoming requests, accepts or rejects work, assigns office boys, and tracks request details.
- OfcBoy: handles pickup, delivery, document collection, and vehicle inspection tasks.
- Admin: monitors services, reviews vehicle purchase and sale activity, approves decisions, and manages final price decisions.
- SuperAdmin: monitors platform activity, user roles, audit logs, analytics, and role change history.

## Functional Requirements

- The app must expose role-based dashboards using frontend-only mock data.
- The app must provide service request, vehicle sale, vehicle purchase, request history, assignment, review, approval, monitoring, audit, and analytics screens.
- Forms must collect realistic inputs but must not submit to a backend.
- Tables, cards, badges, timelines, drawers, and forms must follow the existing design language.
- Shared dashboard components must be reusable across role modules.
- Future API integration points must be documented without implementing backend calls.

## Dashboard Requirements

- Guest Dashboard: service cards for vehicle transfer, HP cancellation, duplicate RC, NOC, insurance services, address change, and other services.
- Clerk Dashboard: incoming requests, work table, assignment panel, request details, accept/reject actions, office boy assignment, status timeline, and detail drawer.
- OfcBoy Dashboard: assigned tasks, pickup tasks, delivery tasks, inspection tasks, and inspection form.
- Admin Dashboard: service monitoring, vehicle purchase review, approval center, reports dashboard, filters, search, statistics, tables, and final price decision section.
- SuperAdmin Dashboard: user management, role management, audit logs, activity monitoring, analytics, timeline, role change history, and user overview tables.

## Future Backend Integration Notes

- Replace mock data files with API service calls after Spring Boot endpoints are available.
- Keep UI state independent from authentication implementation until role authorization is introduced.
- Do not place business approval logic in React once backend workflows exist.
- Preserve DTO-like mock object shapes to reduce frontend migration work later.

## API Placeholder Structure

Planned frontend API service namespaces:

- `guestService`: service requests, sale listings, purchase inquiries, request history.
- `clerkService`: incoming requests, request acceptance, rejection, assignment.
- `ofcBoyService`: task lists, inspection submissions, pickup and delivery status.
- `adminService`: monitoring data, purchase reviews, approvals, reports.
- `superAdminService`: users, roles, audit logs, activity, analytics.

No API client is implemented in this phase.

## State Management Plan

- Use component state for local forms, selected rows, drawer visibility, and filters.
- Use role mock-data modules for screen data.
- Keep `LoginContext` only for the existing basic guest login display.
- Add backend-backed state later through route-level loaders or service hooks if the project expands.
