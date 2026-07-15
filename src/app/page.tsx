import Hero from "@/components/home/Hero/Hero";
import FeaturedProperties from "@/components/home/Featured/FeaturedProperties";
import InteriorShowcase from "@/components/home/Interiors/InteriorShowcase";
import WhyChoose from "@/components/home/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <InteriorShowcase />
      <WhyChoose />
    </>
  );
}