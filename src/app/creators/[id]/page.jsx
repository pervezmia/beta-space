import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CreatorCourses from "@/components/creator/CreatorCourses";
import { creators } from "@/data/creators";
import { courses } from "@/data/courses";
import { Button } from "@heroui/react";
import { Funnel, BarChartAscending, ListUl, ChevronDown } from "@gravity-ui/icons";

export function generateStaticParams() {
  return creators.map((c) => ({ id: String(c.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const creator = creators.find((c) => String(c.id) === id);
  if (!creator) return {};
  return { title: `${creator.name} | ByteSpace` };
}

export default async function CreatorProfilePage({ params }) {
  const { id } = await params;
  const creator = creators.find((c) => String(c.id) === id);
  if (!creator) notFound();

  const creatorCourses = courses.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">

      {/* Blue header */}
      <div
        className="bg-brand"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      >
        <Container className="py-10">
          {/* Avatar + name */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="size-16 overflow-hidden rounded-full bg-slate-300 ring-4 ring-white/20">
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  width={64}
                  height={64}
                  className="size-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-white sm:text-2xl">
                    {creator.name}
                  </h1>
                  <span className="rounded-full bg-highlight px-3 py-0.5 text-xs font-semibold text-slate-900">
                    {creator.badge}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-white/70">{creator.role}</p>
              </div>
            </div>

            {/* Follow button */}
            <Button className="h-10 rounded-full bg-highlight px-6 text-sm font-semibold text-slate-900 hover:bg-highlight/90">
              Follow
            </Button>
          </div>

          {/* Bio */}
          <div className="mt-6 max-w-[720px]">
            {creator.bio.split("\n\n").map((para, i) => (
              <p key={i} className="mt-2 text-sm leading-relaxed text-white/75">
                {para}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white">
              {creator.products} Products
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white">
              {creator.followers} Followers
            </span>
          </div>
        </Container>
      </div>

      {/* Courses */}
      <Container className="py-10">
        <CreatorCourses courses={creatorCourses} />
      </Container>

    </div>
  );
}