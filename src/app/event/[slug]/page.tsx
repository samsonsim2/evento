import H1 from "@/components/H1";
import { getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);
  return {
    title: event.name,
  };
}
const page = async ({ params }: Props) => {
  const slug = params.slug;

  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative  overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          className="object-cover z-0 blur-3xl"
          alt="even background image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px "
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl  border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className={"mb-2 mt-1 whitespace-nowrap lg:text-5xl"}>
              {event.name}
            </H1>
            <p className={"whitespace-nowrap  text-xl text-white/75"}>
              Organised by{" "}
              <span className="italic">{event.organizerName} </span>
            </p>
            <button className=" state-effects bg-white/20 text-lg capitlize mt-5 lg:mt-auto w-[95vw] sm:w-full rounded-md bg-blur border-white/10 border-2 py-2">
              {" "}
              Get tickets{" "}
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </section>
      </div>
    </main>
  );
};

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
export default page;
