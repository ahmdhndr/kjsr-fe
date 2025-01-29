import { articles } from "@/data/articles";

import ArticleItem from "./article-item";

export default function ArticleList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {articles
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
    </div>
  );
}
