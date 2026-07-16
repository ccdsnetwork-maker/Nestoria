import Link from "next/link";

export default function PropertyActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row md:gap-4">

      <Link
        href="/properties/list"
        className="rounded-lg bg-[#FFF700] px-5 py-3 text-center text-sm font-bold text-[#0B2E6B] transition hover:opacity-90 md:px-7 md:py-3 md:text-base"
      >
        List Your Property
      </Link>


      <Link
        href="/properties/request"
        className="rounded-lg border border-[#0B2E6B] bg-white px-5 py-3 text-center text-sm font-bold text-[#0B2E6B] transition hover:bg-gray-100 md:px-7 md:py-3 md:text-base"
      >
        Request A Property
      </Link>


    </div>
  );
}
