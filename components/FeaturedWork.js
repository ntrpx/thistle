import Link from "next/link";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "The Kitchen",
    category: "Restaurant Interior",
    image: "/the-kitchen-dining-room.jpeg",
  },
  {
    title: "Ella",
    category: "Restaurant Interior",
    image: "/ella-private-dining-room.jpg",
  },
  {
    title: "OBO'",
    category: "Restaurant Interior",
    image: "/obo-interior-chandelier.JPG",
  },
];

export default function FeaturedWork() {
  return (
    <section className="section" style={{ background: "#f7f1ee" }}>
      <div className="wrap">

        {/* Header row */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div>
            <span className="label">Selected Projects</span>
            <h2 className="heading-lg">Featured Work</h2>
          </div>
          <Link href="/work" className="link-arrow">
            View All Projects →
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "7fr 5fr",
          gap: "1rem",
        }} className="featured-grid">
          {/* Large — left */}
          <div style={{ height: "520px", position: "relative" }} className="featured-full">
            <ProjectCard {...projects[0]} />
          </div>

          {/* Right column — two images stacked flush */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="featured-stack">
            <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
              <ProjectCard {...projects[1]} />
            </div>
            <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
              <ProjectCard {...projects[2]} />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .featured-grid  { grid-template-columns: 1fr !important; }
            .featured-full  { height: 280px !important; }
            .featured-stack { flex-direction: row !important; height: 220px; }
            .featured-stack > div { flex: 1; }
          }
        `}</style>
      </div>
    </section>
  );
}
