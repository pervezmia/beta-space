import Link from "next/link";
import { Button } from "@heroui/react";
import {
  BookOpen,
  Play,
  Person,
  CircleCheckFill,
  Medal,
} from "@gravity-ui/icons";
import Image from "next/image";

const includeIcons = { 
  "Learning Resources": BookOpen,
  "Quality Layout Videos": Play,
  "Certificate of Completion": Medal,
  "Private Consultation": Person,
};

export default function CourseSidebar({ course, detail }) {
  return (
    <div className="sticky top-28 rounded-3xl border border-slate-100 bg-white p-6 shadow-lg">
      {/* Lesson count */}
      <p className="text-sm font-semibold text-slate-900">
        {detail.totalLessons} Lessons ({detail.totalHours} hours)
      </p>

      {/* Curriculum */}
      <ul className="mt-4 flex flex-col gap-3">
        {detail.curriculum.map((item) => (
          <li key={item.id} className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-xs font-bold text-brand">{item.id}</span>
              <span className="text-xs text-slate-700">{item.title}</span>
            </div>
            <span className="shrink-0 text-xs text-slate-400">{item.videos} mins</span>
          </li>
        ))}
        {detail.curriculumExtra > 0 && (
          <li className="text-xs text-slate-400">
            +{detail.curriculumExtra} more videos
          </li>
        )}
      </ul>

      <p className="mt-5 text-xs text-slate-500">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* Price + CTA */}
      <div className="mt-4">
        <p className="text-2xl font-bold text-slate-900">
          ${detail.price}
          <span className="text-xs font-normal text-slate-400">/lifetime</span>
        </p>
        <Button className="mt-3 h-11 w-full rounded-full bg-highlight text-sm font-semibold text-slate-900 hover:bg-highlight/90">
          Enroll Now
        </Button>
      </div>

      {/* Includes */}
      <div className="mt-6">
        <p className="text-sm font-semibold text-slate-900">This course include</p>
        <ul className="mt-3 flex flex-col gap-2">
          {detail.includes.map((item) => {
            const Icon = includeIcons[item] ?? CircleCheckFill;
            return (
              <li key={item} className="flex items-center gap-2">
                <Icon className="size-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-xs text-slate-600">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Instructor */}
      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <div className="size-10 overflow-hidden rounded-full bg-slate-200">
          <Image
            src={detail.instructorAvatar}
            alt={detail.instructor}
            width={40}
            height={40}
            className="size-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{detail.instructor}</p>
          <p className="text-xs text-slate-400">{detail.instructorRole}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>
      <Link
        href="#"
        className="mt-2 inline-block text-xs font-medium text-brand hover:underline"
      >
        See Full Profile
      </Link>
    </div>
  );
}