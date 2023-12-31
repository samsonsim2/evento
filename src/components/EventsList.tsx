import React from "react";
import { EventoEvent } from "@prisma/client";
import EventCard from "./EventCard";
import { getEvents } from "@/lib/utils";
import PaginationControl from "./PaginationControl";
type EventsListProps = {
  city: string;
  page: number;
};
export default async function EventsList({ city ,page}: EventsListProps) {
  const {events,totalCount} = await getEvents(city,page);

  const previousPath = page>1 ?`/events/${city}?page=${page-1}`:"";
  const nextPath = totalCount > 6 * page ?  `/events/${city}?page=${page+1}`:"";

  return (
    <section className="max-w-[1100px]   flex flex-wrap gap-10 justify-center">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
      <PaginationControl previousPath={previousPath} nextPath={nextPath}/>
    </section>
  );
}
