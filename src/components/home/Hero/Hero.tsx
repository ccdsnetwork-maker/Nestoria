import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import SearchBar from "../Search/SearchBar";

export default function Hero() {
  return (
    <section className="relative w-full overflow-visible">
      <HeroBackground image="/images/home/hero.jpg" />

      <div className="relative z-10 flex min-h-[700px] items-center justify-center px-6 md:min-h-[780px]">
        <HeroContent />
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 w-full max-w-6xl -translate-x-1/2 translate-y-1/2 px-4 md:px-6">
        <SearchBar />
      </div>

      {/* Space reserved for the floating search bar */}
      <div className="h-[320px] md:h-[240px]" />
    </section>
  );
}