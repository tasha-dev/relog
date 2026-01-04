// Codes by mahdi tasha
// Importing part
import Footer from "@/component/footer";
import Header from "@/component/header";
import CTA from "@/component/section/home/cta";
import Hero from "@/component/section/home/hero";
import HowItWorks from "@/component/section/home/howItWorks";
import KeyBenefits from "@/component/section/home/keyBenefits";
import PerfectFor from "@/component/section/home/perfectFor";

// Creating and exporting Home page as default
export default function HomePage() {
  // Returning JSX
  return (
    <div className="space-y-4">
      <Header />
      <Hero />
      <KeyBenefits />
      <PerfectFor />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
