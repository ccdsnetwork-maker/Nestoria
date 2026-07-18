"use client";

import { useState } from "react";

const properties = [
  {
    id: 1,
    title: "Modern 4 Bedroom Duplex",
    image: "/images/properties/property1.jpg",
    location: "Ibadan",
    type: "For Sale",
    price: "₦75,000,000",
    bedrooms: 4,
    bathrooms: 3,
    agent: "Nestoria Agent",
    status: "Approved",
    featured: true,
    verified: true,
  },
  {
    id: 2,
    title: "Luxury Lagos Apartment",
    image: "/images/properties/property2.jpg",
    location: "Lagos",
    type: "For Rent",
    price: "₦5,000,000/year",
    bedrooms: 3,
    bathrooms: 2,
    agent: "Property Hub",
    status: "Pending",
    featured: false,
    verified: false,
  },
];


export default function PropertyManagement() {

  const [search, setSearch] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-5 rounded-2xl bg-white p-6 shadow-md md:flex-row md:items-center">

          <div>
            <h1 className="text-3xl font-extrabold text-[#0B2E6B]">
              🏠 Property Management
            </h1>

            <p className="mt-2 text-gray-600">
              Add, edit, approve and manage all property listings.
            </p>
          </div>


          <button className="rounded-lg bg-[#FFF700] px-6 py-3 font-bold text-[#0B2E6B]">
            + Add Property
          </button>

        </div>



        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search property..."
            className="w-full rounded-lg border p-3 outline-none focus:border-[#0B2E6B]"
          />


          <div className="mt-6 overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead>

                <tr className="border-b text-left">

                  <th className="p-3">
                    Property
                  </th>

                  <th className="p-3">
                    Details
                  </th>

                  <th className="p-3">
                    Agent
                  </th>

                  <th className="p-3">
                    Status
                  </th>

                  <th className="p-3">
                    Actions
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredProperties.map((property)=>(

                  <tr
                    key={property.id}
                    className="border-b"
                  >

                    <td className="p-3">

                      <p className="font-bold text-[#0B2E6B]">
                        {property.title}
                      </p>

                      <p className="text-sm text-gray-500">
                        📍 {property.location}
                      </p>

                    </td>


                    <td className="p-3">

                      <p>
                        {property.type}
                      </p>

                      <p className="font-bold">
                        {property.price}
                      </p>

                      <p>
                        🛏 {property.bedrooms} Beds
                      </p>

                      <p>
                        🛁 {property.bathrooms} Baths
                      </p>

                    </td>


                    <td className="p-3">
                      {property.agent}
                    </td>


                    <td className="p-3">

                      <div className="space-y-2">

                        <span className="block rounded-full bg-gray-100 px-3 py-1 text-sm">
                          {property.status}
                        </span>


                        {property.featured && (
                          <span className="block text-sm text-[#0B2E6B]">
                            ⭐ Featured
                          </span>
                        )}


                        {property.verified && (
                          <span className="block text-sm text-green-600">
                            ✔ Verified
                          </span>
                        )}

                      </div>

                    </td>


                    <td className="space-y-2 p-3">

                      <button className="block w-full rounded-lg bg-[#0B2E6B] px-4 py-2 text-white">
                        ✏️ Edit
                      </button>


                      <button className="block w-full rounded-lg bg-green-600 px-4 py-2 text-white">
                        ✔ Approve
                      </button>


                      <button className="block w-full rounded-lg bg-red-600 px-4 py-2 text-white">
                        🗑 Delete
                      </button>

                    </td>


                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </main>
  );
}
