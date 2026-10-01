import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CreatorCTA() {
  return (
    <section
      aria-labelledby="creator-cta-heading"
      className="relative  overflow-hidden bg-brand py-16 lg:py-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Decorative shapes — left */}
      <div aria-hidden="true" className=" pointer-events-none absolute left-0 top-0 h-full w-[220px]">
        {/* lime squiggle top-left */}
        <svg className="absolute left-[10px] top-[10px] w-[80px]" viewBox="0 0 80 100" fill="none">
          <path d="M40 8 Q65 22 40 40 Q15 58 40 76 Q65 90 40 96" stroke="#c8ff00" strokeWidth="7" strokeLinecap="round" fill="none"/>
        </svg>
        {/* white squiggle mid-left */}
        <svg className="absolute left-[30px] top-[45%] w-[50px]" viewBox="0 0 50 70" fill="none">
          <path d="M25 5 Q40 18 25 32 Q10 46 25 60" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none"/>
        </svg>
        {/* lime ring bottom-left */}
        <div className="absolute bottom-[10px] left-[20px] size-[90px] rounded-full border-[12px] border-highlight" />
        {/* white ring overlap */}
        <div className="absolute bottom-[30px] left-[70px] size-[55px] rounded-full border-[8px] border-white/30" />
      </div>

      {/* Decorative shapes — right */}
      <div aria-hidden="true" className=" pointer-events-none absolute right-0 top-0 h-full w-[220px]">
        {/* lime cone/triangle top-right */}
        <div
          className="absolute  right-[60px] top-[10px]"
          style={{
            width: 0, height: 0,
            borderLeft: "28px solid transparent",
            borderRight: "28px solid transparent",
            borderBottom: "56px solid #c8ff00",
          }}
        />
        {/* white cup/cylinder top-far-right */}
        <div className="absolute right-[10px] top-[8px] h-[70px] w-[55px] overflow-hidden rounded-t-full border-[8px] border-white/80" />
        {/* white squiggle mid-right */}
        <svg className="absolute right-[20px] bottom-[20%] w-[60px]" viewBox="0 0 60 80" fill="none">
          <path d="M30 5 Q50 20 30 38 Q10 56 30 70" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none"/>
        </svg>
        {/* lime squiggle bottom-right */}
        <svg className="absolute right-[10px] bottom-[10px] w-[55px]" viewBox="0 0 60 80" fill="none">
          <path d="M30 5 Q50 20 30 38 Q10 56 30 70" stroke="#c8ff00" strokeWidth="6" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="mx-auto max-w-[680px] text-center">
          <h2
            id="creator-cta-heading"
            className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[40px]"
          >
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-5 max-w-[580px] text-sm leading-relaxed text-white/75">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-highlight px-8 text-sm font-semibold text-slate-900 transition hover:bg-highlight/90"
          >
            Join as Creator
          </Link>
        </div>
      </Container>
    </section>
  );
}