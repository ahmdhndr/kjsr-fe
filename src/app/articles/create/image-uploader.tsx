"use client";

import Image from "next/image";
import { useState } from "react";

import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { UploadDropzone } from "@/lib/uploadthing";

export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [altImage, setAltImage] = useState<string>("");

  return (
    <div className="space-y-2">
      <div>
        <Label>Image Cover</Label>
        <UploadDropzone
          appearance={{
            container: {
              border: "1px dashed hsl(var(--primary))",
            },
          }}
          className="ut-button:bg-primary ut-button:text-background hover:ut-button:hover:bg-primary/90 hover:ut-label:text-primary"
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setAltImage(res[0].name);
            setImageUrl(res[0].url);
            toast.success("Upload completed.");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
            toast.error(error.message);
          }}
        />
      </div>

      {imageUrl.length ? (
        <div className="overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={altImage}
            width={1280}
            height={720}
            className="aspect-auto object-cover object-center"
          />
        </div>
      ) : null}
    </div>
  );
}
