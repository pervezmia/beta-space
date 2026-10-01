"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "@gravity-ui/icons";

export default function CourseVideo({ image, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900">
      {!playing ? (
        <>
          <Image
            src={image}
            alt={`${title} preview`}
            width={800}
            height={400}
            className="h-[260px] w-full object-cover opacity-70 sm:h-[340px]"
          />
          <button
            onClick={() => setPlaying(true)}
            aria-label="Play course preview"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition hover:bg-white/30">
              <Play className="size-7 translate-x-0.5 text-white" aria-hidden="true" />
            </div>
          </button>
        </>
      ) : (
        <div className="flex h-[260px] items-center justify-center sm:h-[340px]">
          <p className="text-sm text-white/60">Video player placeholder</p>
        </div>
      )}
    </div>
  );
}