import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-120px)] items-center bg-brand">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">

          {/* 404 */}
          <h1
            aria-label="404"
            className="select-none text-[200px] font-bold leading-none text-highlight opacity-90 sm:text-[260px] xl:text-[340px]"
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.15)",
            }}
          >
            404
          </h1>

          {/* Message */}
          <h2 className="-mt-6 text-2xl font-semibold text-white sm:text-4xl xl:text-[40px]">
            The page you are looking
            <br />
            for doesn&apos;t exist
          </h2>

          <p className="mt-4 text-sm text-white/70">
            Try to use a correct url or go back to homepage to start again!
          </p>

          {/* Button */}
          <Link
            href="/"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-highlight px-8 text-sm font-medium text-slate-900 transition-opacity hover:opacity-90"
          >
            Back to Home
          </Link>

        </div>
      </Container>
    </section>
  );
}