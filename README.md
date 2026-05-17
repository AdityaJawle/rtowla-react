# RTOWALA

RTOWALA is a React + Vite web application for RTO-related vehicle and licence services. It provides pages for vehicle selling, vehicle purchasing, user registration, login, guest dashboard access, contact details, and information about the service.

## Features

- Home page with RTOWALA service overview
- Vehicle selling and purchasing pages
- User registration and login flow
- Guest dashboard route
- About and contact pages
- Responsive React frontend built with Vite

## Tech Stack

- React 19
- Vite
- React Router DOM
- React Hook Form
- ESLint

## Getting Started

### Prerequisites

Make sure these are installed on your system:

- Node.js 20+
- npm

### Clone the Repository

```bash
git clone https://github.com/AdityaJawle/rtowla-react.git
cd rtowla-react
```

### Install Dependencies

```bash
npm install
```

### Build & Run

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
rtowla/
+-- public/
+-- src/
|   +-- assets/
|   +-- components/
|   |   +-- common/
|   |   +-- guest/
|   +-- context/
|   +-- App.jsx
|   +-- App.css
|   +-- index.css
|   +-- main.jsx
+-- index.html
+-- package.json
+-- vite.config.js
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint checks |

## Notes

This project is currently a frontend application. It does not require Java, Maven, or MySQL unless a backend service is added later.
