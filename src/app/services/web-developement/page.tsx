import { JSX } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Mobile Development | SkillForge AI Technologies",
  description:
    "Full-stack web and mobile app development using React, Next.js, Node.js, and cloud-native technologies.",
};

export default function WebDevelopmentPage(): JSX.Element {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-sky-700 text-center sm:text-left">
        Full-Stack Web & Mobile Development
      </h1>

      <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
        Our engineering team crafts scalable, secure, and user-friendly
        applications with a modern tech stack. We deliver robust back-ends and
        high-performance front-ends for startups and enterprises alike.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mt-10 mb-4 text-slate-800">
        We Specialize In:
      </h2>

      <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm sm:text-base">
        <li>React.js & Next.js frontend development</li>
        <li>Node.js & Express APIs</li>
        <li>PostgreSQL & MongoDB databases</li>
        <li>Cloud deployments (AWS, Vercel, Azure)</li>
        <li>Progressive Web Apps (PWAs)</li>
      </ul>
    </main>
  );
}
