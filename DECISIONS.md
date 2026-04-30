# telev8 — Engineering & Design Decision Log

*Phase 5 deliverable. The major non-obvious calls made during the v1 build, with rationale. A future contributor (human or AI) should be able to pick up here without re-deriving the context.*

Project docs you should read before this one:
- `BRAND.md` — voice, audience, SB7 mapping, taglines, confidentiality
- `DESIGN.md` — color, type, spacing, motion, component primitives, stack
- `IA.md` — section-by-section IA mapped to SB7

---

## Phase 1 — brand decisions (locked 2026-04-28)

| # | Decision | Rationale |
| --- | --- | --- |
| B1 | DAI uses **non-PII** data — public copy says "non-PII collected." | The GRX Overview p. 15 SSAI spec line says "Does require PII," contradicting Partner Overview slide 6 and `CLAUDE.md`. Treated as a typo in the source deck; user confirmed. |
| B2 | The **"$400+M invested"** stat is held out of v1 public copy. | Plausibly publishable but reads as investor-deck. Held in reserve. |
| B3 | **No named customer references** in v1 public copy. | Trust bar leads with sanctioned tech-partner logos only (TiVo, UEI, Google Android TV, Packet Fabric, AWS). Internal customer names from the Interact pitch (Leisure World, Catamaran, Regatta 55, Jackson Heights, Coral Gables Townhomes) are confidential per `CLAUDE.md` and excluded. |
| B4 | **Interact** is not mentioned on the telev8 site. | The telev8 site sells the platform. Interact is a sister/partner brand with its own brand surface. |
| B5 | **Tagline lock:** hero kicker `consumer tvs. commercial outcomes.` + preserved campaign line `cut the cost. not the cord.` | Hero kicker becomes the H1 in §2. Campaign line closes the page in the FinalCta and the footer bottom rail. Three additional candidates retained in BRAND.md §10 as a campaign library. |
| B6 | **Direct CTA wording locked at `Schedule a demo`.** Used identically site-wide. | Per SB7: direct CTA must be identical everywhere. The first plan step is updated to match. |
| B7 | **Transitional CTA = email capture (mailto in v1).** | Decision D4 below. |

---

## Phase 1.5 — voice & copy refinements (locked 2026-04-29)

Driven by integration of `docs/executive-voice-reference.md` and a Wyndham-tier credibility pressure-test of the v1 stat claims. Goal: pull the executive register through the top-of-funnel surface and harden numeric claims against SLA/CDN due diligence.

| # | Decision | Rationale |
| --- | --- | --- |
| B8 | **Hero subhead rewritten** to lead with the structural reframe ("telev8 reframes in-room television from a recurring expense into a portfolio-wide revenue engine. One cloud platform — purpose-built for hospitality, multi-family, senior living, hospitals, and out-of-home..."). | Old subhead opened with platform self-description and buried the reframe 40 words in. New subhead invokes *reframes*, *portfolio-wide*, *revenue engine*, and *purpose-built* — all favored phrases from the executive-voice reference — in two beats. |
| B9 | **Hero eyebrow promoted from list to scale claim:** `For Hotels · Multi-Family · Senior Living · Hospitals · Out-of-Home` → `Portfolio-Wide TV — Hospitality, Multi-Family, Senior Living, Hospitals, Out-of-Home`. | `CLAUDE.md` competitive-positioning doctrine #3: "A vertical pill is a list; the cross-vertical advantage should be *messaged*, not just enumerated." Eyebrow now leads with the cross-vertical claim. |
| B10 | **TrustBar subhead** restructured so telev8 is the agent of the claim: `TiVo's exclusive partner for commercial multi-tenant markets.` → `Exclusive TiVo partner for commercial multi-tenant markets — backed by 15+ years of platform development.` | Adds the "backed by" authority pattern and inverts ownership of the claim — telev8 secured the rights, not the other way around. |
| B11 | **ValueProps Card 01 body** opens with the value-exemplar line ("turns the screen in every guest room into the most valuable surface on your property") and the *without [the rewire]* pattern. | Card 01 is the architectural-advantage card. It now opens with the asset reframe instead of feature description. |
| B12 | **ValueProps Card 03 body** prepended with: "Every TV becomes part of a portfolio-wide owned media network — addressable, governed centrally, and monetizable." | Card 03 is the cost→revenue reframe card. It now names the asset class — *owned media network* — that the rest of the body argues for. CMO language, not vendor language. |
| B13 | **Stat reconciliation: uptime & POPs walked back to conservatively defensible figures** across all five surfaces (Guide ladder, Card 05 headline / body / proof line, BRAND.md §5/§6/§8, IA.md §5/§6, DESIGN.md §3 typography example). `99.999%` → `99.9%`. `~600 POPs (255 in U.S.)` → `450+ POPs across the U.S. and globally`. Card 05 headline `Five-Nines` → `Enterprise-Grade`. | Source GRX deck supports the larger numbers as written, but five-nines uptime invites SLA contract scrutiny that 99.9% does not, and 600+ POPs invites a CDN-route audit that 450+ survives. Credibility-hardening move ahead of executive due diligence — not a fact correction. The "255 in the U.S. alone" sub-figure was dropped; it's internally inconsistent with the new conservative topline. |
| B14 | **Nav label-to-anchor bug fixed.** `{ href: "#plan", label: "For Property Owners" }` → `{ href: "#plan", label: "The Plan" }`. `{ href: "#stakes", label: "The Plan" }` → `{ href: "#stakes", label: "What Doing Nothing Costs" }`. | Pre-existing labeling bug — the labels were mis-mapped to their anchors. Now matches the section names users actually scroll to. |
| B15 | **`CLAUDE.md` updated with sibling-AI awareness.** A new "Sibling AI" section codifies the lane split: this Claude Code project is the implementation specialist; a parallel Claude.ai web project is the brand-voice authority. Brand or copy work landing here should be redirected. | The user has set up a parallel Claude.ai web project to handle brand strategy, PR, marketing, executive communications, and sales enablement. Both AIs share the same source documents; they specialize differently. |
| B16 | **`BRAND.md` extended** with a new "The Core Reframe" section (after §1) and a new "Audience Tiers" section (after §2). The favored-phrases (§8) and avoided-phrases (§9) lists were extended with the executive-register vocabulary. Existing §1–§12 numbering preserved (so the `DECISIONS.md` B5 reference to `BRAND.md §10` still resolves). | Codifies the structural reframe — TV from cost center to revenue engine, in-room television as digital real estate / owned media network — as the keystone strategic frame. Adds the executive vs. operational tier distinction with executive as the default register for top-of-funnel work. |
| B17 | **Problem section body 1 sharpened** to thread the executive-tier structural pain point alongside the operational symptoms. Inserted "A fragmented distribution chain controlled by content distributors." between "On-prem headends." and "Truck rolls every time something breaks." | Pulls the executive-voice reference's "fragmented, distributor-controlled deployments" pain-point phrase into the Problem section without losing the operational symptoms an executive reader scans. Independently validated by the Wyndham proposal language ("the fragmented nature of how TV services have been deployed and controlled by the current content distributors"). |
| B18 | **Agreement-plan triplet swap: `No rewiring required` → `No proprietary networks required`.** Updated in three places: hero microcopy strap, Plan footer strap, BRAND.md §6 agreement-plan canon. | "No rewiring" was the operational framing of the same promise; "No proprietary networks" is the architectural framing — captures both the no-rewire concession and the no-vendor-network-buildout concession in one phrase. Differentiates against fiber-buildout competitors (Hotwire/Fision per `competitive-landscape.md` Tier 1 MDU) where "no rewiring" alone underclaims. Independently validated by the Wyndham proposal: "removing the need for franchisees to bring in new and costly proprietary networks that disrupt their businesses." |

---

## Phase 2–4 — design / engineering decisions

### D1. Stack: **Next.js 15 + TS strict + Tailwind v4 + Framer Motion + shadcn primitives + Lenis**

**Decision.** App Router, RSC by default, route handlers for server actions, `next/font` for self-hosted fonts, `next/image` for AVIF/WebP, Tailwind v4's CSS-first `@theme` config in `app/globals.css`.

**Alternatives considered.** Astro (lighter, but less ergonomic for the motion work), Remix (fine, but smaller ecosystem and less native to the reference brands), Vite + React (fine but reinvents wheels Next ships).

**Rationale.** This is the de-facto standard for the Linear/Vercel/Stripe-tier reference brands. Tailwind v4's `@theme` + native CSS variables let the design tokens live in one file (`app/globals.css`) with zero PostCSS overhead.

**Status.** Approved by user (Phase 2 decision #1).

---

### D2. Type pairing: **General Sans (display) + Inter (body) + Geist Mono (mono)**

**Decision.** General Sans for headlines (loaded via Fontshare CDN with preconnect + `font-display: swap`); Inter for body and UI (via `next/font/google`, self-hosted at build); Geist Mono for proof-point digits (via the `geist` package).

**Alternatives considered.** Cabinet Grotesk (squarer, more clinical — initially proposed but adjusted after seeing the rounded `telev8` wordmark in `telev8_social.jpg`); Söhne (paid, considered too expensive for v1); Inter Display (insufficient character).

**Rationale.** General Sans's slight rounded terminals complement the existing `telev8` wordmark without imitating it. Inter is the universal screen workhorse. Geist Mono's `tnum` and stylistic sets give the proof-point digits (`99.9%`, `177+`, `450+`) the look of data, not marketing.

**Notes.**
- General Sans is loaded via Fontshare CDN. If you'd prefer self-hosted, download woff2 files for weights 500/600/700/800 and switch to `next/font/local`.
- The wordmark is currently rendered in **General Sans 800** as a stand-in. Replace with the canonical `telev8` wordmark file when supplied.

---

### D3. Color treatment: **Path B — near-monochrome navy + dusty-blue accent**

**Decision.** `--bg-canvas: #08101F` (deep navy). Accent palette in dusty blue (`--accent-400: #7A93B5`). Primary CTA is a **white pill** (`--cta-bg: #F5F7FA`) with deep-navy text. **Orange retired in v1**, held in reserve for v2 campaign moments.

**Alternatives considered.** Path A — orange (`#FF6A2C`) as the deliberate CTA accent, which would have been more consistent with `CLAUDE.md`'s stated brand heritage. Rejected after reviewing `telev8_social.jpg`, `t7.jpg`, and `t9.jpg` — none of the existing visual assets show any orange. The brand currently reads navy + white wordmark + atmospheric.

**Rationale.** Honor what the existing materials actually look like. The atmospheric direction also reads as more "premium B2B" than challenger-orange — appropriate for the property-owner buyer. Orange returns when there's a campaign moment that earns it.

**Status.** Approved by user (Phase 2 decision #3 — "softer dusty-blue").

---

### D4. Email capture: **`mailto:` in v1**

**Decision.** Both the hero transitional CTA and the FinalCta CTAs link to `mailto:hello@telev8.tv` with subject pre-filled. No server route handler, no third-party email service.

**Alternatives considered.** Local JSON store; Resend/Mailchimp/ConvertKit integration.

**Rationale.** v1 ships fast. The `mailto:` route is friction-tolerated for B2B sales (the buyer is willing to send an email). When a real CRM integration is needed, add `POST /api/contact` and swap the form in `components/marketing/sections.tsx` `FinalCta`.

**Status.** Approved by user (Phase 3 decision #4).

---

### D5. Section order: **stakes (§8) before success (§9)**

**Decision.** Render `Stakes` immediately before `SuccessVision`. The "FROM/TO" grid in `SuccessVision` does the after-picture work.

**Rationale.** SB7 default — failure first, success as the antidote. The contrast makes the success picture matter.

**Status.** Approved by user (Phase 3 decision #1).

---

### D6. Footer link behavior: **visible but inert in v1**

**Decision.** `Contact`, `Press`, `Careers`, `Privacy`, `Terms`, `Trademark notice` render in the footer but link to `#`. The `Overview` link points at `#platform` (the in-page anchor).

**Rationale.** User-approved. Surfaces the IA without committing to subpages or content that doesn't exist yet.

**Status.** Approved by user (Phase 3 decision #2).

---

### D7. Trademark notice: **safe boilerplate**

**Decision.** Footer includes a small-print line attributing TiVo (registered), Android TV, Apple TV, Amazon Fire TV, Samsung Tizen, and LG webOS as trademarks of their respective owners. `telev8™` is asserted as a trademark of telev8, LLC.

**Rationale.** Safe legal posture without legal review. If telev8 has formal partner-required attribution language (especially TiVo, where the partnership is exclusive and contractual), swap that in.

**Status.** Approved by user (Phase 3 decision #3).

---

### D8. Canonical domain: **`https://telev8.tv`**

**Decision.** Used in `app/layout.tsx` (`SITE_URL`), `app/sitemap.ts`, `app/robots.ts`, and the `Schedule a demo` mailto.

**Rationale.** User-confirmed.

**Status.** Approved by user (Phase 3 decision #5).

---

### D9. Component file consolidation

**Decision.** Marketing sections 3–11 (TrustBar, Problem, Guide, ValueProps, Plan, Stakes, SuccessVision, FinalCta, Footer) live in a single `components/marketing/sections.tsx` file. Hero is its own file (`components/marketing/hero.tsx`) because it imports the signature `DistributionDiagram` and is the most distinct section. Nav is its own file because it's a client component with scroll listeners and a mobile drawer.

**Alternatives considered.** Each section in its own file — more "small focused components" per the spec.

**Rationale.** A pragmatic compromise made under time pressure during the build. The sections share so many primitives (`Section`, `Eyebrow`, `AccentBar`, `Reveal`) and copy patterns that the consolidated module is easier to navigate than 9 thin files. If you start adding meaningful logic to any individual section, split that section out into its own file.

**Status.** Acceptable for v1; revisit if any section grows beyond ~80 lines or develops independent state.

---

### D10. Signature hero moment: **animated SVG distribution diagram**

**Decision.** `components/motion/distribution-diagram.tsx`. Two stacked chains rendered as SVG: a faded legacy chain (Programmer → Aggregator → Dealer → On-Prem → Guest) on top, the foregrounded telev8 chain (Programmer → telev8 → Guest) below. Animated with Framer Motion `whileInView` + `pathLength` over ~1200ms `ease-out-expo`.

**Alternatives considered.** Kinetic typography for the hero kicker; abstract gradient sequence; 3D edge-cache illustration.

**Rationale.** This visualizes the SB7 villain → guide pivot directly — the most important narrative beat on the page expressed as motion. Lifted directly from the Partner Overview slides 3–4 and the GRX Overview p. 7 distribution model. SVG over WebGL: faster, accessible, indexable.

**Status.** Approved by user (Phase 2 decision #4).

---

### D11. Light mode: **defined but not toggled**

**Decision.** Light-mode tokens are present in `app/globals.css` (`--bg-canvas-light`, `--text-primary-light`, etc.) but the page renders dark-only at v1.

**Rationale.** Dark-only at launch keeps the canvas decision crisp and reduces the surface to test. Add a light-mode toggle in v2.

**Status.** Approved by user (Phase 2 decision #5).

---

### D12. Lenis smooth scroll

**Decision.** `components/motion/lenis-provider.tsx` wraps the app and runs a `requestAnimationFrame` loop driving Lenis. Initialization aborts under `prefers-reduced-motion: reduce` so the OS-level user preference is honored.

**Notes.** The `@studio-freight/lenis` package was deprecated during the build and is now published as `lenis`. The pinned version (1.0.42) still works. Migrate the import path the next time package versions are touched.

---

### D13. Trust bar: **text labels for partner logos**

**Decision.** The trust bar renders the five sanctioned partner names (TiVo, Universal Electronics, Android TV, Packet Fabric, AWS) as styled text labels rather than logo SVGs.

**Rationale.** Logo SVGs were not provided in the source materials. Text is honest, accessible, and avoids using brand marks without explicit asset delivery. Replace with canonical SVG logos when delivered.

---

### D14. Wordmark: **General Sans 800 stand-in**

**Decision.** The `telev8` wordmark in the nav and footer is rendered live in General Sans 800 with `letter-spacing: -0.03em`. The `8` flips to `--accent-400` on hover.

**Rationale.** The canonical wordmark file (`telev8_social.jpg` is a JPG bitmap, not a vector wordmark) wasn't provided as an editable SVG. The General Sans rendering reads close enough for v1. When the canonical wordmark file is supplied, replace with an inline SVG component in `components/primitives/wordmark.tsx`.

---

## Build verification

- `npm install` — 331 packages, exit 0.
- `npx tsc --noEmit` — clean (no type errors).
- `npm run dev` — Next.js 15 starts on `http://localhost:3000`, compiles in ~8.5s (1362 modules), serves `/` HTTP 200 in 253ms after warm cache.
- Watchpack warnings about `C:\DumpStack.log.tmp`, `C:\hiberfil.sys`, etc. are Windows-only file-watcher noise about system files; they don't affect the build.

## Verification still owed

- **Lighthouse pass** — run `npm run build && npm run start`, then Lighthouse against `http://localhost:3000`. Targets: Performance ≥95, Accessibility 100, Best Practices 100, SEO 100.
- **Visual QA pass** — mobile (≤640px), tablet (768–1024px), desktop (1280px), wide (1536px+). The build is mobile-first and uses fluid `clamp()` typography, but every breakpoint should be eyeballed.
- **Keyboard navigation** — tab through nav → hero CTAs → mid-page CTAs → final CTA → footer. The skip-to-content link should be the first focusable element.
- **Screen reader** — verify the `aria-label` on the distribution diagram conveys the legacy-vs-telev8 message, and that the `sr-only` fallback under it reads cleanly.

## Next steps

When you pick this up:

1. Replace the wordmark stand-in with the canonical `telev8` wordmark SVG.
2. Replace partner text labels with monochrome SVG logos (where the partner has supplied permission).
3. Wire up real email capture via Resend/Mailchimp.
4. Build out the per-vertical pages (`/hospitality`, `/multi-family`, `/senior-living`, `/out-of-home`) — the IA already has the anchor links.
5. Add light-mode toggle (tokens exist; just need a `data-theme` switch in `<html>` and a toggle in the nav).
6. Replace the `mailto:` Trademark notice link with a real `/legal/trademark` page.
7. Add OpenGraph image (`app/opengraph-image.tsx` — Next.js convention).
