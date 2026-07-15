import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-[85vh] flex-col items-center justify-center px-6 text-center text-white">

      <span className="rounded-full bg-[#FFF700] px-5 py-2 text-sm font-bold text-[#0B2E6B] shadow-lg">
        Premium Real Estate & Interior Design
      </span>

      <h1 className="mt-8 max-w-5xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
        Find Your Dream Property
        <br />
        With Confidence
      </h1>

      <p className="mt-6 max-w-3xl text-base text-gray-200 sm:text-lg">
        Buy, Rent, Sell and transform spaces with{" "}
        <span className="font-semibold text-[#FFF700]">
          Nestoria Interiors & Properties.
        </span>
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <Link
          href="/properties"
          className="rounded-xl bg-[#FFF700] px-8 py-4 font-bold text-[#0B2E6B] shadow-lg transition hover:scale-105"
        >
          Browse Properties
        </Link>

        <Link
          href="/interiors"
          className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B2E6B]"
        >
          Interior Design
        </Link>

      </div>

    </div>
  );
}