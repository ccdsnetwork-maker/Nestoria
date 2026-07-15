"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Interiors", href: "/interiors" },
    { name: "Careers", href: "/careers" },
    { name: "Login", href: "/login" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white"
        aria-label="Toggle menu"
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full bg-[#0B2E6B] px-6 py-6 shadow-lg">
          <div className="flex flex-col gap-5">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  pathname === link.href
                    ? "font-bold text-[#FFF700]"
                    : "font-bold text-white hover:text-[#FFF700]"
                }
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[#FFF700] px-5 py-2 text-center font-semibold text-[#0B2E6B]"
            >
              Register
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}