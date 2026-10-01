"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CircleCheckFill, PlayFill } from "@gravity-ui/icons";
import Image from "next/image";
import ProgressCard from "@/components/cards/ProgressCard";
import CourseReviews from "./CourseReviews";

const tabs = ["About", "Lessons", "Reviews"];

export default function CourseTabs({ detail }) {
  const [active, setActive] = useState("About");

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1 border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              "px-5 py-2.5 text-sm font-medium transition",
              active === tab
                ? "border-b-2 border-brand text-brand"
                : "text-slate-500 hover:text-slate-800",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── About ── */}
      {active === "About" && (
        <div className="mt-6 flex flex-col gap-8">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Description
            </h2>
            <div className="mt-3 space-y-4 text-sm leading-relaxed text-slate-600">
              {detail.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Sneak Peek */}
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Sneak Peak
            </h2>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {detail.sneakPeek.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl bg-slate-200"
                >
                  <Image
                    src={src}
                    alt={`Sneak peek ${i + 1}`}
                    width={200}
                    height={120}
                    className="h-[80px] w-full object-cover sm:h-[100px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Points */}
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Key Points
            </h2>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {detail.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CircleCheckFill
                    className="mt-0.5 size-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── Lessons ── */}
      {active === "Lessons" && (
        <div className="mt-6 flex flex-col gap-8">
          {/* Explore the Modules */}
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Explore the Modules
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {detail.lessonContent}
            </p>
          </div>

          {/* Lesson List */}
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Lesson List
            </h2>
            <ul className="mt-4 flex flex-col gap-4">
              {detail.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-brand/30 hover:bg-white"
                >
                  {/* Play icon */}
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-highlight">
                    <PlayFill
                      className="size-4 translate-x-0.5 text-slate-900"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {lesson.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {lesson.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Lesson Content */}
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Lesson Content
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Engage with each lesson through captivating video content,
              detailed lecture explanations, and interactive elements. Download
              resources, complete assignments, and deepen your understanding
              with quizzes.
            </p>
          </div>

          {/* Lesson Progress Tracking */}
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Lesson Progress Tracking
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Witness your growth as you complete lessons, with an intuitive
              progress tracking feature guiding you through your learning
              journey.
            </p>
            <div className="mt-4 max-w-[320px]">
              <ProgressCard
                label={detail.lessonProgress.label}
                value={detail.lessonProgress.value}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Reviews ── */}
      {active === "Reviews" && (
        <div className="mt-6">
          {detail.reviews ? (
            <CourseReviews reviews={detail.reviews} />
          ) : (
            <p className="text-center text-sm text-slate-400">
              No reviews yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
