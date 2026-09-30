
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import CourseCard from "@/components/courses/CourseCard";
import Link from "next/link";

export default function DiscoverFilter({ categories, courses }) {
  const [active, setActive] = useState("Featured");
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? categories : categories.slice(0, 14);

  const filtered =
    active === "Featured"
      ? courses.slice(0, 6)
      : courses
          .filter((course) => course.category === active)
          .slice(0, 6);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Category Chips */}
      <ul className="flex flex-wrap justify-center gap-2">
        {visible.map((cat) => (
          <li key={cat}>
            <button
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition",
                active === cat
                  ? "bg-highlight text-slate-900"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand"
              )}
            >
              {cat}
            </button>
          </li>
        ))}

        {/* More Button */}
        {!showAll && (
          <li>
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-brand hover:underline"
            >
              + More
            </button>
          </li>
        )}
      </ul>

      {/* Course Grid */}
      <div className="mt-8 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))
        ) : (
          <p className="col-span-3 py-10 text-center text-slate-400">
            No courses in this category yet.
          </p>
        )}
      </div>

      {/* View All Courses */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/courses"
          className="rounded-full border border-brand px-8 py-2.5 text-sm font-medium text-brand transition hover:bg-brand hover:text-white"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

