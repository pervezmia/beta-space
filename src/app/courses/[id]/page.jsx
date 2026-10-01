import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import CourseHero from "@/components/course-details/CourseHero";
import CourseVideo from "@/components/course-details/CourseVideo";
import CourseTabs from "@/components/course-details/CourseTabs";
import CourseSidebar from "@/components/course-details/CourseSidebar";
import { courses, getCourseDetail } from "@/data/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ id: String(c.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
//   const detail = courseDetails[id];
const detail = getCourseDetail(id);
  if (!detail) return {};
  return {
    title: `${detail.title} | ByteSpace`,
    description: detail.subtitle,
  };
}

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  const course = courses.find((c) => String(c.id) === id);
  const detail = getCourseDetail(id);

  if (!course || !detail) notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Blue hero banner */}
      <div className="bg-brand">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
            <CourseHero detail={detail} />
            <div className="hidden lg:block" />
          </div>
        </Container>
      </div>

      {/* Main content */}
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <CourseVideo image={course.image} title={detail.title} />
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <CourseTabs detail={detail} />
            </div>
          </div>

          {/* Right */}
          <div>
            <CourseSidebar course={course} detail={detail} />
          </div>

        </div>
      </Container>
    </div>
  );
}