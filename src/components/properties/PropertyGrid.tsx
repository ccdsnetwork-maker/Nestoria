"use client";

import { useMemo, useState } from "react";
import PropertyCard from "@/components/home/Featured/PropertyCard";
import { featuredProperties } from "@/components/home/Featured/PropertyData";
import Pagination from "@/components/ui/Pagination";

const ITEMS_PER_PAGE = 6;

export default function PropertyGrid() {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(featuredProperties.length / ITEMS_PER_PAGE)
  );


  const currentProperties = useMemo(() => {

    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return featuredProperties.slice(
      start,
      start + ITEMS_PER_PAGE
    );

  }, [currentPage]);


  return (
    <>

      <div className="mb-4 flex flex-wrap gap-3 rounded-lg bg-white px-4 py-3 text-sm text-[#0B2E6B] shadow-sm md:mb-6">

        <span>
          Total Properties: {featuredProperties.length}
        </span>

        <span>|</span>

        <span>
          Showing: {currentProperties.length}
        </span>

        <span>|</span>

        <span>
          Page: {currentPage} of {totalPages}
        </span>

      </div>


      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

        {currentProperties.map((property) => (

          <PropertyCard
            key={property.id}
            property={property}
          />

        ))}

      </div>


      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </>
  );
}
