import Container from "@/components/ui/Container";
import CoursesClient from "@/components/courses/CoursesClient";
import { courses, categories, levels } from "@/data/courses";
import { Magnifier } from "@gravity-ui/icons";

export const metadata = {
  title: "Courses | ByteSpace",
  description: "Find your next course on ByteSpace.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-brand py-14 text-center">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Find Your Next Course
        </h1>
        <div className="mx-auto mt-6 flex max-w-[500px] items-center gap-3 px-4">
          <label className="relative flex-1">
            <span className="sr-only">Search courses</span>
            <Magnifier className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search..."
              className="h-11 w-full rounded-full bg-white pl-11 pr-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-highlight"
            />
          </label>
          <button className="h-11 rounded-full bg-highlight px-6 text-sm font-semibold text-slate-900 transition hover:bg-highlight/90">
            Courses
          </button>
        </div>
      </div>

      {/* Course list */}
      <Container className="py-10">
        <CoursesClient
          courses={courses}
          categories={categories}
          levels={levels}
        />
      </Container>
    </div>
  );
}