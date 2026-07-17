"use client";

import Image from "next/image";
import { MessagesSquare } from "lucide-react";
import Link from "next/link";
import BackButton from "@/components/layout/BackButton";

const services = [
  "Residential Interior Design",
  "Commercial Space Design",
  "Office Interior Design",
  "Hospitality Design",
  "Renovation & Remodeling",
  "Space Planning",
];

const process = [
  "Consultation and understanding your vision",
  "Concept development and design planning",
  "Material selection and budgeting",
  "Professional execution and project delivery",
];

const packages = [
  {
    title: "Basic Package",
    description:
      "Perfect for homeowners who need professional guidance and design direction.",
  },
  {
    title: "Premium Package",
    description:
      "Complete interior transformation with detailed planning and execution.",
  },
  {
    title: "Luxury Package",
    description:
      "High-end customized designs for premium residential and commercial spaces.",
  },
];

const portfolio = [
  {
    image: "/images/interiors/interior1.jpg",
    title: "Modern Living Space",
    description:
      "A contemporary living area designed with elegant finishes, balanced lighting and comfortable functionality.",
  },
  {
    image: "/images/interiors/interior2.jpg",
    title: "Luxury Interior Design",
    description:
      "A premium interior concept combining sophistication, comfort and modern lifestyle elements.",
  },
  {
    image: "/images/interiors/interior3.jpg",
    title: "Creative Workspace",
    description:
      "A professional workspace designed to improve productivity while maintaining a stylish atmosphere.",
  },
];

export default function Interiors() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <BackButton />

        <section className="rounded-2xl bg-[#0B2E6B] p-8 text-white md:p-12">

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Transform Your Space With Nestoria Interiors
          </h1>

          <p className="mt-5 max-w-3xl leading-7 text-blue-100">
            We create beautiful, functional and inspiring spaces
            through professional interior design solutions for homes,
            offices and commercial properties.
          </p>

          <div className="mt-8">
            <Link
              href="#quote"
              className="rounded-lg bg-[#FFF700] px-6 py-3 font-bold text-[#0B2E6B]"
            >
              Request Design Quote
            </Link>
          </div>

        </section>


        <section className="mt-10">

          <h2 className="text-3xl font-bold text-[#0B2E6B]">
            Our Interior Services
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl bg-white p-6 shadow-md"
              >
                <h3 className="font-bold text-[#0B2E6B]">
                  {service}
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  Professional solutions tailored to your lifestyle,
                  budget and design goals.
                </p>
              </div>
            ))}

          </div>

        </section>        <section className="mt-10 rounded-2xl bg-white p-6 shadow-md md:p-8">

          <h2 className="text-3xl font-bold text-[#0B2E6B]">
            Our Design Process
          </h2>

          <div className="mt-6 space-y-4">

            {process.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-lg border p-4"
              >

                <span className="font-bold text-green-600">
                  0{index + 1}
                </span>

                <p className="text-gray-600">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </section>


        <section className="mt-10">

          <h2 className="text-3xl font-bold text-[#0B2E6B]">
            Design Packages
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            {packages.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-md"
              >

                <h3 className="text-xl font-bold text-[#0B2E6B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </section>


        <section className="mt-10">

          <h2 className="text-3xl font-bold text-[#0B2E6B]">
            Our Interior Portfolio
          </h2>

          <p className="mt-3 text-gray-600">
            Explore some of our design concepts showcasing creativity,
            comfort and modern space transformation.
          </p>


          <div className="mt-6 grid gap-6 md:grid-cols-3">

            {portfolio.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-xl bg-white shadow-md"
              >

                <div className="relative h-60 w-full">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                </div>


                <div className="p-5">

                  <h3 className="font-bold text-[#0B2E6B]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>


        <section
          id="quote"
          className="mt-10 rounded-2xl bg-white p-6 shadow-md md:p-8"
        >

          <h2 className="text-3xl font-bold text-[#0B2E6B]">
            Request Interior Design Consultation
          </h2>

          <p className="mt-3 text-gray-600">
            Tell us about your project and our interior team will
            contact you.
          </p>


          <form className="mt-6 space-y-4">

            <div className="grid gap-4 md:grid-cols-2">

              <input
                placeholder="Full Name"
                className="rounded-lg border p-3"
              />

              <input
                placeholder="Phone Number"
                className="rounded-lg border p-3"
              />

            </div>


            <input
              placeholder="Email Address"
              className="w-full rounded-lg border p-3"
            />


            <input
              placeholder="Project Location"
              className="w-full rounded-lg border p-3"
            />


            <textarea
              placeholder="Describe your interior design needs"
              className="h-36 w-full rounded-lg border p-3"
            />


            <div className="flex flex-col gap-4 sm:flex-row">

              <button
                type="submit"
                className="flex-1 rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
              >
                Submit Request
              </button>


              <Link
                href="/messages/new?recipient=interior-team&type=interior"
                className="flex-1 rounded-lg bg-green-600 py-3 text-center font-bold text-white"
              >
                <div className="flex items-center justify-center gap-2">
  <MessagesSquare size={19} />
  Chat With Interior Team
</div>
              </Link>

            </div>


          </form>


        </section>


      </div>

    </main>
  );
}
