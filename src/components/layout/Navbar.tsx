"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Interiors", href: "/interiors" },
    { name: "Careers", href: "/careers" },
    { name: "Login", href: "/login" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0B2E6B] shadow-lg">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/nestoria-logo.png"
            alt="Nestoria Interiors & Properties"
            width={55}
            height={55}
            priority
          />

          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-white">
              Nestoria
            </span>
            <span className="text-xs font-bold tracking-wide text-[#FFF700]">
              INTERIORS & PROPERTIES
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "font-semibold text-[#FFF700]"
                  : "text-white hover:text-[#FFF700]"
              }
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/register"
            className="rounded-lg bg-[#FFF700] px-5 py-2 font-semibold text-[#0B2E6B]"
          >
            Register
          </Link>
        </div>

        <MobileMenu />

      </div>
    </nav>
  );
}