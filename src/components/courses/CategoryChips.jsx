"use client";

import { cn } from "@/lib/utils";

export default function CategoryChips({ categories, active, onChange }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <li key={cat}>
          <button
            type="button"
            onClick={() => onChange(cat)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition",
              active === cat
                ? "bg-highlight text-slate-900"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            {cat}
          </button>
        </li>
      ))}
    </ul>
  );
}