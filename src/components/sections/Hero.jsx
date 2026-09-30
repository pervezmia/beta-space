import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import HeroSearch from "@/components/hero/HeroSearch";
import HeroVisual from "@/components/hero/HeroVisual";
import { heroContent } from "@/data/hero";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-brand">
      <div className="relative xl:h-[910px]">
        <Container className="relative z-30 flex flex-col items-center pt-10 text-center xl:pt-[54px]">
          <Reveal>
            <h1
              id="hero-heading"
              className="text-4xl font-semibold leading-[1.2] text-white sm:text-6xl xl:text-[72px]"
            >
              {heroContent.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 xl:mt-8">
            <p className="mx-auto max-w-[813px] text-base font-light text-white/90">
              {heroContent.description}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex w-full justify-center xl:mt-16">
            <HeroSearch placeholder={heroContent.searchPlaceholder} />
          </Reveal>
        </Container>

        <HeroVisual />
      </div>
    </section>
  );
}