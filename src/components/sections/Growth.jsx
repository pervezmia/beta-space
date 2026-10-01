import Image from "next/image";
import Container from "@/components/ui/Container";
import ProgressCard from "@/components/cards/ProgressCard";
import { stats, creatorBenefits, revenueCards } from "@/data/growth";
import { CircleCheckFill } from "@gravity-ui/icons";

export default function Growth() {
  return (
    <section
  aria-labelledby="growth-heading"
  className="relative overflow-hidden bg-white py-16 lg:py-24"
>
  {/* ── Background Soft Mesh Glows (Full Section Background) ── */}
  {/* Top-Left Lime/Yellow Glow */}
  <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-lime-200/50 blur-[120px] pointer-events-none" />

  {/* Top-Right Soft Blue Glow */}
  <div className="absolute top-10 -right-20 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[120px] pointer-events-none" />

  {/* Bottom-Left Yellow Glow */}
  <div className="absolute -bottom-20 -left-20 h-[450px] w-[450px] rounded-full bg-lime-200/60 blur-[120px] pointer-events-none" />

  {/* Bottom-Right Soft Purple/Blue Glow */}
  <div className="absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-purple-100/50 blur-[120px] pointer-events-none" />

  <Container className="relative z-10">
    {/* ── Top: Professional Growth ── */}
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      {/* Left Text Content */}
      <div data-aos="fade-right">
        <h2
          id="growth-heading"
          className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
        >
          Your Path to Professional
          <br />
          Growth Starts Here!
        </h2>
        <p className="mt-4 max-w-[440px] text-sm leading-relaxed text-slate-500">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or
          embark on a new career path entirely, we have the resources you need.
        </p>

        {/* Stats */}
        <ul className="mt-8 flex gap-8">
          {stats.map((s) => (
            <li key={s.label}>
              <p className="text-2xl font-bold text-brand">{s.value}</p>
              <p className="mt-0.5 text-sm text-slate-500">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Visual */}
      <div data-aos="fade-left" className="relative h-[380px] lg:h-[420px]">
        {/* Student image */}
        <div className="absolute bottom-0 right-[10%] h-[90%] w-[55%]">
          <Image
            src="/images/hero/student.png"
            alt="Student learning online"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Mini course card */}
        <div className="absolute left-0 top-[10%] w-[200px] rounded-2xl bg-white p-3 shadow-xl">
          <div className="h-[80px] overflow-hidden rounded-xl bg-slate-200">
            <Image
              src="/images/courses/learn-figma.png"
              alt="Learn Figma course"
              width={200}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-semibold text-slate-900 line-clamp-1">
            Learn Figma from Basic
          </p>
          <p className="text-[10px] text-slate-400">
            by <span className="text-brand">purepearl studio</span>
          </p>
          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">
              Beginner
            </span>
          </div>
          <p className="mt-1.5 text-sm font-bold text-brand">
            $25
            <span className="text-[10px] font-normal text-slate-400">
              /lifetime
            </span>
          </p>
        </div>

        {/* Progress card */}
        <div className="absolute right-0 top-[15%] w-[160px]">
          <ProgressCard label="Learning Progress" value={55} />
        </div>

        {/* Decorative squiggle */}
        <div className="absolute right-[-10px] top-[8%] text-highlight">
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
            <path
              d="M20 5 Q35 15 20 25 Q5 35 20 45 Q35 55 20 55"
              stroke="#c8ff00"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* ── Divider ── */}
    <div className="my-16 h-px bg-slate-200/60 lg:my-24" />

    {/* ── Bottom: Create & Manage ── */}
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      {/* Left: Girl image + Revenue cards */}
      <div data-aos="fade-right" className="relative h-[420px]">
        {/* Girl image */}
        <div className="absolute bottom-0 left-[8%] h-[90%] w-[50%]">
          <Image
            src="/images/female-student.png"
            alt="Creator managing courses"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Revenue cards */}
        <div className="absolute right-0 top-[10%] flex flex-col gap-3">
          {revenueCards.map((card) => (
            <div
              key={card.label}
              className="w-[190px] rounded-2xl bg-brand p-4 shadow-xl"
            >
              <p className="text-[10px] text-white/60">{card.date}</p>
              <p className="text-xs font-medium text-white/80">
                {card.label}
              </p>
              <p className="mt-1 text-xl font-bold text-white">
                {card.amount}
              </p>
              <span className="mt-1 inline-block rounded-full bg-highlight px-2 py-0.5 text-[10px] font-semibold text-slate-900">
                ↑ {card.trend === "up" ? "12%" : ""}
              </span>
            </div>
          ))}
        </div>

        {/* Happy Students card */}
        <div className="absolute bottom-[40px] right-0 rounded-2xl bg-white p-3 shadow-xl">
          <p className="text-xs font-semibold text-slate-900">
            Happy Students
          </p>
          <div className="mt-1 flex items-center gap-1">
            <span className="text-xs text-slate-600">4.5</span>
            <span className="text-xs text-slate-400">(240)</span>
            <span className="text-highlight text-xs">★</span>
          </div>
          <div className="mt-2 flex -space-x-2">
            {[
              "bg-blue-400",
              "bg-purple-400",
              "bg-pink-400",
              "bg-green-400",
            ].map((c, i) => (
              <div
                key={i}
                className={`size-7 rounded-full ring-2 ring-white ${c}`}
              />
            ))}
            <div className="flex size-7 items-center justify-center rounded-full bg-highlight text-[10px] font-semibold ring-2 ring-white">
              2K+
            </div>
          </div>
        </div>

        {/* Decorative squiggle */}
        <div className="absolute left-[45%] top-[5%]">
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
            <path
              d="M20 5 Q35 15 20 25 Q5 35 20 45 Q35 55 20 55"
              stroke="#c8ff00"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Right Text Content */}
      <div data-aos="fade-left">
        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Create & Manage
          <br />
          Courses Easily.
        </h2>
        <p className="mt-4 max-w-[400px] text-sm leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-700">ByteSpace</span>{" "}
          supports individuals or entities in the creation, publication, and
          administration of educational courses.
        </p>
        <ul className="mt-6 flex flex-col gap-3">
          {creatorBenefits.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CircleCheckFill
                className="size-5 shrink-0 text-brand"
                aria-hidden="true"
              />
              <span className="text-sm text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Container>
</section>
  );
}
