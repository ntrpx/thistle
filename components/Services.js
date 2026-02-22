const services = [
  {
    n: "01",
    title: "Hospitality",
    desc: "Restaurants, hotels, and café environments crafted to elevate the guest experience — from first impression to lasting memory.",
  },
  {
    n: "02",
    title: "Residential",
    desc: "Private homes designed around the rhythms of daily life, from thoughtful urban apartments to expansive personal retreats.",
  },
  {
    n: "03",
    title: "Commercial",
    desc: "Workplaces and studios that balance strong brand identity with the comfort and wellbeing of those who inhabit them.",
  },
  {
    n: "04",
    title: "Furnishings",
    desc: "Curated furniture and object selection — including bespoke pieces designed in close collaboration with skilled makers.",
  },
];

export default function Services() {
  return (
    <section className="section" style={{ background: "#ffffff" }}>
      <div className="wrap">

        <span className="label">What We Do</span>
        <h2 className="heading-lg" style={{ marginBottom: "3rem" }}>Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          border: "1px solid rgba(71,92,68,0.10)",
        }} className="services-grid">

          {services.map((s) => (
            <div key={s.n} className="service-card" style={{
              padding: "2.5rem 2rem",
              borderRight: "1px solid rgba(71,92,68,0.10)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              transition: "background 0.35s",
            }}>
              <span style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "0.5rem",
                letterSpacing: "0.38em",
                color: "#a79db5",
              }}>{s.n}</span>

              <h3 style={{
                fontFamily: "var(--font-figtree), 'Helvetica Neue', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1.375rem, 2vw, 1.75rem)",
                letterSpacing: "0.02em",
                color: "#475c44",
                transition: "color 0.35s",
              }} className="service-title">{s.title}</h3>

              <div className="rule" />

              <p className="body-text">{s.desc}</p>
            </div>
          ))}
        </div>

        <style>{`
          .service-card:last-child { border-right: none; }
          .service-card:hover { background: #f7f1ee; }
          .service-card:hover .service-title { color: #9ca991; }

          @media (max-width: 900px) {
            .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .service-card:nth-child(2) { border-right: none; }
            .service-card:nth-child(1),
            .service-card:nth-child(2) { border-bottom: 1px solid rgba(71,92,68,0.10); }
          }
          @media (max-width: 540px) {
            .services-grid { grid-template-columns: 1fr !important; }
            .service-card { border-right: none !important; border-bottom: 1px solid rgba(71,92,68,0.10) !important; }
            .service-card:last-child { border-bottom: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
