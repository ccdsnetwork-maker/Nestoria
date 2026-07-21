"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FeedbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const title =
    searchParams.get("title") ||
    "Your request has been submitted successfully";

  const message =
    searchParams.get("message") ||
    "Thank you for using Nestoria.";

  const back =
    searchParams.get("back") ||
    "/";

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">

        <div className="mb-5 text-5xl">
          ✅
        </div>

        <h1 className="text-2xl font-extrabold text-[#0B2E6B]">
          {title}
        </h1>

        <p className="mt-4 text-sm text-gray-600">
          {message}
        </p>

        <button
          onClick={() => router.push(back)}
          className="mt-8 rounded-lg bg-[#FFF700] px-8 py-3 font-bold text-[#0B2E6B]"
        >
          OK
        </button>

      </div>
    </main>
  );
}
