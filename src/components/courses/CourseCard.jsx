import Image from "next/image";
import { BarsAscendingAlignCenter, Star } from "@gravity-ui/icons";
import AvatarStack from "@/components/ui/AvatarStack";
import { defaultAvatars } from "@/data/avatars";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <Link href={`/courses/${course.id}`} className="group ...">
      <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
        {/* Thumbnail */}
        <div className="relative h-[160px] overflow-hidden bg-slate-200">
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={160}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        </div>

        {/* Body */}
        <div className="p-4">
          <h3 className="line-clamp-1 text-sm font-semibold text-slate-900">
            {course.title}
          </h3>
          <p className="mt-0.5 text-xs text-slate-400">
            by <span className="text-brand">{course.instructor}</span>
          </p>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1">
            <Star className="size-3.5 text-highlight" aria-hidden="true" />
            <span className="text-xs font-medium text-slate-700">
              {course.rating}
            </span>
            <span className="text-xs text-slate-400">({course.reviews})</span>
          </div>

          {/* Level + Avatars */}
          <div className="mt-3 flex items-center justify-between">
            <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
              <BarsAscendingAlignCenter className="size-3" aria-hidden="true" />
              {course.level}
            </span>
            <AvatarStack
              avatars={defaultAvatars.slice(0, 3)}
              total="26+"
              size="sm"
            />
          </div>

          {/* Price */}
          <p className="mt-3 text-base font-bold text-brand">
            ${course.price}
            <span className="text-xs font-normal text-slate-400">
              /lifetime
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
