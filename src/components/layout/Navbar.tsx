"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0B2E6B] shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="text-2xl font-extrabold text-white">
          Nestoria
        </Link>

        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/properties"
            className="text-white hover:text-[#FFF700] transition"
          >
            Properties
          </Link>

          <Link
            href="/interiors"
            className="text-white hover:text-[#FFF700] transition"
          >
            Interiors
          </Link>

          <Link
            href="/careers"
            className="text-white hover:text-[#FFF700] transition"
          >
            Careers
          </Link>

          <Link
            href="/login"
            className="text-white hover:text-[#FFF700] transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-[#FFF700] px-5 py-2 font-semibold text-[#0B2E6B] transition hover:opacity-90"
          >
            Register
          </Link>

        </div>
      </div>
    </nav>
  );
}