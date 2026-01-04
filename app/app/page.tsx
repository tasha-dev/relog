// Codes by mahdi tasha
// Forcing next.js to render used components of this hook render by client side
"use client";

// Importing part
import { JSX, useState } from "react";
import GenerateForm from "@/component/generateForm";
import MarkdownEditor from "@/component/markdownEditor";
import { GenerationType } from "@/type/general";
import Header from "@/component/header";

// Creating and exporting AppPage page as default
export default function AppPage(): JSX.Element {
  // Defining hooks
  const [generation, setGeneration] = useState<GenerationType>({
    status: "idle",
  });

  // Returning JSX
  return (
    <>
      <Header />
      <section className="w-dvw mt-20">
        <main className="max-w-3xl p-4 mx-auto">
          <h1>Generation of release note</h1>
          <GenerateForm className="mb-10" onStatusChange={setGeneration} />
          <MarkdownEditor generation={generation} />
        </main>
      </section>
    </>
  );
}
