"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  Menu01Icon,
  Moon02Icon,
  Sun02Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.dataset.theme = "light";
      setLight(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    window.localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <header className="nav-wrap">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link
          className="brand"
          href="/"
          aria-label="Waleed Bin Khalid, home"
          onClick={() => setOpen(false)}
        >
          <span>WBK</span>
          <i />
        </Link>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                (
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href)
                )
                  ? "active"
                  : ""
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${light ? "dark" : "light"} theme`}
          >
            <HugeiconsIcon
              icon={light ? Moon02Icon : Sun02Icon}
              size={18}
              strokeWidth={1.8}
            />
          </button>
          <a
            className="resume-link"
            href="/Waleed_Frontend_Developer_Resume.docx"
            download
          >
            Downlaod Resume
          </a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <HugeiconsIcon
              icon={open ? Cancel01Icon : Menu01Icon}
              size={22}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
