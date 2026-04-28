import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/sections";
import {
  AccentBar,
  Eyebrow,
  Section,
} from "@/components/primitives/layout";
import { Reveal, RevealChild } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people behind telev8 — the team building cloud-based TV for commercial venues.",
  alternates: { canonical: "/team" },
};

const PLACEHOLDER_BIO =
  "Placeholder bio. Two or three lines describing the team member's background, expertise, and what they bring to telev8 — to be filled in with the real copy.";

const TEAM = [
  {
    name: "Firstname Lastname",
    title: "Chief Executive Officer",
    bio: PLACEHOLDER_BIO,
    photo: "/images/team/chuck.jpg",
  },
  {
    name: "Firstname Lastname",
    title: "Chief Technology Officer",
    bio: PLACEHOLDER_BIO,
    photo: "/images/team/tj.jpg",
  },
  {
    name: "Firstname Lastname",
    title: "Chief Revenue Officer",
    bio: PLACEHOLDER_BIO,
    photo: "/images/team/arash.jpg",
  },
  {
    name: "Firstname Lastname",
    title: "Chief Commercial Officer",
    bio: PLACEHOLDER_BIO,
    photo: "/images/team/chris.jpg",
  },
  {
    name: "Firstname Lastname",
    title: "Head of Engineering",
    bio: PLACEHOLDER_BIO,
    photo: "/images/team/lynne.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main id="main" className="relative">
        <Section
          padding="large"
          container="wide"
          ariaLabel="Meet The Team"
          className="pt-32 sm:pt-36"
        >
          <Reveal stagger className="flex flex-col gap-6 max-w-[48rem]">
            <RevealChild>
              <AccentBar />
            </RevealChild>
            <RevealChild>
              <Eyebrow>The People Behind telev8</Eyebrow>
            </RevealChild>
            <RevealChild>
              <h1 className="display-1">Meet The Team.</h1>
            </RevealChild>
            <RevealChild>
              <p className="text-[1.125rem] leading-[1.6] text-[var(--color-text-secondary)] max-w-[44rem]">
                The operators, engineers, and program partners building cloud
                television for commercial venues.
              </p>
            </RevealChild>
          </Reveal>
        </Section>

        <Section padding="default" container="wide" ariaLabel="Team">
          <Reveal>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none">
              {TEAM.map((member, i) => (
                <li
                  key={i}
                  className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--color-bg-surface)] p-6 lg:p-7 flex flex-col gap-5 group transition-colors duration-300 hover:border-[var(--border-strong)]"
                >
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[var(--border-subtle)]">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(8,16,31,0) 60%, rgba(8,16,31,0.45) 100%)",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h2 className="h3">{member.name}</h2>
                    <p className="text-sm uppercase tracking-wider text-[var(--color-accent-300)]">
                      {member.title}
                    </p>
                  </div>
                  <p className="text-[0.9375rem] leading-[1.6] text-[var(--color-text-secondary)]">
                    {member.bio}
                  </p>
                  <div className="mt-auto pt-2">
                    <a
                      href="#"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                    >
                      <svg
                        width="16"
                        height="16"
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
                      LinkedIn
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        <Section
          padding="default"
          container="tight"
          ariaLabel="Hiring placeholder"
        >
          <Reveal className="flex flex-col items-center text-center gap-4">
            <Eyebrow>Hiring</Eyebrow>
            <h2 className="h2 max-w-[24ch]">
              We&apos;re Building The Team Behind The Next Wave Of Commercial TV.
            </h2>
            <p className="text-[1rem] text-[var(--color-text-muted)] max-w-[48ch]">
              Open roles will be listed here. In the meantime, get in touch.
            </p>
            <Link
              href="mailto:hello@telev8.tv?subject=Joining%20telev8"
              className="text-[var(--color-text-primary)] underline-offset-4 hover:underline"
            >
              hello@telev8.tv
            </Link>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
