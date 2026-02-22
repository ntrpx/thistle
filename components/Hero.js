import Link from "next/link";
import Image from "next/image";

const SHADOW = "0 2px 12px rgba(0,0,0,0.65), 0 4px 32px rgba(0,0,0,0.45)";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100svh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      overflow: "hidden",
    }}>
      {/* Background image */}
      <Image
        src="/ella-dining-room.jpg"
        alt="Ella Restaurant — interior by Thistle Interiors"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
        quality={82}
      />

      {/* Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(15,20,14,0.62) 0%, rgba(15,20,14,0) 100%), linear-gradient(to bottom, rgba(15,20,14,0.28) 0%, transparent 18%, transparent 82%, rgba(15,20,14,0.32) 100%)",
      }} />

      {/* Content */}
      <div className="wrap-narrow" style={{ position: "relative", zIndex: 1, width: "100%" }}>

        {/* Brand logo — cream + drop-shadow for contrast */}
        <Image
          src="/logo-icon-horizontal-evergreen.png"
          alt="Thistle Interiors — hospitality & residential design"
          width={1800}
          height={1050}
          priority
          style={{
            width: "clamp(280px, 90vw, 680px)",
            height: "auto",
            filter: `contrast(100) brightness(0) invert(1) drop-shadow(0 2px 10px rgba(0,0,0,0.7))`,
            marginBottom: "0.5rem",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 500,
          fontSize: "0.9375rem",
          lineHeight: 1.85,
          color: "rgba(247,241,238,0.92)",
          margin: "0 auto 3rem",
          textShadow: SHADOW,
        }}>
          We design interiors with intention — drawing from natural materials,
          quiet light, and the poetry of place.
        </p>

        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/work" className="btn-outline-light" style={{
            fontWeight: 500,
            textShadow: SHADOW,
            boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
          }}>
            View Our Work
          </Link>
          <Link href="/contact" className="link-arrow" style={{
            alignSelf: "center",
            color: "rgba(247,241,238,0.95)",
            fontWeight: 500,
            textShadow: SHADOW,
          }}>
            Begin a Project →
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "2.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        color: "#f7f1ee",
        opacity: 0.55,
        filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.6))",
      }}>
        <div style={{ width: "1px", height: "3rem", background: "#f7f1ee" }} />
        <span style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "0.4375rem",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
        }}>Scroll</span>
      </div>
    </section>
  );
}
