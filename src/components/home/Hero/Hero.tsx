import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import SearchBar from "../Search/SearchBar";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[750px] w-full overflow-hidden">

      <HeroBackground image="/images/home/hero.jpg" />

      <div className="relative z-10 flex min-h-[600px] md:min-h-[750px] items-center justify-center px-6">

        <HeroContent />

      </div>

      <div className="absolute bottom-0 left-1/2 z-20 w-full max-w-6xl -translate-x-1/2 translate-y-1/2 px-6">

        <SearchBar />

      </div>

    </section>
  );
}