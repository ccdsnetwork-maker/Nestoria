import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import SearchBar from "../Search/SearchBar";

export default function Hero() {
  return (
    <section className="relative w-full overflow-visible min-h-[980px] md:min-h-[780px]">
      <HeroBackground image="/images/home/hero.jpg" />

      <div className="relative z-10 flex min-h-[650px] md:min-h-[780px] items-center justify-center px-6">
        <HeroContent />
      </div>

      <div className="absolute left-1/2 bottom-0 z-20 w-full max-w-6xl -translate-x-1/2 translate-y-1/2 px-4 md:px-6">
        <SearchBar />
      </div>
    </section>
  );
}