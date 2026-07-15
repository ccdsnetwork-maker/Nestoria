"use client";

import { useState } from "react";

const tabs = ["Buy", "Rent", "Short-let"];

export default function SearchTabs() {
  const [active, setActive] = useState("Buy");

  return (
    <div className="flex overflow-hidden rounded-t-xl">

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`flex-1 py-3 font-semibold transition ${
            active === tab
              ? "bg-[#FFF700] text-[#0B2E6B]"
              : "bg-[#0B2E6B] text-white hover:bg-[#123D89]"
          }`}
        >
          {tab}
        </button>
      ))}

    </div>
  );
}