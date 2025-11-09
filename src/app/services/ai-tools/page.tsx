import type { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "AI Tools & Automation | SkillForge AI Technologies",
  description:
    "Custom AI tools, automation solutions, and data-driven applications built to optimize enterprise workflows.",
};

export default function AiToolsPage(): JSX.Element {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-sky-700 text-center sm:text-left">
        AI Tools & Automation Solutions
      </h1>

      <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
        SkillForge AI Technologies designs and integrates custom AI tools that
        help businesses automate, predict, and innovate. From chatbots and
        intelligent assistants to predictive analytics and NLP-based systems, we
        turn data into action.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mt-10 mb-4 text-slate-800">
        Our Capabilities
      </h2>

      <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm sm:text-base">
        <li>Custom AI model integration (OpenAI, Hugging Face, LangChain)</li>
        <li>Chatbots and conversational agents</li>
        <li>Predictive analytics dashboards</li>
        <li>Automation pipelines (Node.js, Python)</li>
        <li>Data visualization and insights platforms</li>
      </ul>
    </main>
  );
}
