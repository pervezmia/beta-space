import Image from "next/image";
import { cn } from "@/lib/utils";

export default function TestimonialCard({ testimonial, className }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl bg-white p-6 shadow-sm",
        className
      )}
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        <div className="size-12 overflow-hidden rounded-full bg-slate-200 ring-2 ring-highlight/30">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={48}
            height={48}
            className="size-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-xs text-brand">{testimonial.role}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}