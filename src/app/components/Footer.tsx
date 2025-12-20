import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-r from-amber-900/50 via-amber-800/40 to-amber-900/50
                 border-t border-amber-600/30
                 shadow-inner shadow-amber-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-amber-200">
            © {currentYear}{" "}
            <span className="font-semibold bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text">
              SkillForge AI Technologies
            </span>
            . All rights reserved.
          </p>

          {/* ===== FOOTER NAV ===== */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium">
            <Link
              href="/privacy"
              className="text-amber-200 hover:text-amber-300 transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-amber-200 hover:text-amber-300 transition"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-amber-200 hover:text-amber-300 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
