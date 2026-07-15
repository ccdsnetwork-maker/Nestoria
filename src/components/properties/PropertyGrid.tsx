import PropertyCard from "@/components/home/Featured/PropertyCard";
import { featuredProperties } from "@/components/home/Featured/PropertyData";
import PropertyPagination from "./PropertyPagination";

export default function PropertyGrid() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>

      <PropertyPagination />
    </>
  );
}
