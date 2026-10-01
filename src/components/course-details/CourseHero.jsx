import {Star, Person, BarsAscendingAlignCenter } from "@gravity-ui/icons";

export default function CourseHero({ detail }) {
  return (
    <div className="bg-brand px-0 py-10">
      <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        {detail.title}
      </h1>
      <p className="mt-2 text-sm text-white/70">{detail.subtitle}</p>
      <p className="mt-3 text-xs text-white/60">
        by{" "}
        <span className="font-medium text-highlight">{detail.instructor}</span>
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white">
          <BarsAscendingAlignCenter className="size-3.5" aria-hidden="true" />
          {detail.level}
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white">
          <Star className="size-3.5 text-highlight" aria-hidden="true" />
          {detail.rating} ({detail.reviews} reviews)
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white">
          <Person className="size-3.5" aria-hidden="true" />
          {detail.students} Students
        </span>
      </div>
    </div>
  );
}