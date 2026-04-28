# telev8 — landing page

Flagship marketing site for **telev8**, a cloud-based TV-as-a-Service platform for hotels, multi-family, senior living, and out-of-home properties.

Built to the standard of Linear, Vercel, Stripe, Cursor, and Anthropic.

---

## Quick start

Requires **Node 20+** (this build was verified on Node 24) and npm 10+.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Next.js dev server with HMR |
| `npm run build` | Build the production bundle (static-by-default) |
| `npm run start` | Run the production server (after `build`) |
| `npm run typecheck` | Run TypeScript in strict mode (no emit) |
| `npm run lint` | Run ESLint with the Next.js config |

---

## Stack

| Layer | Tool | Notes |
| --- | --- | --- |
| Framework | Next.js 15 (App Router) | RSC, static-by-default, route handlers |
| Language | TypeScript (strict) | `noUncheckedIndexedAccess`, `noImplicitOverride` |
| CSS | Tailwind CSS v4 | CSS-first `@theme` tokens in `app/globals.css` |
| Motion | Framer Motion | Scroll reveals, signature hero diagram |
| Smooth scroll | Lenis | Disables under `prefers-reduced-motion` |
| Type | General Sans (display) · Inter (body) · Geist Mono (data) | All free; Inter & Geist via `next/font`; General Sans via Fontshare CDN |

See `DESIGN.md` for the full design system and `DECISIONS.md` for the engineering decision log.

---

## Project structure

```
app/
  layout.tsx              # root layout, fonts, SEO metadata, LenisProvider
  page.tsx                # the landing page composition
  globals.css             # Tailwind v4 @theme tokens + base styles
  sitemap.ts              # /sitemap.xml
  robots.ts               # /robots.txt

components/
  primitives/
    button.tsx            # CTA button (primary/secondary/ghost; sm/md/lg)
    layout.tsx            # Section, Eyebrow, AccentBar
  marketing/
    nav.tsx               # sticky top navigation with mobile drawer
    hero.tsx              # IA §2 — hero with the signature diagram
    sections.tsx          # IA §3–§11 (TrustBar, Problem, Guide, ValueProps,
                          #             Plan, Stakes, SuccessVision, FinalCta, Footer)
  motion/
    reveal.tsx            # Reveal + RevealChild (whileInView wrapper)
    distribution-diagram.tsx  # signature hero motion moment
    lenis-provider.tsx    # smooth-scroll provider

lib/
  cn.ts                   # className merger
  motion.ts               # easing curves + duration tokens

# project documentation
BRAND.md                  # Phase 1 — voice, audience, SB7 mapping, taglines
DESIGN.md                 # Phase 2 — color, type, spacing, motion, primitives, stack
IA.md                     # Phase 3 — IA mapped section-by-section to SB7
DECISIONS.md              # Phase 5 — engineering decision log
docs/
  storybrand-framework.md # SB7 framework reference
```

Source materials (decks, flyers, market docs) used for Phase 1 brand synthesis live at the project root and in `.extracted/` (gitignored).

---

## Brand rules

A handful of non-negotiable rules baked into the codebase. Keep them in mind when editing copy:

- **lowercase telev8** in all body copy. Never `Telev8` or `TELEV8` except in legal contexts.
- **Property owner is hero, telev8 is guide.** Every public-facing piece maps to StoryBrand SB7 (`docs/storybrand-framework.md`).
- **Direct CTA wording is locked at `Schedule a demo`** — used identically in the nav, hero, and final CTA.
- **No fabricated facts.** Every stat, customer name, capability, or partner reference must trace to a source document. Sanctioned public partners only: TiVo, Universal Electronics (UEI), Google Android TV, Packet Fabric, AWS.
- **No named customers in public copy** in v1.
- **No generic SaaS language**: no "AI-powered," "revolutionary," "disrupt," "next-generation," "best-in-class," "synergy," "seamless" as filler.
- **Voice is challenger, contrast-driven, plain-spoken.**

Full rules: `BRAND.md`.

---

## Deployment

The site is a standard Next.js 15 App Router project. Recommended deploy: **Vercel** (zero-config). Alternatives: any Node-capable host, or `next export` for static hosts.

Canonical domain: `https://telev8.tv`.

### Environment

No environment variables required for v1. The transitional CTA email-capture is implemented as `mailto:hello@telev8.tv` per locked decision. To wire up a real email service later (Resend, Mailchimp, ConvertKit), add a `POST /api/contact` route handler and update the form in `components/marketing/sections.tsx` `FinalCta`.

---

## Performance & accessibility targets

Locked at:
- **Lighthouse Performance ≥95**
- **Accessibility 100**
- **Best Practices 100**
- **SEO 100**

Verify with `npm run build && npm run start`, then run Lighthouse against `http://localhost:3000`.

Key practices:
- All routes static-by-default (RSC).
- `next/font` for Inter and Geist Mono (no FOIT, no CLS).
- Fontshare preconnect + `font-display: swap` for General Sans.
- `prefers-reduced-motion` honored in Lenis, Reveal, and the hero diagram.
- Semantic HTML (single `<h1>`, real `<button>` and `<a>`, eyebrow text uses `<p>` not styled headings).
- Skip-to-content link as first focusable element.
- Focus rings always visible in `--accent-400` with 2px offset.
- Mobile tap targets ≥44px.

---

## Known v1 placeholders (not bugs)

Tracked in `DECISIONS.md`:

- **Wordmark** is rendered in General Sans 800 as a stand-in. Replace with the canonical `telev8` wordmark file when supplied.
- **Partner logos** in the trust bar are rendered as text labels for v1. Replace with monochrome SVG logos when assets are delivered.
- **Footer links** for `Contact`, `Press`, `Careers`, `Privacy`, `Terms`, `Trademark notice` are visible but linked to `#` per locked decision #2.
- **Email capture** routes through `mailto:` per locked decision #4. Wire to Resend/Mailchimp when ready.
- **Light mode** tokens are defined in `app/globals.css` but not toggled in v1 (decision #5).

---

## License

© telev8, LLC 2026. All rights reserved.
