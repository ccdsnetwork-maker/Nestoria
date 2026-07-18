"use client";

import { useState } from "react";

const users = [
  {
    id: 1,
    name: "John Ade",
    email: "john@email.com",
    phone: "08000000000",
    location: "Lagos, Nigeria",
    plan: "Gold",
    status: "Active",
    joined: "July 2026",
  },
  {
    id: 2,
    name: "Sarah Bello",
    email: "sarah@email.com",
    phone: "08111111111",
    location: "Abuja, Nigeria",
    plan: "Basic",
    status: "Active",
    joined: "July 2026",
  },
];


export default function UsersManagement() {

  const [search, setSearch] = useState("");


  const filteredUsers = users.filter((user)=>
    user.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">

      <div className="mx-auto max-w-7xl">

        <div className="rounded-2xl bg-white p-6 shadow-md">

          <h1 className="text-3xl font-extrabold text-[#0B2E6B]">
            👥 User Management
          </h1>

          <p className="mt-2 text-gray-600">
            Manage user accounts, memberships and access.
          </p>

        </div>



        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search users..."
            className="w-full rounded-lg border p-3"
          />


          <div className="mt-6 overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead>

                <tr className="border-b text-left">

                  <th className="p-3">
                    User
                  </th>

                  <th className="p-3">
                    Contact
                  </th>

                  <th className="p-3">
                    Plan
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

              {filteredUsers.map((user)=>(

                <tr key={user.id} className="border-b">

                  <td className="p-3">

                    <div className="flex items-center gap-3">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl">
                        👤
                      </div>


                      <div>

                        <p className="font-bold text-[#0B2E6B]">
                          {user.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          {user.location}
                        </p>

                      </div>

                    </div>

                  </td>


                  <td className="p-3">

                    <p>
                      {user.email}
                    </p>

                    <p>
                      {user.phone}
                    </p>

                  </td>


                  <td className="p-3">

                    <span className="rounded-full bg-[#FFF700] px-3 py-1 font-bold text-[#0B2E6B]">
                      {user.plan}
                    </span>

                  </td>


                  <td className="p-3">

                    <span className="text-green-600">
                      ✔ {user.status}
                    </span>

                    <p className="text-sm text-gray-500">
                      Joined {user.joined}
                    </p>

                  </td>


                  <td className="space-y-2 p-3">

                    <button className="block w-full rounded-lg bg-[#0B2E6B] px-4 py-2 text-white">
                      ✏️ Edit
                    </button>


                    <button className="block w-full rounded-lg bg-green-600 px-4 py-2 text-white">
                      💳 Change Plan
                    </button>


                    <button className="block w-full rounded-lg bg-red-600 px-4 py-2 text-white">
                      🚫 Suspend
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
