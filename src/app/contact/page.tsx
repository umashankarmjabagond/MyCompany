import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | SkillForge AI Technologies",
  description:
    "Contact SkillForge AI Technologies for AI tools, full-stack development, cloud services, and corporate training.",
};

export default function ContactPage() {
  return (
    <main
      className="
        max-w-7xl mx-auto px-4 sm:px-6 py-6
        text-white
      "
    >
      <div className="mb-5 text-center">
        <h1
          className="text-3xl sm:text-4xl font-bold
               bg-gradient-to-r from-amber-400 to-yellow-300
               text-transparent bg-clip-text"
        >
          Contact Us
        </h1>

        <p className="text-amber-200/80 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          Tell us about your project or training needs, we’ll get back within one
          business day.
        </p>
      </div>
      <ContactForm />
      <div className="mt-6 text-sm sm:text-base text-center sm:text-center">
        <h3
          className="font-semibold mb-3
                     bg-gradient-to-r from-amber-400 to-yellow-300
                     text-transparent bg-clip-text"
        >
          Other ways to reach us
        </h3>

        <p className="text-amber-200/80">
          Email:{" "}
          <a
            href="mailto:umashankarjabagond@skillai.com"
            className="
              text-amber-300 underline underline-offset-4
              hover:text-amber-200 transition
            "
          >
            umashankarjabagond@skillai.com
          </a>
        </p>

        <p className="text-amber-200/80 mt-1">
          Phone: <span className="text-amber-300">+91-9823191415</span>
        </p>
      </div>
    </main >
  );
}
