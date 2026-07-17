import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David Adekunle",
    role: "Property Buyer",
    message:
      "Nestoria made finding my dream home simple and stress-free. The process was transparent and professional.",
  },
  {
    name: "Sarah Johnson",
    role: "Interior Design Client",
    message:
      "The interior team transformed my space beautifully. The attention to detail was exceptional.",
  },
  {
    name: "Michael Oluwole",
    role: "Property Investor",
    message:
      "A trusted platform with genuine properties and excellent customer support.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-8 md:py-20">

      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <div className="mb-6 text-center md:mb-12">

          <p className="inline-block rounded-full bg-[#FFF700] px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#0B2E6B]">
 Testimonials
</p>

          <h2 className="mt-2 text-2xl font-bold text-[#0B2E6B] md:text-4xl">
            What Our Clients Say
          </h2>

        </div>


        <div className="grid gap-4 md:grid-cols-3 md:gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-xl bg-gray-100 p-5 shadow-md md:rounded-2xl md:p-8"
            >

              <div className="mb-3 flex gap-1">

                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    fill="currentColor"
                    className="text-green-500"
                  />
                ))}

              </div>


              <p className="text-sm text-gray-600 md:text-base">
                "{item.message}"
              </p>


              <div className="mt-4">

                <h3 className="font-bold text-[#0B2E6B]">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
