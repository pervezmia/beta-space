"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function StarRating({ rating, size = "sm" }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={cn(
            size === "sm" ? "size-3.5" : "size-4",
            star <= rating ? "text-highlight" : "text-slate-200"
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const filterOptions = ["All rating", "5 ★", "4 ★", "3 ★", "2 ★", "1 ★"];

export default function CourseReviews({ reviews }) {
  const [activeFilter, setActiveFilter] = useState("All rating");

   // Guard — reviews ba breakdown na thakle
  if (!reviews || !reviews.breakdown || !reviews.items) {
    return (
      <p className="text-center text-sm text-slate-400">
        No reviews yet for this course.
      </p>
    );
  }

  const filtered = activeFilter === "All rating"
    ? reviews.items
    : reviews.items.filter(
        (r) => r.rating === parseInt(activeFilter)
      );

  const maxCount = Math.max(...reviews.breakdown.map((b) => b.count));

  return (
    <div className="flex flex-col gap-8">

      {/* Header */}
      <div>
        <h2 className="text-base font-semibold text-slate-900">What Learners Are Saying</h2>
        <p className="mt-1 text-sm text-slate-500">
          Discover what our learners have to say about their experience with "Build Digital Asset: A
          Comprehensive Guide." Read reviews and ratings from individuals who have embarked on the
          transformative journey of mastering digital asset creation.
        </p>
      </div>

      {/* Rating summary */}
      <div className="flex items-start gap-8">
        {/* Big score */}
        <div className="flex flex-col items-center justify-center rounded-2xl bg-highlight/10 p-6">
          <p className="text-5xl font-bold text-slate-900">{reviews.average}</p>
          <StarRating rating={Math.round(reviews.average)} size="md" />
        </div>

        {/* Breakdown bars */}
        <div className="flex flex-1 flex-col gap-2">
          {reviews.breakdown.map((b) => (
            <div key={b.stars} className="flex items-center gap-3">
              <StarRating rating={b.stars} />
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-highlight transition-all"
                  style={{ width: `${(b.count / maxCount) * 100}%` }}
                />
              </div>
              <span className="w-8 text-right text-xs text-slate-500">{b.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter chips */}
      <div>
        <h2 className="text-base font-semibold text-slate-900">Individual Reviews:</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => setActiveFilter(opt)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-medium transition",
                  activeFilter === opt
                    ? "bg-brand text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand"
                )}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Review cards */}
      <ul className="flex flex-col gap-6">
        {filtered.map((review) => (
          <li key={review.id} className="flex gap-4">
            {/* Avatar */}
            <div className="size-10 shrink-0 overflow-hidden rounded-full bg-slate-200">
              <Image
                src={review.avatar}
                alt={review.name}
                width={40}
                height={40}
                className="size-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.role}</p>
                </div>
                <span className="shrink-0 text-xs text-slate-400">{review.date}</span>
              </div>
              <StarRating rating={review.rating} />
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{review.comment}</p>
            </div>
          </li>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-sm text-slate-400">No reviews for this rating.</p>
        )}
      </ul>

    </div>
  );
}