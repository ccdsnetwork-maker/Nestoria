import PropertyCard from "./PropertyCard";
import { featuredProperties } from "./PropertyData";

export default function FeaturedProperties() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <p className="font-semibold uppercase tracking-widest text-[#B7D82E]">
            Featured Properties
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#0B2E6B]">
            Discover Your Dream Property
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Browse our carefully selected premium properties available for
            sale and rent across Nigeria.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}

        </div>

      </div>
    </section>
  );
}