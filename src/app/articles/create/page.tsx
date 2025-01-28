"use client";

import Image from "next/image";
import { useState } from "react";

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

// function extractTextFromHTML(html: string): string {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, "text/html");
//   return doc.body.textContent?.trim() || "";
// }

const formSchema = z.object({
  title: z.string().min(3, "Title is required!"),
  // author: z.string(),
  image_url: z.string().url("Please upload a valid image").optional(),
  // slug: z.string(),
  // excerpt: z.string(),
  // category: z.string(),
  content: z.string().min(150, "Content should be at least have 150 char(s)"),
  // created_at: z.date(),
  // updated_at: z.date(),
});

export default function CreateArticlePage() {
  const [altImage, setAltImage] = useState<string>("");
  const form = useForm({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image_url: "",
      content: "",
    },
  });

  const onSubmit = (data: {
    title: string;
    image_url: string;
    content: string;
  }) => {
    console.log(data);
  };

  const handleImageUpload = (imageUrl: string, alt: string) => {
    form.setValue("image_url", imageUrl);
    setAltImage(alt);
  };

  return (
    <div className="container mx-auto max-w-3xl space-y-2 py-5">
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
            name="image_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Cover</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    <ImageUploader
                      onUploadComplete={(res) =>
                        handleImageUpload(res[0].url, res[0].name)
                      }
                    />
                    {field.value ? (
                      <div className="space-y-2">
                        <div className="overflow-hidden rounded-md">
                          <Image
                            src={field.value}
                            alt={altImage}
                            width={1280}
                            height={720}
                            className="aspect-auto object-cover object-center"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Uploaded {altImage}
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        No image uploaded yet
                      </p>
                    )}
                  </div>
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
