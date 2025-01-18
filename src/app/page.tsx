import Link from "next/link";

import BannerImage from "@/components/banner-image";
import { CardRegion } from "@/components/card-region";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { regions } from "@/data/regions";

import EventList from "./events/components/event-list";

export default function Home() {
  return (
    <div className="container mb-4 mt-4 space-y-4 md:mt-0">
      <section className="grid h-[calc(100vh-56px)] grid-cols-2 items-center gap-4">
        <div className="col-span-full flex h-full flex-col justify-center md:col-span-1">
          <div className="mb-4">
            {/* <h1 className="text-balance text-lg font-semibold md:text-xl">
              Klub Jantung Sehat Remaja Indonesia
            </h1> */}
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {/* We Are The Future! */}
              Remaja Sehat, Bangsa Kuat.
            </h2>
          </div>
          <p className="font-semibold">Salam Remaja!</p>
          <p className="text-balance">
            Klub Jantung Sehat Remaja Indonesia hadir untuk membentuk generasi
            muda yang{" "}
            <span className="font-semibold">
              sehat, produktif, dan inspiratif
            </span>
            . Mari pelajari gaya hidup sehat dan{" "}
            <span className="font-semibold">jadilah pelopor perubahan!</span>
          </p>
          <div className="mt-4">
            <Button>Gabung Sekarang</Button>
          </div>
        </div>
        <div className="col-span-full md:col-span-1">
          <BannerImage />
        </div>
      </section>

      <section className="space-y-4">
        <div className="w-fit space-y-1">
          <h3 className="text-lg font-semibold capitalize md:text-2xl">
            Acara Mendatang
          </h3>
          <Separator className="h-0.5 bg-primary" />
        </div>
        <EventList />
        <Link href={"#"} className="inline-block">
          <Button>Lihat Semua</Button>
        </Link>
      </section>

      <section className="space-y-4">
        <div className="w-fit space-y-1">
          <h3 className="text-lg font-semibold capitalize md:text-2xl">
            Artikel Terbaru
          </h3>
          <Separator className="h-0.5 bg-primary" />
        </div>
        <EventList />
        <Link href={"#"} className="inline-block">
          <Button>Lihat Semua</Button>
        </Link>
      </section>

      <section className="mb-4 space-y-4">
        <div className="w-fit space-y-1">
          <h3 className="text-lg font-semibold capitalize md:text-2xl">
            Wilayah KJSR
          </h3>
          <Separator className="h-0.5 bg-primary" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {regions.slice(0, 3).map((region) => (
            <CardRegion key={region.id} {...region} />
          ))}
        </div>
        <Link href={"#"} className="inline-block">
          <Button>Lihat Semua</Button>
        </Link>
      </section>
    </div>
  );
}
