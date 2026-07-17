import PropertyCard from "./PropertyCard";
import { featuredProperties } from "./PropertyData";
import Link from "next/link";

export default function FeaturedProperties() {
  const homepageProperties = featuredProperties.slice(0, 6);

  return (
    <section className="bg-gray-100 py-8 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <div className="mb-6 text-center md:mb-12">
          <p className="inline-block rounded-full bg-[#FFF700] px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#0B2E6B]">
  Featured Properties
</p>

          <h2 className="mt-2 text-2xl font-bold text-[#0B2E6B] md:mt-3 md:text-4xl">
            Discover Your Dream Property
          </h2>

          <p className="mx-auto mt-2 max-w-3xl text-sm text-gray-600 md:mt-4 md:text-base">
            Browse our carefully selected premium properties available for
            sale and rent across Nigeria.
          </p>
        </div>

        <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {homepageProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

        <div className="mt-6 text-center md:mt-12">
          <Link
            href="/properties"
            className="inline-flex rounded-lg bg-[#FFF700] px-6 py-2.5 text-sm font-bold text-[#0B2E6B] transition hover:opacity-90 md:px-8 md:py-3 md:text-base"
         >
            View All Properties
          </Link>
        </div>

      </div>
    </section>
  );
}
