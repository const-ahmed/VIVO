# Vivo Talent Solutions — Landing Page Redesign

An unsolicited redesign of [vivotalent.com](https://vivotalent.com/), built as a portfolio piece for a frontend developer role at Vivo Talent Solutions.

The goal was to take their existing site and rebuild it with stronger brand identity, typographic intention, accessibility compliance, and a component architecture that scales. All copy is verbatim from Vivo's own materials. This is not affiliated with or endorsed by Vivo Talent Solutions Ltd.

## What changed from the original

- **Typography** — Introduced DM Serif Display as the display face for all headings, paired with DM Sans for body text. Chosen for the authority and warmth it brings to a people-first recruitment brand.
- **New sections** — Added an Our Results block (17.5 years experience, 23% time-to-hire reduction, 1,032 placements) and a How We Work process breakdown — both absent from the original.
- **Testimonials** — Rebuilt from a static image mosaic into a carousel with a clone-and-teleport RAF loop for seamless infinite scroll.
- **Logo strip** — Replaced a CSS `@keyframes` marquee with a JavaScript `requestAnimationFrame` loop for a glitch-free infinite scroll reset.
- **Colour & contrast** — Ran WCAG 2.1 contrast audits across every text/background pairing. Fixed three failures, including the CTA section which was moved to a dark background to resolve a 2.48:1 ratio on the stat number.
- **Spacing** — Audited and standardised vertical padding site-wide using `clamp()` so every section breathes consistently at every viewport width.
- **Badge icons** — Every section pill now has an intentionally chosen SVG icon rather than a generic sparkle.
- **Pricing removed** — Not relevant to how Vivo operates; stripped entirely.
- **Mobile layout** — Fully responsive across all breakpoints. Hero content centres on small screens, How We Work drops to a 2×2 table grid with dividers.

## Tech

- React 18 + TypeScript
- Vite
- CSS Modules
- No UI library — all components built from scratch

## Run locally

```bash
npm install
npm run dev
```

For mobile testing on the same network:

```bash
npm run dev -- --host
```
