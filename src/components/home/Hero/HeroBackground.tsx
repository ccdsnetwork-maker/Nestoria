import Image from "next/image";

interface HeroBackgroundProps {
  image: string;
}

export default function HeroBackground({
  image,
}: HeroBackgroundProps) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">

        <Image
          src={image}
          alt="Nestoria Hero"
          width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover"
        />

      </div>

      <div className="absolute inset-0 bg-[#0B2E6B]/60" />
    </>
  );
}