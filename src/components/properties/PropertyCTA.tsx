import Link from "next/link";

export default function PropertyCTA() {
  return (
    <section className="bg-[#0B2E6B] py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">

        <h2 className="text-2xl font-bold text-white md:text-4xl">
          Need Help Finding A Property?
        </h2>

        <p className="mx-auto mt-2 max-w-3xl text-sm text-gray-200 md:mt-4 md:text-base">
          Let Nestoria help you discover the right property or transform your
          space with our professional interior design services.
        </p>


        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row md:mt-8 md:gap-5">

          <Link
            href="/interiors"
            className="rounded-lg bg-[#FFF700] px-6 py-3 text-sm font-bold text-[#0B2E6B] transition hover:opacity-90 md:px-8 md:text-base"
          >
            Interior Design
          </Link>

        </div>

      </div>
    </section>
  );
}
