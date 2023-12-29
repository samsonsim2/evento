import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent, Prisma, PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string, page: number) {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );

  // const events: EventoEvent[] = await response.json();
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount 
  if(city==="all"){
    totalCount = await prisma.eventoEvent.count()
  } else{
   totalCount = await prisma.eventoEvent.count({
      where: {
        city:capitalize(city)
      },
    });


  }
 

  return {events,totalCount};
}

export async function getEvent(slug: string) {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );

  // const events: EventoEvent = await response.json();

  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
}
