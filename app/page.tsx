// Codes by mahdi tasha
// Importing part
import Header from "@/component/header";
import CTA from "@/component/section/home/cta";
import Hero from "@/component/section/home/hero";
import HowItWorks from "@/component/section/home/howItWorks";
import KeyBenefits from "@/component/section/home/keyBenefits";
import PerfectFor from "@/component/section/home/perfectFor";
import { JSX } from "react";

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Returning JSX
  return (
    <>
      <Header />
      <Hero />
      <KeyBenefits />
      <PerfectFor />
      <HowItWorks />
      <CTA />
    </>
  );
}
