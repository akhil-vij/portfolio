# akhilvij.com

Personal portfolio site for **Akhil Vij** — staff full-stack engineer & founder (Delhi NCR). A static single-page site presenting three founder products (MatchMyCard, ClinicKhata, BehindScale) alongside a full work history (Agoda, Informatica).

Its through-line is **provenance / bitemporality** — "systems that stay honest" — expressed in a bitemporal career timeline in the hero and source-record styling throughout (mono labels, status dots, "signature" callouts).

## Stack

- **[Next.js](https://nextjs.org) 15** (App Router) — statically prerendered
- **TypeScript**
- **[Tailwind CSS](https://tailwindcss.com) v4**
- **[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** — self-hosted Google Fonts (Newsreader, Archivo, IBM Plex Mono)
- Deployed on **[Vercel](https://vercel.com)**

The page is fully static with a single piece of client state: the color theme.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the dev server (hot reload)        |
| `npm run build` | Production build (static export)         |
| `npm start`     | Serve the production build               |
| `npm run lint`  | Lint with Next's ESLint config           |

## Project structure

```
app/
  layout.tsx      Root layout — metadata/OG tags, next/font, pre-paint theme script
  page.tsx        The single page — nav + all six sections (server component)
  globals.css     Design tokens (both themes), keyframes, responsive rules, interactive states
  icon.svg        Favicon
components/
  ThemeToggle.tsx Client component — the site's only piece of client state
lib/
  content.ts      Typed content module — all copy, projects, experience, stack, socials
public/
  Akhil-Vij-Resume.pdf   Served by the "Download résumé" button
```

## Theming

The entire site is painted from **CSS custom properties** defined in `app/globals.css`. Theming is a variable swap, not a re-style:

- The root `<html>` element carries `data-theme="dark" | "light"` — **dark ("Bitemporal") is the default**; light ("Provenance") swaps the token set.
- Every color in every component references a `var(--token)` — no hardcoded colors.
- The `ThemeToggle` in the nav flips the attribute and persists the choice to `localStorage["akv-theme"]`.
- A **blocking inline script in `<head>`** (`app/layout.tsx`) reads that value before first paint, so there is no flash of the wrong theme.

To adjust a color, edit its token in the `:root` (dark) and `:root[data-theme="light"]` blocks in `app/globals.css`.

## Editing content

All copy and data live in `lib/content.ts` — projects, experience, stack groups, socials, email, and the résumé path. Update that file to change what the page shows; the layout renders from it. Replace `public/Akhil-Vij-Resume.pdf` to update the downloadable résumé.

## Accessibility & motion

- Semantic landmarks (`<header>` / `<main>` / `<footer>`), `lang="en"`.
- Visible focus rings on every interactive element.
- Smooth-scroll navigation with sticky-nav scroll offset.
- All animation (and smooth scroll) is disabled under `prefers-reduced-motion: reduce`.

## Deployment

Push to a Git remote and import the repo on Vercel — the defaults work with no configuration. Point the `akhilvij.com` domain at the Vercel project.

---

© Akhil Vij · Delhi NCR, India
