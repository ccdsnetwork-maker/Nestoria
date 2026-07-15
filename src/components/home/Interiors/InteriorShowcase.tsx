import Image from "next/image";
import Link from "next/link";

export default function InteriorShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-widest text-[#B7D82E]">
            Interior Design
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#0B2E6B]">
            Beautiful Spaces Crafted For You
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-600">
            We transform ordinary spaces into luxurious, functional and
            timeless interiors tailored to your lifestyle and taste.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

            <div className="relative h-[420px]">

              <Image
                src="/images/interiors/interior1.jpg"
                alt="Luxury Living Room"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />

            </div>

            <div className="space-y-4 p-8">

              <h3 className="text-3xl font-bold text-[#0B2E6B]">
                Luxury Living Room
              </h3>

              <p className="text-gray-600">
                Elegant interiors designed with premium finishes,
                modern lighting, bespoke furniture and timeless aesthetics.
              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="/interiors"
                  className="rounded-lg bg-[#0B2E6B] px-6 py-3 font-semibold text-white transition hover:bg-blue-900"
                >
                  View Portfolio
                </Link>

                <Link
                  href="/interiors"
                  className="rounded-lg border border-[#B7D82E] px-6 py-3 font-semibold text-[#B7D82E] transition hover:bg-[#B7D82E] hover:text-[#0B2E6B]"
                >
                  Request Design
                </Link>

              </div>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6">

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
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="relative h-56">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />

                </div>

                <div className="p-4">

                  <h4 className="text-lg font-semibold text-[#0B2E6B]">
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