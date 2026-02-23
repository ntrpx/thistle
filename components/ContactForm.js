"use client";

import { useState } from "react";

const fieldStyle = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(71,92,68,0.22)",
  padding: "0.875rem 0",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: 400,
  fontSize: "0.875rem",
  color: "#475c44",
  outline: "none",
  transition: "border-color 0.3s",
};

const LAVENDER = "#a79db5";
const BORDER_IDLE = "rgba(71,92,68,0.22)";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 0" }}>
        <div style={{
          width: "1px",
          height: "4rem",
          background: "#9ca991",
          margin: "0 auto 2rem",
        }} />
        <h3 style={{
          fontFamily: "var(--font-figtree), 'Helvetica Neue', sans-serif",
          fontWeight: 300,
          fontSize: "2.25rem",
          letterSpacing: "0.02em",
          color: "#475c44",
          marginBottom: "0.75rem",
        }}>Thank you.</h3>
        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "0.875rem",
          color: "#475c44",
          opacity: 0.58,
        }}>We&apos;ll be in touch within 2–3 business days.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
      style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
           className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={fieldStyle}
          onFocus={e  => e.target.style.borderBottomColor = LAVENDER}
          onBlur={e   => e.target.style.borderBottomColor = BORDER_IDLE}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          style={fieldStyle}
          onFocus={e  => e.target.style.borderBottomColor = LAVENDER}
          onBlur={e   => e.target.style.borderBottomColor = BORDER_IDLE}
        />
      </div>

      <select
        name="projectType"
        defaultValue=""
        required
        style={{ ...fieldStyle, cursor: "pointer", appearance: "none" }}
        onFocus={e  => e.target.style.borderBottomColor = LAVENDER}
        onBlur={e   => e.target.style.borderBottomColor = BORDER_IDLE}
      >
        <option value="" disabled>Project Type</option>
        {["Hospitality / Restaurant", "Residential", "Commercial", "Furnishings & Objects", "Other"].map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your project…"
        required
        rows={5}
        style={{ ...fieldStyle, resize: "none" }}
        onFocus={e  => e.target.style.borderBottomColor = LAVENDER}
        onBlur={e   => e.target.style.borderBottomColor = BORDER_IDLE}
      />

      <div>
        <button type="submit" className="btn-outline">
          Send Enquiry
        </button>
      </div>

      <style>{`
        @media (max-width: 540px) { .form-row { grid-template-columns: 1fr !important; } }
        input::placeholder,
        textarea::placeholder { color: rgba(71,92,68,0.38); }
        select { color: rgba(71,92,68,0.38); }
        select:valid { color: #475c44; }
      `}</style>
    </form>
  );
}
