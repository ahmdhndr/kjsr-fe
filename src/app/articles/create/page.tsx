import requireAuth from "@/lib/require-auth";

import CreateArticleForm from "./create-article-form";

export default async function CreateArticlePage() {
  await requireAuth();

  return <CreateArticleForm />;
}
