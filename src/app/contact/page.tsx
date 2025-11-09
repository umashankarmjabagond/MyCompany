import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | SkillForge AI Technologies",
  description:
    "Contact SkillForge AI Technologies for AI tools, full-stack development, cloud services, and corporate training.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-4 text-center sm:text-left">
        Contact Us
      </h1>

      <p className="text-slate-700 mb-8 text-center sm:text-left">
        Tell us about your project or training needs — we’ll get back within one
        business day.
      </p>

      <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8">
        <ContactForm />
      </div>

      <section className="mt-10 text-sm text-slate-600 text-center sm:text-left">
        <h3 className="font-semibold mb-2">Other ways to reach us</h3>
        <p>
          Email:{" "}
          <a
            href="mailto:sales@skillforgeai.com"
            className="text-sky-700 underline hover:text-sky-900 transition"
          >
            sales@skillforgeai.com
          </a>
        </p>
        <p>Phone: +91-XXXXXXXXXX</p>
      </section>
    </main>
  );
}
