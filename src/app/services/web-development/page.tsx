import type { Metadata } from "next";
import WebDevClient from "./WebDevClient";

export const metadata: Metadata = {
  title: "Web Development Services | SkillForge AI Technologies",
  description:
    "Full-stack web development services using React, Next.js, Node.js, and modern technologies to build scalable, high-performance web applications.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-12">
      <WebDevClient />
    </main>
  );
}
