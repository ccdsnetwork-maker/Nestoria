import {
  BadgeCheck,
  ShieldCheck,
  Search,
  Headset,
} from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: BadgeCheck,
      title: "Verified Listings",
      description:
        "Every property is carefully reviewed to help you find genuine opportunities.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Platform",
      description:
        "Nestoria is built to connect buyers, renters and property owners with confidence.",
    },
    {
      icon: Search,
      title: "Smart Search",
      description:
        "Quickly discover properties using powerful search and filtering options.",
    },
    {
      icon: Headset,
      title: "Dedicated Support",
      description:
        "Our support team is always available to guide you throughout your property journey.",
    },
  ];

  return (
    <section className="bg-gray-200 py-8 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <div className="mb-6 text-center md:mb-14">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            WHY CHOOSE NESTORIA
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[var(--heading)] md:mt-4 md:text-4xl">
            Your Trusted Property Partner
          </h2>

          <p className="mx-auto mt-2 max-w-3xl text-sm text-[var(--text-muted)] md:mt-5 md:text-base">
            We combine technology, transparency and exceptional customer
            service to make buying, renting and requesting properties simple.
          </p>

        </div>


        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-xl bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl md:rounded-2xl md:p-8"
              >

                <div className="mb-4 inline-flex rounded-full bg-[var(--primary)] p-3 md:mb-6 md:p-4">

                  <Icon
                    size={28}
                    strokeWidth={2}
                    className="text-[var(--accent)] md:h-[34px] md:w-[34px]"
                  />

                </div>

                <h3 className="mb-2 text-lg font-bold text-[var(--heading)] md:mb-3 md:text-xl">
                  {reason.title}
                </h3>

                <p className="text-sm text-[var(--text-muted)] md:text-base">
                  {reason.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
