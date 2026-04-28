# telev8 Landing Page — Information Architecture

*Phase 3 deliverable. The single landing page mapped to StoryBrand SB7, with concrete copy direction and motion/visual notes for every section. Built directly from `BRAND.md` and `DESIGN.md`.*

The page tells one continuous story:

> *Property owners are stuck running expensive, outdated commercial-TV systems. telev8 delivers a modern, app-based TV platform that runs on the wiring and TVs they already have — and turns TV from a cost center into a revenue line. Every section moves the operator from "stuck on legacy" to "modernized and accountable."*

---

## Section map

| # | Section | SB7 element | Cadence |
| --- | --- | --- | --- |
| 1 | Navigation | (chrome) | always-visible |
| 2 | Hero | Character + Problem (hint) + CTAs | hero |
| 3 | Trust bar | Guide → authority | tight |
| 4 | The problem | Problem (external + internal + villain) | default |
| 5 | The guide | Guide → empathy + authority | default |
| 6 | The platform / value props | Plan support + Solution preview | large |
| 7 | The plan | Plan (process plan, 3 steps) | default |
| 8 | Stakes | Failure | default |
| 9 | Success vision | Success | large |
| 10 | Final CTA | Direct + Transitional CTA | default |
| 11 | Footer | (chrome) | tight |

Total ~11 sections, single continuous scroll. Page is statically generated, single route (`/`).

---

## 1. Navigation

**Purpose.** Always-visible orientation, persistent direct CTA, and brand presence.

**SB7 element.** Chrome — but the persistent direct CTA serves Element 5 (Call to Action).

**Layout.** Sticky top nav, ~64px tall, ~56px when scrolled past hero. Three regions:
- **Left:** lowercase `telev8` wordmark.
- **Center-right:** sparse anchor links — `Platform`, `For Property Owners`, `The Plan`. Three links, no more.
- **Right:** primary CTA — `Schedule a demo` (white pill, deep-navy text).

**Copy direction.** Wordmark only on the left. Link labels match section anchors. CTA wording matches site-wide locked direct CTA.

**Mobile.** Wordmark + hamburger. Drawer slides in from the right with the three links and a full-width `Schedule a demo` CTA at the bottom.

**Motion.** Backdrop blur fades in at scroll-y > 80px (200ms `ease-in-out-quad`). The `8` in the wordmark micro-shifts to `--accent-400` on hover (200ms).

**Accessibility.** Skip-to-content link as first focusable element. Wordmark is an `<a href="/" aria-label="telev8 home">`. Hamburger is a real `<button aria-controls aria-expanded>`.

---

## 2. Hero

**Purpose.** State who telev8 is for, name the transformation, and get the user moving — within five seconds (the Grunt Test from `docs/storybrand-framework.md`).

**SB7 elements.** Character (the audience is named), Problem (hinted), Direct CTA, Transitional CTA, Hero image (the signature distribution-diagram visual is the after-state).

**Layout.** 12-col grid. Text in cols 1–7. Signature distribution-diagram visual in cols 7–12 (cols 6–8 of overlap intentional for compositional weight). On mobile, text first, diagram beneath.

**Copy direction.**

- **Eyebrow** (caps, `--accent-300`): `FOR HOTELS · MULTI-FAMILY · SENIOR LIVING · OUT-OF-HOME`
- **H1 / display-1:** *consumer tvs. commercial outcomes.*
- **Lede / body-lg:** *telev8 is a cloud-based TV platform that runs on your property's existing wiring and the consumer televisions already in every room — with dynamic ad insertion that turns TV from a cost center into a recurring revenue line.*
- **Direct CTA:** `Schedule a demo` (primary button)
- **Transitional CTA:** `Download the platform overview →` (ghost button, immediately to the right)
- **Footnote line** (caption, `--text-muted`): *no commercial tvs. no rewiring. no PII collected.*

**Visual notes.**
- Background: `--bg-canvas` with a soft `--accent-glow` radial wash behind the right side of the hero (where the diagram lives).
- The diagram is the signature hero moment — the legacy distribution chain (Programmer → Aggregator → Dealer → On-Prem → Guest) collapses into the telev8 path (Programmer → telev8 → Guest). SVG paths drawn in `--accent-400` strokes, animated over ~1200ms `ease-out-expo`. Plays once on entry, replays on scroll-back into view, reduces to static end-state under `prefers-reduced-motion`.

**Motion.** Eyebrow → H1 → lede → CTAs animate in via the default reveal recipe (opacity 0→1, translateY 12→0, 500ms `ease-out-expo`), with 80ms staggered children. Diagram begins playing at H1 settle (~600ms after entry).

**Acceptance.** A first-time reader has, within five seconds: (1) the audience (eyebrow), (2) what telev8 offers (lede), (3) what to do next (CTA), and (4) a felt sense that the legacy stack is the villain (diagram).

---

## 3. Trust bar

**Purpose.** Establish authority in a single horizontal sweep, before the user has to read anything heavy.

**SB7 element.** Guide → Authority (logos).

**Layout.** Tight section (`section-tight` token). Centered eyebrow above five logos, evenly spaced.

**Copy direction.**

- **Eyebrow** (caps, `--text-muted`): `BUILT WITH`
- **Logos (5):** TiVo · Universal Electronics (UEI) · Google Android TV · Packet Fabric · AWS

**Visual notes.**
- Logos rendered as monochrome SVGs in `--text-secondary` at 60% opacity. Hover lifts opacity to 100% (200ms).
- Container is `wide`, full bleed on mobile.
- Per `BRAND.md` §11: no named customer logos in v1.

**Motion.** Logos fade-up together (no stagger) as a single rhythmic line, 400ms `ease-out-quart`.

---

## 4. The problem

**Purpose.** Make the operator feel understood. Name the legacy villain in their own language. Speak to all three problem layers (external, internal, philosophical) per `docs/storybrand-framework.md`.

**SB7 element.** Problem.

**Layout.** Two-column at desktop: a left column anchors with a single bold display-2 statement; the right column carries three short paragraphs (one per problem layer).

**Copy direction.**

- **Eyebrow** (caps, `--accent-300`): `THE LEGACY STACK`
- **Display-2 (left):** *commercial television hasn't moved in fifteen years.*
- **Right column — three short blocks:**

  **(External)**
  *Pro:Idiom-locked TVs. On-prem headends. Truck rolls every time something breaks. A guide screen that hasn't been redesigned since the iPhone shipped.*

  **(Internal)**
  *You know the system is costing you more than it's worth — but ripping it out feels like ripping out the building. So the line item keeps growing, and the experience keeps falling further behind.*

  **(Philosophical)**
  *Property owners shouldn't have to choose between modernizing the in-room experience and protecting their margins. Commercial TV should compete on the same plane as the rest of modern technology — not three generations behind it.*

**Visual notes.**
- Quiet section. No imagery. Type does the heavy lifting.
- A 4×32px `--accent-400` accent bar sits above the eyebrow.

**Motion.** Default reveal recipe. The three right-column blocks stagger in at 100ms each.

---

## 5. The guide

**Purpose.** Introduce telev8 with empathy first, authority second. Per SB7: ~10% authority, ~90% empathy + plan + offer. The empathy line is the most important sentence in this section.

**SB7 element.** Guide.

**Layout.** Single centered column at `tight` width (max-w-3xl). Empathy headline, short paragraph, and three small authority tiles in a row beneath.

**Copy direction.**

- **Eyebrow** (caps, `--accent-300`): `THE GUIDE`
- **H2:** *we know what it costs to keep a legacy commercial-TV system alive.*
- **Body:** *the truck rolls, the rewires, the Pro:Idiom invoices, the guide screen you'd never want to look at yourself. telev8 was built by people who lived inside that system — and decided the operator deserved better.*
- **Authority tiles (3, mono-font digits):**
  - `15+ YEARS` of platform development
  - `177+ PATENTS` licensed in
  - `99.999%` uptime on a closed-loop CDN with `~600 POPs`

**Visual notes.**
- Authority digits in **Geist Mono 500**, large enough to read as data not decoration. Surrounding labels in Inter 500.
- Background remains `--bg-canvas` — no surface card. Quiet, considered.

**Motion.** Default reveal. Authority tiles stagger 80ms after the body paragraph settles.

---

## 6. The platform / value props

**Purpose.** Show, in five tight blocks, what telev8 actually delivers — each block leading with a property-owner benefit and supported by a concrete proof point. This is the section that converts skeptics.

**SB7 elements.** Plan support + Solution preview. (Authority continues here through the proof points.)

**Layout.** `section-large` token. Eyebrow + section H2, then five blocks. Layout is a vertical stack of paired rows (text on one side, visual on the other), alternating sides per row for rhythm. On mobile, all stack to single column.

**Copy direction.**

- **Eyebrow** (caps, `--accent-300`): `THE PLATFORM`
- **Section H2:** *every room. every brand. every existing wire.*

Then five blocks, in this order:

### Block 1 — Lower CapEx and OpEx
- **H3:** *no commercial tvs. no rewiring.*
- **Body:** *telev8 runs on the consumer televisions already in every room, over the copper, coax, or fiber wiring already in your walls. auto-configuration to each tv is handled remotely.*
- **Proof line (mono):** `EXISTING WIRING · CONSUMER TVS · REMOTE CONFIG`
- **Visual:** a clean schematic — three TV silhouettes connected by a single line that traces back to a cloud icon. Stripped down. Stroked in `--accent-400`.

### Block 2 — Turn TV into a revenue line
- **H3:** *stop maintaining tv. start monetizing it.*
- **Body:** *server-side dynamic ad insertion delivers targeted advertising in lieu of legacy programmatic ads — an industry first for commercial multi-tenant venues. CPM multiplier for content partners. New monthly revenue line for property brands.*
- **Proof line (mono):** `75+ CHANNELS · 100% AD INSERTION · NON-PII DATA`
- **Visual:** an animated SSAI flow — a generic pre-roll slot resolves into a property-specific ad. SVG, looped over 4s.

### Block 3 — A modern viewing experience
- **H3:** *streaming television, reimagined.*
- **Body:** *full cable programming, streaming apps, casting, DVR, 72-hour catch-up TV, search, VOD — through the telev8 LiveTV app, built in partnership with TiVo. across AndroidTV, Apple TV, Amazon FireTV, Samsung Tizen, and LG WebOS.*
- **Proof line (mono):** `TIVO · ANDROID TV · APPLE TV · FIRETV · TIZEN · WEBOS`
- **Visual:** a stylized device-grid that fades platforms in and out at a slow cadence.

### Block 4 — Cloud-native delivery, built for scale
- **H3:** *closed-loop. edge-cached. five-nines.*
- **Body:** *end-to-end multi-tenant cloud system with central CMS. closed-loop private CDN with a 50 Gbps backbone reaching nearly 600 points of presence (255 in the U.S. alone). 99.999% uptime. HEVC/H.265 with native 4K. edge caching for WAN efficiency.*
- **Proof line (mono):** `~600 POPs · 50 Gbps · 99.999% UPTIME · 4K HEVC`
- **Visual:** a faint world-map outline with 600 small dots representing POPs. Static. Restrained.

### Block 5 — Backed by a deep IP moat
- **H3:** *exclusive partnerships. compounding ip.*
- **Body:** *exclusive TiVo partnership for hospitality, healthcare, senior living, MDU, and multi-tenant out-of-home. first "hospitality-tier" enterprise license for Android TV, in partnership with Universal Electronics. 15+ years of platform development. 177+ patents licensed.*
- **Proof line (mono):** `TIVO EXCLUSIVE · UEI HOSPITALITY-TIER · 177+ PATENTS · 15+ YEARS`
- **Visual:** a stacked stamp/seal motif — three monochrome partnership marks layered.

**Visual notes overall.** Each block lives on `--bg-surface` cards with `--border-subtle`. Cards span `wide` width. Visuals on the right at desktop on odd blocks, left on even blocks.

**Motion.** Default reveal recipe per block. Blocks reveal one at a time as scrolled into view.

---

## 7. The plan

**Purpose.** Make engagement feel small, clear, and inevitable. Per SB7: a 3-step process plan with named, memorable steps; first step matches the direct CTA exactly.

**SB7 element.** Plan (process plan).

**Layout.** Three numbered cards in a row at desktop, stacked at mobile. Connected by a thin `--border-default` line at desktop (vertical at mobile) so they read as a path, not a list.

**Copy direction.**

- **Eyebrow** (caps, `--accent-300`): `THE PLAN`
- **Section H2:** *three steps from "stuck on legacy" to "modernized and accountable."*

**Step 1**
- **Step number:** `01`
- **Step name (H3):** *schedule a demo.*
- **Body:** *we walk you through the platform and audit your property's existing wiring, TVs, and PMS in a single call.*

**Step 2**
- **Step number:** `02`
- **Step name (H3):** *switch the stack.*
- **Body:** *telev8 provisions over your existing infrastructure — no rewire, no commercial TVs, no on-site headend. auto-configuration is handled remotely.*

**Step 3**
- **Step number:** `03`
- **Step name (H3):** *watch the math change.*
- **Body:** *lower CapEx and OpEx. a modern viewer experience your guests and residents actually use. a new ad-revenue line on day one.*

**Agreement plan (small line beneath the three steps):** *no commercial tvs required. no rewiring required. no PII collected.* — matches `BRAND.md` §6 exactly.

**Visual notes.** Numbered cards on `--bg-surface`. Step number rendered in **Geist Mono 700, display-2 size, `--accent-400`**. Connector line is 1px `--border-default` with subtle dashed segments.

**Motion.** Cards reveal in order, 200ms apart, default recipe. The connector line draws across after all three cards have settled (400ms `ease-out-quart`).

---

## 8. Stakes

**Purpose.** Per SB7: the salt principle — a small amount of stakes makes the success picture matter. Concrete, not melodramatic.

**SB7 element.** Failure (cost of inaction).

**Layout.** Tight, single column at `tight` width. Eyebrow + display-2 statement + a four-bullet list.

**Copy direction.**

- **Eyebrow** (caps, `--accent-300`): `WHAT DOING NOTHING COSTS`
- **Display-2:** *the line item gets bigger every quarter you wait.*
- **Bullets (concise, declarative):**
  - *another year of Pro:Idiom licensing, on-prem hardware, and truck rolls.*
  - *another year of competitor properties modernizing while yours doesn't.*
  - *another year without a dynamic-ad-insertion revenue line — while the window is still open.*
  - *another year of guests and residents quietly casting around your in-room product instead of using it.*

**Visual notes.** No imagery. Bullets in `--text-secondary`, `--accent-400` square bullet markers (4×4px). Restrained.

**Motion.** Default reveal. Bullets stagger 80ms.

---

## 9. Success vision

**Purpose.** Per SB7: paint the after-picture in vivid, sensory language. The antidote to Section 8.

**SB7 element.** Success.

**Layout.** `section-large` token. Centered display-1 statement, then a two-column "from / to" comparison beneath.

**Copy direction.**

- **Eyebrow** (caps, `--accent-300`): `THE AFTER-PICTURE`
- **Display-1 (centered):** *every room, modernized. every quarter, accountable.*
- **Lede:** *the property where every TV runs a current, app-based experience guests and residents actually use — and where TV finally pays for itself.*

**From / To grid (two columns):**

| FROM | TO |
| --- | --- |
| Pro:Idiom-locked commercial TVs | the consumer TVs already in every room |
| an on-prem headend you maintain | a closed-loop cloud platform with five-nines uptime |
| a guide screen from 2005 | a modern app-based experience with casting, search, DVR, VOD |
| a TV line item that only goes up | a TV line item that earns recurring ad revenue |
| truck rolls and rewires | remote configuration and remote management |

**Visual notes.** The "FROM" column in `--text-muted`, the "TO" column in `--text-primary`. A vertical `--border-default` divider between them. Dusty-blue accent bar above the H1.

**Motion.** Display-1 settles (600ms). Then the FROM column reveals on the left (400ms), then the TO column on the right (400ms, 100ms after FROM). The visual rhetoric: the old reality appears first, then is answered.

---

## 10. Final CTA section

**Purpose.** Close. Per SB7: one strong direct CTA, one transitional CTA, no decoration.

**SB7 elements.** Direct CTA + Transitional CTA.

**Layout.** Centered, `tight` width. Single display-1 ask, two CTAs below, supporting line beneath.

**Copy direction.**

- **Display-1:** *cut the cost. not the cord.*
- **Body:** *fifteen minutes is enough to know whether telev8 will work for your property.*
- **Direct CTA:** `Schedule a demo` (primary button, large)
- **Transitional CTA:** the **email-capture form** — single-line input + `Get the platform overview` button. On submit: success state (single-line confirmation + `Want a walkthrough? Schedule a demo →` link).
- **Footnote (caption, `--text-muted`):** *we'll send you the legacy-vs-telev8 distribution diagram, the value-prop scoreboard, and a plain-language platform overview. no spam.*

**Visual notes.** Background can carry a subtle `--accent-glow` radial wash behind the display-1 to give the close some weight. Otherwise restrained.

**Motion.** Display-1 reveals. CTAs and footnote stagger after.

---

## 11. Footer

**Purpose.** Junk drawer per SB7 — practical, restrained, and the place where the legal and contact details live.

**SB7 element.** Chrome.

**Layout.** Four columns at desktop (Wordmark + tagline · Platform · Company · Legal). Single-column stack at mobile. A bottom rail with copyright and the campaign signoff.

**Copy direction.**

- **Column 1 (wordmark):** lowercase `telev8` wordmark + tagline beneath: *transforming commercial television.*
- **Column 2 — Platform:** `Overview` · `For Hotels` · `For Multi-Family` · `For Senior Living` · `For Out-of-Home` (anchor links to the same page in v1; standalone vertical pages in v2)
- **Column 3 — Company:** `Contact` · `Press` · `Careers` (placeholder links — `mailto:` for Contact)
- **Column 4 — Legal:** `Privacy` · `Terms` · `Trademark notice`

**Bottom rail:**
- **Left:** `© telev8, LLC 2026 · all rights reserved`
- **Right:** the campaign signoff: *cut the cost. not the cord.*

**Visual notes.** Footer sits on `--bg-canvas` with a 1px `--border-subtle` top divider. All links in `--text-muted` with hover to `--text-primary`.

**Motion.** None.

---

## Page-level acceptance criteria

A reader who never scrolls past the hero should know:
- Who telev8 is for (eyebrow).
- What the transformation is (H1 + lede).
- What to do next (CTA).
- That telev8 has authority (trust bar visible above the fold on most viewports — and the diagram resolves into the telev8 path within 1.2s).

A reader who reads to the bottom should leave with:
- A felt sense of the legacy villain (Section 4).
- Empathy that telev8 understands the operator's reality (Section 5).
- Five proof-backed reasons to take the next step (Section 6).
- A small, clear, three-step engagement path (Section 7).
- A vivid concrete picture of the after-state (Section 9).
- One repeated direct CTA wording (`Schedule a demo`) — used at the nav, in the hero, and in the close.

---

## Open questions before Phase 4

1. **Section ordering.** Do you want the **stakes** (Section 8) *before* the **success vision** (Section 9), or flipped? My default per SB7 is stakes-then-success — failure first, success as the antidote. Confirm.
2. **Footer destinations.** `Contact`, `Press`, `Careers` — what should they link to in v1? My default: `Contact` → `mailto:hello@telev8.tv` (or whichever address is correct), `Press` and `Careers` → anchor or hidden in v1. Confirm.
3. **`Trademark notice`.** Need any specific TM/® attribution beyond `© telev8, LLC 2026`? (TiVo and other partners almost certainly require trademark attribution somewhere — I'll add boilerplate unless you have specific language.)
4. **Email capture endpoint.** The transitional CTA submits to a Next.js route handler. For v1, do you want it to: (a) write to a JSON file or local SQLite for now, (b) post to a service like Resend / Mailchimp / ConvertKit, or (c) just `mailto:` for v1?
5. **Domain / canonical URL** for the SEO meta tags — `telev8.com`? `telev8.tv`? Need this to set canonical, OG, and robots correctly.

---

*Pause. On approval (and answers to the five questions), I'll move to Phase 4 — the build.*
