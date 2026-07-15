import Link from "next/link";

export default function PropertyCTA() {
  return (
    <section className="bg-[#0B2E6B] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Need Help Designing Your Space?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-200">
          Beyond finding properties, Nestoria helps transform spaces into
          beautiful and functional environments through professional interior
          design services.
        </p>

        <Link
          href="/interiors"
          className="mt-8 inline-block rounded-xl bg-[#FFF700] px-8 py-4 font-bold text-[#0B2E6B]"
        >
          Interior Design
        </Link>
      </div>
    </section>
  );
}
