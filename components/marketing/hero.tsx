import { Button } from "@/components/primitives/button";
import { Eyebrow } from "@/components/primitives/layout";
import { Reveal, RevealChild } from "@/components/motion/reveal";
import { DistributionDiagram } from "@/components/motion/distribution-diagram";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 sm:pt-36 pb-[clamp(4rem,10vw,8rem)]"
      aria-label="telev8 hero"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] -z-10 h-[700px] w-[700px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow), transparent 70%)",
        }}
      />

      <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-16 items-center">
        <Reveal stagger className="lg:col-span-7 flex flex-col gap-7">
          <RevealChild>
            <Eyebrow>
              Portfolio-Wide TV — Hospitality, Multi-Family, Senior Living, Hospitals, Out-of-Home
            </Eyebrow>
          </RevealChild>

          <RevealChild>
            <h1 className="display-1 text-[var(--color-text-primary)]">
              Consumer TVs.
              <br />
              Commercial Outcomes.
            </h1>
          </RevealChild>

          <RevealChild>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.55] text-[var(--color-text-secondary)] max-w-[40rem]">
              telev8 reframes in-room television from a recurring expense into a
              portfolio-wide revenue engine. One cloud platform — purpose-built
              for hospitality, multi-family, senior living, hospitals, and
              out-of-home — running on the consumer TVs and existing wiring
              already in every room.
            </p>
          </RevealChild>

          <RevealChild className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
            <Button as="a" href="#contact" size="lg">
              Schedule a demo
            </Button>
            <Button as="a" href="#contact" size="lg" variant="ghost">
              Download the platform overview
              <span aria-hidden="true" className="ml-1">→</span>
            </Button>
          </RevealChild>

          <RevealChild>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              No commercial TVs · No rewiring · No personal data collected
            </p>
          </RevealChild>
        </Reveal>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-4">
          <DistributionDiagram />
          <p
            className="mono text-[0.6875rem] sm:text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-accent-300)] text-center lg:text-right max-w-[28ch]"
          >
            From Five Layers To One Platform.
            <br aria-hidden="true" />
            Programmer → telev8 → Guest.
          </p>
        </div>
      </div>
    </section>
  );
}
