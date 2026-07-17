"use client";

import { useState } from "react";
import Link from "next/link";
import BackButton from "@/components/layout/BackButton";


const plans = [
  {
    name: "Basic",
    monthly: "Free",
    yearly: "Free",
    discount: "",
    listings: "5",
    requests: "5",
    interior: "3",
    popular: false,
    features: [
      "5 Property Listings",
      "5 Property Requests",
      "3 Interior Requests",
      "Standard Visibility",
      "Standard Support",
    ],
  },
  {
    name: "Silver",
    monthly: "₦5,000",
    yearly: "₦54,000",
    discount: "10% OFF",
    listings: "60",
    requests: "60",
    interior: "20",
    popular: false,
    features: [
      "60 Property Listings",
      "60 Property Requests",
      "20 Interior Requests",
      "Contact Visibility",
      "Priority Approval",
    ],
  },
  {
    name: "Gold",
    monthly: "₦12,000",
    yearly: "₦122,400",
    discount: "15% OFF",
    listings: "200",
    requests: "200",
    interior: "60",
    popular: true,
    features: [
      "200 Property Listings",
      "200 Property Requests",
      "60 Interior Requests",
      "Featured Listings",
      "High Search Ranking",
    ],
  },
  {
    name: "Platinum",
    monthly: "₦25,000",
    yearly: "₦240,000",
    discount: "20% OFF",
    listings: "Unlimited",
    requests: "Unlimited",
    interior: "Unlimited",
    popular: false,
    features: [
      "Unlimited Listings",
      "Unlimited Requests",
      "Unlimited Interior Projects",
      "Highest Visibility",
      "Premium Support",
    ],
  },
];


export default function MembershipPage() {

  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");


  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-7xl px-4 md:px-6">


        <BackButton />


        <section className="mt-6 rounded-2xl bg-[#0B2E6B] p-8 text-white shadow-md">

          <h1 className="text-4xl font-extrabold md:text-5xl">
            Nestoria Membership Plans
          </h1>

          <p className="mt-4 max-w-3xl text-blue-100">
            Choose a plan that matches your property goals and unlock
            more opportunities on Nestoria.
          </p>

        </section>



        <section className="mt-8 flex justify-center">

          <div className="rounded-full bg-white p-2 shadow-md">

            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-6 py-3 font-bold ${
                billing === "monthly"
                  ? "bg-[#0B2E6B] text-white"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>


            <button
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-6 py-3 font-bold ${
                billing === "yearly"
                  ? "bg-[#0B2E6B] text-white"
                  : "text-gray-600"
              }`}
            >
              Yearly ⭐ Save More
            </button>

          </div>

        </section>



        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">


          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-6 shadow-md ${
                plan.popular
                  ? "border-4 border-[#FFF700]"
                  : ""
              }`}
            >

              {plan.popular && (

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FFF700] px-4 py-1 text-sm font-bold text-[#0B2E6B]">
                  ⭐ Most Popular
                </div>

              )}


              <h2 className="text-2xl font-extrabold text-[#0B2E6B]">
                {plan.name}
              </h2>


              {plan.discount && billing === "yearly" && (

                <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  {plan.discount}
                </span>

              )}


              <p className="mt-5 text-3xl font-extrabold">
                {billing === "monthly"
                  ? plan.monthly
                  : plan.yearly}
              </p>


              <p className="text-sm text-gray-500">
                {billing === "monthly"
                  ? "per month"
                  : "per year"}
              </p>


              <ul className="mt-6 space-y-3 text-sm text-gray-600">

                {plan.features.map((feature) => (

                  <li key={feature}>
                    ✔ {feature}
                  </li>

                ))}

              </ul>


              <Link
                href="#"
                className={`mt-8 block rounded-lg py-3 text-center font-bold ${
                  plan.name === "Basic"
                    ? "bg-gray-300 text-gray-700"
                    : "bg-[#FFF700] text-[#0B2E6B]"
                }`}
              >
                {plan.name === "Basic"
                  ? "Current Plan"
                  : `Upgrade to ${plan.name}`}
              </Link>


            </div>

          ))}


        </section>
        <section className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-md">

            <h2 className="text-2xl font-bold text-[#0B2E6B]">
              Current Plan
            </h2>

            <div className="mt-5 rounded-xl bg-green-50 p-5">

              <h3 className="text-3xl font-extrabold text-green-700">
                Basic Account
              </h3>

              <p className="mt-2 text-gray-600">
                Active membership
              </p>

            </div>

          </div>



          <div className="rounded-2xl bg-white p-6 shadow-md">

            <h2 className="text-2xl font-bold text-[#0B2E6B]">
              Current Usage
            </h2>

            <div className="mt-5 space-y-4 text-gray-600">

              <p>
                🏠 Property Listings: 0 / 5
              </p>

              <p>
                🔍 Property Requests: 0 / 5
              </p>

              <p>
                🛋 Interior Projects: 0 / 3
              </p>

            </div>

          </div>

        </section>




        <section className="mt-12 rounded-2xl bg-white p-6 shadow-md md:p-8">

          <h2 className="text-3xl font-bold text-[#0B2E6B]">
            Plan Comparison
          </h2>


          <div className="mt-6 overflow-x-auto">

            <table className="min-w-full border text-sm">

              <thead className="bg-[#0B2E6B] text-white">

                <tr>

                  <th className="border p-3 text-left">
                    Feature
                  </th>

                  <th className="border p-3">
                    Basic
                  </th>

                  <th className="border p-3">
                    Silver
                  </th>

                  <th className="border p-3">
                    Gold
                  </th>

                  <th className="border p-3">
                    Platinum
                  </th>

                </tr>

              </thead>


              <tbody>

                <tr>
                  <td className="border p-3">
                    Property Listings
                  </td>

                  <td className="border p-3 text-center">
                    5
                  </td>

                  <td className="border p-3 text-center">
                    60
                  </td>

                  <td className="border p-3 text-center">
                    200
                  </td>

                  <td className="border p-3 text-center">
                    Unlimited
                  </td>

                </tr>


                <tr>
                  <td className="border p-3">
                    Contact Visibility
                  </td>

                  <td className="border p-3 text-center">
                    Limited
                  </td>

                  <td className="border p-3 text-center">
                    Yes
                  </td>

                  <td className="border p-3 text-center">
                    Yes
                  </td>

                  <td className="border p-3 text-center">
                    Priority
                  </td>

                </tr>


                <tr>
                  <td className="border p-3">
                    Featured Listings
                  </td>

                  <td className="border p-3 text-center">
                    No
                  </td>

                  <td className="border p-3 text-center">
                    Optional
                  </td>

                  <td className="border p-3 text-center">
                    Included
                  </td>

                  <td className="border p-3 text-center">
                    Premium
                  </td>

                </tr>


              </tbody>

            </table>

          </div>


        </section>




        <section className="mt-12 rounded-2xl bg-white p-6 shadow-md md:p-8">

          <h2 className="text-3xl font-bold text-[#0B2E6B]">
            Frequently Asked Questions
          </h2>


          <div className="mt-6 space-y-5">

            <div>

              <h3 className="font-bold text-[#0B2E6B]">
                Will every user start with Basic?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes. New users automatically receive a Basic account.
              </p>

            </div>


            <div>

              <h3 className="font-bold text-[#0B2E6B]">
                Can I upgrade anytime?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes. You can upgrade whenever you need more features.
              </p>

            </div>


            <div>

              <h3 className="font-bold text-[#0B2E6B]">
                How will payment work?
              </h3>

              <p className="mt-2 text-gray-600">
                Payment integration will be connected later with a secure
                payment gateway.
              </p>

            </div>


          </div>


        </section>




        <section className="mt-12 rounded-2xl bg-[#0B2E6B] p-8 text-center text-white">

          <h2 className="text-3xl font-extrabold">
            Upgrade Your Nestoria Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Choose a membership plan that helps you reach more customers
            and manage more property opportunities.
          </p>


          <button
            className="mt-6 rounded-lg bg-[#FFF700] px-8 py-3 font-bold text-[#0B2E6B]"
          >
            Upgrade Account
          </button>


        </section>


      </div>

    </main>

  );

}
