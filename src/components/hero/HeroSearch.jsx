"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { Magnifier } from "@gravity-ui/icons";

export default function HeroSearch({ placeholder }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full max-w-[577px] items-center gap-3 sm:gap-4"
    >
      <label className="relative flex-1">
        <span className="sr-only">Search courses</span>
        <Magnifier
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-1/2 size-4 -translate-y-1/2 text-slate-500"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="h-[52px] w-full rounded-full bg-white pl-12 pr-5 text-base text-slate-900 outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-highlight"
        />
      </label>
      <Button
        type="submit"
        className="h-12 min-w-[102px] rounded-full bg-highlight px-6 text-base font-medium text-slate-900 hover:bg-highlight/90"
      >
        Search
      </Button>
    </form>
  );
}