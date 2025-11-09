import Link from 'next/link';

export const metadata = {
  title: 'About | SkillForge AI Technologies',
  description:
    'SkillForge AI Technologies builds AI-powered software, cloud solutions, and offers corporate training to help teams innovate faster.',
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About SkillForge AI Technologies",
    "url": "https://skillforgeai.com/about",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://skillforgeai.com"
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold text-sky-700 mb-4">About SkillForge AI Technologies</h1>

      <p className="text-slate-700 mb-4">
        SkillForge AI Technologies is a corporate software services firm specializing in AI tools, full-stack web and mobile development, cloud architecture, and professional training.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Our Mission</h2>
      <p className="text-slate-700 mb-4">
        To empower organisations with practical AI-driven software and to upskill teams so they can build and maintain modern applications confidently.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">How We Work</h2>
      <ol className="list-decimal list-inside text-slate-600 space-y-2">
        <li><strong>Discovery:</strong> Understand goals, constraints, and KPIs.</li>
        <li><strong>Design:</strong> UX, architecture and prototype.</li>
        <li><strong>Build:</strong> Engineering with CI/CD and tests.</li>
        <li><strong>Deploy & Support:</strong> Cloud deployment and ongoing support.</li>
      </ol>

      <h2 className="text-xl font-semibold mt-8 mb-3">Want to talk?</h2>
      <p className="text-slate-700">
        <Link href="/contact" className="underline">Contact our team</Link> to discuss your project or training needs.
      </p>
    </main>
  );
}
