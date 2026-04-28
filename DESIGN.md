# telev8 Design System

*Phase 2 deliverable. Visual system, type system, motion, primitives, and recommended stack for the telev8 landing page. Anchored on the existing dark-navy + orange brand heritage and evolved to the standard of Linear, Vercel, Stripe, Cursor, and Anthropic for 2026.*

---

## 1. Design principles

Five rules that govern every visual and motion decision.

1. **The dark canvas is primary.** Dark mode is the default. Light mode exists for accessibility and printable assets but the flagship surface is dark.
2. **Restraint earns the moments.** Most of the page is monochrome navy + neutrals. Orange shows up rarely, and when it does, it means something.
3. **Type does the heavy lifting.** Headlines carry brand voice. The page should read well even with images stripped out.
4. **Motion serves story, not decoration.** Reveals support the SB7 narrative beats. Micro-interactions confirm intent. One signature hero moment.
5. **Engineering polish is part of the brand.** Zero CLS, focus rings that look intentional, perfect type rendering, real keyboard navigation. Details signal that telev8 is a serious technology company.

---

## 2. Color palette

Dark-first, near-monochrome with a soft dusty-blue accent. Atmospheric. All values OKLCH-friendly; hex provided for portability.

### CTA (white — the action color)

The primary call-to-action gets the highest possible contrast on the dark canvas: **a white pill with deep-navy text**. Decisive, clean, Linear-tier.

| Token | Hex | Usage |
| --- | --- | --- |
| `--cta-bg` | `#F5F7FA` | Primary CTA button background |
| `--cta-bg-hover` | `#FFFFFF` | Hover |
| `--cta-text` | `#08101F` | Primary CTA label (deep navy) |

### Accent (dusty blue — the brand atmosphere)

Sourced from the existing telev8 social aesthetic. Replaces orange as the brand accent in v1. Used for the wordmark `8` flourish, brand dividers, soft section gradients, the signature hero diagram strokes, focus rings, and selective single-word emphasis.

| Token | Hex | Usage |
| --- | --- | --- |
| `--accent-300` | `#94A8C5` | Light dust — eyebrow labels on dark, secondary text emphasis |
| `--accent-400` | `#7A93B5` | Primary accent — wordmark `8` flourish, brand divider, signature diagram |
| `--accent-500` | `#5C7A9A` | Deep accent — pressed states, dark variant |
| `--accent-glow` | `rgba(122,147,181,0.20)` | Soft halos behind hero text, gradient washes |

### Reserved (orange — held back for v2 campaign moments)

Orange is a real part of telev8's heritage but it does not appear in any current public visual asset. We are *intentionally* holding it out of v1 to honor the atmospheric direction of the existing social materials. It returns in v2 for specific campaign moments (a launch announcement, an investor moment, a press feature) where the energy is appropriate.

| Token | Hex | Usage |
| --- | --- | --- |
| `--reserved-orange-500` | `#FF6A2C` | *Not used in v1.* Held for v2 campaign accents. |

### Navy (background — the heritage)

| Token | Hex | Usage |
| --- | --- | --- |
| `--bg-canvas` | `#08101F` | Page background |
| `--bg-surface` | `#0E1B3A` | Cards, modals, primary surface |
| `--bg-elevated` | `#152647` | Elevated surface (sticky nav, popovers) |
| `--bg-hover` | `#1F325A` | Hover state on dark surfaces |

### Navy (background — the heritage)

| Token | Hex | Usage |
| --- | --- | --- |
| `--bg-canvas` | `#08101F` | Page background |
| `--bg-surface` | `#0E1B3A` | Cards, modals, primary surface |
| `--bg-elevated` | `#152647` | Elevated surface (sticky nav, popovers) |
| `--bg-hover` | `#1F325A` | Hover state on dark surfaces |

### Neutrals (cool, blue-tinged for cohesion with navy)

| Token | Hex | Usage |
| --- | --- | --- |
| `--text-primary` | `#F5F7FA` | Body text on dark canvas |
| `--text-secondary` | `#C7CDD8` | Secondary body, captions |
| `--text-muted` | `#6E7787` | Muted text, footnotes, eyebrow on dark |
| `--text-disabled` | `#4D5664` | Disabled state |

### Borders & dividers

| Token | Value | Usage |
| --- | --- | --- |
| `--border-subtle` | `rgba(255,255,255,0.06)` | Barely-there card borders |
| `--border-default` | `rgba(255,255,255,0.10)` | Default dividers |
| `--border-strong` | `rgba(255,255,255,0.16)` | Emphasized borders, hover state |
| `--border-accent` | `rgba(122,147,181,0.40)` | Dusty-blue accent border (rare) |

### Semantic

| Token | Hex | Usage |
| --- | --- | --- |
| `--success` | `#22C55E` | Success toasts, "shipped" indicators |
| `--warning` | `#F59E0B` | Warnings (rare on marketing) |
| `--error` | `#EF4444` | Form validation |
| `--info` | `#5EA8FF` | Informational accents |

### Light mode (defined, not primary)

| Token | Hex |
| --- | --- |
| `--bg-canvas-light` | `#F8FAFC` |
| `--bg-surface-light` | `#FFFFFF` |
| `--text-primary-light` | `#08101F` |
| `--text-muted-light` | `#4D5664` |
| `--border-light` | `#E2E6ED` |

Light mode shares brand orange and semantic tokens with dark.

### Contrast guarantees

- Body text on `--bg-canvas`: ≥7:1 (AAA).
- Large display text on `--bg-canvas`: ≥4.5:1.
- Dusty-blue accent (`--accent-400`) on `--bg-canvas`: ≥4.5:1 for large text and UI components only — not used for small body text.
- White CTA bg (`--cta-bg`) against deep-navy CTA text (`--cta-text`): ≥15:1 (AAA).

---

## 3. Typography

### Type pairing

| Role | Face | Source | Why |
| --- | --- | --- | --- |
| Display / headlines | **General Sans** | Fontshare (free) | Geometric sans with slight rounded terminals. Complements the existing rounded `telev8` wordmark without imitating it. More editorial character than Inter, less squared than Cabinet Grotesk — right for the atmospheric, near-monochrome canvas. |
| Body / UI | **Inter** | Google Fonts (free) | Universal screen workhorse, tuned for small sizes, ships with `next/font`. |
| Mono / data | **Geist Mono** | Vercel (free) | Clean, characterful mono for technical readouts, kbd, footnotes, the proof-point digits (177+ patents, 99.999%, 600+ POPs). |

All three load via `next/font` (Inter, Geist Mono) and Fontshare CDN with `font-display: swap` (General Sans). All are free. All are subset to Latin-Extended for performance.

**Fallback stack:** `'General Sans', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif`.

### Type scale (mobile → desktop, fluid via `clamp`)

| Token | Min (mobile) | Max (desktop) | Tracking | Weight |
| --- | --- | --- | --- | --- |
| `display-1` (hero) | 4rem (64px) | 6.5rem (104px) | -0.04em | 900 |
| `display-2` | 3rem (48px) | 5rem (80px) | -0.03em | 800 |
| `h1` | 2.5rem (40px) | 3.5rem (56px) | -0.025em | 700 |
| `h2` | 2rem (32px) | 2.75rem (44px) | -0.02em | 700 |
| `h3` | 1.5rem (24px) | 1.875rem (30px) | -0.015em | 600 |
| `h4` | 1.25rem (20px) | 1.5rem (24px) | -0.01em | 600 |
| `body-lg` | 1.125rem (18px) | 1.125rem | 0 | 400 |
| `body` | 1rem (16px) | 1rem | 0 | 400 |
| `body-sm` | 0.875rem (14px) | 0.875rem | 0 | 400 |
| `caption` | 0.75rem (12px) | 0.75rem | 0 | 500 |
| `eyebrow` | 0.75rem (12px) | 0.8125rem (13px) | +0.12em | 600 (caps) |

Line-heights: `display` 1.0; `h1`–`h2` 1.05–1.1; `h3`–`h4` 1.2; `body-lg` 1.55; `body` 1.6; `caption` 1.4.

### Voice expressed in type

- **lowercase telev8** wherever the wordmark appears, including headings.
- Headlines hold one to two sentences max. No three-decker stacks.
- Eyebrow labels in caps (`FOR PROPERTY OWNERS`, `THE PLATFORM`) — a small Linear/Stripe-tier touch that signals seriousness.
- Mono font for any number that's a proof point: `99.999%`, `177+`, `600+`. Subtle but it makes the stats feel like data, not marketing.

---

## 4. Spacing & layout

### Base unit
**4px (0.25rem)** — Tailwind v4 default. Everything snaps to multiples of 4.

### Container widths

| Token | Max width | Use |
| --- | --- | --- |
| `tight` | 48rem (768px) | Text-heavy paragraphs, longform copy blocks |
| `standard` | 72rem (1152px) | Default for most marketing sections |
| `wide` | 80rem (1280px) | Hero, feature grids, full-width visuals |
| `bleed` | 100% | Edge-to-edge sections (hero gradient, signature visuals) |

Page horizontal padding: `clamp(1.5rem, 5vw, 3rem)`.

### Section vertical rhythm

| Token | Value | Use |
| --- | --- | --- |
| `section-tight` | `clamp(3rem, 6vw, 4rem)` | Trust bar, footer pre-roll |
| `section-default` | `clamp(4rem, 10vw, 8rem)` | Standard sections |
| `section-large` | `clamp(6rem, 14vw, 10rem)` | Hero, marquee feature blocks |

### Breakpoints (mobile-first)

| Breakpoint | Min width | Notes |
| --- | --- | --- |
| `sm` | 640px | Tablet portrait |
| `md` | 768px | Tablet landscape |
| `lg` | 1024px | Small desktop |
| `xl` | 1280px | Standard desktop |
| `2xl` | 1536px | Wide desktop |
| `3xl` | 1920px | Ultrawide refinements (custom) |

### Grid

- Default: 12-column grid, 24px gutters at desktop, 16px at mobile.
- Common patterns:
  - Hero: 12-col with text in cols 1–7, visual in cols 7–12.
  - Value props: 3-col on desktop, 1-col on mobile.
  - Plan: 3-col with vertical numbered connectors at desktop.

---

## 5. Motion tokens

### Easing curves

| Token | Cubic-bezier | Use |
| --- | --- | --- |
| `ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary reveal — snap into place |
| `ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` | Secondary reveals, layout shifts |
| `ease-in-out-quad` | `cubic-bezier(0.45, 0, 0.55, 1)` | Micro-interactions, hovers |
| `ease-spring` | `cubic-bezier(0.5, 1.5, 0.5, 1)` | Rare playful punctuation (one-off) |

### Durations

| Token | Value | Use |
| --- | --- | --- |
| `duration-instant` | 100ms | Focus rings, hover feedback |
| `duration-quick` | 200ms | Micro-interactions |
| `duration-medium` | 400ms | Section reveals, card transitions |
| `duration-slow` | 600ms | Large reveals, hero entrances |
| `duration-cinematic` | 1200ms | The single signature hero moment |

### Motion principles

- **Default reveal recipe:** opacity 0 → 1, translateY 12px → 0, `ease-out-expo`, 500ms, with 60–100ms staggered children where applicable. Triggered via IntersectionObserver at `rootMargin -10% 0px` so motion fires when content is genuinely on-screen.
- **Hover micro-interactions:** 200ms `ease-in-out-quad`. Cards lift 2px and brighten border. Buttons brighten and lift 1px.
- **Page transitions:** none for v1 (single landing page).
- **`prefers-reduced-motion`:** all reveals reduce to a 200ms opacity-only fade. Lenis smooth scroll disables. Signature hero moment disables and the static end-state renders directly.

### The signature hero moment

**One.** Not many.

**Choice:** an animated **distribution diagram** in (or just below) the hero. SVG paths trace the legacy distribution chain (Programmer → Aggregator → Dealer → On-Prem → Guest), then the chain collapses into the telev8 path (Programmer → telev8 → Guest). The collapse takes ~1200ms with `ease-out-expo`. Plays once on hero entry; replays on scroll-back into view. Reduces to the resolved static state with reduced-motion.

This serves the SB7 narrative — it visualizes "the villain (legacy stack) vs. the guide (telev8)" in motion. Lifted directly from the Partner Overview slides 3–4 and the GRX Overview p. 7 distribution model.

Secondary motion accents (not "the" signature moment):
- Hero kicker (`consumer tvs. commercial outcomes.`) reveals as a kinetic-typography stagger — each beat lands on its own 80ms offset.
- A subtle parallax on the proof-point digits when they enter view.

---

## 6. Component primitives

### Button

Three variants. All share radius `0.5rem`, height `2.75rem` (44px) by default for tap-target accessibility, with `lg` (3.25rem / 52px) and `sm` (2.25rem / 36px) sizes.

| Variant | Bg | Text | Border | Hover |
| --- | --- | --- | --- | --- |
| `primary` | `--cta-bg` (white) | `--cta-text` (deep navy) | none | `--cta-bg-hover` + 1px lift |
| `secondary` | transparent | `--text-primary` | 1px `--border-default` | `--bg-hover` bg, `--border-strong` border |
| `ghost` | transparent | `--text-primary` | none | text translate 2px right, underline |

All buttons: focus ring is 2px `--accent-400` outline at 2px offset. Active state darkens 5% and lifts 0px (returns to flat).

### Link

- Inline link: `--text-primary` with subtle underline that brightens on hover (200ms).
- Standalone link: text + arrow icon. Arrow translates 4px on hover.

### Card

- Background: `--bg-surface`.
- Border: 1px `--border-subtle`.
- Radius: `1rem` (16px).
- Padding: `2rem` (32px).
- Hover (when interactive): `--border-strong` border, 2px lift, `400ms ease-out-quart`.

### Section wrapper

- Vertical padding per `section-default` token.
- Optional eyebrow label above the heading: `FOR PROPERTY OWNERS`, `THE PLATFORM`, etc. — `eyebrow` type token, color `--accent-300`.
- Optional accent bar (4px × 32px `--accent-400`) above the eyebrow for sections that want a brand mark.

### Divider

- Default: 1px `--border-subtle`, full container width.
- Accent variant: 4px × 32px `--accent-400` bar.

### Wordmark

- Lowercase `telev8`.
- Existing wordmark face preserved (rounded geometric — referenced from `telev8_social.jpg`). For v1, render the wordmark in **General Sans 800** at -0.03em tracking as a stand-in until the canonical wordmark file is provided. Replace with the official wordmark when supplied.
- The `8` may receive a 200ms color shift to `--accent-400` on nav hover. Optional and subtle. Never animated on its own.

### Form (transitional CTA capture)

- Single-line email input + `Get the overview` button.
- Input height 2.75rem (matches button), 1px `--border-default`, focus ring 2px `--accent-400`.
- Validation: inline beneath the input, `--error` color.
- Success state: replace form with a one-line confirmation in `--text-primary` + a secondary "Want a walkthrough? Schedule a demo →" link.

### Trust bar

- 5-up partner logos at desktop, 2-col + 3-col at mobile, all in `--text-secondary` opacity 0.6, hover lifts to opacity 1.0 over 200ms.
- Logos: TiVo, UEI, Google Android TV, Packet Fabric, AWS (per BRAND.md confidentiality decisions).

---

## 7. Stack recommendation

**Recommended:**

```
Next.js 15 (App Router) + TypeScript (strict)
Tailwind CSS v4
Framer Motion
shadcn/ui
Lenis
next/font + next/image
```

### Why each piece earns its place

- **Next.js 15 App Router** — production-grade React, RSC for static-by-default pages, route handlers for the email-capture form, native image optimization, sitemap & robots support, edge-ready, the de-facto standard for the Vercel/Linear-tier reference brands.
- **TypeScript strict** — non-negotiable. `noImplicitAny`, `strictNullChecks`, `noUncheckedIndexedAccess`.
- **Tailwind CSS v4** — new CSS-first `@theme` configuration, native CSS variables, OKLCH color space, no PostCSS plugin overhead. Faster builds, cleaner authoring. The full design-token table above lives in a single `@theme` block.
- **Framer Motion** — declarative React animation, respects `prefers-reduced-motion` natively, scroll-triggered reveals via `whileInView`, layout animations for the signature hero moment.
- **shadcn/ui** — for primitives (Button, Form, Dialog, Tabs). Vetted, accessible, and copy-paste so we own the code and customize freely.
- **Lenis** — earns its place: subtle smooth-scroll noticeably elevates marketing-site polish and pairs well with scroll-triggered reveals. Disables under `prefers-reduced-motion`.
- **next/font** — self-host Inter and Cabinet Grotesk with `font-display: swap`, prevent CLS, subset to Latin-Extended.
- **next/image** — AVIF/WebP, sized images, no CLS, lazy-loading below the fold.

### Explicitly skipped

- **GSAP** — not needed. Framer Motion + a small CSS keyframe handle the signature moment. We'd reach for GSAP only if we needed scroll-driven scrubbing of a long sequence; we don't.
- **Three.js / WebGL** — overkill for v1. The signature moment is SVG; it's faster, accessible, and edits cleanly.
- **A CMS** — v1 is a single landing page. Content lives in TSX. We'll add `content-collections` or similar when case studies justify it.
- **A motion library beyond Framer Motion** (e.g., Motion One, Lottie) — one motion library is enough.
- **A component library beyond shadcn** (e.g., Radix Themes, MUI) — shadcn primitives + custom is the right level of control for a flagship surface.

### Performance posture

- All routes: static generation. Server actions only for the email-capture form.
- Images: `next/image`, AVIF/WebP, explicit width/height.
- Fonts: `font-display: swap`, subset Latin-Extended.
- No third-party scripts above the fold.
- **Lighthouse targets locked:** Performance ≥95, Accessibility 100, Best Practices 100, SEO 100.

### Accessibility posture

- WCAG 2.1 AA across the board. Targeting AAA contrast on body text.
- Semantic HTML (one `<h1>`, ordered headings, real `<button>` and `<a>`).
- Keyboard navigation tested end-to-end. Focus rings always visible and intentional.
- All interactive elements have minimum 44×44px tap targets.
- `prefers-reduced-motion` honored across every motion token.
- All images have `alt`, decorative images use `alt=""`.

### File structure (preview — finalized in Phase 4)

```
app/
  layout.tsx
  page.tsx
  api/contact/route.ts
  globals.css                # @theme tokens + base styles
components/
  primitives/                # Button, Link, Card, Section, etc.
  marketing/                 # Hero, ValueProps, Plan, Stakes, Success, etc.
  motion/                    # Reveal, KineticHeading, DistributionDiagram, etc.
lib/
  motion.ts                  # easing + duration tokens for Framer
  cn.ts
public/
  fonts/                     # self-hosted Cabinet Grotesk
  images/                    # optimized assets
```

---

## 8. Decisions locked (user-approved 2026-04-28)

1. **Stack:** Next.js 15 (App Router) + TypeScript (strict) + Tailwind v4 + Framer Motion + shadcn/ui + Lenis. Approved.
2. **Type pairing:** General Sans (display) + Inter (body) + Geist Mono (mono). All free.
3. **Color treatment:** Path B — near-monochrome navy with **dusty-blue accent (`--accent-400` `#7A93B5`)**. Primary CTA is a white pill with deep-navy text. Orange retired in v1, held in reserve for v2 campaign moments.
4. **Signature hero moment:** animated distribution-diagram (legacy chain collapsing into the telev8 path). Approved.
5. **Light mode:** dark-only at v1 launch. Light-mode toggle in v2.

---

*Ready for Phase 3 — the SB7-mapped IA in `IA.md`.*
