import SearchTabs from "./SearchTabs";
import SearchForm from "./SearchForm";

export default function SearchBar() {
  return (
    <div className="absolute bottom-[-90px] left-1/2 z-30 w-[95%] max-w-6xl -translate-x-1/2 rounded-xl bg-white shadow-2xl">

      <SearchTabs />

      <SearchForm />

    </div>
  );
}