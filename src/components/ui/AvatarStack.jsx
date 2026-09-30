import { cn } from "@/lib/utils";

export default function AvatarStack({ avatars = [], total, size = "sm" }) {
  const sizeMap = {
    sm: { wrapper: "size-6", text: "text-[9px]", overlap: "-ml-2" },
    md: { wrapper: "size-8", text: "text-[10px]", overlap: "-ml-2" },
    lg: { wrapper: "size-10", text: "text-xs", overlap: "-ml-2.5" },
  };

  const s = sizeMap[size];

  const colors = [
    "bg-blue-400", "bg-purple-400", "bg-pink-400",
    "bg-green-400", "bg-yellow-400", "bg-red-400",
  ];

  return (
    <ul className="flex items-center">
      {avatars.map((avatar, index) => (
        <li
          key={index}
          className={cn(
            s.wrapper,
            "overflow-hidden rounded-full ring-2 ring-white flex items-center justify-center text-white font-semibold",
            colors[index % colors.length],
            index > 0 && s.overlap
          )}
          aria-label={avatar.alt}
        >
          <span className={cn("uppercase leading-none", s.text)}>
            {avatar.alt?.charAt(0) ?? "S"}
          </span>
        </li>
      ))}
      {total && (
        <li
          className={cn(
            s.wrapper, s.overlap,
            "flex items-center justify-center rounded-full bg-highlight font-semibold text-slate-900 ring-2 ring-white",
            s.text
          )}
        >
          {total}
        </li>
      )}
    </ul>
  );
}