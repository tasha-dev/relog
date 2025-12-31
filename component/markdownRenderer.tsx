// Codes by mahdi tasha
// Forcing next.js to render used components of this hook render by client side
"use client";

// Importing part
import { ReactNode } from "react";
import ShinyTextAnimation from "./shinyTextAnimation";
import { MarkdownRenderProps } from "@/type/component";

// Creating and exporting MarkdownRenderer component as default
export default function MarkdownRenderer({
  generation,
}: MarkdownRenderProps): ReactNode {
  // Conditional rendering
  switch (generation.status) {
    case "idle":
      return (
        <p className="text-center mt-0">There is no content to be shown</p>
      );
    case "loading-repo":
      return (
        <ShinyTextAnimation text="Analyzing repository…" className="text-lg" />
      );
    case "loading-ai":
      return (
        <ShinyTextAnimation
          text="Fetching commits and generating notes with AI"
          className="text-lg"
        />
      );
    case "error":
      return <p className="!mt-0">ERROR</p>;
    case "success":
      return <p className="!mt-0">{generation.data.content}</p>;
    default: {
      const _exhaustive: never = generation;
      return null;
    }
  }
}
