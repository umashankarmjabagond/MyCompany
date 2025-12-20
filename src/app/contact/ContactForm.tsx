"use client";

import { useState, ChangeEvent, FormEvent, JSX } from "react";
import { ContactFormData, Status } from "../types/types";

export default function ContactForm(): JSX.Element {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    hp: "",
  });

  const [status, setStatus] = useState<Status>({
    loading: false,
    ok: null,
    error: null,
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, error: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();

      if (res.ok && json.ok) {
        setStatus({ loading: false, ok: true, error: null });
        setForm({ name: "", email: "", phone: "", message: "", hp: "" });
      } else {
        setStatus({
          loading: false,
          ok: false,
          error: json.error || "Failed to send message",
        });
      }
    } catch {
      setStatus({ loading: false, ok: false, error: "Network error" });
    }
  };

  return (
    <section>
      <form
        onSubmit={onSubmit}
        className="
          bg-gradient-to-br from-amber-900/30 to-black/60
          backdrop-blur-md
          border border-amber-600/40
          rounded-3xl
          p-11
          shadow-2xl shadow-amber-900/40
        "
      >
        <div className="hidden">
          <input name="hp" value={form.hp} onChange={onChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Full name *"
            required
            className="md:col-span-2 px-5 py-3 h-[52px] rounded-xl bg-black/50
                       border border-amber-700/40
                       text-amber-100 placeholder:text-amber-300/50
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email *"
            required
            className="md:col-span-2 px-5 py-3 h-[52px] rounded-xl bg-black/50
                       border border-amber-700/40
                       text-amber-100 placeholder:text-amber-300/50
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="Phone (optional)"
            className="md:col-span-1 px-5 py-3 h-[52px] rounded-xl bg-black/50
                       border border-amber-700/40
                       text-amber-100 placeholder:text-amber-300/50
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Tell us about your project *"
            required
            className="md:col-span-3 px-5 py-3 min-h-[52px] resize-y
                       rounded-xl bg-black/50
                       border border-amber-700/40
                       text-amber-100 placeholder:text-amber-300/50
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
          <button
            type="submit"
            disabled={status.loading}
            className="px-12 py-2 rounded-xl font-semibold text-black
                       bg-gradient-to-r from-amber-400 to-yellow-300
                       hover:from-amber-300 hover:to-yellow-200
                       transition-all disabled:opacity-60"
          >
            {status.loading ? "Sending…" : "Send Message"}
          </button>

          {status.ok && (
            <span className="text-green-400 text-sm font-medium">
              Message sent successfully!
            </span>
          )}

          {status.ok === false && (
            <span className="text-red-400 text-sm font-medium">
              Error: {status.error || "Unable to send"}
            </span>
          )}
        </div>
      </form>
    </section>
  );
}
