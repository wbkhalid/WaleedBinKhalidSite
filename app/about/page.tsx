import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <main id="main" className="page-main">
      <About />
      <Experience />
      <Education />
    </main>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "Professional experience, education, and frontend engineering work by Waleed Bin Khalid.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Waleed Bin Khalid",
    description: "Professional experience, education, and frontend engineering work by Waleed Bin Khalid.",
    url: "/about",
  },
};
