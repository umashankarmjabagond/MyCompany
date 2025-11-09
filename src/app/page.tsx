import Link from 'next/link';
import Hero from './components/Hero';

export const metadata = {
  title: 'SkillForge AI Technologies — AI Tools, Web Development & Training',
  description:
    'SkillForge AI Technologies provides AI-driven automation, full-stack web and mobile app development, and professional training for enterprises worldwide.',
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkillForge AI Technologies",
    "url": "https://skillforgeai.com",
    "logo": "https://skillforgeai.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/skillforgeai",
      "https://twitter.com/skillforgeai"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      {/* Services Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/services/web-development" className="p-6 border rounded-lg hover:shadow">
            <h3 className="font-bold text-lg">Web & Mobile Development</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Scalable full-stack applications built with React, Next.js, Node.js, and cloud-native architecture.
            </p>
          </Link>
          <Link href="/services/ai-tools" className="p-6 border rounded-lg hover:shadow">
            <h3 className="font-bold text-lg">AI Tools & Automation</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Custom AI models, chat assistants, and predictive analytics to power smarter business decisions.
            </p>
          </Link>
          <Link href="/services/training" className="p-6 border rounded-lg hover:shadow">
            <h3 className="font-bold text-lg">Corporate & Online Training</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Hands-on courses in full-stack, cloud, and AI development designed for professionals and enterprises.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
