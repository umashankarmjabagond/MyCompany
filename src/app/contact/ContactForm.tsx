// app/contact/ContactForm.jsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    hp: '',
  });
  const [status, setStatus] = useState({ loading: false, ok: null, error: null });

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
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
        setStatus({ loading: false, ok: false, error: json.error || 'Send failed' });
      }
    } catch {
      setStatus({ loading: false, ok: false, error: 'Network error' });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot */}
      <div style={{ display: 'none' }}>
        <label>
          Leave empty
          <input name="hp" value={form.hp} onChange={onChange} />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Full name *"
          required
          className="px-4 py-3 border rounded"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email *"
          required
          className="px-4 py-3 border rounded"
        />
      </div>

      <input
        name="phone"
        value={form.phone}
        onChange={onChange}
        placeholder="Phone (optional)"
        className="px-4 py-3 border rounded w-full"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        placeholder="Tell us about your project *"
        required
        rows="6"
        className="px-4 py-3 border rounded w-full"
      />

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status.loading}
          className="px-6 py-3 bg-sky-600 text-white rounded"
        >
          {status.loading ? 'Sending…' : 'Send Message'}
        </button>

        {status.ok && <div className="text-green-600">Message sent — thank you!</div>}
        {status.ok === false && (
          <div className="text-red-600">Error: {status.error || 'Unable to send'}</div>
        )}
      </div>
    </form>
  );
}
