"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50
                 bg-gradient-to-r from-amber-900/50 via-amber-800/40 to-amber-900/50
                 backdrop-blur-md
                 border-b border-amber-600/30
                 shadow-lg shadow-amber-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-amber-500 to-amber-200 text-transparent bg-clip-text">
            SkillForge
          </span>

          <span
            className="
      px-2 py-0.5 rounded-md
      bg-gradient-to-r from-amber-600 to-yellow-300
      text-black text-sm font-extrabold
      shadow-md shadow-amber-500/40
    "
          >
            AI
          </span>

          <span className="bg-gradient-to-r from-amber-400 to-amber-200 text-transparent bg-clip-text font-semibold">
            Technologies
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2 text-sm font-semibold">
          {[
            { href: "/services/web-development", label: "Web Dev" },
            { href: "/services/ai-tools", label: "AI Tools" },
            { href: "/services/training", label: "Training" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-full transition-all
                ${isActive(href)
                  ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black shadow-md shadow-amber-400/40"
                  : "text-amber-200 hover:text-amber-300 hover:bg-amber-500/10"
                }
              `}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-amber-200 hover:text-amber-300 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden
                     bg-gradient-to-b from-amber-900/60 to-black
                     border-t border-amber-600/30
                     shadow-inner"
        >
          <nav className="flex flex-col items-center space-y-3 py-5 text-sm font-semibold">
            {[
              { href: "/services/web-development", label: "Web Dev" },
              { href: "/services/ai-tools", label: "AI Tools" },
              { href: "/services/training", label: "Training" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`transition
                  ${isActive(href)
                    ? "text-amber-300 font-bold"
                    : "text-amber-200 hover:text-amber-300"
                  }
                `}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

