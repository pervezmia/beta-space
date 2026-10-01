import Categories from "@/components/sections/Categories";
import CreatorCTA from "@/components/sections/CreatorCTA";
import Discover from "@/components/sections/Discover";
import Growth from "@/components/sections/Growth";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Partners />
      <Discover />
      <Categories />
      <Growth />
      <CreatorCTA />
      <Testimonials />
    </>
  );
}
