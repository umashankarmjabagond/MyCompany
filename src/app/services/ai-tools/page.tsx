export const metadata = {
  title: 'AI Tools & Automation | SkillForge AI Technologies',
  description:
    'Custom AI tools, automation solutions, and data-driven applications built to optimize enterprise workflows.',
};

export default function AiToolsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-sky-700">
        AI Tools & Automation Solutions
      </h1>
      <p className="text-slate-700 leading-relaxed mb-6">
        SkillForge AI Technologies designs and integrates custom AI tools that
        help businesses automate, predict, and innovate. From chatbots and
        intelligent assistants to predictive analytics and NLP-based systems,
        we turn data into action.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">Our Capabilities</h2>
      <ul className="list-disc list-inside text-slate-600 space-y-2">
        <li>Custom AI model integration (OpenAI, Hugging Face, LangChain)</li>
        <li>Chatbots and conversational agents</li>
        <li>Predictive analytics dashboards</li>
        <li>Automation pipelines (Node.js, Python)</li>
        <li>Data visualization and insights platforms</li>
      </ul>
    </main>
  );
}
