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
import { Input } from "@/components/ui/input";

import ImageUploader from "./image-uploader";

function extractTextFromHTML(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.textContent?.trim() || "";
}

const formSchema = z.object({
  title: z.string(),
  // author: z.string(),
  // image_url: z.string(),
  // slug: z.string(),
  // excerpt: z.string(),
  // category: z.string(),
  content: z.string().refine(
    (value: string) => {
      return extractTextFromHTML(value).length >= 5;
    },
    {
      message: "The text must be at least 5 characters long after trimming",
    }
  ),
  // created_at: z.date(),
  // updated_at: z.date(),
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

  const onSubmit = (data: { title: string; content: string }) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto max-w-3xl space-y-2 py-5">
      <ImageUploader />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="focus-within:outline-none">
                <FormLabel>Title</FormLabel>
                <FormControl className="border border-primary focus-within:outline-none focus-within:ring-1 focus-within:ring-ring">
                  <Input className="" placeholder="Title..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <RichTextEditor content={field.value} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
