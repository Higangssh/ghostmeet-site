import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Compare } from "@/components/Compare";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { LiveDemo } from "@/components/LiveDemo";
import { QuickStart } from "@/components/QuickStart";
import { UseCases } from "@/components/UseCases";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Compare />
        <FeatureGrid />
        <HowItWorks />
        <LiveDemo />
        <QuickStart />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
