"use client";

import { useState } from "react";
import CourseCard from "@/components/courses/CourseCard";
import CategoryChips from "@/components/courses/CategoryChips";
import FilterBar from "@/components/courses/FilterBar";
import Pagination from "@/components/courses/Pagination";
import { COURSES_PER_PAGE } from "@/data/courses";

export default function CoursesClient({ courses, categories, levels }) {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [page, setPage] = useState(1);

  const filtered = activeCategory === "Featured"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / COURSES_PER_PAGE);
  const paginated = filtered.slice((page - 1) * COURSES_PER_PAGE, page * COURSES_PER_PAGE);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-6">
      <FilterBar levels={levels} categories={categories} />
      <CategoryChips
        categories={categories}
        active={activeCategory}
        onChange={handleCategory}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {paginated.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          current={page}
          total={totalPages}
          onChange={setPage}
        />
      )}
    </div>
  );
}