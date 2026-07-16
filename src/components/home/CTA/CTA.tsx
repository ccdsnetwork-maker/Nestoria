import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#0B2E6B] py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">

        <h2 className="text-2xl font-bold text-white md:text-4xl">
          Ready To Find Your Perfect Space?
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-200 md:mt-5 md:text-base">
          Whether you are buying, renting or transforming your property,
          Nestoria is here to guide you every step of the way.
        </p>


        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:mt-8 md:gap-5">

          <Link
            href="/properties"
            className="rounded-lg bg-[#FFF700] px-6 py-3 text-sm font-bold text-[#0B2E6B] transition hover:opacity-90 md:px-8 md:text-base"
          >
            Browse Properties
          </Link>


          <Link
            href="/interiors"
            className="rounded-lg border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B2E6B] md:px-8 md:text-base"
          >
            Interior Design
          </Link>

        </div>

      </div>
    </section>
  );
}
