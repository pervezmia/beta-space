import Image from "next/image";
import { StarFill } from "@gravity-ui/icons";
import { cn } from "@/lib/utils";

export default function StudentsCard({ title, rating, reviews, total, avatars, className }) {
  return (
    <div className={cn("rounded-2xl bg-white p-4 shadow-lg", className)}>
      <p className="text-base font-medium text-slate-900">{title}</p>
      <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-700">
        <span>{rating}</span>
        <span className="text-slate-400">{reviews}</span>
        <StarFill aria-hidden="true" className="size-3.5 text-highlight" />
      </p>
      <ul className="mt-3 flex items-center">
        {avatars.map((avatar, index) => (
          <li
            key={avatar.src}
            className={cn("size-10 overflow-hidden rounded-full ring-2 ring-white", index > 0 && "-ml-2.5")}
          >
            <Image src={avatar.src} alt={avatar.alt} width={40} height={40} className="size-full object-cover" />
          </li>
        ))}
        <li className="-ml-2.5 flex size-10 items-center justify-center rounded-full bg-highlight text-xs font-semibold text-slate-900 ring-2 ring-white">
          {total}
        </li>
      </ul>
    </div>
  );
}