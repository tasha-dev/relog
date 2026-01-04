// Codes by mahdi tasha
// Forcing next.js to render used components of this hook render by client side
"use client";

// Importing part
import Footer from "@/component/footer";
import Header from "@/component/header";
import { Button } from "@/component/ui/button";

// Creating and exporting 404 page as default
export default function NotFoundPage() {
  // Returning JSX
  return (
    <div className="space-y-4">
      <Header />
      <section className="w-dvw">
        <main className="mx-auto max-w-4xl p-4 flex items-center justify-center min-h-dvh">
          <div>
            <h1 className="mt-0 mb-3 text-center">Something went wrong</h1>
            <p className="text-center mb-5">
              An unexpected error occurred while processing your request.
              <br /> Please try again, or come back later.
            </p>
            <div className="flex items-center justify-center">
              <Button size="lg" onClick={() => window.location.reload()}>
                Reload the page
              </Button>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}
