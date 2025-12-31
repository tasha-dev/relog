// Codes by mahdi tasha
// Importing part
import Step from "@/component/step";
import { JSX } from "react";

// Defining steps to render
const steps: {
  title: string;
  description: string;
}[] = [
  {
    description:
      "Paste any public GitHub repo URL. (example: https://github.com/vercel/next.js)",
    title: "Enter Repository",
  },
  {
    description:
      "Add your desired release title. Relog automatically reads recent commits and creates structured, categorized release notes",
    title: "Customize & Generate",
  },
  {
    description:
      "Fine-tune in a beautiful WYSIWYG editor. Download as .md file or copy to clipboard instantly",
    title: "Edit, Preview & Export",
  },
];

// Creating and exporting HowItWorks section component as default
export default function HowItWorks(): JSX.Element {
  // Returning JSX
  return (
    <section className="w-dvw">
      <main className="max-w-3xl mx-auto p-4">
        <h2 className="mt-0 text-center">How It Works (3 simple steps)</h2>
        <div className="grid gap-4 max-w-xl mx-auto">
          {steps.map((item, index) => (
            <Step
              data={item}
              index={index}
              key={index}
              hasDownArrow={index + 1 !== steps.length}
            />
          ))}
        </div>
      </main>
    </section>
  );
}
