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
import { useEffect, useRef, useState } from "react";

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
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = window.localStorage.getItem("theme"); } catch { /* Storage can be disabled. */ }
    if (saved === "light") {
      document.documentElement.dataset.theme = "light";
      setLight(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuRef.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    try { window.localStorage.setItem("theme", next ? "light" : "dark"); } catch { /* Keep the toggle usable without storage. */ }
  };

  return (
    <header className="nav-wrap">
      <nav ref={navRef} className="nav-shell" aria-label="Primary navigation">
        <Link
          className="brand"
          href="/"
          aria-label="Waleed Bin Khalid, home"
          onClick={() => setOpen(false)}
        >
          <span>WBK</span>
          <i />
        </Link>
        <div id="primary-links" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
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
          <a className="mobile-resume" href="/Waleed_Frontend_Developer_Resume.docx" download onClick={() => setOpen(false)}>
            Download Resume
          </a>
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
            Download Resume
          </a>
          <button
            className="menu-button"
            ref={menuRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="primary-links"
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
