import type { Metadata } from "next";
import TrainingClient from "./Training";

export const metadata: Metadata = {
  title: "Corporate & Online Training | SkillForge AI Technologies",
  description:
    "Hands-on training programs in MERN, Next.js, AI development, and cloud fundamentals designed for professionals and enterprises.",
};

export default function TrainingPage() {
  return (
    <main className="bg-black max-w-7xl mx-auto px-4 sm:px-6 py-2">
      <TrainingClient />
    </main>
  );
}
