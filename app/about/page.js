import Image from "next/image";
import Link from "next/link";

const values = [
  { n: "01", title: "Restraint",    desc: "We believe in the power of what is left out. Every element must earn its place." },
  { n: "02", title: "Materiality",  desc: "Natural materials — stone, linen, timber, plaster — age beautifully and honestly." },
  { n: "03", title: "Light",        desc: "We design for the quality of light at every hour; a room must feel right at dawn and dusk." },
  { n: "04", title: "Longevity",    desc: "We avoid trends. Our interiors are designed to feel timeless from the very first day." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#f7f1ee" }}>

      {/* Hero text */}
      <div className="wrap" style={{ paddingTop: "9rem", paddingBottom: "5rem" }}>
        <span className="label">About</span>
        <h1 className="heading-lg">
          A Studio Built on Quiet Conviction
        </h1>
      </div>

      {/* Full-width image */}
      <div style={{ position: "relative", width: "100%", height: "clamp(280px, 55vh, 640px)" }}>
        <Image
          src="/the-kitchen-bar-mural.jpeg"
          alt="The Kitchen — bar mural by Thistle Interiors"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
          quality={85}
        />
      </div>

      {/* Story */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 6vw, 6rem)",
            alignItems: "start",
          }} className="about-story-grid">
            <div>
              <h2 className="heading-lg" style={{ marginBottom: "1.75rem" }}>The Story</h2>
              <p className="body-text" style={{ marginBottom: "1rem" }}>
                Thistle Interiors was founded by designer Tamera Baker, whose career spans
                hospitality and residential design across California. Her practice is built
                on deep listening — understanding the needs, character, and rhythms of each
                client — and translating those into spaces that feel utterly inevitable.
              </p>
              <p className="body-text">
                Today the studio works with a select team of interior designers, architects,
                and craftspeople on projects across Sacramento and the greater California
                region, with a particular focus on restaurant and hospitality environments.
              </p>
            </div>
            <div style={{ position: "relative", height: "clamp(280px, 45vw, 480px)" }}>
              <Image
                src="/sellands-plate-wall-2.jpg"
                alt="Selland's — plate wall installation detail"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .about-story-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "#f7f1ee" }}>
        <div className="wrap">
          <span className="label">Our Values</span>
          <h2 className="heading-lg" style={{ marginBottom: "3rem" }}>What Guides Us</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2.5rem",
          }} className="values-grid">
            {values.map(v => (
              <div key={v.title}>
                <h3 className="heading-md" style={{ marginBottom: "0.5rem" }}>{v.title}</h3>
                <div className="rule" />
                <p className="body-text">{v.desc}</p>
              </div>
            ))}
          </div>

          <style>{`
            @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{
        background: "#ffffff",
        borderTop: "1px solid rgba(71,92,68,0.08)",
        textAlign: "center",
      }}>
        <div className="wrap">
          <h2 className="heading-md" style={{ marginBottom: "1.5rem" }}>Work with us</h2>
          <Link href="/contact" className="btn-outline">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
