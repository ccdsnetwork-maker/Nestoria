import SearchButton from "./SearchButton";

export default function SearchForm() {
  return (
    <div className="grid gap-4 p-6 md:grid-cols-6">

      <input
        placeholder="Location"
        className="rounded-lg border p-3"
      />

      <select className="rounded-lg border p-3">
        <option>Property Type</option>
        <option>Apartment</option>
        <option>Duplex</option>
        <option>Detached House</option>
        <option>Land</option>
      </select>

      <select className="rounded-lg border p-3">
        <option>Min Price</option>
      </select>

      <select className="rounded-lg border p-3">
        <option>Max Price</option>
      </select>

      <select className="rounded-lg border p-3">
        <option>Bedrooms</option>
      </select>

      <SearchButton />

    </div>
  );
}