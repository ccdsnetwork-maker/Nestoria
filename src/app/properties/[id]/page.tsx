

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, MessagesSquare } from "lucide-react";
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
      <main className="min-h-screen bg-gray-100 px-4 py-10">

        <BackButton />

        <h1 className="mt-6 text-3xl font-bold text-[#0B2E6B]">
          Property Not Found
        </h1>

        <Link
          href="/properties"
          className="mt-6 inline-block rounded-lg bg-[#0B2E6B] px-5 py-3 text-white"
        >
          Back To Properties
        </Link>

      </main>
    );
  }


  const similarProperties = featuredProperties
    .filter((item) => item.id !== property.id)
    .slice(0, 3);



  return (

    <main className="min-h-screen bg-gray-100">


      <section className="relative h-72 md:h-[500px]">

        <Image
          src={property.image}
          alt={property.title}
          fill
          priority
          className="object-cover"
        />

      </section>



      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">


        <BackButton />



        <div className="mt-6 rounded-2xl bg-white p-6 shadow-md">


          <div className="flex flex-wrap gap-3">

            {property.featured && (
              <span className="rounded-full bg-[#FFF700] px-4 py-1 text-sm font-bold text-[#0B2E6B]">
                ⭐ Featured
              </span>
            )}


            {property.verified && (
              <span className="rounded-full bg-green-600 px-4 py-1 text-sm font-bold text-white">
                ✔ Verified
              </span>
            )}


            <span className="rounded-full border px-4 py-1 text-sm">
              {property.type}
            </span>

          </div>



          <h1 className="mt-5 text-3xl font-extrabold text-[#0B2E6B]">
            {property.title}
          </h1>


          <p className="mt-2 text-gray-600">
            📍 {property.location}
          </p>


          <h2 className="mt-5 text-3xl font-bold">
            {property.price}
          </h2>



          <div className="mt-8 grid gap-4 md:grid-cols-4">


            <div className="rounded-lg bg-gray-100 p-4">
              🛏
              <p className="font-bold">
                {property.beds} Bedrooms
              </p>
            </div>


            <div className="rounded-lg bg-gray-100 p-4">
              🛁
              <p className="font-bold">
                {property.baths} Bathrooms
              </p>
            </div>


            <div className="rounded-lg bg-gray-100 p-4">
              🚗
              <p className="font-bold">
                {property.parking} Parking
              </p>
            </div>


            <div className="rounded-lg bg-gray-100 p-4">
              📐
              <p className="font-bold">
                {property.area}
              </p>
            </div>


          </div>          <div className="mt-10 grid gap-8 md:grid-cols-2">


            <section>

              <h2 className="text-2xl font-bold text-[#0B2E6B]">
                Amenities & Features
              </h2>


              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                {property.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-lg border bg-white p-3"
                  >
                    ✔ {feature}
                  </div>
                ))}

              </div>

            </section>



            <section className="rounded-xl border bg-white p-5">

              <h2 className="text-2xl font-bold text-[#0B2E6B]">
                Listed By
              </h2>


              <p className="mt-4 text-lg font-semibold">
                {property.agent}
              </p>


              <p className="mt-2 text-gray-600">
                Property Consultant
              </p>



              <div className="mt-6 flex flex-col gap-3">

  <button
    className="flex items-center justify-center gap-2 rounded-lg bg-[#0B2E6B] py-3 font-bold text-white"
  >
    <Phone size={19} />
    Call Agent
  </button>

  <button
    className="flex items-center justify-center gap-2 rounded-lg bg-green-600 py-3 font-bold text-white"
  >
    <FaWhatsapp size={21} />
    WhatsApp Agent
  </button>

  <Link
    href={`/messages/new?recipient=${property.agent}&type=property`}
    className="flex items-center justify-center gap-2 rounded-lg border border-[#0B2E6B] py-3 text-center font-bold text-[#0B2E6B]"
  >
    <MessagesSquare size={19} />
    Chat Agent
  </Link>

</div>



         


            </section>


          </div>





          <section className="mt-12">


            <h2 className="text-3xl font-bold text-[#0B2E6B]">
              Similar Properties
            </h2>


            <div className="mt-6 grid gap-6 md:grid-cols-3">


              {similarProperties.map((item) => (

                <Link
                  key={item.id}
                  href={`/properties/${item.id}`}
                  className="overflow-hidden rounded-xl bg-white shadow-md"
                >


                  <div className="relative h-52">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                  </div>


                  <div className="p-4">

                    <h3 className="font-bold text-[#0B2E6B]">
                      {item.title}
                    </h3>


                    <p className="mt-2 text-sm text-gray-600">
                      📍 {item.location}
                    </p>


                    <p className="mt-2 font-bold">
                      {item.price}
                    </p>


                  </div>


                </Link>

              ))}


            </div>


          </section>



        </div>


      </section>


    </main>

  );

}
