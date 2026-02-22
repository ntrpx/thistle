import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Thistle Interiors",
  description: "Begin a conversation about your project with Thistle Interiors.",
};

const META_LABEL = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: "0.5rem",
  letterSpacing: "0.38em",
  textTransform: "uppercase",
  color: "#a79db5",
  display: "block",
  marginBottom: "0.5rem",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#f7f1ee", minHeight: "100vh" }}>
      <div className="wrap" style={{ paddingTop: "9rem", paddingBottom: "6rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 8vw, 8rem)",
          alignItems: "start",
        }} className="contact-grid">

          {/* Left — info */}
          <div>
            <span className="label">Contact</span>
            <h1 className="heading-lg" style={{ marginBottom: "1.5rem" }}>
              Let&apos;s Talk
            </h1>
            <p className="body-text" style={{ maxWidth: "28rem", marginBottom: "2.75rem" }}>
              We take on a limited number of commissions each year. Please share a little
              about your project and we&apos;ll be in touch within 2–3 business days.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <div>
                <span style={META_LABEL}>Principal</span>
                <p style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "0.9375rem",
                  color: "#475c44",
                }}>Tamera Baker</p>
              </div>

              <div>
                <span style={META_LABEL}>Phone</span>
                <a href="tel:9168049271" style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "0.9375rem",
                  color: "#475c44",
                  transition: "color 0.3s",
                }}>
                  916.804.9271
                </a>
              </div>

              <div>
                <span style={META_LABEL}>Email</span>
                <a href="mailto:hello@thistleinterior.com" className="contact-email-link">
                  hello@thistleinterior.com
                </a>
              </div>

              <div>
                <span style={META_LABEL}>Studio</span>
                <p className="body-text" style={{ opacity: 0.75 }}>Sacramento, CA</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ paddingTop: "0.5rem" }}>
            <ContactForm />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </div>
  );
}
