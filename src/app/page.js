import Categories from "@/components/sections/Categories";
import Discover from "@/components/sections/Discover";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Partners />
      <Discover />
      <Categories />
    </>
  );
}
