# Velora AI Agent Instructions

## Project overview
- React + Vite single-page application.
- Frontend-only repository; API calls are proxied via `src/api/axios.js` to `VITE_API_BASE_URL`.
- Uses React Router v7 and client-side protected routes.

## Key commands
- `npm install`
- `npm run dev` — start local development server
- `npm run build` — build production bundle
- `npm run preview` — preview built output
- `npm run lint` — run ESLint on all `.js` / `.jsx` files

## Important files and folders
- `src/App.jsx` — route definitions and protected route wrappers
- `src/pages/` — page-level route components
- `src/components/` — reusable UI components and layout pieces
- `src/services/` — API wrapper functions called by pages/components
- `src/api/axios.js` — centralized Axios instance with `Authorization` header injection
- `eslint.config.js` — project lint configuration
- `.env` — local development override for `VITE_API_BASE_URL`

## Architectural conventions
- Components are written as React functional components with JSX.
- API services use `axios` and expect `localStorage.token` for auth.
- Protected routes redirect to `/login` when no token is present.
- Use `import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"` for API base URL fallback.
- `dist/` is ignored by ESLint config and is build output.

## Agent guidance
- Prioritize changes in `src/pages`, `src/components`, and `src/services` for UI/features.
- Do not assume backend code exists in this repository.
- Preserve the existing routing and auth pattern when adding new pages or navigation.
- Use `README.md` for general Vite/React template context.
