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

      <div className="relative z-20 mx-auto -mt-16 w-full max-w-6xl px-4 md:-mt-20 md:px-6">
        <SearchBar />
      </div>

      <div className="h-20 md:h-24" />
    </section>
  );
}
