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

import { EventDTO } from "../dtos/events";

export function EventItem({
  title,
  slug,
  excerpt,
  author,
  image_url,
  category,
  events_date,
}: EventDTO) {
  return (
    <Card className="overflow-hidden text-primary shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/events/${slug}`}>
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
              href={`/events/${slug}`}
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
        {getTimeDifference(events_date)}
      </CardFooter>
    </Card>
  );
}
