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
import { getTimeDifference } from "@/lib/get-time-difference";

interface Props {
  title: string;
  excerpt: string;
  author: string;
  imageUrl: string;
  category: string;
  events_date: Date;
}

export function EventItem({
  title,
  excerpt,
  author,
  imageUrl,
  category,
  events_date,
}: Props) {
  return (
    <Card className="overflow-hidden text-primary shadow-lg">
      <CardHeader className="p-0">
        <Image
          src={imageUrl}
          alt={title}
          width={1280}
          height={720}
          quality={90}
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="block aspect-video h-full object-cover object-center"
        />
        <div className="!mt-0 p-4">
          <CardTitle className="line-clamp-2 max-h-12 overflow-hidden">
            <Link href={"/"} className="hover:underline">
              {title}
            </Link>
          </CardTitle>
          <CardDescription className="text-primary">
            <span className="text-muted-foreground">oleh: </span>
            {author}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <p className="line-clamp-3 max-h-20 overflow-hidden text-balance">
          {excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between px-4 pb-4 pt-0 text-sm">
        <p className="capitalize">{category}</p>
        {getTimeDifference(events_date)}
      </CardFooter>
    </Card>
  );
}
