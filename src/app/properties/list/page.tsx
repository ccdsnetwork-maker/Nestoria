import { Suspense } from "react";
import ListPropertyContent from "./ListProperty";

export default function ListProperty() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <ListPropertyContent />
    </Suspense>
  );
}
