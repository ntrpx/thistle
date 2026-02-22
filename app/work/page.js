import Image from "next/image";

const restaurants = [
  {
    index: "01",
    slug: "the-kitchen",
    name: "The Kitchen",
    location: "Sacramento, CA",
    description:
      "A chef-driven dining destination with bold, expressive interiors that celebrate culinary craft. We designed the full dining room experience — from custom seating to the striking bar mural.",
    hero: "/the-kitchen-dining-room.jpeg",
    gallery: [
      { src: "/the-kitchen-dining-room-2.jpeg", alt: "The Kitchen — dining room" },
      { src: "/the-kitchen-dining-room-3.jpeg", alt: "The Kitchen — seating detail" },
      { src: "/the-kitchen-dining-room-4.jpeg", alt: "The Kitchen — dining area" },
      { src: "/the-kitchen-bar-mural.jpeg",     alt: "The Kitchen — bar mural" },
      { src: "/the-kitchen-chef-kelly.jpeg",    alt: "The Kitchen — Chef Kelly" },
    ],
  },
  {
    index: "02",
    slug: "ella",
    name: "Ella",
    location: "Sacramento, CA",
    description:
      "An intimate fine-dining restaurant where warm materials and considered lighting create a sense of quiet luxury. We designed both the main dining room and the private dining spaces.",
    hero: "/ella-dining-room.jpg",
    gallery: [
      { src: "/ella-private-dining-room.jpg",   alt: "Ella — private dining room" },
      { src: "/ella-private-dining-room-2.jpg", alt: "Ella — private dining detail" },
    ],
  },
  {
    index: "03",
    slug: "sellands",
    name: "Selland's",
    location: "Sacramento, CA",
    description:
      "A beloved neighbourhood restaurant with a distinct personality. The signature plate wall installation creates an instantly recognisable focal point that anchors the entire space.",
    hero: "/sellands-plate-wall.jpg",
    gallery: [
      { src: "/sellands-plate-wall-2.jpg", alt: "Selland's — plate wall detail" },
      { src: "/sellands-plate-wall-3.jpg", alt: "Selland's — plate wall close-up" },
      { src: "/sellands-plate-wall-4.jpg", alt: "Selland's — dining area" },
    ],
  },
  {
    index: "04",
    slug: "obo",
    name: "OBO'",
    location: "Sacramento, CA",
    description:
      "A statement-making dining room defined by its dramatic chandelier installation. The lighting transforms the space, creating an atmosphere that shifts beautifully from daytime service to evening dining.",
    hero: "/obo-interior-chandelier.JPG",
    gallery: [
      { src: "/obo-interior-chandelier-2.jpg", alt: "OBO' — chandelier detail" },
      { src: "/obo-interior-chandelier-3.jpg", alt: "OBO' — interior view" },
    ],
  },
];

function GalleryImage({ src, alt }) {
  return (
    <div className="gallery-img" style={{ position: "relative" }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default function WorkPage() {
  return (
    <div style={{ background: "#f7f1ee", minHeight: "100vh" }}>

      {/* Page header */}
      <div className="wrap" style={{ paddingTop: "8rem", paddingBottom: "3.5rem" }}>
        <span className="label">Our Portfolio</span>
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
          marginBottom: "3rem",
        }} className="work-page-header">
          <h1 className="heading-lg">Our Work</h1>
          <p className="body-text">
            Restaurant and hospitality interior design, completed across Sacramento, California.
          </p>
        </div>

        {/* Quick-nav anchors */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          borderTop: "1px solid rgba(44,44,44,0.10)",
          borderBottom: "1px solid rgba(44,44,44,0.10)",
        }}>
          {restaurants.map((r, i) => (
            <a
              key={r.slug}
              href={`#${r.slug}`}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.5625rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#2C2C2C",
                opacity: 0.5,
                padding: "1rem 0",
                paddingRight: i < restaurants.length - 1 ? "2.5rem" : "0",
                paddingLeft: i > 0 ? "2.5rem" : "0",
                borderRight: i < restaurants.length - 1 ? "1px solid rgba(44,44,44,0.10)" : "none",
                transition: "opacity 0.3s, color 0.3s",
              }}
              className="work-nav-link"
            >
              {r.name}
            </a>
          ))}
        </div>
      </div>

      {/* Restaurant sections */}
      {restaurants.map((r, idx) => (
        <section
          key={r.slug}
          id={r.slug}
          style={{
            background: idx % 2 === 0 ? "#f7f1ee" : "#ffffff",
            paddingTop: "clamp(3.5rem, 6vw, 6rem)",
            paddingBottom: "clamp(4rem, 7vw, 7rem)",
          }}
        >
          <div className="wrap">

            {/* Section header — editorial 2-col */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2rem, 5vw, 5rem)",
              alignItems: "flex-end",
              marginBottom: "2rem",
            }} className="section-header-grid">
              <div>
                <span className="label">
                  {r.index} / {r.name.toUpperCase()} · {r.location}
                </span>
                <h2 className="heading-lg">{r.name}</h2>
              </div>
              <p className="body-text">{r.description}</p>
            </div>

            {/* Hero image — full width, tall */}
            <div style={{
              position: "relative",
              width: "100%",
              height: "clamp(280px, 52vw, 620px)",
              marginBottom: "0.75rem",
            }}>
              <Image
                src={r.hero}
                alt={`${r.name} — interior by Thistle`}
                fill
                sizes="(max-width: 768px) 100vw, 95vw"
                style={{ objectFit: "cover" }}
                priority={idx === 0}
                quality={idx === 0 ? 88 : 78}
              />
            </div>

            {/* Gallery — layout adapts to image count */}
            {r.gallery.length === 5 ? (
              /* The Kitchen: top row 2 images, bottom row 3 images */
              <>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }} className="gallery-grid gallery-2col">
                  {r.gallery.slice(0, 2).map(img => (
                    <GalleryImage key={img.src} {...img} />
                  ))}
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0.75rem",
                }} className="gallery-grid gallery-3col">
                  {r.gallery.slice(2).map(img => (
                    <GalleryImage key={img.src} {...img} />
                  ))}
                </div>
              </>
            ) : (
              /* Ella (2), Selland's (3), OBO' (2) */
              <div style={{
                display: "grid",
                gridTemplateColumns: r.gallery.length === 3
                  ? "repeat(3, 1fr)"
                  : "1fr 1fr",
                gap: "0.75rem",
              }} className={`gallery-grid ${r.gallery.length === 3 ? "gallery-3col" : "gallery-2col"}`}>
                {r.gallery.map(img => (
                  <GalleryImage key={img.src} {...img} />
                ))}
              </div>
            )}

          </div>
        </section>
      ))}

      <style>{`
        .work-nav-link:hover { opacity: 1 !important; color: #A08BA0 !important; }

        /* Gallery image heights */
        .gallery-img                { height: clamp(200px, 28vw, 380px); }
        .gallery-3col .gallery-img  { height: clamp(180px, 23vw, 320px); }

        /* Tablet: 3-col collapses to 2-col */
        @media (max-width: 900px) {
          .gallery-3col { grid-template-columns: repeat(2, 1fr) !important; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .work-page-header           { align-items: flex-start !important; flex-direction: column; }
          .section-header-grid        { grid-template-columns: 1fr !important; }
          .gallery-grid               { grid-template-columns: 1fr !important; }
          .gallery-img,
          .gallery-3col .gallery-img  { height: 260px !important; }
        }
      `}</style>
    </div>
  );
}
