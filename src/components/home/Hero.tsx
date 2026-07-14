import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#0B2E6B] text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Find Your Dream Property
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200">
          Buy, sell, rent and transform spaces with
          <span className="font-semibold text-[#FFF700]">
            {" "}Nestoria Interiors & Properties
          </span>.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/properties"
            className="rounded-xl bg-[#FFF700] px-8 py-4 font-bold text-[#0B2E6B] transition hover:opacity-90"
          >
            Browse Properties
          </Link>

          <Link
            href="/interiors"
            className="rounded-xl border-2 border-white px-8 py-4 transition hover:bg-white hover:text-[#0B2E6B]"
          >
            Interior Design
          </Link>

        </div>

      </div>
    </section>
  );
}