import { useState } from 'react';
import SEO from '../components/SEO';

type Form = { name: string; email: string; phone: string; message: string };

const WHATSAPP_SYDNEY = '+254712205773';
const WHATSAPP_STEVE = '+254745351478';

function buildWa(number: string) {
  const text = encodeURIComponent('Hello IntelliWave Solutions, I would like to get in touch.');
  return `https://wa.me/${number}?text=${text}`;
}

export default function ContactUs() {
  const [form, setForm] = useState<Form>({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(values: Form) {
    const e: Record<string, string> = {};
    if (!values.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Valid email is required';
    if (!values.message.trim()) e.message = 'Message is required';
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
    }
  }

  return (
    <div>
      <SEO title="Contact Us — Intelliwave Solutions" description="Get in touch with Intelliwave Solutions." />
      <h2>Contact Us</h2>
      <p style={{ color: 'var(--muted)' }}>We’d love to hear from you. Send a message or reach us via the details below.</p>

      <div className="two-col" style={{ marginTop: 16 }}>
        <div>
          {sent ? (
            <div className="card" role="status">Thanks — your message has been noted.</div>
          ) : (
            <form onSubmit={onSubmit} className="card" style={{ display: 'grid', gap: 12 }}>
              <label>
                <div>Name</div>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={errors.name ? 'true' : 'false'} required />
                {errors.name && <div style={{ color: '#b91c1c', fontSize: 12 }}>{errors.name}</div>}
              </label>
              <label>
                <div>Email</div>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-invalid={errors.email ? 'true' : 'false'} required />
                {errors.email && <div style={{ color: '#b91c1c', fontSize: 12 }}>{errors.email}</div>}
              </label>
              <label>
                <div>Phone (optional)</div>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </label>
              <label>
                <div>Message</div>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} aria-invalid={errors.message ? 'true' : 'false'} required />
                {errors.message && <div style={{ color: '#b91c1c', fontSize: 12 }}>{errors.message}</div>}
              </label>
              <button className="button" type="submit">Send Message</button>
            </form>
          )}
        </div>
        <div>
          <div className="card">
            <h3>Direct Contacts</h3>
            <p>Email: <a href="mailto:privacy@intelliwavesolutions.com">privacy@intelliwavesolutions.com</a></p>
            <p>Phone: <a href="tel:+254 45351478">+25445351478</a></p>
            <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
              <a className="button" href={WHATSAPP_SYDNEY.startsWith('REPLACE_') ? undefined : buildWa(WHATSAPP_SYDNEY)} target="_blank" rel="noopener noreferrer">WhatsApp Sydney</a>
              <a className="button" href={WHATSAPP_STEVE.startsWith('REPLACE_') ? undefined : buildWa(WHATSAPP_STEVE)} target="_blank" rel="noopener noreferrer">WhatsApp Steve</a>
            </div>
          </div>
          <div className="card" style={{ marginTop: 12 }}>
            <h3>Office</h3>
            <p>Stanbank house 2nd floor<br/>Nairobi, Kenya</p>
            <p style={{ marginTop: 8 }}><em>Business hours: Mon–Fri, 9am–5pm </em></p>
          </div>
        </div>
      </div>
    </div>
  );
}


