import Link from "next/link";

export default function ContactCTA() {
  return (
    <section style={{ background: "#475c44" }}>
      <div className="wrap" style={{
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
        textAlign: "center",
        maxWidth: "860px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <span className="label" style={{ color: "rgba(247,241,238,0.5)" }}>
          Let&apos;s Begin
        </span>

        <h2 style={{
          fontFamily: "var(--font-figtree), 'Helvetica Neue', sans-serif",
          fontWeight: 300,
          fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
          letterSpacing: "0.02em",
          color: "#f7f1ee",
          lineHeight: 1.1,
          marginBottom: "1.25rem",
        }}>
          Have a project in mind?
        </h2>

        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "0.875rem",
          lineHeight: 1.85,
          color: "rgba(247,241,238,0.58)",
          maxWidth: "30rem",
          margin: "0 auto 2.5rem",
        }}>
          We take on a limited number of commissions each year to ensure every
          project receives the attention it deserves.
        </p>

        <Link href="/contact" className="btn-outline-light">
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
