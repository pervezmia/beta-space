import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-slate-50/30 py-16 lg:py-24"
    >
      {/* ── Background Soft Glow Effects ── */}
      {/* Top-Right Yellow/Lime Soft Glow */}
      <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-lime-200/60 blur-[120px] pointer-events-none" />

      {/* Bottom-Left Blue Soft Glow */}
      <div className="absolute -bottom-24 -left-24 h-[500px] w-[500px] rounded-full bg-blue-200/50 blur-[120px] pointer-events-none" />

      {/* Decorative Accent Graphics (Top Right Corner) */}
      <div className="absolute top-0 right-10 text-highlight pointer-events-none z-0">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
          <path
            d="M10 5 L30 35 L50 5 L70 35 L90 5"
            stroke="#c8ff00"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* ── Top Layout: Header and Description Side-by-Side ── */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: Heading */}
          <div data-aos="fade-right">
            <h2
              id="testimonials-heading"
              className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[42px]"
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          {/* Right: Description Paragraph */}
          <div data-aos="fade-left">
            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* ── Bottom Layout: 3 Columns Testimonials Grid ── */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}