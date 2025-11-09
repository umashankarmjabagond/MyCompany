'use client';

import { useState, ChangeEvent, FormEvent, JSX } from 'react';
import { ContactFormData, Status } from '../types/types';



export default function ContactForm(): JSX.Element {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    hp: '',
  });

  const [status, setStatus] = useState<Status>({
    loading: false,
    ok: null,
    error: null,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, error: null });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const json = await res.json();

      if (res.ok && json.ok) {
        setStatus({ loading: false, ok: true, error: null });
        setForm({ name: '', email: '', phone: '', message: '', hp: '' });
      } else {
        setStatus({
          loading: false,
          ok: false,
          error: json.error || 'Failed to send message',
        });
      }
    } catch {
      setStatus({ loading: false, ok: false, error: 'Network error' });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 sm:space-y-6 max-w-2xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-sm"
    >
      <div className="hidden">
        <label>
          Leave empty
          <input name="hp" value={form.hp} onChange={onChange} />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Full name *"
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email *"
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      <input
        name="phone"
        value={form.phone}
        onChange={onChange}
        placeholder="Phone (optional)"
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        placeholder="Tell us about your project *"
        required
        rows={6}
        className="w-full px-4 py-3 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          disabled={status.loading}
          className="w-full sm:w-auto px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-all disabled:opacity-60"
        >
          {status.loading ? 'Sending…' : 'Send Message'}
        </button>

        {status.ok && (
          <div className="text-green-600 text-sm font-medium">
            Message sent — thank you!
          </div>
        )}
        {status.ok === false && (
          <div className="text-red-600 text-sm font-medium">
            Error: {status.error || 'Unable to send'}
          </div>
        )}
      </div>
    </form>
  );
}
