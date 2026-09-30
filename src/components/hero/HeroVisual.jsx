import Image from "next/image";
import Float from "@/components/ui/Float";
import CategoryStatCard from "@/components/cards/CategoryStatCard";
import ProgressCard from "@/components/cards/ProgressCard";
import StudentsCard from "@/components/cards/StudentsCard";
import { heroCards, heroShapes } from "@/data/hero";
import { cn } from "@/lib/utils";

export default function HeroVisual() {
  return (
    <div className="relative mt-10 h-[340px] overflow-hidden sm:h-[440px] xl:absolute xl:inset-0 xl:mt-0 xl:h-auto xl:overflow-visible">
      <div className="relative h-full w-full xl:absolute xl:inset-y-0 xl:left-1/2 xl:w-[1440px] xl:-translate-x-1/2">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[30%] aspect-square w-[150%] -translate-x-1/2 rounded-full bg-highlight sm:top-[22%] xl:left-[150px] xl:top-[477px] xl:w-[1140px] xl:translate-x-0"
        />

        <div className="absolute bottom-0 left-1/2 z-10 w-[260px] -translate-x-1/2 sm:w-[340px] xl:left-[495px] xl:w-[517px] xl:translate-x-0">
          <Image
            src="/images/hero/student.png"
            alt="Smiling student wearing headphones and holding a laptop"
            width={1034}
            height={946}
            priority
            sizes="(min-width: 1280px) 517px, 340px"
            className="h-auto w-full"
          />
        </div>

        {heroShapes.map((shape) => (
          <Float
            key={shape.src}
            amplitude={shape.amplitude}
            duration={shape.duration}
            className={cn("absolute z-20 hidden xl:block", shape.position)}
          >
            <Image src={shape.src} alt="" aria-hidden="true" width={shape.width} height={shape.height} className="h-auto w-full" />
          </Float>
        ))}

        <Float amplitude={6} duration={5} className="absolute left-[402px] top-[529px] z-30 hidden w-[208px] xl:block">
          <CategoryStatCard {...heroCards.category} />
        </Float>
        <Float amplitude={7} duration={6} delay={0.5} className="absolute left-[842px] top-[539px] z-30 hidden w-[232px] xl:block">
          <ProgressCard {...heroCards.progress} />
        </Float>
        <Float amplitude={6} duration={5.5} delay={1} className="absolute left-[326px] top-[725px] z-30 hidden w-[259px] xl:block">
          <StudentsCard {...heroCards.students} />
        </Float>
      </div>
    </div>
  );
}