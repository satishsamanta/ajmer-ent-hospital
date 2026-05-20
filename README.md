# Ajmer ENT Hospital

Website for **Ajmer ENT Hospital** — Chiranjeevi Regional Government Hospital & ENT Hospital, Ajmer (Dr. Sikander).

A modern React single-page site with a glassmorphism design and smooth water-like
animations throughout the UI.

## Pages

Home · About · Departments · ENT Services · Doctors · Facilities · Patient Info ·
FAQs · Contact · Video Consultation · Second Opinion

## Tech stack

- React 18 + React Router
- Vite build tooling
- Plain CSS (glassmorphism, animated water background)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Notes

- Section photos load from Unsplash — replace the `img` URLs in `src/data/content.js`
  with the hospital's own photographs when available.
- Social links in `src/components/Navbar.jsx` are placeholders — update them with the
  hospital's actual Facebook / Instagram / YouTube pages.
- The contact, video consultation and second opinion forms are front-end only — connect
  them to a backend or email service before going live.
