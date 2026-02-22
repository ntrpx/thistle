import Image from "next/image";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="section" style={{ background: "#f7f1ee" }}>
      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 6vw, 6rem)",
          alignItems: "center",
        }} className="about-grid">

          {/* Text */}
          <div>
            <span className="label">The Studio</span>
            <h2 className="heading-lg" style={{ marginBottom: "1.75rem" }}>
              Rooted in<br />Natural Beauty
            </h2>
            <p className="body-text" style={{ marginBottom: "1rem" }}>
              Thistle Interiors was founded on the belief that the most enduring spaces
              are those that feel inevitable — as if they could not have been any other way.
              We work with natural materials, inherited objects, and the particular character
              of each site to create interiors that age gracefully.
            </p>
            <p className="body-text" style={{ marginBottom: "2rem" }}>
              Every project begins with listening — to the space, the light, and the people
              who will inhabit it.
            </p>
            <Link href="/about" className="link-arrow">
              Our Story →
            </Link>
          </div>

          {/* Image with Lavender accent border */}
          <div style={{ position: "relative" }} className="about-img-wrap">
            <div style={{ position: "relative", height: "clamp(320px, 55vw, 560px)" }}>
              <Image
                src="/sellands-plate-wall.jpg"
                alt="Selland's Restaurant — plate wall installation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Lavender offset border — brand accent */}
            <div style={{
              position: "absolute",
              bottom: "-1rem",
              right: "-1rem",
              width: "100%",
              height: "100%",
              border: "1px solid #a79db5",
              zIndex: -1,
            }} />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; }
            .about-img-wrap { margin-top: 1rem; }
          }
        `}</style>
      </div>
    </section>
  );
}
