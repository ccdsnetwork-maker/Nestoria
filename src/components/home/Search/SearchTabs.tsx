"use client";

import { useState } from "react";

const tabs = [
  "Buy",
  "Rent",
  "Short-let",
  "Commercial",
  "Land",
  "Luxury",
];

export default function SearchTabs() {
  const [active, setActive] = useState("Buy");

  return (
    <div className="overflow-x-auto rounded-t-xl bg-[#0B2E6B]">
      <div className="flex min-w-max">

        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`whitespace-nowrap px-6 py-4 text-sm font-bold transition duration-300 ${
              active === tab
                ? "bg-[#FFF700] text-[#0B2E6B]"
                : "bg-[#0B2E6B] text-white hover:bg-[#123D89]"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>
    </div>
  );
}