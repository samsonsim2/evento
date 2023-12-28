import EventsList from "@/components/EventsList";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import React, { Suspense, useEffect } from "react";
import Loading from "./loading";
import type { Metadata } from "next";
import { capitalize } from "@/lib/utils";
type Props = {
  params: {
    city: string;
  };
};
export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: city == "all" ? `All Events` : `Events in ${capitalize(city)}`,
  };
}

const page = async ({ params }: Props) => {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city == "all"
          ? "All Events"
          : ` Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
};

export default page;
