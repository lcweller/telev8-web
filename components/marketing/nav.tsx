"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/primitives/button";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "#platform", label: "Platform" },
  { href: "#plan", label: "For Property Owners" },
  { href: "#stakes", label: "The Plan" },
  { href: "/team", label: "Team" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-out",
        scrolled
          ? "backdrop-blur-md bg-[rgba(8,16,31,0.72)] border-b border-[var(--border-subtle)]"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "container-wide flex items-center justify-between transition-[height] duration-300 ease-out",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <Link
          href="/"
          aria-label="telev8 home"
          className="inline-flex items-center group"
        >
          <Image
            src="/images/logo.avif"
            alt="telev8"
            width={120}
            height={28}
            priority
            className="h-7 w-auto transition-opacity duration-200 group-hover:opacity-80"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button as="a" href="#contact" size="sm">
            Schedule a demo
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 14h14" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--color-bg-canvas)]"
        >
          <nav className="container-wide flex flex-col gap-4 py-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button as="a" href="#contact" size="md" className="mt-2 w-full">
              Schedule a demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
