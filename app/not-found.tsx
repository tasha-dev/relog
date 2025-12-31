// Codes by mahdi tasha
// Importing part
import Footer from "@/component/footer";
import Header from "@/component/header";
import { Button } from "@/component/ui/button";
import Link from "next/link";
import { JSX } from "react";

// Creating and exporting 404 page as default
export default function NotFoundPage(): JSX.Element {
  // Returning JSX
  return (
    <div className="space-y-4">
      <Header />
      <section className="w-dvw">
        <main className="mx-auto max-w-4xl p-4 flex items-center justify-center min-h-dvh">
          <div>
            <h1 className="mt-0 mb-3 text-center">404 - Page Not Found</h1>
            <p className="text-center mb-5">
              Sorry, the page you’re looking for doesn’t exist or has bee moved.
              Let’s get you back on track.
            </p>
            <div className="flex items-center justify-center">
              <Button size="lg" asChild className="no-underline">
                <Link href="/">Go back to Home</Link>
              </Button>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}
