// Codes by mahdi tasha
// Importing part
import { z } from "zod";

// Creating and exporting form schemas
export const generateRelaseNoteFormSchema = z.object({
  title: z
    .string({
      message: "Please fill this field",
    })
    .min(2)
    .max(256),
  repoUrl: z
    .string({
      message: "Please fill this field",
    })
    .url()
    .regex(/^https:\/\/(?:www\.)?github\.com\/[^/]+\/[^/]+\/?$/i, {
      message:
        "Please provide a valid GitHub repository URL (format: https://github.com/owner/repository)",
    }),
});
