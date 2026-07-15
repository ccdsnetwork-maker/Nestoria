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
    <section className="bg-[#FFF700] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            WHY CHOOSE NESTORIA
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[var(--heading)]">
            Your Trusted Property Partner
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[var(--text-muted)]">
            We combine technology, transparency and exceptional customer
            service to make buying, renting and requesting properties simple.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex rounded-full bg-[var(--primary)] p-4">
                  <Icon
                    size={34}
                    strokeWidth={2}
                    className="text-[var(--accent)]"
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-[var(--heading)]">
                  {reason.title}
                </h3>

                <p className="text-[var(--text-muted)]">
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
