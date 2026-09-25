import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wbkhalid.netlify.app"),
  title: "Waleed Bin Khalid | Frontend Developer",
  description:
    "Frontend Developer in Lahore building production dashboards, government systems, and responsive business applications with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Waleed Bin Khalid | Frontend Developer",
    description:
      "Production dashboards and complex web applications built with React, Next.js, and TypeScript.",
    type: "website",
    url: "https://wbkhalid.netlify.app",
  },
  twitter: {
    card: "summary",
    title: "Waleed Bin Khalid | Frontend Developer",
    description: "Frontend Developer building scalable interfaces for complex, real-world systems.",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
