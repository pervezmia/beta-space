import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Float from "@/components/ui/Float";
import { cn } from "@/lib/utils";
import { heroShapes } from "@/data/hero";

export default function CreatorCTA() {
  return (
    <section
      aria-labelledby="creator-cta-heading"
      className="relative w-full overflow-hidden bg-brand py-16 lg:py-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* ── Shapes Container (Mobile & Tablet support) ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="relative h-full w-full xl:absolute xl:inset-y-0 xl:left-1/2 xl:w-[1440px] xl:-translate-x-1/2">
          {heroShapes.map((shape, index) => (
            <Float
              key={shape.src || index}
              amplitude={shape.amplitude}
              duration={shape.duration}
              /* hidden xl:block er poriborte hidden md:block apply kora hoyeche, jeno md (768px+) screen thekei eituguk show kore */
              className={cn("absolute z-20 hidden md:block opacity-60 xl:opacity-100", shape.position)}
            >
              <Image
                src={shape.src}
                alt=""
                aria-hidden="true"
                width={shape.width}
                height={shape.height}
                className="h-auto w-full"
              />
            </Float>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
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

          <p className="mx-auto mt-5 max-w-[580px] text-sm leading-relaxed text-white/80 sm:text-base">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-highlight px-8 text-sm font-semibold text-slate-900 shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-highlight/90 active:scale-95"
          >
            Join as Creator
          </Link>
        </div>
      </Container>
    </section>
  );
}