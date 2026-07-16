import Image from "next/image";
import Link from "next/link";

import { featuredProperties } from "@/components/home/Featured/PropertyData";
import BackButton from "@/components/layout/BackButton";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetails({ params }: PageProps) {

  const { id } = await params;

  const property = featuredProperties.find(
    (item) => item.id === Number(id)
  );


  if (!property) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-20">

        <BackButton />

        <h1 className="text-3xl font-bold text-[#0B2E6B]">
          Property Not Found
        </h1>

        <Link
          href="/properties"
          className="mt-6 inline-block rounded-lg bg-[#0B2E6B] px-5 py-3 text-white"
        >
          Back to Properties
        </Link>

      </main>
    );
  }


  return (
    <main className="bg-gray-100">

      <section className="relative h-64 md:h-[420px]">

        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />

      </section>


      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">

        <BackButton />


        <div className="rounded-xl bg-white p-5 shadow-xl md:rounded-2xl md:p-6">


          <div className="flex flex-wrap gap-2">

            {property.featured && (
              <span className="rounded-full bg-[#FFF700] px-3 py-1 text-sm font-semibold text-[#0B2E6B]">
                ⭐ Featured
              </span>
            )}


            {property.verified && (
              <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                ✔ Verified
              </span>
            )}

          </div>


          <h1 className="mt-4 text-2xl font-bold text-[#0B2E6B] md:text-3xl">
            {property.price}
          </h1>


          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            {property.title}
          </h2>


          <p className="mt-2 text-sm text-gray-600 md:text-base">
            📍 {property.location}
          </p>


          <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">


            <div>

              <h3 className="mb-4 text-xl font-bold text-[#0B2E6B]">
                Amenities
              </h3>

              <div className="space-y-3 text-sm md:text-base">

                <p>🛏 Bedrooms: {property.beds}</p>
                <p>🛁 Bathrooms: {property.baths}</p>
                <p>🚗 Parking: {property.parking}</p>
                <p>📐 Area: {property.area}</p>

              </div>

            </div>


            <div>

              <h3 className="mb-4 text-xl font-bold text-[#0B2E6B]">
                Features
              </h3>

              <div className="space-y-2 text-sm md:text-base">

                {property.features.map((feature) => (
                  <p key={feature}>
                    ✔ {feature}
                  </p>
                ))}

              </div>

            </div>


          </div>


          <div className="mt-8 rounded-xl border border-gray-200 p-4">

            <h3 className="font-bold text-[#0B2E6B]">
              Listed By
            </h3>

            <p className="mt-2">
              {property.agent}
            </p>

          </div>


          <div className="mt-6 flex flex-wrap gap-3">

            <button className="rounded-lg bg-[#0B2E6B] px-5 py-2 text-sm font-semibold text-white">
              📞 Call
            </button>


            <button className="rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold text-white">
              WhatsApp
            </button>


            <button className="rounded-lg border border-[#0B2E6B] px-5 py-2 text-sm font-semibold text-[#0B2E6B]">
              Book Inspection
            </button>

          </div>


        </div>

      </section>

    </main>
  );
}
