import { events } from "@/data/events";

import { EventItem } from "./event-item";

export default function EventList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events
        .sort(
          (a, b) =>
            new Date(b.events_date).getTime() -
            new Date(a.events_date).getTime()
        )
        .slice(0, 3)
        .map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
    </div>
  );
}
