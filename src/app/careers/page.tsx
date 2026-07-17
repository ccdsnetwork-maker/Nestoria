"use client";

import Link from "next/link";
import { MessagesSquare } from "lucide-react";
import BackButton from "@/components/layout/BackButton";

const positions = [
  "Real Estate Marketer",
  "Property Consultant",
  "Interior Design Specialist",
  "Field Agent",
  "Customer Support Officer",
  "Digital Marketing Officer",
  "Software Developer",
  "Administrative Officer",
];

const benefits = [
  "Competitive remuneration",
  "Performance-based incentives",
  "Professional training and mentorship",
  "Career growth opportunities",
  "Flexible and collaborative work environment",
  "Opportunity to shape the future of real estate",
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <BackButton />

        <section className="rounded-2xl bg-[#0B2E6B] p-8 text-white shadow-lg">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Build Your Career With Nestoria
          </h1>

          <p className="mt-5 max-w-3xl leading-7 text-blue-100">
            We are building a trusted real estate ecosystem across Nigeria.
            If you're passionate about innovation, customer satisfaction,
            and transforming the property industry, we'd love to have you
            on our team.
          </p>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-[#0B2E6B]">
              Open Positions
            </h2>

            <div className="mt-5 space-y-3">
              {positions.map((position) => (
                <div
                  key={position}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <h3 className="font-semibold text-[#0B2E6B]">
                    {position}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-[#0B2E6B]">
              Why Join Us?
            </h2>

            <div className="mt-5 space-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <span className="text-green-600">✔</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        <section className="mt-10 rounded-2xl bg-white p-6 shadow-md md:p-8">

          <h2 className="text-2xl font-bold text-[#0B2E6B]">
            Apply Now
          </h2>

          <p className="mt-2 text-gray-600">
            Complete the application below. Our recruitment team
            will review your submission and contact you if you're shortlisted.
          </p>

          <form className="mt-8 space-y-5">

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-lg border p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-lg border p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-lg border p-3"
              />

              <select className="rounded-lg border p-3">
                <option>Select Position</option>
                {positions.map((position) => (
                  <option key={position}>
                    {position}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Current Location"
                className="rounded-lg border p-3"
              />

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="rounded-lg border p-3"
              />

            </div>

            <textarea
              placeholder="Tell us briefly why you'd like to join Nestoria..."
              className="h-40 w-full rounded-lg border p-3"
            />

            <div className="flex flex-col gap-4 sm:flex-row">

              <button
                type="submit"
                className="flex-1 rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
              >
                Submit Application
              </button>

              <Link
                href="/messages"
                className="flex-1 rounded-lg bg-green-600 py-3 text-center font-bold text-white transition hover:bg-green-700"
              >
                <div className="flex items-center justify-center gap-2">
  <MessagesSquare size={19} />
  Chat With Recruitment/Admin
</div>
              </Link>

            </div>

          </form>

        </section>

      </div>
    </main>
  );
}
