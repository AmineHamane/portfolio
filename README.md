# Amine Hamane — Portfolio

A modern, bilingual (EN/FR), animated portfolio for **Amine Hamane** — Python Developer · Data Science · Machine Learning · Generative AI.

Built as a dark "engineer / quant" experience: near-black canvas, cyan/lime data-viz accents, monospace detailing, an animated forecast hero, per-project case studies with skill breakdowns, and a print-ready CV page.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens via `@theme`)
- **Motion** (`motion/react`) for animation
- **lucide-react** icons
- Static export–friendly; runs as a standalone Node server in Docker

## Develop

```bash
npm install
npm run dev
# http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

`next.config.ts` sets `output: "standalone"`, so the build emits a self-contained server in `.next/standalone`.

## Run with Docker (self-host)

```bash
# Build + run with compose
docker compose up --build -d
# → http://localhost:3000

# or plain Docker
docker build -t amine-portfolio .
docker run -p 3000:3000 amine-portfolio
```

The image is multi-stage and ships only the standalone server + static assets (small, non-root user, healthcheck included).

## Deploy to Vercel (optional)

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Zero config — Next.js is auto-detected.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts, metadata, i18n provider
│  ├─ page.tsx          # single-page composition
│  ├─ globals.css       # design system (Tailwind v4 @theme + utilities)
│  └─ cv/page.tsx       # print-ready bilingual CV (Print → Save as PDF)
├─ components/          # Nav, Hero, About, Skills, Projects(+Card/Modal), Experience, Contact, Footer, charts
├─ content/
│  ├─ types.ts          # content model types
│  └─ site.ts           # ⭐ single source of truth (bilingual content + projects)
└─ lib/
   ├─ i18n.tsx          # locale context (EN/FR, localStorage + <html lang>)
   ├─ accent.ts         # per-project accent colors
   └─ projectMeta.ts    # status/category → UI label maps
```

## Editing content

Everything a recruiter sees lives in [`src/content/site.ts`](src/content/site.ts). Each translatable field is an `{ en, fr }` object; tech names and metrics are language-neutral. Add a project by appending to the `projects` array — the cards, filters, and modal pick it up automatically.

## The CV

Visit `/cv`, toggle **EN/FR**, and click **Print / Save as PDF**. The page is print-optimized (Letter, clean white sheet) and produces a polished one/two-page résumé that matches the site content.

---

© Amine Hamane. Built with Next.js, Tailwind & Motion.
