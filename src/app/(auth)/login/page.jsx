import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
import AvatarStack from "@/components/ui/AvatarStack";
import { defaultAvatars } from "@/data/avatars";

export const metadata = {
  title: "Login | ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default function LoginPage() {
  return (
    <div
      className="min-h-screen bg-brand"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 lg:grid-cols-2">

        {/* Left */}
        <div className="flex flex-col px-8 py-10 sm:px-14 xl:px-20">
          <Link href="/" aria-label="ByteSpace home">
            <Image src="/logo.png" alt="ByteSpace" width={140} height={30} className="h-8 w-auto" />
          </Link>

          <div className="mt-14">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Sign in with ease
            </h1>
            <p className="mt-4 max-w-[380px] text-sm leading-relaxed text-white/70">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          {/* Floating course cards — same layout as register */}
          <div className="relative mt-10 flex-1">

            {/* Back card */}
            <div className="absolute left-0 top-4 w-[220px] overflow-hidden rounded-2xl bg-white shadow-xl sm:w-[260px]">
              <div className="relative h-[120px] bg-slate-800 sm:h-[140px]">
                <Image
                  src="/images/register/digital-asset.png"
                  alt="Build Digital Assets course preview"
                  width={260}
                  height={140}
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-x-0 bottom-0 flex gap-2 px-3 pb-2">
                  <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] text-white">17 Lessons</span>
                  <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] text-white">2 hrs 16 mins</span>
                  <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] text-white">59 Comments</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-slate-900">Build Digital Assets</p>
                <p className="mt-0.5 text-xs text-slate-400">
                  by <span className="text-brand">purepearl studio</span>
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                    Beginner
                  </span>
                  <AvatarStack avatars={defaultAvatars.slice(0, 4)} total="26+" size="sm" />
                </div>
                <p className="mt-3 text-base font-bold text-slate-900">
                  $25<span className="text-xs font-normal text-slate-400">/lifetime</span>
                </p>
              </div>
            </div>

            {/* Front card */}
            <div className="absolute left-[80px] top-0 w-[240px] overflow-hidden rounded-2xl bg-white shadow-2xl sm:left-[120px] sm:w-[280px]">
              <div className="relative h-[130px] bg-slate-800 sm:h-[160px]">
                <Image
                  src="/images/register/big-data.png"
                  alt="Power of Big Data course preview"
                  width={280}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-slate-900">the Power of Big Data</p>
                <p className="mt-0.5 text-xs text-slate-400">
                  by <span className="text-brand">purepearl studio</span>
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                    Beginner
                  </span>
                  <AvatarStack avatars={defaultAvatars.slice(0, 4)} total="26+" size="sm" />
                </div>
                <p className="mt-3 text-base font-bold text-slate-900">
                  $25<span className="text-xs font-normal text-slate-400">/lifetime</span>
                </p>
              </div>
            </div>

            {/* Happy Students card */}
            <div className="absolute bottom-10 left-[100px] rounded-2xl bg-white p-3 shadow-xl sm:left-[160px]">
              <p className="text-xs font-semibold text-slate-900">Happy Students</p>
              <div className="mt-1 flex items-center gap-1">
                <span className="text-xs text-slate-600">4.5</span>
                <span className="text-xs text-slate-400">(240)</span>
                <span className="text-highlight">★</span>
              </div>
              <AvatarStack avatars={defaultAvatars} total="2K+" size="md" />
            </div>

            {/* Decorative shapes */}
            <div className="absolute left-[60px] top-[200px] size-14 rounded-full border-[6px] border-highlight opacity-90" />
            <div
              className="absolute bottom-[120px] left-0"
              style={{
                width: 0,
                height: 0,
                borderLeft: "32px solid transparent",
                borderRight: "32px solid transparent",
                borderBottom: "56px solid #c8ff00",
              }}
            />
          </div>
        </div>

        {/* Right: form */}
        <div className="flex items-center justify-center px-6 py-14 sm:px-10">
          <div className="w-full max-w-[480px] rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
            <p className="text-sm font-medium text-brand">Sign In</p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">
              Welcome Back
            </h2>
            <LoginForm />
          </div>
        </div>

      </div>
    </div>
  );
}