import ContactForm from "./ContactForm";

export const metadata = {
  title: 'Contact | SkillForge AI Technologies',
  description:
    'Contact SkillForge AI Technologies for AI tools, full-stack development, cloud services, and corporate training.',
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-sky-700 mb-4">Contact Us</h1>
      <p className="text-slate-700 mb-8">
        Tell us about your project or training needs — we’ll get back within one business day.
      </p>

      <ContactForm />

      <section className="mt-12 text-sm text-slate-600">
        <h3 className="font-semibold">Other ways to reach us</h3>
        <p>
          Email:{' '}
          <a href="mailto:sales@skillforgeai.com" className="underline">
            sales@skillforgeai.com
          </a>
        </p>
        <p>Phone: +91-XXXXXXXXXX</p>
      </section>
    </main>
  );
}

