import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/work",    label: "Work"    },
  { href: "/about",   label: "About"   },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{
      background: "#f7f1ee",
      borderTop: "1px solid rgba(71,92,68,0.10)",
    }}>
      <div className="wrap footer-wrap" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>

        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2rem",
          marginBottom: "3.5rem",
        }} className="footer-grid">

          {/* Logo + tagline */}
          <div>
            <Link href="/" style={{ display: "block", marginBottom: "1.25rem" }}>
              <Image
                src="/logo-icon-stacked-evergreen.png"
                alt="Thistle Interiors"
                width={1800}
                height={1350}
                style={{ height: "110px", width: "auto" }}
              />
            </Link>
            <p style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "0.75rem",
              color: "#475c44",
              opacity: 0.65,
              lineHeight: 1.75,
            }}>
              Thoughtful spaces,<br />naturally made.
            </p>
          </div>

          {/* Navigation */}
          <nav style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            paddingTop: "0.25rem",
          }}>
            <span style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "0.5rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#a79db5",
              display: "block",
              marginBottom: "0.5rem",
            }}>Navigate</span>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="footer-nav-link">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div style={{ paddingTop: "0.25rem" }}>
            <span style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "0.5rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#a79db5",
              display: "block",
              marginBottom: "1rem",
            }}>Contact</span>

            <p style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "0.75rem",
              color: "#475c44",
              opacity: 0.75,
              lineHeight: 1.7,
              marginBottom: "0.875rem",
            }}>
              Tamera Baker<br />
              Sacramento, CA
            </p>

            <a href="tel:9167435820" className="footer-phone-link">
              916.743.5820
            </a>

            <a href="mailto:hello@thistleinterior.com" className="footer-email-link"
               style={{ marginBottom: "1.25rem", fontSize: "0.75rem" }}>
              hello@thistleinterior.com
            </a>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.25rem" }}>
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.18-.78 1.19-5.03 1.19-5.03s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.28.64 1.28 1.41 0 .86-.55 2.15-.83 3.35-.24 1 .5 1.81 1.49 1.81 1.79 0 3.16-1.88 3.16-4.6 0-2.4-1.73-4.08-4.2-4.08-2.86 0-4.54 2.14-4.54 4.36 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.29c-.08.32-.25 1-.28 1.14-.04.18-.15.22-.34.13-1.25-.58-2.03-2.42-2.03-3.89 0-3.16 2.3-6.07 6.63-6.07 3.48 0 6.19 2.48 6.19 5.79 0 3.46-2.18 6.24-5.21 6.24-1.02 0-1.97-.53-2.3-1.15l-.62 2.38c-.23.88-.84 1.97-1.25 2.63.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(71,92,68,0.09)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          <p style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "0.5rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#475c44",
            opacity: 0.32,
          }}>
            © {new Date().getFullYear()} Thistle Interiors. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "0.5rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#475c44",
            opacity: 0.32,
          }}>
            www.thistleinterior.com
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .footer-wrap { padding-left: 2.5rem !important; padding-right: 2.5rem !important; } }
      `}</style>
    </footer>
  );
}
