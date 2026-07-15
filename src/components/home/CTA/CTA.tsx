import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#0B2E6B] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Ready to Find Your Perfect Space?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-200">
          Whether you are buying, renting, selling, or transforming your
          space, Nestoria Interiors & Properties is ready to help.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/properties"
            className="rounded-xl bg-[#FFF700] px-8 py-4 font-bold text-[#0B2E6B]"
          >
            Explore Properties
          </Link>

          <Link
            href="/interiors"
            className="rounded-xl border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-[#0B2E6B]"
          >
            Book Interior Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
