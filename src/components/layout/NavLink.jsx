"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavLink({ href, children, className, onClick }) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-base transition-colors hover:text-white",
        isActive ? "font-medium text-white" : "text-white/80",
        className
      )}
    >
      {children}
    </Link>
  );
}