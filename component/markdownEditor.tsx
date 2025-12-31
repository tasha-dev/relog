// Codes by mahdi tasha
// Forcing next.js to render used components of this hook render by client side
"use client";

// Importing part
import { JSX } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Copy, Download } from "lucide-react";
import { MarkdownEditorProps } from "@/type/component";
import { cn, copyVal, downloadMarkdown } from "@/lib/util";
import ShinyTextAnimation from "./shinyTextAnimation";

// Creating and exporting MarkdownEditor component as default
export default function MarkdownEditor({
  status = "loading-repo",
  data,
  disabled = false,
}: MarkdownEditorProps): JSX.Element {
  // Defining inner component
  function InnerMarkdown() {
    // Conditional rendering
    if (disabled) {
      if (data) {
        return <p className="text-center my-0">Disabled</p>;
      } else {
        return (
          <p className="text-center my-0">There is no content to be shown</p>
        );
      }
    } else {
      if (status === "loading-repo") {
        return (
          <ShinyTextAnimation
            text="Analyzing repository…"
            className="text-lg"
          />
        );
      } else if (status === "loading-ai") {
        return (
          <ShinyTextAnimation
            text="Fetching commits and generating notes with AI"
            className="text-lg"
          />
        );
      } else if (status === "error") {
        return "ERROR";
      } else {
        return data?.content;
      }
    }
  }

  // Returning JSX
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-lg font-medium truncate block text-left flex-1">
          Review, Edit and export
        </span>
        <div className="flex items-center justify-between gap-3 shrink-0">
          <Tooltip>
            <TooltipTrigger asChild disabled={disabled || !data}>
              <Button
                size="icon-lg"
                onClick={() => data && copyVal(data.content)}
              >
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy the result</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild disabled={disabled || !data}>
              <Button
                size="icon-lg"
                onClick={() =>
                  data && downloadMarkdown(data.content, `${data.title}.md`)
                }
              >
                <Download />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {data?.title
                ? `Export your content as ${data.title}.md`
                : `Export you content in md format`}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div
        className={cn(
          "rounded-lg p-3 border border-foreground/10 bg-foreground/5 min-h-[200px] transition-all duration-500",
          disabled && "flex items-center justify-center opacity-50",
          disabled || (status.startsWith("loading") && "pointer-events-none"),
        )}
      >
        <InnerMarkdown />
      </div>
    </div>
  );
}
