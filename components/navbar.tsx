"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CodeXml } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-logo">
          <CodeXml className="h-5 w-5" />
          <span>DevPortfolio</span>
        </Link>

        <div className="site-nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`site-nav-item ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}