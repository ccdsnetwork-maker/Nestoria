import PropertyActions from "@/components/properties/PropertyActions";
import PropertySearch from "@/components/properties/PropertySearch";
import PropertyGrid from "@/components/properties/PropertyGrid";
import WhyChoose from "@/components/home/WhyChoose/WhyChoose";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import CTA from "@/components/home/CTA/CTA";

export default function Properties() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-[#0B2E6B] md:text-5xl">
              Find Your Perfect Property
            </h1>

            <p className="mt-4 max-w-3xl text-gray-600">
              Browse verified homes, lands, commercial spaces and luxury
              properties available through Nestoria.
            </p>
          </div>

          <div className="mb-8">
            <PropertyActions />
          </div>

          <div className="mb-12">
            <PropertySearch />
          </div>

          <section>
            <h2 className="mb-8 text-3xl font-bold text-[#0B2E6B]">
              Available Properties
            </h2>

            <PropertyGrid />
          </section>

        </div>
      </section>

      <WhyChoose />
      <Testimonials />
      <CTA />
    </main>
  );
}
