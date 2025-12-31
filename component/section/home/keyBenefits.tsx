// Codes by mahdi tasha
// Importing part
import { JSX } from "react";

// Defining keyBenefits to render
const keyBenefits: string[] = [
  "Zero authentication — complete privacy, no data stored",
  "AI understands Conventional Commits, scopes, breaking changes & more",
  "Smart categorization: Features · Fixes · Performance · Documentation · Chores",
  "Real-time editing with live Markdown preview",
  "Clean, polished output optimized for GitHub Releases, changelogs & announcements",
  "Lightning fast — results in seconds, even for larger repositories",
  "100% free for everyone, forever",
];

// Creating and exporting KeyBenefits section component as default
export default function KeyBenefits(): JSX.Element {
  // Returning JSX
  return (
    <section className="w-dvw">
      <main className="max-w-4xl mx-auto p-4">
        <h2 className="mt-0 text-left">Key Benefits</h2>
        <ul>
          {keyBenefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </main>
    </section>
  );
}
