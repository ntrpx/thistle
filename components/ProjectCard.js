import Image from "next/image";

export default function ProjectCard({ image, title, category }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
      className="project-card">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover", transition: "transform 0.75s ease" }}
        className="project-card-img"
      />
      {/* Overlay — Evergreen tint on hover for brand consistency */}
      <div className="project-card-overlay" style={{
        position: "absolute", inset: 0,
        background: "rgba(15,20,14,0)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        transition: "background 0.45s ease",
        padding: "1.5rem",
      }}>
        <p className="project-card-label" style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "0.5rem",
          fontWeight: 400,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "rgba(247,241,238,0)",
          marginBottom: "0.625rem",
          transition: "color 0.45s ease",
        }}>{category}</p>
        <h3 className="project-card-title" style={{
          fontFamily: "var(--font-figtree), 'Helvetica Neue', sans-serif",
          fontWeight: 300,
          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
          letterSpacing: "0.03em",
          color: "rgba(247,241,238,0)",
          textAlign: "center",
          transition: "color 0.45s ease",
        }}>{title}</h3>
      </div>

      <style>{`
        .project-card:hover .project-card-img { transform: scale(1.04); }
        .project-card:hover .project-card-overlay { background: rgba(15,20,14,0.52); }
        .project-card:hover .project-card-label { color: rgba(247,241,238,0.75); }
        .project-card:hover .project-card-title { color: rgba(247,241,238,1); }
      `}</style>
    </div>
  );
}
