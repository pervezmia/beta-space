import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FooterNewsletter from "@/components/layout/FooterNewsletter";
import { footerLinks, footerLegal } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container className="py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_auto_auto]">

          {/* Left: logo + newsletter */}
          <div>
            <Link href="/" aria-label="ByteSpace home">
              <Image
                src="/footerLogo.png"
                alt="ByteSpace"
                width={170}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-[400px] text-sm leading-relaxed text-slate-600">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="mt-6">
              <FooterNewsletter />
            </div>
          </div>

          {/* Right: 3 link columns */}
          {footerLinks.map((col, colIndex) => (
            <ul key={colIndex} className="flex flex-col gap-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-700 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            {footerLegal.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-slate-600 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}