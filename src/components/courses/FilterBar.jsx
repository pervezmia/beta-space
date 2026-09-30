"use client";

import { Funnel, ChevronDown } from "@gravity-ui/icons";

const Select = ({ label, options }) => (
  <div className="relative">
    <select className="h-9 appearance-none rounded-full border border-slate-200 bg-white pl-3 pr-8 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-brand">
      <option value="">{label}</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
    <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
  </div>
);

export default function FilterBar({ levels, categories }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">
          <Funnel className="size-3.5" aria-hidden="true" />
          Filter
        </div>
        <Select label="Level" options={levels} />
        <Select label="Category" options={categories} />
      </div>
      <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">
        Most Popular
        <ChevronDown className="size-3.5" aria-hidden="true" />
      </div>
    </div>
  );
}