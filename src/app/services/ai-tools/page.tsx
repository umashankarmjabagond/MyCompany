import type { Metadata } from "next";
import AiToolsClient from "./AiTools";

export const metadata: Metadata = {
  title: "AI Tools & Automation | SkillForge AI Technologies",
  description:
    "Comprehensive AI tools, automation systems, and training solutions explained in detail for businesses and learners.",
};

export default function AiToolsPage() {
  return (
    <main className="max-w-7xl mx-auto px-2 sm:px-6 py-12 sm:py-12">
      <AiToolsClient />
    </main>
  );
}
