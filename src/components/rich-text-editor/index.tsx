import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import TextEditorMenuBar from "./text-editor-menu-bar";

type Props = {
  onChange: (content: string | undefined) => void;
  content: string;
};

export default function RichTextEditor({ content, onChange }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "Write a title";
          }

          return "Start writing...";
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "p-4 border rounded-md border-primary max-w-full min-h-[150px] ring-offset-primary prose-heading:text-primary focus-within:outline-none focus-within:ring-1 focus-within:ring-ring cursor-text prose prose-sm sm:prose-base",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor?.getHTML());
    },
  });
  return (
    <div>
      <TextEditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
