
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          SkillForge <span className="text-sky-600">AI</span> Technologies
        </Link>
        <nav className="space-x-6 text-sm font-medium">
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
      </div>
    </header>
  );
}
