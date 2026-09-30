
import Container from "@/components/ui/Container";
import DiscoverFilter from "@/components/sections/DiscoverFilter";
import { discoverCategories } from "@/data/discover";
import { courses } from "@/data/courses";

export default function Discover() {
  return (
    <section
      aria-labelledby="discover-heading"
      className="bg-white py-16 lg:py-24"
    >
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-[640px] text-center">
          <h2
            id="discover-heading"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[40px]"
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Filter + Cards */}
        <div className="mt-10">
          <DiscoverFilter
            categories={discoverCategories}
            courses={courses}
          />
        </div>
      </Container>
    </section>
  );
}

