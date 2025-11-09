import Link from "next/link";

export const metadata = {
  title: "About | SkillForge AI Technologies",
  description:
    "SkillForge AI Technologies builds AI-powered software, cloud solutions, and offers corporate training to help teams innovate faster.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About SkillForge AI Technologies",
    url: "https://skillforgeai.com/about",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://skillforgeai.com",
    },
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 text-center sm:text-left">
        About SkillForge AI Technologies
      </h1>

      <section className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          <strong>SkillForge AI Technologies</strong> is a corporate software
          services firm specializing in AI tools, full-stack web and mobile
          development, cloud architecture, and professional training.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-sky-800">
          Our Mission
        </h2>
        <p className="text-slate-700">
          To empower organisations with practical AI-driven software and to
          upskill teams so they can build and maintain modern applications
          confidently.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-sky-800">
          How We Work
        </h2>
        <ol className="list-decimal list-inside text-slate-600 space-y-2 ml-2 sm:ml-4">
          <li>
            <strong>Discovery:</strong> Understand goals, constraints, and KPIs.
          </li>
          <li>
            <strong>Design:</strong> UX, architecture, and prototype.
          </li>
          <li>
            <strong>Build:</strong> Engineering with CI/CD and tests.
          </li>
          <li>
            <strong>Deploy & Support:</strong> Cloud deployment and ongoing
            support.
          </li>
        </ol>
      </section>

      <section className="mt-10 text-slate-700 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-semibold text-sky-800 mb-2">
          Want to talk?
        </h2>
        <p>
          <Link
            href="/contact"
            className="text-sky-700 underline hover:text-sky-900 transition"
          >
            Contact our team
          </Link>{" "}
          to discuss your project or training needs.
        </p>
      </section>
    </main>
  );
}
