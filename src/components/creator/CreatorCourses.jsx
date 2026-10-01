"use client";

import { useState } from "react";
import CourseCard from "@/components/courses/CourseCard";
import { Funnel, Bars, ListUl, ChevronDown } from "@gravity-ui/icons";
import { cn } from "@/lib/utils";

const Select = ({ label, icon: Icon }) => (
  <div className="relative">
    <select className="h-9 appearance-none rounded-full border border-slate-200 bg-white pl-8 pr-8 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-brand">
      <option>{label}</option>
    </select>
    <Icon className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" />
    <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" />
  </div>
);

export default function CreatorCourses({ courses }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Filter bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600">
            <Funnel className="size-3.5" aria-hidden="true" />
            Filter
          </div>
          <Select label="Level" icon={Bars} />
          <Select label="Category" icon={ListUl} />
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600">
          Most relevant
          <ChevronDown className="size-3.5" aria-hidden="true" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}