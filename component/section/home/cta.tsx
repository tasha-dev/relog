// Codes by mahdi tasha
// Importing part
import { Button } from "@/component/ui/button";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

// Creating and exporting CTA section component as default
export default function CTA(): JSX.Element {
  // Returning JSX
  return (
    <section className="w-dvw">
      <main className="max-w-4xl mx-auto p-4 min-h-dvh flex items-center justify-center">
        <div>
          <h3 className="mt-0 text-center">Ready to try?</h3>
          <p className="text-center">
            Paste your repository URL and create beautiful <br /> release notes
            in under 30 seconds.
          </p>
          <div className="flex items-center justify-center">
            <Button asChild size={"lg"} className="no-underline">
              <Link href="/app">
                <Terminal />
                Start Generating Release Notes
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
}
