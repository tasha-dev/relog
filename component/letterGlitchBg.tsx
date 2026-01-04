// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn } from "@/lib/util";
import { LetterGlitchBgProps } from "@/type/component";
import LetterGlitch from "./ui/letterGlitch";

// Creating and exporting LetterGlitchBg component as default
export default function LetterGlitchBg({ className }: LetterGlitchBgProps) {
  // Returning JSX
  return (
    <div
      className={cn(
        "w-full left-0 top-0 h-full pointer-events-none absolute z-0",
        className,
      )}
    >
      <LetterGlitch
        glitchColors={["#b65cff", "#61dca3", "#7e47ff"]}
        glitchSpeed={10}
        centerVignette
        outerVignette={false}
        smooth
      />
      <div className="w-full h-[200px] absolute bottom-0 bg-linear-to-b from-transparent to-background" />
    </div>
  );
}
