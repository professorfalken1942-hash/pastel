'use client';

import { useState } from 'react';
import type { Metadata } from "next";

// Note: Metadata export doesn't work in client components, but we'll handle it with layout
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        date: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section style={{
        paddingTop: "12rem",
        paddingBottom: "5rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        textAlign: "center",
        borderBottom: "1px solid var(--blush)",
      }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--mink)",
          marginBottom: "1.5rem",
        }}>
          Get in Touch
        </p>
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: "2rem",
        }}>
          Contact
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.82rem",
          fontWeight: 300,
          lineHeight: 1.9,
          color: "var(--mink)",
          maxWidth: "480px",
          margin: "0 auto",
        }}>
          Have a question or ready to start planning? Julianna would love to hear from you.
        </p>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; padding: 4rem 1.25rem !important; }
          .pricing-grid { padding: 4rem 1.25rem !important; }
          .blog-article { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>

      {/* Form + Info */}
      <section className="contact-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "8rem 3rem",
        alignItems: "start",
      }}>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {submitted && (
            <div style={{
              padding: "1rem",
              backgroundColor: "rgba(0, 208, 132, 0.1)",
              border: "1px solid rgb(0, 208, 132)",
              borderRadius: "4px",
              color: "rgb(0, 100, 84)",
            }}>
              <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "0.85rem" }}>
                ✓ Thank you! We'll be in touch within 24–48 hours.
              </p>
            </div>
          )}

          {error && (
            <div style={{
              padding: "1rem",
              backgroundColor: "rgba(255, 71, 87, 0.1)",
              border: "1px solid rgb(255, 71, 87)",
              borderRadius: "4px",
              color: "rgb(200, 50, 60)",
            }}>
              <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "0.85rem" }}>
                ✗ {error}
              </p>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <label style={labelStyle}>First Name</label>
              <input
                style={inputStyle}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input
                style={inputStyle}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input
              style={inputStyle}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label style={labelStyle}>Service</label>
            <select
              style={inputStyle}
              name="service"
              value={formData.service}
              onChange={handleChange}
              disabled={isSubmitting}
            >
              <option value="">Select a service…</option>
              <option>Wedding Beauty</option>
              <option>Wedding Party</option>
              <option>Fashion / Editorial</option>
              <option>TV & Film</option>
              <option>Wardrobe & Set Styling</option>
              <option>Special Event</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Event Date</label>
            <input
              style={inputStyle}
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--charcoal)",
              backgroundColor: isSubmitting ? "rgba(255, 174, 215, 0.5)" : "var(--pink)",
              border: "none",
              padding: "1rem 2.5rem",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              alignSelf: "flex-start",
              opacity: isSubmitting ? 0.6 : 1,
              transition: "all 0.2s",
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            color: "var(--mink)",
            letterSpacing: "0.05em",
          }}>
            We typically respond within 24–48 hours.
          </p>
        </form>

        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {[
            { label: "Location", value: "Syracuse, New York\nAvailable for travel" },
            { label: "Instagram", value: "@pastelmakeupandstyle" },
            { label: "Bookings", value: "Use the contact form or book directly via our booking page." },
          ].map((item) => (
            <div key={item.label} style={{ borderTop: "1px solid var(--blush)", paddingTop: "1.5rem" }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--mink)",
                marginBottom: "0.75rem",
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.2rem",
                fontWeight: 300,
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "0.65rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--mink)",
  marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-sans)",
  fontSize: "0.82rem",
  fontWeight: 300,
  color: "var(--charcoal)",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid var(--blush)",
  padding: "0.6rem 0",
  outline: "none",
  transition: "border-color 0.2s",
};
