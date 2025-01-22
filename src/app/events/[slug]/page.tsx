import { ResolvingMetadata } from "next";

import { events } from "@/data/events";

import DetailEvent from "./detail-event";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const { slug } = await params;
  const event = events.find((event) => event.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found",
      description: "The event you are looking for does not exist.",
    };
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: event.title,
    description: event.excerpt,
    openGraph: {
      url: `events/${event.slug}`,
      images: [event.image_url, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.excerpt,
      images: [event.image_url, ...previousImages],
    },
  };
}

export default function EventDetailPage() {
  return <DetailEvent />;
}
