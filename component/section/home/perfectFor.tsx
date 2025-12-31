// Codes by mahdi tasha
// Importing part
import { JSX } from "react";

// Defining data to render
const data: string[] = [
  "Open source maintainers",
  "Solo developers & small teams",
  "Product launches & version announcements",
  "Anyone who wants professional-looking release notes without spending hours writing them",
];

// Creating and exporting PerfectFor section component as default
export default function PerfectFor(): JSX.Element {
  // Returning JSX
  return (
    <section className="w-dvw">
      <main className="max-w-4xl mx-auto p-4">
        <h2 className="mt-0 text-left">Perfect For</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </main>
    </section>
  );
}
