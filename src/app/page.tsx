import Searchform from "@/components/SearchForm";
import H1 from "@/components/H1";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center p-3 pt-36">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">
          10,000 events
        </span>{" "}
        around you
      </p>

      <Searchform />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
