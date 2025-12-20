import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | SkillForge AI Technologies",
  description:
    "Contact SkillForge AI Technologies for AI tools, full-stack development, cloud services, and corporate training.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 sm:py-16">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text">
          Contact Us
        </h1>

        <p className="text-amber-200/80 text-sm mt-2">
          Tell us about your project or training needs, we’ll get back within one
          business day.
        </p>
      </div>
      <div className=" rounded-2xl shadow-md p-4 sm:p-6 md:p-8">
        <ContactForm />
      </div>

      <section className="mt-10 text-sm text-white text-center sm:text-left">
        <h3 className="font-semibold mb-2">Other ways to reach us</h3>
        <p>
          Email:{" "}
          <a
            href="mailto:sales@skillforgeai.com"
            className="text-sky-700 underline hover:text-sky-900 transition"
          >
            umashankarjabagond@skillai.com
          </a>
        </p>
        <p>Phone: +91-9823191415</p>
      </section>
    </main>
  );
}
