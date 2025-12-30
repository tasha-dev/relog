// Codes by mahdi tasha
// Importing part
import Header from "@/component/header";
import Hero from "@/component/section/home/hero";
import { JSX } from "react";

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Returning JSX
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
