import { cn } from "@/lib/utils";

export default function ProgressCard({ label, value, className }) {
  return (
    <div className={cn("rounded-2xl bg-white p-4 shadow-lg", className)}>
      <p className="text-sm text-slate-900">{label}</p>
      <p className="mt-1 text-5xl font-semibold leading-tight text-slate-900">{value}%</p>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100"
      >
        <div className="h-full rounded-full bg-highlight" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}