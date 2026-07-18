import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#0B2E6B] py-8 text-white md:mt-16 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold md:text-2xl">
              Nestoria Interiors &amp; Properties
            </h2>

            <p className="mt-3 max-w-md text-sm text-gray-200">
              Building trust in real estate and transforming spaces with
              professional interior design solutions.
            </p>

            <div className="mt-6 space-y-4 text-sm">

              <a
                href="mailto:nestoriainteriorsandproperties@gmail.com"
                className="flex items-center gap-3 transition hover:text-[#FFF700]"
              >
                <Mail size={18} />
                <span>nestoriainteriorsandproperties@gmail.com</span>
              </a>

              <a
                href="tel:+2348029651803"
                className="flex items-center gap-3 transition hover:text-[#FFF700]"
              >
                <Phone size={18} />
                <span>08029651803</span>
              </a>

              <a
                href="https://wa.me/2348168049408"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-[#25D366]"
              >
                <FaWhatsapp size={18} />
                <span>08168049408</span>
              </a>

              <a
                href="https://instagram.com/nestoria_properties_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-pink-400"
              >
                <FaInstagram size={18} />
                <span>@nestoria_properties_</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>
                  Ondo | Ogun | Oyo | Abuja (Branch Office)
                  <br />
                  Lagos (Head Office)
                </span>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-2 md:mt-[120px]">
            <div className="space-y-4 text-sm">

              <Link
                href="/about"
                className="block transition hover:text-[#FFF700]"
              >
                About Us
              </Link>

              <Link
                href="/properties"
                className="block transition hover:text-[#FFF700]"
              >
                Properties
              </Link>

              <Link
                href="/interiors"
                className="block transition hover:text-[#FFF700]"
              >
                Interiors
              </Link>

              <Link
                href="/careers"
                className="block transition hover:text-[#FFF700]"
              >
                Careers
              </Link>

              <Link
                href="/contact"
                className="block transition hover:text-[#FFF700]"
              >
                Contact Us
              </Link>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/20 pt-5 text-xs text-gray-300">
          © {new Date().getFullYear()} Nestoria Interiors &amp; Properties.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
