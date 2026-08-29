import Link from "next/link";

export const metadata = {
  title: "About RKV Industrial Solutions | Industrial Procurement Partner",
  description:
    "RKV Industrial Solutions provides industrial sourcing, MRO supply, CAPEX material supply, procurement consulting, audits and operational support for businesses.",
  alternates: {
    canonical: "https://www.rkvindustrialsolutions.com/about",
  },
  openGraph: {
    title: "About RKV Industrial Solutions",
    description:
      "Industrial sourcing and procurement support built around clarity, coordination and dependable execution.",
    url: "https://www.rkvindustrialsolutions.com/about",
    siteName: "RKV Industrial Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/about-banner.png",
        width: 1200,
        height: 630,
        alt: "RKV Industrial Solutions",
      },
    ],
  },
};

const capabilities = [
  {
    title: "Industrial Sourcing",
    text: "MRO and industrial requirements sourced around specification, availability and urgency.",
    link: "/services/mro-global-sourcing",
  },
  {
    title: "Material Supply",
    text: "CAPEX materials, equipment and project requirements coordinated from source to delivery.",
    link: "/services/capex-material-supply",
  },
  {
    title: "Procurement Consulting",
    text: "Practical support for CAPEX and OPEX procurement strategy, supplier evaluation and commercial improvement.",
    link: "/services/procurement-consulting",
  },
  {
    title: "Audit & Operational Support",
    text: "Procurement audit, internal audit, installation, maintenance and operational coordination.",
    link: "/services/internal-audit",
  },
];

const industries = [
  ["Automotive", "automotive"],
  ["FMCG", "fmcg"],
  ["Food & Beverage", "food-beverage"],
  ["Hospitality", "hospitality"],
  ["Manufacturing", "manufacturing"],
  ["Pharmaceutical", "pharmaceutical"],
  ["Power & Energy", "power-energy"],
  ["Retail", "retail"],
  ["Oil & Gas", "oil-gas"],
  ["Defence", "defence"],
  ["Health & Safety", "health-safety"],
];

export default function About() {
  return (
    <main className="aboutPage">

      {/* HERO */}
      <section className="aboutHeroNew">
        <img
          src="/images/about-banner.png"
          alt="RKV Industrial Solutions industrial procurement"
        />

        <div className="aboutHeroShade" />

        <div className="container aboutHeroNewContent">
          <span className="aboutEyebrow">
            ABOUT RKV INDUSTRIAL SOLUTIONS
          </span>

          <h1>
            Industrial procurement
            <br />
            <em>built around reliability.</em>
          </h1>

          <p>
            We help businesses source, procure and coordinate critical
            industrial requirements with clarity, responsiveness and dependable
            execution.
          </p>

          <div className="aboutHeroButtons">
            <Link href="/contact" className="btn btn-orange">
              Talk to RKV ↗
            </Link>

            <Link href="/services" className="aboutHeroLink">
              Explore our services →
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="aboutIntroNew">
        <div className="container">
          <div className="aboutIntroGrid">

            <div className="aboutIntroTitle">
              <span className="aboutLabel">
                WHO WE ARE
              </span>

              <h2>
                A practical procurement partner for industrial businesses.
              </h2>
            </div>

            <div className="aboutIntroText">
              <p className="largeText">
                Industrial buying is rarely just about finding a product.
              </p>

              <p>
                Requirements often involve technical specifications,
                applications, supplier capability, availability, lead time,
                commercial terms, documentation and delivery coordination.
              </p>

              <p>
                RKV Industrial Solutions brings these moving parts together
                through structured sourcing, supplier coordination and
                practical procurement support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="aboutStoryNew">
        <div className="container">
          <div className="aboutStoryGrid">

            <div className="aboutStoryImage">
              <img
                src="/images/second.png"
                alt="Industrial warehouse and supply operations"
                loading="lazy"
              />
            </div>

            <div className="aboutStoryContent">
              <span className="aboutLabel">
                OUR APPROACH
              </span>

              <h2>
                We start with the requirement, not the catalogue.
              </h2>

              <p>
                Before sourcing begins, we focus on understanding what the
                business actually needs — the specification, application,
                quantity, timing and operational context.
              </p>

              <p>
                From there, we identify suitable sourcing routes, coordinate
                suppliers, compare options and maintain communication through
                execution.
              </p>

              <div className="aboutStatement">
                <span>Our focus</span>
                <strong>
                  Clear requirements.
                  <br />
                  Better coordination.
                  <br />
                  Dependable execution.
                </strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="aboutCapabilities">
        <div className="container">

          <div className="aboutSectionHeader">
            <div>
              <span className="aboutLabel">
                WHAT WE DO
              </span>

              <h2>
                Capabilities that support the complete requirement.
              </h2>
            </div>

            <Link href="/services" className="aboutTextLink">
              View all services →
            </Link>
          </div>

          <div className="aboutCapabilityGrid">
            {capabilities.map((item) => (
              <Link
                href={item.link}
                className="aboutCapabilityCard"
                key={item.title}
              >
                <div className="capabilityArrow">↗</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span>
                  Explore capability
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="aboutProcess">
        <div className="container">

          <div className="aboutProcessHeader">
            <span className="aboutLabel light">
              HOW WE WORK
            </span>

            <h2>
              A clear route from requirement to delivery.
            </h2>

            <p>
              Our process keeps communication structured and makes the next
              step clear for every stakeholder.
            </p>
          </div>

          <div className="aboutProcessSteps">

            <div>
              <span>Understand</span>
              <p>
                Specification, application, quantity and urgency.
              </p>
            </div>

            <div>
              <span>Source</span>
              <p>
                Identify suitable suppliers and sourcing options.
              </p>
            </div>

            <div>
              <span>Evaluate</span>
              <p>
                Review technical suitability and commercial considerations.
              </p>
            </div>

            <div>
              <span>Coordinate</span>
              <p>
                Manage communication, documentation and delivery follow-up.
              </p>
            </div>

            <div>
              <span>Deliver</span>
              <p>
                Follow the requirement through completion and closure.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="aboutIndustries">
        <div className="container">

          <div className="aboutSectionHeader">
            <div>
              <span className="aboutLabel">
                INDUSTRIES WE SUPPORT
              </span>

              <h2>
                Built for sectors where continuity matters.
              </h2>
            </div>

            <Link href="/industries" className="aboutTextLink">
              View all industries →
            </Link>
          </div>

          <div className="aboutIndustryList">
            {industries.map(([name, slug]) => (
              <Link
                href={`/industries/${slug}`}
                key={slug}
              >
                <span>{name}</span>
                <b>↗</b>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* WHY RKV */}
      <section className="aboutWhy">
        <div className="container">

          <div className="aboutWhyGrid">

            <div className="aboutWhyIntro">
              <span className="aboutLabel light">
                WHY RKV
              </span>

              <h2>
                Dependable sourcing is about more than price.
              </h2>

              <p>
                Industrial procurement affects uptime, project milestones,
                quality, cash flow and operational confidence. Our approach is
                designed around these realities.
              </p>
            </div>

            <div className="aboutWhyPoints">

              <div>
                <h3>Requirement clarity</h3>
                <p>
                  Start with the right information before approaching suppliers.
                </p>
              </div>

              <div>
                <h3>Supplier coordination</h3>
                <p>
                  Keep technical and commercial communication organized.
                </p>
              </div>

              <div>
                <h3>Commercial visibility</h3>
                <p>
                  Compare sourcing options with the right commercial context.
                </p>
              </div>

              <div>
                <h3>Execution support</h3>
                <p>
                  Follow requirements through dispatch, delivery and closure.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="aboutCTA">
        <div className="container">

          <div className="aboutCTAGrid">

            <div>
              <span className="aboutLabel">
                START A CONVERSATION
              </span>

              <h2>
                Have an industrial requirement?
              </h2>

              <p>
                Share a specification, part number, drawing, quantity or
                project scope with our team.
              </p>
            </div>

            <Link href="/contact" className="btn btn-orange">
              Request a Quote ↗
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}