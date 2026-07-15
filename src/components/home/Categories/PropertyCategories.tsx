import Link from "next/link";
import {
  Building2,
  Home,
  Landmark,
  Briefcase,
  Gem,
  KeyRound,
} from "lucide-react";

const categories = [
  {
    title: "Buy Property",
    description: "Discover houses, apartments and land for sale.",
    icon: Home,
    href: "/properties?type=buy",
  },
  {
    title: "Rent Property",
    description: "Find comfortable homes and apartments for rent.",
    icon: KeyRound,
    href: "/properties?type=rent",
  },
  {
    title: "Commercial",
    description: "Offices, shops and commercial investments.",
    icon: Briefcase,
    href: "/properties?type=commercial",
  },
  {
    title: "Land",
    description: "Secure genuine plots and development land.",
    icon: Landmark,
    href: "/properties?type=land",
  },
  {
    title: "Luxury Homes",
    description: "Premium residences with world-class finishes.",
    icon: Gem,
    href: "/properties?type=luxury",
  },
  {
    title: "Short-let",
    description: "Book serviced apartments for short stays.",
    icon: Building2,
    href: "/properties?type=shortlet",
  },
];

export default function PropertyCategories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-widest text-[#FFF700]">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B2E6B] md:text-4xl">
            Browse Property Categories
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Explore different property categories tailored to your lifestyle,
            investment goals and business needs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:border-[#FFF700] hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0B2E6B] text-[#FFF700]">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-[#0B2E6B]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}