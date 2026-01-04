// Codes by mahdi tasha
// Forcing next.js to render used components of this hook render by client side
"use client";

// Importing part
import { useEffect } from "react";
import ShinyTextAnimation from "./shinyTextAnimation";
import { MarkdownRenderProps } from "@/type/component";
import { useEditor, EditorContent } from "@tiptap/react";
import { Markdown } from "@tiptap/markdown";
import StarterKit from "@tiptap/starter-kit";

// Creating and exporting MarkdownRenderer component as default
export default function MarkdownRenderer({
  generation,
  onChange,
}: MarkdownRenderProps) {
  // Defining hooks
  const editor = useEditor({
    extensions: [StarterKit, Markdown.configure({})],
    injectCSS: false,
    immediatelyRender: true,
    onUpdate: ({ editor }) => {
      if (editor) {
        onChange?.(editor.getMarkdown());
      }
    },
  });

  // Using useEffect to remove content of editor when status changes
  useEffect(() => {
    if (editor) {
      if (generation.status === "success" && generation.data.content) {
        editor.commands.setContent(generation.data.content, {
          emitUpdate: false,
          contentType: "markdown",
        });
      } else {
        editor.commands.clearContent();
      }
    }
  }, [editor, generation.status, generation]);

  // Conditional rendering
  switch (generation.status) {
    case "idle":
      return (
        <div
          className={
            "rounded-lg p-3 border border-foreground/10 bg-foreground/5 min-h-[200px] transition-all duration-500 flex items-center justify-center opacity-50"
          }
        >
          <p className="text-center mt-0">There is no content to be shown</p>
        </div>
      );
    case "loading-repo":
      return (
        <div
          className={
            "rounded-lg p-3 border border-foreground/10 bg-foreground/5 min-h-[200px] transition-all duration-500"
          }
        >
          <ShinyTextAnimation
            text="Analyzing repository…"
            className="text-lg"
          />
        </div>
      );
    case "loading-ai":
      return (
        <div
          className={
            "rounded-lg p-3 border border-foreground/10 bg-foreground/5 min-h-[200px] transition-all duration-500"
          }
        >
          <ShinyTextAnimation
            text="Fetching commits and generating notes with AI"
            className="text-lg"
          />
        </div>
      );
    case "error":
      return (
        <div
          className={
            "rounded-lg p-3 border border-destructive/10 bg-destructive/5 min-h-[200px] transition-all duration-500 text-destructive"
          }
        >
          <p className="!mt-0">{generation.error}</p>
        </div>
      );
    case "success":
      if (!editor) {
        <div className="outline-0 rounded-lg p-3 border border-foreground/10 bg-foreground/5 h-[200px] transition-all duration-500 flex items-center justify-center">
          <p className="!mt-0">Loading Editor</p>
        </div>;
      }
      return (
        <EditorContent
          editor={editor}
          className="outline-0 rounded-lg p-3 border border-foreground/10 bg-foreground/5 min-h-[200px] transition-all duration-500 max-h-[500px] overflow-auto"
        />
      );
    default: {
      const _exhaustive: never = generation;
      return null;
    }
  }
}
