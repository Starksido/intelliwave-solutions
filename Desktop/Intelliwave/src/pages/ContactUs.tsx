import { useState } from 'react';
import SEO from '../components/SEO';
import { trackContactForm } from '../components/Analytics';

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
      // Track form submission
      trackContactForm('contact');
    }
  }

  return (
    <div>
      <SEO title="Contact Us — Intelliwave Solutions" description="Get in touch with Intelliwave Solutions." />
      <h2>Contact Us</h2>
      <p className="services-intro">We'd love to hear from you. Send a message or reach us via the details below.</p>

      <div className="two-col">
        <div>
          {sent ? (
            <div className="card" role="status">Thanks — your message has been noted.</div>
          ) : (
            <form onSubmit={onSubmit} className="card contact-form">
              <label>
                <div>Name</div>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </label>
              <label>
                <div>Email</div>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </label>
              <label>
                <div>Phone (optional)</div>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </label>
              <label>
                <div>Message</div>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                {errors.message && <div className="error-message">{errors.message}</div>}
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
            <div className="contact-buttons">
              <a className="button" href={WHATSAPP_SYDNEY.startsWith('REPLACE_') ? undefined : buildWa(WHATSAPP_SYDNEY)} target="_blank" rel="noopener noreferrer">WhatsApp Sydney</a>
              <a className="button" href={WHATSAPP_STEVE.startsWith('REPLACE_') ? undefined : buildWa(WHATSAPP_STEVE)} target="_blank" rel="noopener noreferrer">WhatsApp Steve</a>
            </div>
          </div>
          <div className="card office-info">
            <h3>Office</h3>
            <p>Stanbank house 2nd floor<br/>Nairobi, Kenya</p>
            <p className="business-hours"><em>Business hours: Mon–Fri, 9am–5pm </em></p>
          </div>
        </div>
      </div>
      
      <div id="map" className="map-section">
        <h3>Find Us</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8087!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2c2b8c8d5%3A0x1234567890abcdef!2sStanbank%20House%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Intelliwave Solutions Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}


