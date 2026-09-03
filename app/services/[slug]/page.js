import Link from "next/link";
import { notFound } from "next/navigation";

const data = {
  "mro-global-sourcing": {
    label: "MRO GLOBAL SOURCING",
    title: "Keep critical operations supplied — without the sourcing complexity.",
    intro:
      "RKV Industrial Solutions supports maintenance, repair and operations requirements through structured global sourcing, supplier coordination and delivery follow-up.",
    overview:
      "From standard consumables to hard-to-find industrial spares, we help procurement and maintenance teams identify the right source, compare options and coordinate supply.",
    scope: [
      "Requirement & part-number validation",
      "Global supplier identification",
      "Technical and commercial comparison",
      "Lead-time and availability coordination",
      "Documentation and dispatch follow-up",
      "Repeat and recurring sourcing support",
    ],
    process: ["Understand", "Source", "Compare", "Coordinate", "Deliver"],
    why: [
      "Faster supplier discovery",
      "Better requirement clarity",
      "Single coordination point",
      "Transparent commercial comparison",
    ],
    seoTitle: "MRO Global Sourcing Services",
    seoDescription:
      "RKV Industrial Solutions provides MRO global sourcing, supplier identification, technical comparison and delivery coordination for industrial businesses.",
  },

  "capex-material-supply": {
    label: "CAPEX MATERIAL SUPPLY",
    title:
      "Comprehensive industrial material supply for projects that cannot miss milestones.",
    intro:
      "CAPEX procurement requires technical accuracy, commercial discipline and close coordination. RKV supports material sourcing from requirement definition through delivery.",
    overview:
      "We coordinate project material requirements across engineering, procurement, suppliers and logistics to keep critical packages moving.",
    scope: [
      "Project material requirement review",
      "Vendor and manufacturer sourcing",
      "Technical offer coordination",
      "Commercial comparison",
      "Delivery and milestone tracking",
      "Documentation & closure support",
    ],
    process: ["Brief", "Map", "Evaluate", "Supply", "Close"],
    why: [
      "Project-focused sourcing",
      "Coordinated vendor communication",
      "Milestone visibility",
      "Reduced procurement friction",
    ],
    seoTitle: "CAPEX Industrial Material Supply Services",
    seoDescription:
      "Industrial CAPEX material sourcing and supply coordination for projects, including vendor sourcing, technical evaluation, commercial comparison and delivery tracking.",
  },

  "procurement-consulting": {
    label: "PROCUREMENT CONSULTING — CAPEX & OPEX",
    title: "Turn procurement into a measurable business advantage.",
    intro:
      "We help teams improve sourcing strategy, supplier decisions, commercial discipline and procurement execution across CAPEX and OPEX spend.",
    overview:
      "Our consulting approach connects category strategy with practical execution — helping businesses reduce leakage, improve controls and build stronger supplier relationships.",
    scope: [
      "Spend and category review",
      "Supplier evaluation framework",
      "RFQ/RFP support",
      "Commercial benchmarking",
      "Procurement process improvement",
      "Supplier performance review",
    ],
    process: ["Assess", "Design", "Align", "Implement", "Improve"],
    why: [
      "Clearer procurement decisions",
      "Stronger supplier governance",
      "Better commercial visibility",
      "Repeatable processes",
    ],
    seoTitle: "Procurement Consulting Services | CAPEX & OPEX",
    seoDescription:
      "RKV Industrial Solutions provides procurement consulting for CAPEX and OPEX, including sourcing strategy, supplier evaluation, commercial benchmarking and process improvement.",
  },

  "installation-commissioning-maintenance-repair": {
    label: "INSTALLATION • COMMISSIONING • MAINTENANCE & REPAIR",
    title: "From equipment delivery to dependable operation.",
    intro:
      "RKV coordinates installation, commissioning, maintenance and repair support around industrial equipment and operational requirements.",
    overview:
      "The focus is practical execution: planning, coordination, site readiness, technical follow-up and closure of maintenance or repair activities.",
    scope: [
      "Installation coordination",
      "Commissioning readiness",
      "Preventive maintenance support",
      "Breakdown and repair coordination",
      "Spare and consumable sourcing",
      "Service documentation and closure",
    ],
    process: ["Plan", "Prepare", "Execute", "Verify", "Close"],
    why: [
      "Reduced operational disruption",
      "Coordinated technical support",
      "Spare availability planning",
      "Clear activity tracking",
    ],
    seoTitle: "Industrial Installation, Maintenance & Repair Services",
    seoDescription:
      "Industrial installation, commissioning, maintenance and repair coordination from RKV Industrial Solutions, including spare sourcing and service follow-up.",
  },

  "procurement-audit": {
    label: "PROCUREMENT AUDIT",
    title:
      "Find the gaps before they become cost, compliance or supplier problems.",
    intro:
      "Our procurement audit reviews purchasing practices, approvals, supplier controls, documentation and commercial discipline.",
    overview:
      "The objective is not just to identify issues, but to provide practical observations and improvement actions that procurement teams can implement.",
    scope: [
      "Procurement process review",
      "Approval and delegation checks",
      "Supplier documentation review",
      "Purchase-to-order controls",
      "Commercial and quotation review",
      "Action-oriented audit report",
    ],
    process: ["Scope", "Review", "Test", "Observe", "Recommend"],
    why: [
      "Independent review",
      "Control visibility",
      "Practical recommendations",
      "Better procurement governance",
    ],
    seoTitle: "Procurement Audit Services | RKV Industrial Solutions",
    seoDescription:
      "Procurement audit services covering purchasing processes, supplier controls, approvals, documentation, quotations and commercial governance.",
  },

  "internal-audit": {
    label: "INTERNAL AUDIT",
    title: "Stronger controls. Better visibility. More confident decisions.",
    intro:
      "RKV supports internal audit activities focused on operational processes, controls, documentation and risk visibility.",
    overview:
      "We structure reviews around business processes and evidence so management receives clear findings, priorities and practical improvement actions.",
    scope: [
      "Process walkthroughs",
      "Control design review",
      "Evidence and documentation testing",
      "Risk and gap identification",
      "Finding prioritization",
      "Management action tracking",
    ],
    process: ["Plan", "Map", "Test", "Report", "Follow-up"],
    why: [
      "Clear control visibility",
      "Evidence-based findings",
      "Prioritized actions",
      "Continuous improvement",
    ],
    seoTitle: "Internal Audit Services | RKV Industrial Solutions",
    seoDescription:
      "Internal audit support focused on operational processes, controls, documentation, risk visibility, findings and practical improvement actions.",
  },

  "digital-marketing": {
    label: "DIGITAL MARKETING",
    title: "Build a credible digital presence for industrial buyers.",
    intro:
      "RKV provides B2B digital marketing support designed for industrial, procurement and technical businesses.",
    overview:
      "The focus is on professional positioning, useful content, search visibility and lead-oriented digital communication rather than generic social media activity.",
    scope: [
      "B2B website content",
      "Search visibility strategy",
      "Industrial content creation",
      "LinkedIn and social campaigns",
      "Lead-generation landing pages",
      "Performance reporting",
    ],
    process: ["Position", "Plan", "Create", "Publish", "Optimize"],
    why: [
      "Professional brand presence",
      "Industry-relevant content",
      "Lead-focused campaigns",
      "Measurable improvement",
    ],
    seoTitle: "B2B Digital Marketing Services for Industrial Businesses",
    seoDescription:
      "B2B digital marketing services for industrial businesses, including website content, SEO strategy, industrial content, social campaigns and lead generation.",
  },

  "graphic-design": {
    label: "GRAPHIC DESIGN",
    title:
      "Clear, professional visual communication for industrial brands.",
    intro:
      "RKV provides graphic design support for businesses that need consistent, credible and presentation-ready visual communication.",
    overview:
      "From company profiles and presentations to marketing creatives and business collateral, we create visual systems that make technical businesses easier to understand and trust.",
    scope: [
      "Company profiles & capability decks",
      "Brochures and product catalogues",
      "Presentation and proposal design",
      "Social media creatives",
      "Business stationery & collateral",
      "Campaign and event creatives",
    ],
    process: ["Understand", "Structure", "Design", "Review", "Deliver"],
    why: [
      "Consistent brand presentation",
      "Business-focused design",
      "Clear technical communication",
      "Professional client-facing collateral",
    ],
    seoTitle: "Graphic Design Services for B2B Industrial Businesses",
    seoDescription:
      "Professional graphic design for industrial and B2B businesses, including company profiles, brochures, presentations, product catalogues and marketing creatives.",
  },

    "mechanical-design-3d-cad-service": {
    label: "MECHANICAL DESIGN • 3D CAD SERVICE",
    title: "Precision mechanical design and 3D CAD support for industrial requirements.",
    intro:
      "RKV provides practical mechanical design and 3D CAD support for industrial components, equipment and engineering requirements.",
    overview:
      "From concept development and 3D modelling to technical drawings and design modifications, we support engineering requirements with clear and practical design coordination.",
    scope: [
      "2D and 3D CAD modelling",
      "Mechanical component design",
      "Assembly and part modelling",
      "Technical drawing preparation",
      "Design modification and revision",
      "Engineering documentation support",
    ],
    process: ["Understand", "Design", "Model", "Review", "Deliver"],
    why: [
      "Clear engineering documentation",
      "Practical industrial design support",
      "Accurate 3D modelling",
      "Flexible design modification",
    ],
    seoTitle:
      "Mechanical Design & 3D CAD Services | RKV Industrial Solutions",
    seoDescription:
      "Mechanical design and 3D CAD services for industrial requirements, including 2D and 3D modelling, component design, assemblies and technical drawings.",
  },

  "all-mechanical-work": {
    label: "ALL MECHANICAL WORK",
    title: "Reliable mechanical support for industrial operations.",
    intro:
      "RKV provides coordinated mechanical support for fabrication, repair, modification, installation and maintenance requirements.",
    overview:
      "We help industrial businesses coordinate practical mechanical work around equipment, machinery and operational requirements, with a focus on execution, quality and timely completion.",
    scope: [
      "Mechanical fabrication support",
      "Equipment repair and modification",
      "Machine installation support",
      "Mechanical maintenance",
      "Fabrication and assembly work",
      "Spare and component coordination",
    ],
    process: ["Assess", "Plan", "Execute", "Inspect", "Close"],
    why: [
      "Practical mechanical execution",
      "Coordinated technical support",
      "Reduced equipment downtime",
      "Clear work tracking",
    ],
    seoTitle:
      "Industrial Mechanical Work & Support Services | RKV Industrial Solutions",
    seoDescription:
      "Industrial mechanical work including fabrication, equipment repair, modification, installation, maintenance and mechanical support from RKV Industrial Solutions.",
  },

  "safety-industrial-equipment-supply": {
    label: "SAFETY & INDUSTRIAL EQUIPMENT SUPPLY",
    title: "Safety and industrial equipment sourced around your requirement.",
    intro:
      "RKV coordinates the sourcing and supply of industrial safety equipment, PPE and essential workplace protection products.",
    overview:
      "We help businesses identify and source suitable safety and industrial equipment based on workplace requirements, specifications and quantities.",
    scope: [
      "Personal protective equipment (PPE)",
      "Industrial safety equipment",
      "Workplace protection products",
      "Safety footwear and protective clothing",
      "Industrial tools and equipment",
      "Requirement-based equipment sourcing",
    ],
    process: ["Understand", "Specify", "Source", "Compare", "Supply"],
    why: [
      "Requirement-focused sourcing",
      "Wide industrial supply coordination",
      "Specification-based selection",
      "Single coordination point",
    ],
    seoTitle:
      "Safety & Industrial Equipment Supply | RKV Industrial Solutions",
    seoDescription:
      "Safety and industrial equipment supply including PPE, workplace protection products, safety footwear, protective clothing and industrial equipment.",
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
      title: "Service Not Found",
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
      canonical: `https://www.rkvindustrialsolutions.com/services/${slug}`,
    },

    openGraph: {
      title: `${d.seoTitle} | RKV Industrial Solutions`,
      description: d.seoDescription,
      url: `https://www.rkvindustrialsolutions.com/services/${slug}`,
      siteName: "RKV Industrial Solutions",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `/images/services/${slug}.jpg`,
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
          src={`/images/services/${slug}.jpg`}
          alt={`${d.title} - RKV Industrial Solutions`}
        />

        <div className="container detailHeroInner">
          <span className="eyebrow">{d.label}</span>

          <h1>{d.title}</h1>

          <p>{d.intro}</p>

          <div className="detailActions">
            <Link className="btn btn-orange" href="/contact">
              Discuss Your Requirement
            </Link>

            <Link className="btn btn-outline" href="/services">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section detailIntro">
        <div className="container detailGrid">
          <div>
            <span className="eyebrow dark">OVERVIEW</span>

            <h2>Practical support from requirement to execution.</h2>

            <p>{d.overview}</p>
          </div>

          <div className="infoPanel">
            <span>RKV INDUSTRIAL SOLUTIONS</span>

            <strong>
              One coordination point for industrial requirements.
            </strong>

            <p>
              Clear communication, structured sourcing and delivery
              follow-up.
            </p>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="section soft">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="eyebrow dark">SCOPE OF SUPPORT</span>

              <h2>What we can coordinate.</h2>
            </div>
          </div>

          <div className="scopeGrid">
            {d.scope.map((x, i) => (
              <div className="scopeCard" key={x}>
                <b>{String(i + 1).padStart(2, "0")}</b>

                <h3>{x}</h3>

                <p>
                  Structured support aligned to the requirement and agreed
                  scope.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section">
        <div className="container">
          <span className="eyebrow dark">OUR WORKFLOW</span>

          <h2>Simple, accountable, trackable.</h2>

          <div className="processGrid">
            {d.process.map((x, i) => (
              <div key={x} className="processStep">
                <span>{String(i + 1).padStart(2, "0")}</span>

                <h3>{x}</h3>

                <p>
                  Clear handover and communication at every stage.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RKV */}
      <section className="section whySection">
        <div className="container">
          <div className="twoCol">
            <div>
              <span className="eyebrow dark">WHY RKV</span>

              <h2>Built for real procurement teams.</h2>

              <p>
                We focus on responsiveness, requirement clarity and practical
                execution — not unnecessary complexity.
              </p>
            </div>

            <div className="whyList">
              {d.why.map((x) => (
                <div key={x}>
                  ✓ <b>{x}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ctaBand">
        <div className="container ctaInner">
          <div>
            <span className="eyebrow">LET'S WORK TOGETHER</span>

            <h2>Have a requirement to source?</h2>

            <p>
              Send us the specification, quantity or project requirement.
            </p>
          </div>

          <Link className="btn btn-orange" href="/contact">
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}