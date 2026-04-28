import { Nav } from "@/components/marketing/nav";
import { Hero } from "@/components/marketing/hero";
import { HeroBackdrop } from "@/components/motion/hero-backdrop";
import {
  TrustBar,
  Problem,
  Guide,
  ValueProps,
  Plan,
  Stakes,
  SuccessVision,
  FinalCta,
  Footer,
} from "@/components/marketing/sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main" className="relative">
        <div className="relative isolate">
          <HeroBackdrop />
          <Hero />
          <TrustBar />
        </div>
        <Problem />
        <Guide />
        <ValueProps />
        <Plan />
        <Stakes />
        <SuccessVision />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
