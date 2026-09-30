"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import NavLink from "@/components/layout/NavLink";

export default function MobileMenu({ links, authLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <Button
        isIconOnly
        variant="ghost"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onPress={() => setIsOpen((prev) => !prev)}
        className="size-10 min-w-0 text-white hover:bg-white/10"
      >
        {isOpen ? <Xmark className="size-5" /> : <Bars className="size-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full border-t border-white/15 bg-brand px-4 py-6 shadow-lg sm:px-6"
          >
            <ul className="flex flex-col gap-4">
              {[...links, ...authLinks].map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} onClick={close} className="block text-lg">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}