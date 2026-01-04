// Codes by mahdi tasha
// Forcing next.js to render used components of this hook render by client side
"use client";

// Importing part
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Copy, Download } from "lucide-react";
import { MarkdownEditorProps } from "@/type/component";
import { copyVal, downloadMarkdown } from "@/lib/util";
import MarkdownRenderer from "./markdownRenderer";

// Creating and exporting MarkdownEditor component as default
export default function MarkdownEditor({ generation }: MarkdownEditorProps) {
  // Defining hook
  const [content, setContent] = useState<string | undefined>(undefined);

  // Defining variables
  const disabled =
    generation.status !== "success" ||
    generation.data === undefined ||
    !content;

  // Using useEffect to set initial value of content
  useEffect(() => {
    if (generation.status === "success") {
      setContent(generation.data.content);
    }
  }, [generation.status]);

  // Returning JSX
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-lg font-medium truncate block text-left flex-1">
          Review, Edit and export
        </span>
        <div className="flex items-center justify-between gap-3 shrink-0">
          <Tooltip>
            <TooltipTrigger asChild disabled={disabled}>
              <Button
                size="icon-lg"
                onClick={() => !disabled && copyVal(content)}
              >
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy the result</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild disabled={disabled}>
              <Button
                size="icon-lg"
                disabled={disabled}
                onClick={() =>
                  !disabled &&
                  downloadMarkdown(content, `${generation.data.title}.md`)
                }
              >
                <Download />
              </Button>
            </TooltipTrigger>
            {!disabled && (
              <TooltipContent>
                {`Export your content as ${generation.data.title}.md`}
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      </div>
      <MarkdownRenderer generation={generation} onChange={setContent} />
    </div>
  );
}
