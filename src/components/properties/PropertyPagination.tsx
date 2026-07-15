"use client";

import { useState } from "react";

export default function PropertyPagination() {
  const [page, setPage] = useState(1);

  const pages = [1, 2, 3, 4];

  return (
    <div className="mt-12 flex justify-center gap-3">
      {pages.map((item) => (
        <button
          key={item}
          onClick={() => setPage(item)}
          className={
            page === item
              ? "rounded-lg bg-[#0B2E6B] px-4 py-2 font-bold text-white"
              : "rounded-lg border border-gray-300 bg-white px-4 py-2 font-bold text-[#0B2E6B] hover:bg-gray-100"
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
}
