"use client";

import { useState } from "react";
import Link from "next/link";
import BackButton from "@/components/layout/BackButton";


const sections = [
  {
    id: "properties",
    title: "My Properties",
    icon: "🏠",
  },
  {
    id: "requests",
    title: "My Requests",
    icon: "🔍",
  },
  {
    id: "interiors",
    title: "Interior Projects",
    icon: "🛋",
  },
  {
    id: "saved",
    title: "Saved Properties",
    icon: "❤️",
  },
  {
    id: "messages",
    title: "Messages",
    icon: "💬",
  },
  {
    id: "settings",
    title: "Settings",
    icon: "⚙️",
  },
];


const properties = [
  {
    name: "Modern 4 Bedroom Duplex",
    location: "Ibadan",
    status: "Approved",
    views: 245,
  },
];


const requests = [
  {
    name: "3 Bedroom Apartment",
    location: "Lagos",
    budget: "₦5m/year",
    status: "Searching",
  },
];


const interiors = [
  {
    name: "Living Room Renovation",
    type: "Residential",
    status: "Quote Sent",
  },
];


const saved = [
  {
    name: "Executive Duplex",
    location: "Abuja",
    price: "₦75,000,000",
  },
];


const messages = [
  {
    sender: "Nestoria Support",
    message: "Welcome to Nestoria",
    date: "Today",
  },
];



export default function Dashboard() {

  const [active, setActive] = useState("properties");


  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-6xl px-4 md:px-6">


        <BackButton />


        <section className="mt-6 rounded-2xl bg-[#0B2E6B] p-8 text-white shadow-md">

          <h1 className="text-4xl font-extrabold">
            Welcome Back To Nestoria
          </h1>

          <p className="mt-3 text-blue-100">
            Manage your properties, requests, interior projects and account.
          </p>

        </section>



        <section className="mt-8 rounded-2xl bg-white p-6 shadow-md">

          <div className="flex flex-col gap-6 md:flex-row md:items-center">


            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-200 text-5xl">
              👤
            </div>


            <div>

              <h2 className="text-2xl font-bold text-[#0B2E6B]">
                User Name
              </h2>

              <p className="mt-1 text-gray-600">
                user@email.com
              </p>

              <p className="text-gray-600">
                08000000000
              </p>

              <p className="text-gray-600">
                Lagos, Nigeria
              </p>


            </div>



            <Link
              href="/profile"
              className="md:ml-auto rounded-lg bg-[#FFF700] px-6 py-3 text-center font-bold text-[#0B2E6B]"
            >
              Edit Profile
            </Link>


          </div>


        </section>



        <section className="mt-8 rounded-2xl bg-white p-6 shadow-md">

          <h2 className="text-2xl font-bold text-[#0B2E6B]">
            Dashboard Menu
          </h2>


          <div className="mt-5 grid gap-4 md:grid-cols-3">


            {sections.map((section) => (

              <button
                key={section.id}
                onClick={() => setActive(section.id)}
                className={`rounded-xl p-5 text-left shadow-md ${
                  active === section.id
                    ? "bg-[#0B2E6B] text-white"
                    : "bg-gray-100"
                }`}
              >

                <div className="text-3xl">
                  {section.icon}
                </div>

                <h3 className="mt-3 font-bold">
                  {section.title}
                </h3>

              </button>

            ))}


          </div>

        </section>
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-md">


          {active === "properties" && (

            <div>

              <h2 className="text-2xl font-bold text-[#0B2E6B]">
                🏠 My Properties
              </h2>

              <div className="mt-5 overflow-x-auto">

                <table className="w-full text-left">

                  <thead>

                    <tr className="border-b">

                      <th className="p-3">
                        Property
                      </th>

                      <th className="p-3">
                        Location
                      </th>

                      <th className="p-3">
                        Status
                      </th>

                      <th className="p-3">
                        Views
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {properties.map((item) => (

                      <tr key={item.name} className="border-b">

                        <td className="p-3">
                          {item.name}
                        </td>

                        <td className="p-3">
                          {item.location}
                        </td>

                        <td className="p-3">
                          {item.status}
                        </td>

                        <td className="p-3">
                          {item.views}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>


              <div className="mt-4 flex justify-center gap-3 text-sm">
                <button className="rounded border px-4 py-2">
                  Previous
                </button>

                <button className="rounded bg-[#0B2E6B] px-4 py-2 text-white">
                  1
                </button>

                <button className="rounded border px-4 py-2">
                  Next
                </button>
              </div>

            </div>

          )}





          {active === "requests" && (

            <div>

              <h2 className="text-2xl font-bold text-[#0B2E6B]">
                🔍 My Requests
              </h2>


              {requests.map((item) => (

                <div
                  key={item.name}
                  className="mt-5 rounded-lg border p-4"
                >

                  <p className="font-bold">
                    {item.name}
                  </p>

                  <p>
                    📍 {item.location}
                  </p>

                  <p>
                    Budget: {item.budget}
                  </p>

                  <p>
                    Status: {item.status}
                  </p>

                </div>

              ))}

            </div>

          )}





          {active === "interiors" && (

            <div>

              <h2 className="text-2xl font-bold text-[#0B2E6B]">
                🛋 Interior Projects
              </h2>


              {interiors.map((item) => (

                <div
                  key={item.name}
                  className="mt-5 rounded-lg border p-4"
                >

                  <p className="font-bold">
                    {item.name}
                  </p>

                  <p>
                    Type: {item.type}
                  </p>

                  <p>
                    Status: {item.status}
                  </p>

                </div>

              ))}

            </div>

          )}





          {active === "saved" && (

            <div>

              <h2 className="text-2xl font-bold text-[#0B2E6B]">
                ❤️ Saved Properties
              </h2>


              {saved.map((item) => (

                <div
                  key={item.name}
                  className="mt-5 rounded-lg border p-4"
                >

                  <p className="font-bold">
                    {item.name}
                  </p>

                  <p>
                    📍 {item.location}
                  </p>

                  <p>
                    {item.price}
                  </p>

                </div>

              ))}

            </div>

          )}





          {active === "messages" && (

            <div>

              <h2 className="text-2xl font-bold text-[#0B2E6B]">
                💬 Messages
              </h2>


              {messages.map((item) => (

                <div
                  key={item.sender}
                  className="mt-5 rounded-lg border p-4"
                >

                  <p className="font-bold">
                    {item.sender}
                  </p>

                  <p>
                    {item.message}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.date}
                  </p>

                </div>

              ))}

            </div>

          )}
          {active === "settings" && (

            <div>

              <h2 className="text-2xl font-bold text-[#0B2E6B]">
                ⚙️ Account Settings
              </h2>


              <div className="mt-5 space-y-4">


                <Link
                  href="/change-password"
                  className="block rounded-lg border p-4"
                >
                  🔐 Change Password
                </Link>


                <button className="w-full rounded-lg border p-4 text-left">
                  🔔 Notification Preferences
                </button>


                <button className="w-full rounded-lg border p-4 text-left">
                  🔒 Privacy Settings
                </button>


                <button className="w-full rounded-lg border p-4 text-left text-red-600">
                  🗑 Delete Account
                </button>


              </div>


              <div className="mt-8 rounded-xl border p-5">

                <h3 className="font-bold text-[#0B2E6B]">
                  Profile Settings
                </h3>


                <p className="mt-2 text-gray-600">
                  Update your personal information, profile picture,
                  phone number and location from your profile page.
                </p>


                <Link
                  href="/profile"
                  className="mt-4 inline-block rounded-lg bg-[#0B2E6B] px-5 py-2 font-bold text-white"
                >
                  Open Profile Settings
                </Link>


              </div>


            </div>

          )}


        </section>


      </div>

    </main>

  );

}
