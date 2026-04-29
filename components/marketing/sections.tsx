import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/primitives/button";
import {
  AccentBar,
  Eyebrow,
  Section,
} from "@/components/primitives/layout";
import { CountUp } from "@/components/motion/count-up";
import { PlanCards } from "@/components/motion/plan-cards";
import { Reveal, RevealChild } from "@/components/motion/reveal";
import { StreamingGrid } from "@/components/motion/streaming-grid";
import {
  ClosedLoopViz,
  ExclusivePartnershipsViz,
  MonetizeTvViz,
  NoCommercialTvsViz,
  OnePlatformViz,
} from "@/components/motion/value-illustrations";
// Item 9 — Option 1 (animated bar chart) deployed by default.
// To preview Option 2 (telemetry console), swap to the line below:
//   import { SuccessTelemetry as SuccessBarChart } from "@/components/motion/success-telemetry";
import { SuccessBarChart } from "@/components/motion/success-bar-chart";

/* ---------------------------------------------------------------- */
/* 3. Trust bar                                                      */
/* ---------------------------------------------------------------- */

type Partner = {
  name: string;
  src: string;
  w: number;
  h: number;
};

// Per-logo width/height tuned for optical weight balance, not pixel match.
// All marks rendered as white silhouettes via CSS filter for cohesion.
const PARTNERS: Partner[] = [
  // Built With (tech & infrastructure)
  { name: "TiVo", src: "/images/partners/tivo.webp", w: 76, h: 28 },
  { name: "Universal Electronics", src: "/images/partners/uei.png", w: 176, h: 24 },
  { name: "Google Android TV", src: "/images/partners/androidtv.svg", w: 32, h: 32 },
  { name: "Packet Fabric", src: "/images/partners/packetfabric.webp", w: 168, h: 28 },
  { name: "AWS", src: "/images/partners/aws.svg", w: 60, h: 36 },
  // Programmed By (content)
  { name: "DirecTV For Business", src: "/images/partners/directv.png", w: 160, h: 28 },
  { name: "Warner Bros. Discovery", src: "/images/partners/wbd.png", w: 144, h: 28 },
  { name: "Paramount+", src: "/images/partners/paramountplus.svg", w: 132, h: 28 },
  { name: "HBO", src: "/images/partners/hbo.svg", w: 64, h: 28 },
  { name: "Pluto TV", src: "/images/partners/plutotv.svg", w: 96, h: 28 },
  // Distributed Across (platforms — Android TV already represented above; not duplicated in marquee)
  { name: "Apple TV", src: "/images/partners/appletv.svg", w: 88, h: 28 },
  { name: "Amazon Fire TV", src: "/images/partners/firetv.png", w: 116, h: 28 },
  { name: "Samsung Tizen", src: "/images/partners/tizen.png", w: 116, h: 28 },
  { name: "LG webOS", src: "/images/partners/webos.png", w: 124, h: 24 },
];

function PartnerItem({ p }: { p: Partner }) {
  return (
    <Image
      src={p.src}
      alt={p.name}
      width={p.w}
      height={p.h}
      loading="lazy"
      className="w-auto object-contain"
      style={{
        filter: "brightness(0) invert(1)",
        height: `${p.h}px`,
        maxWidth: `${p.w}px`,
      }}
    />
  );
}

export function TrustBar() {
  // Duplicate the list so the marquee loops seamlessly with translateX(-50%)
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <Section
      padding="tight"
      container="wide"
      ariaLabel="Built With · Programming Partners · Platform Support"
    >
      <Reveal className="flex flex-col items-center gap-6">
        <Eyebrow className="text-[var(--color-text-muted)]">
          Built With · Programmed By · Distributed Across
        </Eyebrow>
        <p
          className="text-sm text-[var(--color-accent-300)] text-center max-w-[60ch]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          Exclusive TiVo partner for commercial multi-tenant markets — backed by 15+ years of platform development.
        </p>
        <div
          className="relative w-full overflow-hidden marquee-mask mt-2"
          aria-label="Partner logos and platforms"
          role="region"
        >
          <ul className="marquee-track flex items-center gap-12 sm:gap-16 w-max opacity-70 hover:opacity-100 transition-opacity duration-200">
            {items.map((p, i) => (
              <li
                key={`${p.name}-${i}`}
                className="flex items-center justify-center shrink-0"
                aria-hidden={i >= PARTNERS.length || undefined}
              >
                <PartnerItem p={p} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 4. The problem                                                    */
/* ---------------------------------------------------------------- */

export function Problem() {
  return (
    <Section id="problem" container="wide" ariaLabel="The legacy stack">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-6 flex flex-col gap-6">
          <AccentBar />
          <Eyebrow>The Legacy Stack</Eyebrow>
          <h2 className="display-2 max-w-[14ch]">
            Commercial Television Hasn&apos;t Moved In Fifteen Years.
          </h2>
        </Reveal>

        <Reveal stagger className="lg:col-span-6 flex flex-col gap-8 lg:pt-4">
          <RevealChild>
            <p className="text-[1.0625rem] leading-[1.65] text-[var(--color-text-secondary)]">
              Pro:Idiom-locked TVs. On-prem headends. Truck rolls every time
              something breaks. A guide screen that hasn&apos;t been redesigned
              since the iPhone shipped.
            </p>
          </RevealChild>
          <RevealChild>
            <p className="text-[1.0625rem] leading-[1.65] text-[var(--color-text-secondary)]">
              You know the system is costing you more than it&apos;s worth — but
              ripping it out feels like ripping out the building. So the line
              item keeps growing, and the experience keeps falling further
              behind.
            </p>
          </RevealChild>
          <RevealChild>
            <p className="text-[1.0625rem] leading-[1.65] text-[var(--color-text-secondary)]">
              Modernizing commercial TV doesn&apos;t mean bolting an app onto a
              1995 architecture. It means rebuilding from the cloud out — which
              is exactly what telev8 did. Architecture isn&apos;t a cosmetic.
              It&apos;s the only thing that determines what&apos;s actually
              possible.
            </p>
          </RevealChild>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 5. The guide                                                      */
/* ---------------------------------------------------------------- */

type AuthorityRung =
  | {
      kind: "stat";
      value: number;
      decimals: number;
      suffix: string;
      label: string;
    }
  | { kind: "claim"; headline: string; label: string };

// Ordered as a credential ladder — earliest / deepest at top, current state at bottom.
const AUTHORITY: AuthorityRung[] = [
  {
    kind: "claim",
    headline: "TiVo Exclusive",
    label: "Commercial multi-tenant markets — only platform with the rights",
  },
  {
    kind: "stat",
    value: 15,
    decimals: 0,
    suffix: "+",
    label: "Years of platform development",
  },
  {
    kind: "stat",
    value: 177,
    decimals: 0,
    suffix: "+",
    label: "Patents licensed across the platform",
  },
  {
    kind: "stat",
    value: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Uptime across 450+ edge locations",
  },
];

export function Guide() {
  return (
    <Section container="standard" ariaLabel="Meet The Guide">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Empathy column */}
        <Reveal stagger className="lg:col-span-6 flex flex-col gap-6">
          <RevealChild>
            <AccentBar />
          </RevealChild>
          <RevealChild>
            <Eyebrow>Meet The Guide</Eyebrow>
          </RevealChild>
          <RevealChild>
            <h2 className="h1 max-w-[20ch]">
              We Know What It Costs To Keep A Legacy Commercial-TV System Alive.
            </h2>
          </RevealChild>
          <RevealChild>
            <p className="text-[1.0625rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[52ch]">
              The truck rolls, the rewires, the license fees, the guide screen
              you&apos;d never want to look at yourself. telev8 was built by
              people who lived inside that system — and decided the operator
              deserved better.
            </p>
          </RevealChild>
        </Reveal>

        {/* Authority column — vertical credential ladder */}
        <Reveal className="lg:col-span-6 lg:pt-3">
          <ul
            role="list"
            aria-label="Credentials"
            className="flex flex-col"
          >
            {AUTHORITY.map((item, i) => (
              <li
                key={item.label}
                className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-6 items-baseline py-5 sm:py-6 border-b border-[var(--border-subtle)] last:border-b-0 first:pt-0"
              >
                {item.kind === "stat" ? (
                  <span
                    className="mono text-[var(--color-accent-300)] tabular-nums"
                    style={{
                      fontSize: "clamp(1.875rem, 2vw + 1rem, 2.75rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <CountUp
                      value={item.value}
                      decimals={item.decimals}
                      suffix={item.suffix}
                      delay={i * 0.12}
                    />
                  </span>
                ) : (
                  <span
                    className="text-[var(--color-accent-300)]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      fontSize: "clamp(1.5rem, 1.5vw + 0.875rem, 2rem)",
                      lineHeight: 1,
                    }}
                  >
                    {item.headline}
                  </span>
                )}
                <span className="text-[0.875rem] sm:text-[0.9375rem] text-[var(--color-text-secondary)] leading-snug">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 6. The platform / value props                                     */
/* ---------------------------------------------------------------- */

const VALUE_PROPS = [
  {
    h: "No Commercial TVs. No Rewiring.",
    body:
      "telev8 turns the screen in every guest room into the most valuable surface on your property — without commercial TVs and without a rewire. Auto-configuration to each consumer television is handled remotely, over the copper, coax, or fiber already in your walls.",
    proof: "EXISTING WIRING · CONSUMER TVS · REMOTE CONFIG",
  },
  {
    h: "One Platform. Five Verticals.",
    body:
      "Hospitality. Multi-family. Senior living. Hospitals. Out-of-home. telev8 is the only cloud-based TV platform purpose-built for all of them — same architecture, same app, same operator console. No other vendor in the category covers this range.",
    proof: "HOSPITALITY · MULTI-FAMILY · SENIOR LIVING · HOSPITALS · OUT-OF-HOME",
  },
  {
    h: "Stop Maintaining TV. Start Monetizing It.",
    body:
      "Every TV becomes part of a portfolio-wide owned media network — addressable, governed centrally, and monetizable. Targeted dynamic advertising replaces generic programmatic placements, an industry first for commercial multi-tenant venues. Higher per-view value for content partners. A new monthly revenue line for property brands.",
    proof: "75+ CHANNELS · 100% TARGETED · ANONYMIZED DATA",
  },
  {
    h: "The Best Of TiVo. On The TV You Already Have.",
    body:
      "telev8's LiveTV app — built in exclusive partnership with TiVo for commercial multi-tenant markets — delivers full cable programming, streaming apps, casting, DVR, 72-hour catch-up, search, and on-demand. Across Android TV, Apple TV, Amazon Fire TV, Samsung Tizen, and LG webOS.",
    proof: "TIVO EXCLUSIVE · ANDROID TV · APPLE TV · FIRE TV · TIZEN · WEBOS",
  },
  {
    h: "Closed-Loop. Edge-Cached. Enterprise-Grade.",
    body:
      "End-to-end cloud platform with a central management system. A closed-loop private delivery network with a 50 Gbps backbone reaching 450+ edge locations across the U.S. and globally. 99.9% uptime. Native 4K. Edge caching for bandwidth efficiency.",
    proof: "450+ EDGE LOCATIONS · 50 Gbps · 99.9% UPTIME · NATIVE 4K",
  },
  {
    h: "Exclusive Partnerships. Compounding IP.",
    body:
      "Exclusive TiVo partnership for hospitality, healthcare, senior living, multi-family, and multi-tenant out-of-home. First “hospitality-tier” enterprise license for Android TV, in partnership with Universal Electronics. 15+ years of platform development. 177+ patents licensed.",
    proof: "TIVO EXCLUSIVE · UEI HOSPITALITY-TIER · 177+ PATENTS · 15+ YEARS",
  },
];

export function ValueProps() {
  return (
    <Section
      id="platform"
      padding="large"
      container="wide"
      ariaLabel="The platform"
    >
      <Reveal className="flex flex-col items-start gap-6 mb-16">
        <AccentBar />
        <Eyebrow>Inside The telev8 Platform</Eyebrow>
        <h2 className="display-2 max-w-[18ch]">
          Every Room. Every Brand. Every Existing Wire.
        </h2>
      </Reveal>

      <ul className="flex flex-col gap-6">
        {VALUE_PROPS.map((vp, i) => (
          <li key={vp.h}>
            <Reveal>
              <article className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--color-bg-surface)] p-8 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div
                  className={`lg:col-span-7 flex flex-col gap-5 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="text-xs mono text-[var(--color-text-muted)]">
                    0{i + 1}
                  </div>
                  <h3 className="h2 max-w-[22ch]">{vp.h}</h3>
                  <p className="text-[1.0625rem] leading-[1.65] text-[var(--color-text-secondary)] max-w-[52ch]">
                    {vp.body}
                  </p>
                  <p className="mono text-[0.8125rem] text-[var(--color-accent-300)] uppercase">
                    {vp.proof}
                  </p>
                </div>
                <div
                  className={`lg:col-span-5 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                  aria-hidden="true"
                >
                  <ValueVisual variant={i} />
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ValueVisual({ variant }: { variant: number }) {
  switch (variant) {
    case 0:
      return <NoCommercialTvsViz />;
    case 1:
      return <OnePlatformViz />;
    case 2:
      return <MonetizeTvViz />;
    case 3:
      return <StreamingGrid />;
    case 4:
      return <ClosedLoopViz />;
    default:
      return <ExclusivePartnershipsViz />;
  }
}

/* ---------------------------------------------------------------- */
/* 7. The plan                                                       */
/* ---------------------------------------------------------------- */

const PLAN = [
  {
    n: "01",
    h: "Schedule A Demo.",
    body:
      "We walk you through the platform and audit your property's existing wiring, TVs, and property management system in a single call.",
  },
  {
    n: "02",
    h: "Switch The Stack.",
    body:
      "telev8 provisions over your existing infrastructure — no rewire, no commercial TVs, no on-site headend. Auto-configuration is handled remotely.",
  },
  {
    n: "03",
    h: "Watch The Math Change.",
    body:
      "Lower CapEx and OpEx. A modern viewer experience your guests and residents actually use. A new ad-revenue line on day one.",
  },
];

export function Plan() {
  return (
    <Section id="plan" container="wide" ariaLabel="The plan">
      <Reveal className="flex flex-col items-start gap-6 mb-14">
        <AccentBar />
        <Eyebrow>The Plan</Eyebrow>
        <h2 className="display-2 max-w-[24ch]">
          Three Steps From &ldquo;Stuck On Legacy&rdquo; To &ldquo;Modernized
          And Accountable.&rdquo;
        </h2>
      </Reveal>

      <PlanCards items={PLAN} />

      <Reveal>
        <p className="mt-10 text-sm text-[var(--color-text-muted)] text-center">
          No commercial TVs required · No rewiring required · No personal data collected
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 8. Stakes                                                         */
/* ---------------------------------------------------------------- */

const STAKES = [
  "Another year of Pro:Idiom licensing, on-prem hardware, and truck rolls.",
  "Another year of competitor properties modernizing while yours doesn't.",
  "Another year without a dynamic-advertising revenue line — while the window is still open.",
  "Another year of guests and residents quietly casting around your in-room product instead of using it.",
];

export function Stakes() {
  return (
    <Section id="stakes" container="tight" ariaLabel="Stakes">
      <Reveal className="flex flex-col gap-8">
        <Eyebrow>What Doing Nothing Costs</Eyebrow>
        <h2 className="display-2 max-w-[20ch]">
          The Line Item Gets Bigger Every Quarter You Wait.
        </h2>
        <ul className="flex flex-col gap-4 mt-2">
          {STAKES.map((s) => (
            <li
              key={s}
              className="flex items-start gap-4 text-[1.0625rem] leading-[1.6] text-[var(--color-text-secondary)]"
            >
              <span
                aria-hidden="true"
                className="mt-[0.65rem] block h-1 w-1 rounded-sm flex-shrink-0"
                style={{ background: "var(--color-accent-400)" }}
              />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 9. Success vision                                                 */
/* ---------------------------------------------------------------- */

export function SuccessVision() {
  return (
    <Section padding="large" container="wide" ariaLabel="The after-picture">
      <Reveal className="flex flex-col items-center text-center gap-6 mb-14">
        <AccentBar />
        <Eyebrow>The After-Picture</Eyebrow>
        <h2 className="display-1 max-w-[20ch]">
          Every Room, Modernized.
          <br />
          Every Quarter, Accountable.
        </h2>
        <p className="text-[1.0625rem] leading-[1.65] text-[var(--color-text-secondary)] max-w-[58ch]">
          The property where TV stops being a line item and starts being a P&amp;L line.
        </p>
      </Reveal>

      <Reveal>
        <SuccessBarChart />
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 10. Final CTA                                                     */
/* ---------------------------------------------------------------- */

export function FinalCta() {
  return (
    <Section
      id="contact"
      padding="large"
      container="tight"
      ariaLabel="Schedule a demo"
    >
      <Reveal className="flex flex-col items-center text-center gap-8 relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--accent-glow), transparent 60%)",
          }}
        />
        <h2 className="display-1">
          Cut The Cost.
          <br />
          Not The Cord.
        </h2>
        <p className="text-[1.0625rem] leading-[1.65] text-[var(--color-text-secondary)] max-w-[48ch]">
          Fifteen minutes is enough to know whether telev8 will work for your
          property.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <Button
            as="a"
            href="mailto:hello@telev8.tv?subject=Schedule%20a%20demo"
            size="lg"
          >
            Schedule a demo
          </Button>
          <Button
            as="a"
            href="mailto:hello@telev8.tv?subject=Request%20platform%20overview"
            size="lg"
            variant="ghost"
          >
            Get the platform overview
            <span aria-hidden="true" className="ml-1">→</span>
          </Button>
        </div>
        <p className="text-sm text-[var(--color-text-muted)] max-w-[52ch] mt-3">
          We&apos;ll send you the legacy-vs-telev8 distribution diagram, the
          value-prop scoreboard, and a plain-language platform overview. No
          spam.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 11. Footer                                                        */
/* ---------------------------------------------------------------- */

const FOOTER_NAV = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "#platform" },
      { label: "For Hotels", href: "#" },
      { label: "For Multi-Family", href: "#" },
      { label: "For Senior Living", href: "#" },
      { label: "For Hospitals", href: "#" },
      { label: "For Out-of-Home", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Team", href: "/team" },
      { label: "Contact", href: "#" },
      { label: "Press", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Trademark notice", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "telev8 on LinkedIn",
    href: "https://www.linkedin.com/company/telev8",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "telev8 on Instagram",
    href: "https://www.instagram.com/telev8.tv/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "telev8 on X",
    href: "https://twitter.com/telev8_tv",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.53 3H20.5l-6.49 7.42L21.75 21h-6.18l-4.84-6.32L5.2 21H2.23l6.94-7.94L1.91 3h6.34l4.38 5.79L17.53 3Zm-2.17 16.2h1.65L8.74 4.7H6.97l8.39 14.5Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] mt-12">
      <div className="container-wide py-16 grid grid-cols-2 sm:grid-cols-4 gap-10">
        <div className="col-span-2 sm:col-span-1 flex flex-col gap-5">
          <Link
            href="/"
            aria-label="telev8 home"
            className="inline-block"
          >
            <Image
              src="/images/logo.avif"
              alt="telev8"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-[var(--color-text-muted)]">
            Transforming commercial television.
          </p>
          <ul className="flex items-center gap-3 mt-1">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--border-strong)] transition-colors duration-200"
                >
                  <span className="block w-4 h-4">{s.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {FOOTER_NAV.map((col) => (
          <nav
            key={col.title}
            aria-label={col.title}
            className="flex flex-col gap-3"
          >
            <h4 className="eyebrow text-[var(--color-text-muted)]">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-[var(--border-subtle)]">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2021 telev8, LLC. All Rights Reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Cut the cost. Not the cord.
          </p>
        </div>
        <div className="container-wide pb-8">
          <p className="text-[0.6875rem] leading-relaxed text-[var(--color-text-disabled)] max-w-[80ch]">
            telev8™ is a trademark of telev8, LLC. TiVo® is a registered
            trademark of TiVo Corporation. Android TV™ is a trademark of
            Google LLC. Apple TV®, Amazon Fire TV™, Samsung Tizen®, and LG
            webOS® are trademarks of their respective owners. All other
            trademarks are the property of their respective owners and used
            here for identification purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
