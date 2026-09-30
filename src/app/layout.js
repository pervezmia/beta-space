import { Poppins } from "next/font/google";
import "./globals.css";
import AosProvider from "@/components/providers/AosProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "ByteSpace | Learn New Skills and Create Online Courses",
  description:
    "Discover hundreds of courses from expert creators, or build and manage your own courses on ByteSpace.",
  openGraph: {
    title: "ByteSpace | Learn New Skills and Create Online Courses",
    description:
      "Discover hundreds of courses from expert creators, or build and manage your own courses on ByteSpace.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-white font-sans text-slate-900 antialiased">
        <AosProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}