// Codes by mahdi tash
// Importing part
import { JSX } from "react";

// Creating and exporting Footer component as default
export default function Footer(): JSX.Element {
  // Returning JSX
  return (
    <footer className="bg-foreground/5 border-t border-foreground/10 w-dvw">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 p-4">
        <div>
          <h3 className="mt-0">
            Relog — Because your commits deserve to shine.
          </h3>
          <p className="mb-0">
            Free SaaS · Powered by AI · Built for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
