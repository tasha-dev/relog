// Codes by mahdi tasha
// Importing part
import LetterGlitchBg from "@/component/letterGlitchBg";
import { JSX } from "react";

// Creating and exporting Hero section component as default
export default function Hero(): JSX.Element {
  // Returning JSX
  return (
    <section className="relative min-h-dvh w-dvw">
      <LetterGlitchBg className="opacity-75" />
      <div className="w-dvw min-h-dvh flex items-center justify-center relative z-10">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="lg:text-center mb-2">
            Instant, AI-powered release notes
          </h1>
          <h2 className="lg:mb-6 mb-4 lg:text-center mt-0">
            No login. No setup. No hassle.
          </h2>
          <p className="mb-0 lg:text-center">
            Simply paste your public GitHub repository URL, add an title, and
            let Relog instantly analyze commits and generate clean, professional
            changelog content using modern AI.
          </p>
        </div>
      </div>
    </section>
  );
}
