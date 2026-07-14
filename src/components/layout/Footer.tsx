export default function Footer() {
  return (
    <footer className="mt-16 bg-[#0B2E6B] py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold">
          Nestoria Interiors & Properties
        </h2>

        <p className="mt-3 max-w-xl text-sm text-gray-200">
          Building trust in real estate and transforming spaces with
          professional interior design solutions.
        </p>

        <div className="mt-6 space-y-3 text-sm">

          <p>
            📧{" "}
            <a
              href="mailto:nestoriainteriorsandproperties@gmail.com"
              className="hover:text-[#C7F000]"
            >
              nestoriainteriorsandproperties@gmail.com
            </a>
          </p>

          <p>
            📞{" "}
            <a
              href="tel:08029651803"
              className="hover:text-[#C7F000]"
            >
              08029651803
            </a>
          </p>

          <p>
            💬 WhatsApp:{" "}
            <a
              href="https://wa.me/2348168049408"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C7F000]"
            >
              08168049408
            </a>
          </p>

          <p>
            📷 Instagram:{" "}
            <a
              href="https://instagram.com/nestoria_properties_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C7F000]"
            >
              @nestoria_properties_
            </a>
          </p>

        </div>

        <div className="mt-8 border-t border-white/20 pt-5 text-xs text-gray-300">
          © {new Date().getFullYear()} Nestoria Interiors & Properties.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}