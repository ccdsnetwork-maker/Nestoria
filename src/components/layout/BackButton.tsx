"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#0B2E6B] transition hover:text-[#FFF700]"
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
}
