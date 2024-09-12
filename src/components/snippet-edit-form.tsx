"use client";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";
import Link from "next/link";
interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <>
      <div>
        <div className="my-4">
          {" "}
          <Link href="/" className=" p-2 border rounded">
            Home
          </Link>
        </div>
        <Editor
          height="40vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={snippet.code}
          options={{ minimap: { enabled: false } }}
          onChange={handleEditorChange}
        />

        <form action={editSnippetAction}>
          <button type="submit" className="my-2 p-2 border rounded">
            save
          </button>
        </form>
      </div>
    </>
  );
}
