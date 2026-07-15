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
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      <div
        className={`absolute right-0 top-full w-72 overflow-hidden rounded-xl bg-[#0B2E6B] shadow-lg transition-all duration-300 ${
          open
            ? "mt-4 max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
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
    </div>
  );
}
