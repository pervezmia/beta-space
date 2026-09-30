"use client";

import { Button } from "@heroui/react";
import { ShoppingCart } from "@gravity-ui/icons";

export default function CartButton() {
  return (
    <Button
      isIconOnly
      variant="ghost"
      aria-label="Open cart"
      className="size-10 min-w-0 text-white hover:bg-white/10"
    >
      <ShoppingCart className="size-5" />
    </Button>
  );
}