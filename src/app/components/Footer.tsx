
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} SkillForge AI Technologies. All rights reserved.</p>
        <div className="space-x-4 mt-3 md:mt-0">
          <Link href="/privacy" className="hover:text-sky-600">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-sky-600">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
