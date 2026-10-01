import { Contact } from "@/sections/Contact";
import type { Metadata } from "next";

export default function ContactPage() {
  return (
    <main id="main" className="page-main">
      <Contact />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Waleed Bin Khalid about frontend developer opportunities and product work.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Waleed Bin Khalid",
    description: "Contact Waleed Bin Khalid about frontend developer opportunities and product work.",
    url: "/contact",
  },
};
