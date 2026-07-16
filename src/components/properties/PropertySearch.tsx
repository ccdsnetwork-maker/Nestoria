"use client";

import { Search } from "lucide-react";

export default function PropertySearch() {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md md:rounded-2xl md:p-6">

      <div className="flex flex-col gap-3 md:flex-row">

        <div className="flex flex-1 items-center gap-3 rounded-lg border border-gray-200 px-4 py-3">
          <Search size={20} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search property by location, type or keyword..."
            className="w-full text-sm outline-none md:text-base"
          />

        </div>


        <button
          className="rounded-lg bg-[#0B2E6B] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 md:text-base"
        >
          Search
        </button>

      </div>

    </div>
  );
}
