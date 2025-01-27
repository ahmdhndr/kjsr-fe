export interface ArticleDTO {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string;
  content: string;
  author: string;
  category: string;
  created_at: Date;
  updated_at: Date;
}
