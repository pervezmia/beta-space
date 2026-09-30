import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={className}>
      <Image
        src="/logo.png"
        alt="ByteSpace"
        width={170}
        height={36}
        priority
        className="h-8 w-auto lg:h-9"
      />
    </Link>
  );
}