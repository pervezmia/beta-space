import { cn } from "@/lib/utils";

export default function CategoryStatCard({ name, courses, students, className }) {
  return (
    <div className={cn("rounded-2xl bg-white px-4 py-3.5 shadow-lg", className)}>
      <p className="text-base font-medium text-slate-900">{name}</p>
      <p className="mt-0.5 text-xs text-slate-500">
        {courses} <span aria-hidden="true">•</span> {students}
      </p>
    </div>
  );
}