import Container from "@/components/ui/Container";
import { partners } from "@/data/partners";

export default function Partners() {
  return (
    <section aria-label="Trusted partners" className="bg-slate-50 py-10">
      <Container>
        <div className="mx-auto flex max-w-[1130px] flex-wrap items-center justify-between gap-8">
          {partners.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2.5 opacity-50 transition-opacity hover:opacity-80"
            >
              <Icon className="size-7 text-slate-500" aria-hidden="true" />
              <span className="text-base font-semibold text-slate-500">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}