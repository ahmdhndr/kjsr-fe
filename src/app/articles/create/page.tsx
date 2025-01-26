"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// import RichTextEditor from "@/components/editor";
import RichTextEditor from "@/components/rich-text-editor";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

function extractTextFromHTML(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.textContent?.trim() || "";
}

const formSchema = z.object({
  title: z.string(),
  author: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  category: z.string(),
  content: z.string().refine(
    (value: string) => {
      return extractTextFromHTML(value).length >= 5;
    },
    {
      message: "The text must be at least 5 characters long after trimming",
    }
  ),
  created_at: z.date(),
  updated_at: z.date(),
});

export default function CreateArticlePage() {
  const form = useForm({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (data: { content: string }) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto max-w-3xl py-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  {/* <Input placeholder="tes" {...field} /> */}
                  <RichTextEditor content={field.value} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
