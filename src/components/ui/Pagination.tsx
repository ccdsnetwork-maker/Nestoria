"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {

  const pages: (number | string)[] = [];

  pages.push(1);

  if (currentPage > 4) {
    pages.push("...");
  }


  const start = Math.max(2, currentPage - 2);
  const end = Math.min(totalPages - 1, currentPage + 2);


  for (let i = start; i <= end; i++) {
    pages.push(i);
  }


  if (currentPage < totalPages - 3) {
    pages.push("...");
  }


  if (totalPages > 1) {
    pages.push(totalPages);
  }


  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:mt-12">

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
        className="rounded-lg border px-3 py-2 text-xs disabled:opacity-50 md:px-4 md:text-sm"
      >
        First
      </button>


      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-lg border px-3 py-2 text-xs disabled:opacity-50 md:px-4 md:text-sm"
      >
        Prev
      </button>


      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-1 text-sm">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={
              currentPage === page
                ? "rounded-lg bg-[#0B2E6B] px-3 py-2 text-xs font-bold text-white md:px-4 md:text-sm"
                : "rounded-lg border bg-white px-3 py-2 text-xs text-[#0B2E6B] md:px-4 md:text-sm"
            }
          >
            {page}
          </button>
        )
      )}


      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-lg border px-3 py-2 text-xs disabled:opacity-50 md:px-4 md:text-sm"
      >
        Next
      </button>


      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
        className="rounded-lg border px-3 py-2 text-xs disabled:opacity-50 md:px-4 md:text-sm"
      >
        Last
      </button>

    </div>
  );
}
