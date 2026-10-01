import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AvatarStack({ avatars = [], total, size = "sm" }) {
  const sizeMap = {
    sm: { wrapper: "size-6", text: "text-[9px]", overlap: "-ml-2" },
    md: { wrapper: "size-8", text: "text-[10px]", overlap: "-ml-2" },
    lg: { wrapper: "size-10", text: "text-xs", overlap: "-ml-2.5" },
  };

  const s = sizeMap[size] || sizeMap.sm;

  const colors = [
    "bg-blue-400", "bg-purple-400", "bg-pink-400",
    "bg-green-400", "bg-yellow-400", "bg-red-400",
  ];

  return (
    <ul className="flex items-center">
      {avatars.map((avatar, index) => {
        // Corrected imageSrc logic
        const imageSrc =
          typeof avatar === "string"
            ? avatar
            : avatar?.src || avatar?.image || avatar?.url;

        return (
          <li
            key={index}
            className={cn(
              s.wrapper,
              "relative overflow-hidden rounded-full ring-2 ring-white flex items-center justify-center text-white font-semibold shrink-0",
              colors[index % colors.length],
              index > 0 && s.overlap
            )}
            aria-label={avatar.alt || avatar.name}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={avatar.alt || avatar.name || "User Avatar"}
                fill
                sizes="(max-width: 768px) 32px, 40px"
                className="object-cover"
              />
            ) : (
              <span className={cn("uppercase leading-none", s.text)}>
                {(avatar.alt || avatar.name)?.charAt(0) ?? "U"}
              </span>
            )}
          </li>
        );
      })}

      {total && (
        <li
          className={cn(
            s.wrapper,
            s.overlap,
            "flex items-center justify-center rounded-full bg-highlight font-semibold text-slate-900 ring-2 ring-white shrink-0 z-10",
            s.text
          )}
        >
          {total}
        </li>
      )}
    </ul>
  );
}