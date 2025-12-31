// Codes by mahdi tasha
// Forcing next.js to render used components of this hook render by client side
"use client";

// Importing part
import { JSX, useState } from "react";
import GenerateForm from "@/component/generateForm";
import MarkdownEditor from "@/component/markdownEditor";
import { DataType, FetchStatusType } from "@/type/general";

// Creating and exporting AppPage page as default
export default function AppPage(): JSX.Element {
  // Defining hooks
  const [status, setStatus] = useState<FetchStatusType | undefined>(undefined);
  const [data, setData] = useState<DataType | undefined>(undefined);

  // Returning JSX
  return (
    <section className="w-dvw">
      <main className="max-w-3xl p-4 mx-auto">
        <h1>Generation of realease note</h1>
        <GenerateForm
          className="mb-10"
          onStatusChange={(status, data) => {
            setStatus(status);
            setData(data);
          }}
        />
        <MarkdownEditor
          disabled={status === undefined}
          data={data}
          status={status || "loading-ai"}
        />
      </main>
    </section>
  );
}
