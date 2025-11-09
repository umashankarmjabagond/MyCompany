export const metadata = {
  title: 'Corporate & Online Training | SkillForge AI Technologies',
  description:
    'Hands-on training programs in MERN, Next.js, AI development, and cloud fundamentals designed for professionals and enterprises.',
};

export default function TrainingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-sky-700">
        Corporate & Online Training Programs
      </h1>
      <p className="text-slate-700 leading-relaxed mb-6">
        Upskill your team with real-world, project-driven learning experiences.
        Our expert-led courses focus on current technologies used in the
        industry — from full-stack development to AI integration.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">Programs Offered</h2>
      <ul className="list-disc list-inside text-slate-600 space-y-2">
        <li>Full-Stack (MERN / Next.js)</li>
        <li>Cloud & DevOps Fundamentals</li>
        <li>AI / ML Development Bootcamps</li>
        <li>JavaScript & TypeScript Deep Dive</li>
        <li>Corporate Custom Workshops</li>
      </ul>
    </main>
  );
}
