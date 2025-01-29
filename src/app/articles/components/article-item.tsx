import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blurDataURL } from "@/data/blur-data-image-url";

import { ArticleDTO } from "../dtos/articles";

export default function ArticleItem({
  title,
  slug,
  excerpt,
  author,
  image_url,
  category,
  created_at,
}: ArticleDTO) {
  return (
    <Card className="overflow-hidden text-primary shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/articles/${slug}`}>
          <Image
            src={image_url}
            alt={title}
            width={1280}
            height={720}
            quality={90}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="block aspect-video h-full object-cover object-center"
          />
        </Link>
        <div className="!mt-0 p-4">
          <CardTitle className="line-clamp-2 max-h-12 overflow-hidden">
            <Link
              href={`/articles/${slug}`}
              className="inline-block hover:underline"
            >
              {title}
            </Link>
          </CardTitle>
          <CardDescription className="mt-1 text-primary">
            <span className="text-muted-foreground">oleh: </span>
            {author}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <p className="line-clamp-3 text-balance">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between px-4 pb-4 pt-0 text-sm">
        <p className="capitalize">{category}</p>
        {created_at.toLocaleString("en-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </CardFooter>
    </Card>
  );
}
