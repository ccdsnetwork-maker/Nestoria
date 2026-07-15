export default function PropertySearch() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <input
          type="text"
          placeholder="Location"
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0B2E6B]"
        />

        <select className="rounded-xl border border-gray-300 px-4 py-3">
          <option>Property Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Commercial</option>
          <option>Land</option>
        </select>

        <select className="rounded-xl border border-gray-300 px-4 py-3">
          <option>Purpose</option>
          <option>Buy</option>
          <option>Rent</option>
          <option>Short-let</option>
        </select>

        <select className="rounded-xl border border-gray-300 px-4 py-3">
          <option>Bedrooms</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
          <option>4+</option>
        </select>

        <input
          type="text"
          placeholder="Min Price"
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none"
        />

        <button className="rounded-xl bg-[#0B2E6B] px-4 py-3 font-bold text-white">
          Search
        </button>
      </div>
    </div>
  );
}
