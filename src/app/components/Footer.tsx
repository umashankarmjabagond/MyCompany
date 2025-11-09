import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-white text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {currentYear} <span className="font-medium text-white">SkillForge AI Technologies</span>. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/privacy"
              className="hover:text-sky-700 transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-sky-700 transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="hover:text-sky-700 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
