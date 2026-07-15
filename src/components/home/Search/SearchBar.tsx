import SearchTabs from "./SearchTabs";
import SearchForm from "./SearchForm";

export default function SearchBar() {
  return (
    <div className="w-full rounded-xl bg-white shadow-2xl">
      <SearchTabs />
      <SearchForm />
    </div>
  );
}