import BannerImage from "@/components/banner-image";
import { Separator } from "@/components/ui/separator";

import EventList from "./events/components/event-list";

export default function Home() {
  return (
    <div className="space-y-4">
      <section className="grid h-full grid-cols-2 items-center gap-4">
        <div className="col-span-full flex h-full flex-col justify-center md:col-span-1">
          <div className="mb-4">
            <h1 className="text-balance text-lg font-semibold md:text-xl">
              Klub Jantung Sehat Remaja Indonesia
            </h1>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
              We Are The Future!
            </h2>
          </div>
          <p className="font-semibold">Salam Remaja!</p>
          <p className="text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            vel consectetur ipsam ratione ea sed distinctio? Earum labore,
            magnam soluta repellendus eaque ad recusandae, quo doloribus, alias
            vero ratione dolorem dolore eligendi. Vel, cupiditate eligendi.
          </p>
        </div>
        <div className="col-span-full md:col-span-1">
          <BannerImage />
        </div>
      </section>

      <section>
        <div className="w-fit space-y-1">
          <h3 className="text-lg font-semibold capitalize md:text-2xl">
            Upcoming events
          </h3>
          <Separator className="h-0.5 bg-primary" />
        </div>
        <EventList />
      </section>
    </div>
  );
}
