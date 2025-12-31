// Codes by mahdi tasha
// Forcing next.js to render used components of this hook render by client side
"use client";

// Importing part
import { JSX } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { generateRelaseNoteFormSchema as formSchema } from "@/lib/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn, sleep } from "@/lib/util";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/component/ui/form";
import { Input } from "@/component/ui/input";
import { Button } from "@/component/ui/button";
import { toast } from "sonner";
import z from "zod";
import { GenerateFormProps } from "@/type/component";
import { Loader2, Plus } from "lucide-react";

// Defining type of form schema
type formType = z.infer<typeof formSchema>;

// Creating and exporting GenerateForm component as default
export default function GenerateForm({
  className,
  onStatusChange,
}: GenerateFormProps): JSX.Element {
  // Defining hooks
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  // Defining submit handler
  const onSubmit: SubmitHandler<formType> = async (data) => {
    onStatusChange?.({
      status: "loading-repo",
    });

    await sleep(2000);

    onStatusChange?.({
      status: "loading-ai",
    });

    await sleep(3000);

    onStatusChange?.({
      status: "success",
      data: {
        content: "### Hello world",
        title: data.title,
      },
    });

    toast.success(
      "Your Release Notes are Ready. Review, edit, and export below",
    );

    // toast.error("The provided URL does not appear to be a valid public GitHub repository.")
    // toast.error("Repository not found or private. Please ensure the URL is correct and the repository is public.")
    // toast.error("We’re temporarily unable to fetch data from GitHub. Please try again in a moment.")
    // toast.error("An unexpected error occurred during note generation. Please try again or use different instructions.")
  };

  // Returning JSX
  return (
    <Form {...form}>
      <form
        action="#"
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4", className)}
      >
        <FormField
          control={form.control}
          name="repoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repository URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://github.com/username/repository"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Must be a public repository. Private repositories are not
                supported.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Release Title / Version</FormLabel>
              <FormControl>
                <Input
                  placeholder="Release v2.1.0 – December 2025"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} size={"lg"}>
          {form.formState.isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Plus />
          )}
          Generate Release Notes
        </Button>
      </form>
    </Form>
  );
}
