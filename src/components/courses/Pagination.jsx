"use client";

import { ChevronLeft, ChevronRight } from "@gravity-ui/icons";
import { cn } from "@/lib/utils";

export default function Pagination({ current, total, onChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Previous page"
        className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50 disabled:opacity-40"
      >
        <ChevronLeft className="size-4" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          aria-current={current === page ? "page" : undefined}
          className={cn(
            "flex size-9 items-center justify-center rounded-full text-sm font-medium transition",
            current === page
              ? "bg-brand text-white"
              : "border border-slate-200 text-slate-600 hover:bg-slate-50"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        aria-label="Next page"
        className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50 disabled:opacity-40"
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}