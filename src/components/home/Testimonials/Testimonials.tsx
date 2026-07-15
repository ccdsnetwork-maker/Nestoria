const testimonials = [
  {
    name: "Adeola Johnson",
    role: "Home Owner",
    message:
      "Nestoria helped us find a beautiful home that perfectly matched our needs. The experience was smooth and professional.",
  },
  {
    name: "Michael Williams",
    role: "Property Investor",
    message:
      "A reliable platform with excellent attention to detail. Their approach to real estate feels truly premium.",
  },
  {
    name: "Sarah Okafor",
    role: "Interior Design Client",
    message:
      "The interior design service transformed our space beyond expectations. Every detail was handled beautifully.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-[#0B2E6B] md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600">
            Trusted by clients who value quality homes and exceptional design.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-white p-8 shadow-md"
            >
              <p className="text-gray-600">
                “{testimonial.message}”
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-[#0B2E6B]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
