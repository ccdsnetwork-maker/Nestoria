import Link from "next/link";

export default function PropertyActions() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link
        href="/properties/list"
        className="rounded-xl bg-[#FFF700] px-6 py-3 text-center font-bold text-[#0B2E6B] transition hover:opacity-90"
      >
        List Your Property
      </Link>

      <Link
        href="/properties/request"
        className="rounded-xl border-2 border-[#0B2E6B] px-6 py-3 text-center font-bold text-[#0B2E6B] transition hover:bg-[#0B2E6B] hover:text-white"
      >
        Request a Property
      </Link>
    </div>
  );
}
