import { cn } from "@/lib/utils";

export default function CategoryCard({ name, icon: Icon, className }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      <div className="flex size-16 items-center justify-center rounded-2xl bg-highlight">
        <Icon className="size-8 text-slate-900" aria-hidden="true" />
      </div>
      <p className="text-sm font-semibold text-slate-900">{name}</p>
    </div>
  );
}