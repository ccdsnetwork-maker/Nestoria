import SearchButton from "./SearchButton";

export default function SearchForm() {
  return (
    <div className="grid gap-4 p-5 md:grid-cols-6">

      <input
        type="text"
        placeholder="Enter location"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0B2E6B] focus:ring-2 focus:ring-[#0B2E6B]/20"
      />

      <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0B2E6B] focus:ring-2 focus:ring-[#0B2E6B]/20">
        <option>Property Type</option>
        <option>Apartment</option>
        <option>Duplex</option>
        <option>Detached House</option>
        <option>Terrace House</option>
        <option>Bungalow</option>
        <option>Commercial</option>
        <option>Office Space</option>
        <option>Warehouse</option>
        <option>Land</option>
      </select>

      <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0B2E6B] focus:ring-2 focus:ring-[#0B2E6B]/20">
        <option>Min Price</option>
        <option>₦5M</option>
        <option>₦10M</option>
        <option>₦20M</option>
        <option>₦50M</option>
        <option>₦100M+</option>
      </select>

      <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0B2E6B] focus:ring-2 focus:ring-[#0B2E6B]/20">
        <option>Max Price</option>
        <option>₦20M</option>
        <option>₦50M</option>
        <option>₦100M</option>
        <option>₦200M</option>
        <option>₦500M+</option>
      </select>

      <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0B2E6B] focus:ring-2 focus:ring-[#0B2E6B]/20">
        <option>Bedrooms</option>
        <option>1 Bedroom</option>
        <option>2 Bedrooms</option>
        <option>3 Bedrooms</option>
        <option>4 Bedrooms</option>
        <option>5+ Bedrooms</option>
      </select>

      <SearchButton />

    </div>
  );
}