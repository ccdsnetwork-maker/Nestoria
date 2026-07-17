import {
  Mail,
  Phone,
  Camera,
  MapPin,
} from "lucide-react";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#0B2E6B] py-8 text-white md:mt-16 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">

          {/* Contact Information */}
          <div>

            <h2 className="text-xl font-bold md:text-2xl">
              Nestoria Interiors & Properties
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-200 md:mt-3">
              Building trust in real estate and transforming spaces with
              professional interior design solutions.
            </p>


            <div className="mt-5 space-y-3 text-sm md:mt-6 md:space-y-4">

              <p className="flex items-center gap-3">
                <Mail size={18} />
                <span>
                  nestoriainteriorsandproperties@gmail.com
                </span>
              </p>


              <p className="flex items-center gap-3">
                <Phone size={18} />
                <span>
                  08029651803
                </span>
              </p>


              <p className="flex items-center gap-3">
                <FaWhatsapp size={18} />
<span>
08168049408
</span>
              </p>


              <p className="flex items-center gap-3">
                <Camera size={18} />
<span>
@nestoria_properties_
</span>
              </p>


              <p className="flex items-start gap-3">
                <MapPin size={18} />
                <span>
                  Ondo | Ogun | Oyo | Abuja (Branch Office)
                  <br />
                  Lagos (Head Office)
                </span>
              </p>

            </div>

          </div>


          {/* Links */}
          <div className="mt-2 md:mt-[120px]">

            <div className="space-y-3 text-sm md:space-y-4">

              <Link
                href="/about"
                className="block hover:text-[#FFF700]"
              >
                About Us
              </Link>


              <Link
                href="/properties"
                className="block hover:text-[#FFF700]"
              >
                Properties
              </Link>


              <Link
                href="/interiors"
                className="block hover:text-[#FFF700]"
              >
                Interiors
              </Link>


              <Link
                href="/careers"
                className="block hover:text-[#FFF700]"
              >
                Careers
              </Link>


              <Link
                href="/contact"
                className="block hover:text-[#FFF700]"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>


        <div className="mt-8 border-t border-white/20 pt-4 text-xs text-gray-300 md:mt-10 md:pt-5">
          © {new Date().getFullYear()} Nestoria Interiors & Properties.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
