import Link from "next/link";
import { notFound } from "next/navigation";

const data = {
  "mro-products": {
    title: "MRO Products",
    description:
      "Maintenance, repair and operations essentials sourced around your plant’s day-to-day needs.",
    seoTitle: "MRO Products & Industrial Maintenance Supplies",
    seoDescription:
      "Source MRO products including fasteners, tools, electrical items, safety supplies, industrial consumables and maintenance essentials from RKV Industrial Solutions.",
    items: [
      "Fasteners & hardware",
      "Tools & workshop consumables",
      "Electrical & maintenance items",
      "Safety and facility essentials",
      "Industrial consumables",
      "Special sourcing on request",
    ],
  },

  "instrumentation-automation": {
    title: "Instrumentation & Automation",
    description:
      "Components that help plants measure, control and automate critical processes.",
    seoTitle: "Industrial Instrumentation & Automation Products",
    seoDescription:
      "Source industrial instrumentation and automation components including sensors, transmitters, control components, measurement instruments and spares.",
    items: [
      "Sensors & transmitters",
      "Control and automation components",
      "Industrial electricals",
      "Measurement instruments",
      "Panel and control requirements",
      "Spares and accessories",
    ],
  },

  "packaging-solutions": {
    title: "Packaging Solutions",
    description:
      "Packaging materials and systems for industrial, commercial and distribution requirements.",
    seoTitle: "Industrial Packaging Solutions & Materials",
    seoDescription:
      "Industrial packaging solutions including protective packaging, transit packaging, export packaging, labels and project-specific packaging materials.",
    items: [
      "Industrial packaging materials",
      "Protective packaging",
      "Transit and export packaging",
      "Labels and identification",
      "Secondary packaging",
      "Project-specific packaging",
    ],
  },

  "industrial-machinery": {
    title: "Industrial Machinery",
    description:
      "Machinery and equipment sourcing support for production, material handling and plant requirements.",
    seoTitle: "Industrial Machinery & Equipment Sourcing",
    seoDescription:
      "Industrial machinery and equipment sourcing for production, material handling, workshops, utilities and plant requirements.",
    items: [
      "Production equipment",
      "Material handling",
      "Workshop machinery",
      "Utility equipment",
      "Special-purpose machinery",
      "Spares and service support",
    ],
  },

  "corporate-gifts": {
    title: "Corporate Gifts",
    description:
      "Professional gifting solutions for clients, employees, events and business relationships.",
    seoTitle: "Corporate Gifts & Branded Business Gifting",
    seoDescription:
      "Corporate gifting solutions including executive gifts, branded merchandise, employee recognition kits, custom packaging and bulk business orders.",
    items: [
      "Executive gifts",
      "Branded merchandise",
      "Event and recognition kits",
      "Custom packaging",
      "Bulk corporate orders",
      "Branding coordination",
    ],
  },

  "infrastructure-solutions": {
    title: "Infrastructure Solutions",
    description:
      "Materials and equipment supporting industrial facilities, projects and workplace infrastructure.",
    seoTitle: "Industrial Infrastructure Materials & Solutions",
    seoDescription:
      "Industrial infrastructure materials and equipment including electrical infrastructure, facility materials, project consumables, safety infrastructure and site supplies.",
    items: [
      "Electrical infrastructure",
      "Facility materials",
      "Project consumables",
      "Material handling",
      "Safety infrastructure",
      "Site and maintenance supplies",
    ],
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
      title: "Product Not Found",
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
      canonical: `https://www.rkvindustrialsolutions.com/products/${slug}`,
    },

    openGraph: {
      title: `${d.seoTitle} | RKV Industrial Solutions`,
      description: d.seoDescription,
      url: `https://www.rkvindustrialsolutions.com/products/${slug}`,
      siteName: "RKV Industrial Solutions",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `/images/products/${slug}.jpg`,
          alt: d.title,
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
          src={`/images/products/${slug}.jpg`}
          alt={`${d.title} - RKV Industrial Solutions`}
        />

        <div className="container detailHeroInner">
          <span className="eyebrow">PRODUCT SOLUTION</span>

          <h1>{d.title}</h1>

          <p>{d.description}</p>

          <div className="detailActions">
            <Link className="btn btn-orange" href="/contact">
              Enquire Now
            </Link>

            <Link className="btn btn-outline" href="/products">
              All Products
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT CAPABILITY */}
      <section className="section">
        <div className="container detailGrid">
          <div>
            <span className="eyebrow dark">PRODUCT CAPABILITY</span>

            <h2>
              Source the right specification — not just a catalogue item.
            </h2>

            <p>
              Share your part number, drawing, specification, brand preference
              or application. RKV Industrial Solutions can coordinate sourcing
              options around your operational requirement.
            </p>
          </div>

          <div className="imageMini">
            <img
              src={`/images/products/${slug}.jpg`}
              alt={`${d.title} industrial product solution`}
            />
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="section soft">
        <div className="container">
          <span className="eyebrow dark">TYPICAL REQUIREMENTS</span>

          <h2>What we can help source.</h2>

          <div className="scopeGrid">
            {d.items.map((item, i) => (
              <div className="scopeCard" key={item}>
                <b>{String(i + 1).padStart(2, "0")}</b>

                <h3>{item}</h3>

                <p>
                  Availability, specification and commercial coordination
                  based on your requirement.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container processBanner">
          <div>
            <span className="eyebrow dark">HOW IT WORKS</span>

            <h2>
              Requirement → sourcing → comparison → supply.
            </h2>

            <p>
              Our team keeps communication clear so procurement teams can
              move quickly from requirement to supply.
            </p>
          </div>

          <Link className="btn btn-navy" href="/contact">
            Send Requirement
          </Link>
        </div>
      </section>
    </main>
  );
}