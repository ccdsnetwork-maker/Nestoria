import Hero from "@/components/home/Hero/Hero";
import FeaturedProperties from "@/components/home/Featured/FeaturedProperties";
import InteriorShowcase from "@/components/home/Interiors/InteriorShowcase";
import WhyChoose from "@/components/home/WhyChoose/WhyChoose";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import CTA from "@/components/home/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <InteriorShowcase />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </>
  );
}
