"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/work",    label: "Work"    },
  { href: "/about",   label: "About"   },
  { href: "/contact", label: "Contact" },
];

const EG = "#475c44"; /* Evergreen — brand primary */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      background: "#f7f1ee",
      borderBottom: scrolled
        ? "1px solid rgba(71,92,68,0.14)"
        : "1px solid rgba(71,92,68,0.07)",
      boxShadow: scrolled ? "0 2px 20px rgba(71,92,68,0.07)" : "none",
      transition: "border-color 0.4s, box-shadow 0.4s",
    }}>
      <div className="wrap" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "4.75rem",
      }}>

        {/* Logo — brand PNG */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/thistle-wordmark.png"
            alt="Thistle Interiors"
            width={1554}
            height={174}
            priority
            style={{ height: "22px", width: "auto" }}
            className="nav-logo"
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
             className="hidden-mobile">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: EG,
                transition: "color 0.3s",
              }}
              onMouseEnter={e => { e.target.style.color = "#9ca991"; }}
              onMouseLeave={e => { e.target.style.color = EG; }}
            >
              {l.label}
            </Link>
          ))}

          {/* CTA button in nav */}
          <Link href="/contact"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              border: `1px solid ${EG}`,
              color: EG,
              padding: "0.625rem 1.5rem",
              transition: "background 0.3s, color 0.3s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = EG;
              e.currentTarget.style.color = "#f7f1ee";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = EG;
            }}
          >
            Begin a Project
          </Link>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="show-mobile"
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: "0.5rem", display: "flex", flexDirection: "column", gap: "5px",
          }}>
          <span style={{
            display: "block", width: "22px", height: "1px", background: EG,
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
          }}/>
          <span style={{
            display: "block", width: "22px", height: "1px", background: EG,
            transition: "opacity 0.3s",
            opacity: open ? 0 : 1,
          }}/>
          <span style={{
            display: "block", width: "22px", height: "1px", background: EG,
            transition: "transform 0.3s",
            transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
          }}/>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div style={{
        background: "#f7f1ee",
        borderTop: "1px solid rgba(71,92,68,0.08)",
        maxHeight: open ? "20rem" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        <nav style={{
          padding: "1.75rem clamp(1.5rem, 5vw, 5rem) 2rem",
          display: "flex", flexDirection: "column", gap: "1.75rem",
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "0.6875rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: EG,
              opacity: 0.7,
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: EG,
          }}>
            Begin a Project →
          </Link>
        </nav>
      </div>

      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
        @media (max-width: 767px) { .nav-logo { height: 26px !important; } }
      `}</style>
    </header>
  );
}
