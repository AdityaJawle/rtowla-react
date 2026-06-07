# Frontend Architecture

## Existing Architecture Found

The project is a Vite + React app using JSX, React Router DOM, React Hook Form, global CSS, and static assets. Routes are declared in `src/components/Controller.jsx`. Public pages use `src/components/common/Layout.jsx`, which renders `Navbar`, `Outlet`, and `Footer`. Styling lives primarily in `src/index.css`; `src/App.css` is currently empty.

The current UI system uses:

- Blue gradient primary action style through `--gradient`.
- Fixed blue navbar with white links.
- White cards with `#dde5f2` borders, `.8rem` border radius, and soft shadow.
- Light page background `#f6f8fc`.
- Font Awesome icons.
- Form controls styled globally through contact/auth classes and extended dashboard classes.

## Page Structure

- `src/components/Home.jsx`
- `src/components/Sell.jsx`
- `src/components/Purchase.jsx`
- `src/components/AboutUs.jsx`
- `src/components/ContactUs.jsx`
- `src/components/Login.jsx`
- `src/components/Register.jsx`
- `src/components/guest/GuestDashboard.jsx`
- `src/components/<role>/pages/*`

## Component Structure

Reusable dashboard components live in `src/components/dashboard`:

- `DashboardLayout`
- `DataTable`
- `StatusBadge`
- `Timeline`
- `StatCard`
- `PageHeader`
- `EmptyState`
- `DetailDrawer`

Role-specific folders live under `src/components/<role>`:

- `pages/`
- `components/`
- `layouts/`
- `mock-data/`

The project root also contains `/guest`, `/clerk`, `/ofcboy`, `/admin`, and `/superadmin` module folders as requested by the planning model.

## Folder Structure

```text
docs/
guest/
clerk/
ofcboy/
admin/
superadmin/
src/
  assets/
  components/
    common/
    dashboard/
    guest/
      pages/
      components/
      layouts/
      mock-data/
    clerk/
      pages/
      components/
      layouts/
      mock-data/
    ofcboy/
      pages/
      components/
      layouts/
      mock-data/
    admin/
      pages/
      components/
      layouts/
      mock-data/
    superadmin/
      pages/
      components/
      layouts/
      mock-data/
  context/
```

## UI Component Inventory

- Global shell: `Navbar`, `Layout`, `Footer`
- Public pages: home hero, service grid, contact form, auth modal, purchase vehicle cards, sell form
- Dashboard primitives: header, stat cards, service cards, data tables, status badges, timelines, empty state, detail drawer, filters, panels
- Form patterns: labeled inputs, selects, checkboxes, radio options, upload boxes, textareas, primary gradient buttons
- Data patterns: mock arrays for requests, tasks, users, activities, reports, approvals, and vehicle listings

## Future Backend Integration

When Spring Boot is added, create frontend API service files under `src/services` and replace role mock-data imports screen by screen. Keep route paths and component props stable where possible. Authentication and role authorization should be introduced as a separate task so frontend screens remain easy to test with mock data.
