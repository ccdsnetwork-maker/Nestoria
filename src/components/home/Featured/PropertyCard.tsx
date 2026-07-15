import Image from "next/image";
import Link from "next/link";
import {
  Star,
  BadgeCheck,
  MapPin,
  Bed,
  Bath,
  Car,
  Ruler,
  Heart,
  Phone,
  MessageCircle,
} from "lucide-react";

import { Property } from "./PropertyData";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-56">

        <Image
          src={property.image}
          alt={property.title}
          width={800}
          height={600}
          className="h-full w-full object-cover"
        />

        <div className="absolute left-3 top-3 flex gap-2">

          {property.featured && (
            <span className="flex items-center gap-1 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white">
              <Star size={14} fill="currentColor" />
              Featured
            </span>
          )}

          {property.verified && (
            <span className="flex items-center gap-1 rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-semibold text-white">
              <BadgeCheck size={14} />
              Verified
            </span>
          )}

        </div>

      </div>

      <div className="space-y-3 p-4">

        <h2 className="text-2xl font-bold text-[var(--primary)]">
          {property.price}
        </h2>

        <h3 className="text-lg font-semibold leading-tight">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <MapPin size={16} />
          {property.location}
        </div>

        <div className="grid grid-cols-4 gap-2 text-xs text-[var(--text-muted)]">

          <div className="flex items-center gap-1">
            <Bed size={14} />
            {property.beds}
          </div>

          <div className="flex items-center gap-1">
            <Bath size={14} />
            {property.baths}
          </div>

          <div className="flex items-center gap-1">
            <Car size={14} />
            {property.parking}
          </div>

          <div className="flex items-center gap-1">
            <Ruler size={14} />
            {property.area}
          </div>

        </div>

        <div className="flex flex-wrap gap-2">

          {property.features.slice(0, 5).map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs"
            >
              {feature}
            </span>
          ))}

        </div>

        <p className="text-sm">
          <span className="font-semibold text-[var(--primary)]">
            Agent:
          </span>{" "}
          {property.agent}
        </p>

        <div className="flex gap-2 pt-2">

          <Link
            href={`/properties/${property.id}`}
            className="flex-1 rounded-lg bg-[var(--primary)] py-2 text-center text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            View Details
          </Link>

          <button
            className="rounded-lg border border-[var(--border)] p-2 transition hover:bg-gray-100"
            aria-label="Save Property"
          >
            <Heart size={18} />
          </button>

          <button
            className="rounded-lg bg-[var(--secondary)] p-2 text-white transition hover:bg-[var(--secondary-dark)]"
            aria-label="Call Agent"
          >
            <Phone size={18} />
          </button>

          <button
            className="rounded-lg bg-[var(--accent)] p-2 text-white transition hover:bg-[var(--accent-dark)]"
            aria-label="WhatsApp Agent"
          >
            <MessageCircle size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}