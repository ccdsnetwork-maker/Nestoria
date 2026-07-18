"use client";

import {
  Users,
  Home,
  CreditCard,
  Wallet,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  UserPlus,
  Building2,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "1,245",
    change: "+12% this month",
    icon: Users,
  },
  {
    title: "Properties",
    value: "356",
    change: "+8% this month",
    icon: Home,
  },
  {
    title: "Revenue",
    value: "₦12.5M",
    change: "+18% this month",
    icon: Wallet,
  },
  {
    title: "Subscriptions",
    value: "89",
    change: "+5% this month",
    icon: CreditCard,
  },
];

const activities = [
  "New property submitted for approval",
  "Premium membership purchased",
  "Interior design request received",
  "Property listing approved",
  "New agent registration completed",
];

const approvals = [
  "3 properties waiting for approval",
  "5 user registrations pending review",
  "2 interior projects awaiting assignment",
];

export default function Dashboard() {
  return (
    <div>
      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h2 className="text-3xl font-extrabold text-[#0B2E6B]">
          Admin Dashboard
        </h2>

        <p className="mt-2 text-gray-600">
          Monitor and manage the entire Nestoria platform from one place.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <Icon size={35} className="text-[#0B2E6B]" />

              <h3 className="mt-4 font-bold text-[#0B2E6B]">
                {item.title}
              </h3>

              <p className="mt-2 text-3xl font-extrabold">
                {item.value}
              </p>

              <p className="mt-2 text-sm text-green-600">
                {item.change}
              </p>
            </div>
          );
        })}
      </div>


      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold text-[#0B2E6B]">
            Revenue Summary
          </h3>

          <div className="mt-5 space-y-3 text-gray-600">
            <p>Total Property Sales: ₦85,000,000</p>
            <p>Membership Revenue: ₦2,500,000</p>
            <p>Interior Revenue: ₦4,800,000</p>
          </div>
        </div>


        <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold text-[#0B2E6B]">
            Analytics
          </h3>

          <div className="mt-5 flex h-44 items-center justify-center rounded-lg bg-gray-100">
            Property & Revenue Chart
          </div>
        </div>

      </div>


      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-white p-6 shadow-md">

          <div className="flex items-center gap-2">
            <Clock className="text-[#0B2E6B]" />
            <h3 className="text-xl font-bold text-[#0B2E6B]">
              Pending Approvals
            </h3>
          </div>

          <ul className="mt-5 space-y-3 text-gray-600">
            {approvals.map((item) => (
              <li key={item} className="flex gap-2">
                <AlertCircle size={18} />
                {item}
              </li>
            ))}
          </ul>

        </div>


        <div className="rounded-xl bg-white p-6 shadow-md">

          <div className="flex items-center gap-2">
            <CheckCircle className="text-[#0B2E6B]" />
            <h3 className="text-xl font-bold text-[#0B2E6B]">
              Recent Activities
            </h3>
          </div>

          <ul className="mt-5 space-y-3 text-gray-600">
            {activities.map((item) => (
              <li key={item}>
                ✓ {item}
              </li>
            ))}
          </ul>

        </div>

      </div>


      <div className="mt-8 rounded-xl bg-white p-6 shadow-md">

        <h3 className="text-xl font-bold text-[#0B2E6B]">
          Quick Actions
        </h3>

        <div className="mt-5 flex flex-wrap gap-3">

          <button className="flex items-center gap-2 rounded-lg bg-[#0B2E6B] px-5 py-3 text-white">
            <Plus size={18}/>
            Add Property
          </button>


          <button className="flex items-center gap-2 rounded-lg bg-[#FFF700] px-5 py-3 font-bold text-[#0B2E6B]">
            <CreditCard size={18}/>
            Create Plan
          </button>


          <button className="flex items-center gap-2 rounded-lg bg-[#0B2E6B] px-5 py-3 text-white">
            <UserPlus size={18}/>
            Manage Users
          </button>


          <button className="flex items-center gap-2 rounded-lg bg-[#0B2E6B] px-5 py-3 text-white">
            <Building2 size={18}/>
            Interior Requests
          </button>

        </div>

      </div>

    </div>
  );
}
