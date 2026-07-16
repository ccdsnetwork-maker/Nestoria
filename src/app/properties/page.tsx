import BackButton from "@/components/layout/BackButton";

import PropertyActions from "@/components/properties/PropertyActions";
import PropertySearch from "@/components/properties/PropertySearch";
import PropertyGrid from "@/components/properties/PropertyGrid";
import PropertyCTA from "@/components/properties/PropertyCTA";

import WhyChoose from "@/components/home/WhyChoose/WhyChoose";
import Testimonials from "@/components/home/Testimonials/Testimonials";


export default function Properties() {

  return (

    <main className="min-h-screen bg-gray-100">


      <section className="py-10 md:py-20">


        <div className="mx-auto max-w-7xl px-4 md:px-6">


          <BackButton />


          <h1 className="text-3xl font-extrabold text-[#0B2E6B] md:text-5xl">
            Find Your Perfect Property
          </h1>


          <p className="mt-3 max-w-3xl text-sm text-gray-600 md:text-base">
            Browse verified homes, lands, commercial spaces and luxury
            properties available through Nestoria.
          </p>


          <div className="mt-6">
            <PropertyActions />
          </div>


          <div className="mt-8">
            <PropertySearch />
          </div>


          <section className="mt-8">

            <h2 className="mb-5 text-2xl font-bold text-[#0B2E6B] md:text-3xl">
              Available Properties
            </h2>


            <PropertyGrid />


          </section>


        </div>


      </section>


      <WhyChoose />
      <Testimonials />
      <PropertyCTA />


    </main>

  );
}
