import Link from "next/link";
import { notFound } from "next/navigation";

const data = {
  automotive: {
    title: "Automotive",
    description:
      "Reliable sourcing for production, maintenance, quality and plant support across automotive operations.",
    seoTitle: "Automotive Industrial Procurement & Sourcing",
    seoDescription:
      "Industrial procurement and sourcing support for automotive manufacturing, including MRO requirements, maintenance supplies, plant materials and project sourcing.",
  },

  fmcg: {
    title: "FMCG",
    description:
      "Responsive procurement support for high-volume, fast-moving operations where continuity matters.",
    seoTitle: "FMCG Procurement & Industrial Sourcing Support",
    seoDescription:
      "Procurement and industrial sourcing support for FMCG operations, including MRO supplies, maintenance materials, packaging and facility requirements.",
  },

  "food-beverage": {
    title: "Food & Beverage",
    description:
      "Supply and procurement coordination for processing, packaging, maintenance and facility requirements.",
    seoTitle: "Food & Beverage Industrial Procurement Solutions",
    seoDescription:
      "Industrial procurement and sourcing support for food and beverage businesses, covering processing, packaging, maintenance and facility requirements.",
  },

  "alcoholic-beverages": {
    title: "Alcoholic Beverages",
    description:
      "Industrial sourcing support for production, utilities, packaging, maintenance and operational needs.",
    seoTitle: "Alcoholic Beverage Industry Procurement & Sourcing",
    seoDescription:
      "Industrial procurement support for alcoholic beverage operations, including production, utilities, packaging, maintenance and project requirements.",
  },

  hospitality: {
    title: "Hospitality",
    description:
      "Procurement support for facilities, operations, maintenance, infrastructure and guest-facing environments.",
    seoTitle: "Hospitality Procurement & Industrial Supply Solutions",
    seoDescription:
      "Procurement and industrial supply support for hospitality facilities, operations, maintenance, infrastructure and workplace requirements.",
  },

  manufacturing: {
    title: "Manufacturing",
    description:
      "End-to-end industrial procurement support for plants, workshops, projects and recurring MRO requirements.",
    seoTitle: "Manufacturing Industrial Procurement & MRO Sourcing",
    seoDescription:
      "Industrial procurement and MRO sourcing support for manufacturing plants, workshops, projects, maintenance and recurring operational requirements.",
  },

  pharmaceutical: {
    title: "Pharmaceutical",
    description:
      "Procurement support aligned with precision, traceability, documentation and controlled manufacturing environments.",
    seoTitle: "Pharmaceutical Industrial Procurement & Sourcing",
    seoDescription:
      "Industrial procurement and sourcing support for pharmaceutical manufacturing, including MRO, equipment, maintenance and documented supply requirements.",
  },

  "power-energy": {
    title: "Power & Energy",
    description:
      "Critical sourcing and maintenance support for assets where reliability, uptime and technical coordination are essential.",
    seoTitle: "Power & Energy Industrial Procurement Solutions",
    seoDescription:
      "Industrial sourcing and procurement support for power and energy operations, including maintenance, equipment, MRO and project material requirements.",
  },

  retail: {
    title: "Retail",
    description:
      "Operational procurement for stores, warehouses, facilities, packaging and support infrastructure.",
    seoTitle: "Retail Procurement & Industrial Supply Support",
    seoDescription:
      "Procurement and industrial supply support for retail stores, warehouses, facilities, packaging and operational infrastructure.",
  },

  "oil-gas": {
    title: "Oil & Gas",
    description:
      "Industrial sourcing support for demanding environments, maintenance requirements, equipment and project materials.",
    seoTitle: "Oil & Gas Industrial Procurement & Sourcing",
    seoDescription:
      "Industrial procurement and sourcing support for oil and gas operations, including MRO, equipment, maintenance supplies and project materials.",
  },

  defence: {
    title: "Defence",
    description:
      "Structured sourcing support for technical, infrastructure, maintenance and operational requirements.",
    seoTitle: "Defence Industrial Procurement & Sourcing Support",
    seoDescription:
      "Structured industrial procurement and sourcing support for defence-related technical, infrastructure, maintenance and operational requirements.",
  },

  "health-safety": {
    title: "Health & Safety",
    description:
      "Safety-focused procurement support for PPE, workplace protection, compliance and operational readiness.",
    seoTitle: "Health & Safety Products & Industrial Procurement",
    seoDescription:
      "Health and safety procurement support including PPE, workplace protection, safety equipment, compliance materials and operational supplies.",
  },
};

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = data[slug];

  if (!d) {
    return {
      title: "Industry Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: d.seoTitle,

    description: d.seoDescription,

    alternates: {
      canonical: `https://www.rkvindustrialsolutions.com/industries/${slug}`,
    },

    openGraph: {
      title: `${d.seoTitle} | RKV Industrial Solutions`,
      description: d.seoDescription,
      url: `https://www.rkvindustrialsolutions.com/industries/${slug}`,
      siteName: "RKV Industrial Solutions",
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: `/images/industries/${slug}.jpg`,
          alt: `${d.title} industry - RKV Industrial Solutions`,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const d = data[slug];

  if (!d) {
    notFound();
  }

  return (
    <main>
      {/* HERO */}
      <section className="detailHero">
        <img
          src={`/images/industries/${slug}.jpg`}
          alt={`${d.title} industry procurement and sourcing`}
        />

        <div className="container detailHeroInner">
          <span className="eyebrow">INDUSTRY EXPERTISE</span>

          <h1>{d.title}</h1>

          <p>{d.description}</p>

          <div className="detailActions">
            <Link className="btn btn-orange" href="/contact">
              Discuss Requirement
            </Link>

            <Link className="btn btn-outline" href="/industries">
              All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRY FOCUS */}
      <section className="section">
        <div className="container">
          <span className="eyebrow dark">INDUSTRY FOCUS</span>

          <h2>
            Procurement support aligned to operating realities.
          </h2>

          <p className="lead">
            Different sectors have different specifications, risk points and
            delivery pressures. Our sourcing approach starts with understanding
            the application, urgency and commercial context.
          </p>

          <div className="industryPillars">
            <div>
              <b>01</b>
              <h3>Requirement clarity</h3>
              <p>
                Specification, application, quantity and timing.
              </p>
            </div>

            <div>
              <b>02</b>
              <h3>Supplier coordination</h3>
              <p>
                Structured communication and comparison.
              </p>
            </div>

            <div>
              <b>03</b>
              <h3>Delivery follow-up</h3>
              <p>
                Commercial and dispatch coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="section soft">
        <div className="container">
          <div className="twoCol">
            <div>
              <span className="eyebrow dark">WHY IT MATTERS</span>

              <h2>Keep critical operations moving.</h2>

              <p>
                Whether the requirement is recurring MRO, a project package,
                equipment, infrastructure material or a specialist sourcing
                request, we build the process around the business need.
              </p>
            </div>

            <img
              className="featureImg"
              src={`/images/industries/${slug}.jpg`}
              alt={`${d.title} industrial procurement support`}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ctaBand">
        <div className="container ctaInner">
          <div>
            <span className="eyebrow">
              RKV INDUSTRIAL SOLUTIONS
            </span>

            <h2>Planning a purchase or project?</h2>

            <p>
              Let's discuss the requirement and the right sourcing route.
            </p>
          </div>

          <Link className="btn btn-orange" href="/contact">
            Talk to RKV
          </Link>
        </div>
      </section>
    </main>
  );
}