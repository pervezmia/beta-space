import Container from "@/components/ui/Container";
import CategoryCard from "@/components/cards/CategoryCard";
import { learningPaths } from "@/data/categories";

export default function Categories() {
  return (
    <section aria-labelledby="categories-heading" className="bg-slate-50 py-16 lg:py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-[640px] text-center">
          <h2
            id="categories-heading"
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there's
            something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>
        </div>

        {/* Cards */}
        <ul
          data-aos="fade-up"
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {learningPaths.map((path) => (
            <li key={path.name}>
              <CategoryCard name={path.name} icon={path.icon} className="h-full" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}