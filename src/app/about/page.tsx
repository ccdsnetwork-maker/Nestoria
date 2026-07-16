import Link from "next/link";
import BackButton from "@/components/layout/BackButton";

const values = [
  {
    title: "Trust",
    description:
      "We provide transparent property solutions and connect clients with reliable opportunities.",
  },
  {
    title: "Innovation",
    description:
      "We use modern technology to simplify property search, listing, and management.",
  },
  {
    title: "Excellence",
    description:
      "We deliver quality real estate and interior design services with attention to detail.",
  },
  {
    title: "Customer Focus",
    description:
      "Every decision we make is centered around creating the best experience for our clients.",
  },
];


export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <BackButton />


        <section className="rounded-2xl bg-[#0B2E6B] p-8 text-white shadow-lg md:p-12">

          <h1 className="text-4xl font-extrabold md:text-6xl">
            About Nestoria
          </h1>

          <p className="mt-5 max-w-3xl leading-7 text-blue-100">
            Nestoria Interiors & Properties is a modern real estate
            and interior design company committed to helping individuals,
            families, and businesses discover, create, and manage beautiful
            spaces.
          </p>

          <div className="mt-8">
            <Link
              href="/properties"
              className="rounded-lg bg-[#FFF700] px-6 py-3 font-bold text-[#0B2E6B]"
            >
              Explore Properties
            </Link>
          </div>

        </section>



        <section className="mt-10 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">

            <h2 className="text-2xl font-bold text-[#0B2E6B]">
              Our Mission
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              To make real estate accessible, transparent, and stress-free
              by connecting people with trusted properties and professional
              design solutions.
            </p>

          </div>



          <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">

            <h2 className="text-2xl font-bold text-[#0B2E6B]">
              Our Vision
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              To become one of Nigeria's most trusted real estate platforms,
              transforming how people find, own, and experience spaces.
            </p>

          </div>

        </section>



        <section className="mt-10">

          <h2 className="text-3xl font-bold text-[#0B2E6B]">
            Our Core Values
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-4">

            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-6 shadow-md"
              >

                <h3 className="font-bold text-[#0B2E6B]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  {value.description}
                </p>

              </div>
            ))}

          </div>

        </section>        <section className="mt-10 rounded-2xl bg-white p-6 shadow-md md:p-8">

          <h2 className="text-3xl font-bold text-[#0B2E6B]">
            Why Choose Nestoria?
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <div className="rounded-xl border p-5">
              <h3 className="font-bold text-[#0B2E6B]">
                Verified Opportunities
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                We focus on providing genuine property opportunities
                and trusted real estate solutions.
              </p>
            </div>


            <div className="rounded-xl border p-5">
              <h3 className="font-bold text-[#0B2E6B]">
                Professional Services
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                From property search to interior transformation,
                our team provides expert support.
              </p>
            </div>


            <div className="rounded-xl border p-5">
              <h3 className="font-bold text-[#0B2E6B]">
                Client-Centered Experience
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                We build solutions around the unique needs of
                every client.
              </p>
            </div>

          </div>

        </section>




        <section className="mt-10 rounded-2xl bg-[#0B2E6B] p-8 text-center text-white">

          <h2 className="text-3xl font-bold">
            Ready To Find Your Perfect Space?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Whether you are buying, renting, listing a property,
            or redesigning your space, Nestoria is ready to help.
          </p>


          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/properties"
              className="rounded-lg bg-[#FFF700] px-6 py-3 font-bold text-[#0B2E6B]"
            >
              View Properties
            </Link>


            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 font-bold text-[#0B2E6B]"
            >
              Contact Us
            </Link>

          </div>


        </section>


      </div>

    </main>
  );
}
