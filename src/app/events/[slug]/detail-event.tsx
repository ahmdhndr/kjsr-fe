"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import SocialMediaShare from "@/components/social-media-share";
import { Button } from "@/components/ui/button";
import { blurDataURL } from "@/data/blur-data-image-url";
import { events } from "@/data/events";
import { env } from "@/lib/env/client";

export default function DetailEvent() {
  const params = useParams<{ slug: string }>();
  const data = events.find((event) => event.slug === params.slug);
  const { NEXT_PUBLIC_BASE_URL } = env;

  return (
    <div className="mb-4 space-y-4">
      <div className="relative overflow-hidden border-b-4 border-primary">
        {/* BACKGROUND COVER */}
        <Image
          src={data?.bg_cover || "/images/og.jpg"}
          alt={`Background cover ${data?.title}`}
          width={1200}
          height={630}
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="h-32 w-full object-cover object-center md:h-52 lg:h-80"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-primary/85"></div>
      </div>

      {/* HEADER EVENT */}
      <section className="container relative grid grid-cols-12 grid-rows-3 items-center gap-4 md:grid-rows-1">
        {/* BAGIAN KIRI */}
        <div className="col-span-full col-start-4 row-start-1 row-end-2 self-end md:col-span-3">
          <Image
            src={data?.image_url || "/images/og.jpg"}
            alt={data?.title || "cover info"}
            width={170}
            height={170}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="absolute -top-20 aspect-square rounded-md object-cover object-center shadow-lg"
          />
        </div>

        {/* BAGIAN TENGAH */}
        <div className="col-span-full space-y-2 justify-self-start text-muted-foreground md:col-span-6">
          <span className="rounded-md border p-1 text-sm capitalize">
            {data?.category}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-4xl">
            {data?.title}
          </h2>
          <span className="text-sm tracking-wide">
            Diselenggarakan oleh: {data?.author}
          </span>
        </div>

        {/* BAGIAN KANAN */}
        <div className="col-span-full flex flex-col items-start space-y-1 self-start md:col-span-3 lg:items-center">
          <div className="flex w-full flex-row items-center gap-1 md:flex-col md:gap-0">
            <p className="font-light tracking-wide text-muted-foreground">
              Terbuka Hingga:
            </p>
            <span className="text-balance font-semibold text-primary">
              30 Maret 2025
            </span>
          </div>
          <div className="flex w-full flex-row items-center gap-1 md:flex-col md:gap-0">
            <p className="font-light tracking-wide text-muted-foreground">
              Sisa Kuota:
            </p>
            <span className="font-semibold text-primary">30</span>
          </div>
        </div>
      </section>

      {/* BODY EVENT */}
      <section className="container grid grid-cols-12 items-start gap-6">
        {/* DESCRIPTION */}
        <div className="col-span-full w-full lg:col-span-9">
          <h3 className="text-xl font-medium lg:text-2xl">Deskripsi</h3>
          <div
            className="prose mb-4 text-justify font-light lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: data?.body || "" }}
          />

          {/* SHARE AREA */}
          <SocialMediaShare
            type="acara"
            url={`${NEXT_PUBLIC_BASE_URL}/events/${data?.slug}`}
          />
        </div>

        {/* FORMS */}
        <aside className="sticky top-0 col-span-full space-y-2 lg:top-20 lg:col-span-3 lg:justify-self-center">
          <h3 className="text-xl font-medium lg:text-2xl">Keikutsertaan</h3>
          <div className="w-full rounded-md bg-destructive/90 p-2 text-background">
            <h4>Anda belum terdaftar pada acara</h4>
          </div>
          <Button className="w-full">Daftar gratis</Button>

          <div>
            <h3 className="mt-4 text-xl font-medium lg:text-2xl">
              Jadwal Pelaksanaan
            </h3>
            <div className="mt-4 flex flex-col gap-1 text-muted-foreground">
              <span>
                Mulai:{" "}
                <span className="font-semibold text-primary">
                  {new Date("2025-07-25T07:00:00").toLocaleString("en-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </span>
              </span>

              <span>
                Selesai:{" "}
                <span className="font-semibold text-primary">
                  {new Date("2025-07-30T17:00:00").toLocaleString("en-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </span>
              </span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
