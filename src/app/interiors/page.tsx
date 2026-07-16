import Link from "next/link";
import BackButton from "@/components/layout/BackButton";
import InteriorShowcase from "@/components/home/Interiors/InteriorShowcase";

export default function Interiors() {
  return (
    <main className="min-h-screen bg-gray-100">

      <section className="py-10 md:py-20">

        <div className="mx-auto max-w-7xl px-4 md:px-6">

          <BackButton />


          <div className="mb-8 md:mb-12">

            <h1 className="text-3xl font-extrabold text-[#0B2E6B] md:text-5xl">
              Nestoria Interior Design
            </h1>


            <p className="mt-3 max-w-3xl text-sm text-gray-600 md:text-base">
              Transform your home, office or commercial space with beautiful,
              functional and timeless interior solutions designed around your
              lifestyle.
            </p>


            <div className="mt-5">

              <Link
                href="/properties"
                className="inline-flex rounded-lg bg-[#FFF700] px-6 py-3 text-sm font-bold text-[#0B2E6B] transition hover:opacity-90 md:text-base"
              >
                Browse Properties
              </Link>

            </div>

          </div>


          <InteriorShowcase />


        </div>

      </section>

    </main>
  );
}
