import { Suspense } from "react";
import FeedbackContent from "./FeedbackContent";

export default function FeedbackPage() {
  return (
    <Suspense fallback={
      <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="text-[#0B2E6B] font-bold">
          Loading...
        </div>
      </main>
    }>
      <FeedbackContent />
    </Suspense>
  );
}
