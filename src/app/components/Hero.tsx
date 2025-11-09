import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Empowering Businesses with <span className="text-sky-600">AI</span>, Cloud & Full-Stack Innovation
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          SkillForge AI Technologies builds enterprise-grade software, AI-powered tools, and modern applications while providing professional developer training.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="/services/web-development"
            className="px-6 py-3 bg-sky-600 text-white rounded-md"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-10 shadow-sm flex items-center justify-center">
        <span className="text-slate-400">[ AI Illustration / Image Here ]</span>
      </div>
    </section>
  );
}
