"use client";

import { toast } from "sonner";
import { ClientUploadedFileData } from "uploadthing/types";

import { UploadDropzone } from "@/lib/uploadthing";

type MaybePromise<TType> = TType | Promise<TType>;

export default function ImageUploader({
  onUploadComplete,
}: {
  onUploadComplete: (
    res: ClientUploadedFileData<{
      uploadedBy: string;
    }>[]
  ) => MaybePromise<void>;
}) {
  return (
    <div className="space-y-2">
      <UploadDropzone
        appearance={{
          container: {
            border: "1px dashed hsl(var(--primary))",
          },
        }}
        className="ut-button:bg-primary ut-button:text-background hover:ut-button:hover:bg-primary/90 hover:ut-label:text-primary"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          toast.success("Upload completed.");
          onUploadComplete(res);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          // alert(`ERROR! ${error.message}`);
          toast.error(error.message);
        }}
      />
    </div>
  );
}
