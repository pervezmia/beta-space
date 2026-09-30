import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import NavLink from "@/components/layout/NavLink";
import CartButton from "@/components/layout/CartButton";
import MobileMenu from "@/components/layout/MobileMenu";
import { navLinks, authLinks } from "@/data/navLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand">
      <Container className="grid h-20 grid-cols-[1fr_auto_1fr] items-center lg:h-[120px]">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 lg:gap-6">
          <div className="hidden items-center gap-6 lg:flex">
            {authLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <CartButton />
          <MobileMenu links={navLinks} authLinks={authLinks} />
        </div>
      </Container>
    </header>
  );
}