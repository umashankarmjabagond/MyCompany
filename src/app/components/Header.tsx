"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold tracking-tight text-white"
        >
          SkillForge <span className="text-sky-600">AI</span> Technologies
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-white">
          <Link href="/services/web-development" className="hover:text-sky-600">
            Web Dev
          </Link>
          <Link href="/services/ai-tools" className="hover:text-sky-600">
            AI Tools
          </Link>
          <Link href="/services/training" className="hover:text-sky-600">
            Training
          </Link>
          <Link href="/contact" className="hover:text-sky-600">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white hover:text-sky-600 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black shadow-inner">
          <nav className="flex flex-col items-center space-y-3 py-4 text-sm font-medium text-white">
            <Link
              href="/services/web-development"
              className="hover:text-sky-600"
              onClick={() => setMenuOpen(false)}
            >
              Web Dev
            </Link>
            <Link
              href="/services/ai-tools"
              className="hover:text-sky-600"
              onClick={() => setMenuOpen(false)}
            >
              AI Tools
            </Link>
            <Link
              href="/services/training"
              className="hover:text-sky-600"
              onClick={() => setMenuOpen(false)}
            >
              Training
            </Link>
            <Link
              href="/contact"
              className="hover:text-sky-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
