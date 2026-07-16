import Image from "next/image";
import Link from "next/link";

export default function InteriorShowcase() {
  return (
    <section className="bg-white py-8 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <div className="mb-6 text-center md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#B7D82E]">
            Interior Design
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#0B2E6B] md:mt-3 md:text-4xl">
            Beautiful Spaces Crafted For You
          </h2>

          <p className="mx-auto mt-2 max-w-3xl text-sm text-gray-600 md:mt-5 md:text-base">
            We transform ordinary spaces into luxurious, functional and
            timeless interiors tailored to your lifestyle and taste.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="relative h-64 md:h-[420px]">
              <Image
                src="/images/interiors/interior1.jpg"
                alt="Luxury Living Room"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-3 p-5 md:space-y-4 md:p-8">

              <h3 className="text-2xl font-bold text-[#0B2E6B] md:text-3xl">
                Luxury Living Room
              </h3>

              <p className="text-sm text-gray-600 md:text-base">
                Elegant interiors designed with premium finishes,
                modern lighting, bespoke furniture and timeless aesthetics.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4">

                <Link
                  href="/interiors"
                  className="rounded-lg bg-[#0B2E6B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900 md:px-6 md:py-3 md:text-base"
                >
                  View Portfolio
                </Link>

                <Link
                  href="/interiors"
                  className="rounded-lg border border-[#B7D82E] px-5 py-2.5 text-sm font-semibold text-[#B7D82E] transition hover:bg-[#B7D82E] hover:text-[#0B2E6B] md:px-6 md:py-3 md:text-base"
                >
                  Request Design
                </Link>

              </div>

            </div>
          </div>


          <div className="grid grid-cols-2 gap-3 md:gap-6">

            {[
              {
                image: "/images/interiors/interior1.jpg",
                title: "Living Room",
              },
              {
                image: "/images/interiors/interior2.jpg",
                title: "Bedroom",
              },
              {
                image: "/images/interiors/interior3.jpg",
                title: "Kitchen",
              },
              {
                image: "/images/interiors/interior2.jpg",
                title: "Dining Room",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-xl bg-white shadow-lg"
              >

                <div className="relative h-36 md:h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-3 md:p-4">
                  <h4 className="text-sm font-semibold text-[#0B2E6B] md:text-lg">
                    {item.title}
                  </h4>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
