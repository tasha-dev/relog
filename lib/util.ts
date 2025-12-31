// Codes by mahdi tasha
// Importing part
import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

// Defining utility function and helpers
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function copyVal(value: number | string): void {
  window.navigator.clipboard
    .writeText(value.toString())
    .then(() =>
      toast.success("The value is successfully copied to your clipboard."),
    )
    .catch(() =>
      toast.error(
        "There was an issue while trying to copy value to you clipboard.",
      ),
    );
}

export function downloadMarkdown(content: string, filename: string): void {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
