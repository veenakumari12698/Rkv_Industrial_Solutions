import Link from "next/link";

const items = [
  [
    "MRO – Global Sourcing",
    "mro-global-sourcing",
    "Global sourcing for maintenance, repair and operations requirements."
  ],
  [
    "CAPEX – Comprehensive Industrial Material Supply",
    "capex-material-supply",
    "Project-focused industrial material sourcing and supply coordination."
  ],
  [
    "Procurement Consulting – CAPEX & OPEX",
    "procurement-consulting",
    "Strategy, supplier evaluation and commercial improvement support."
  ],
  [
    "Installation, Commissioning, Maintenance & Repair",
    "installation-commissioning-maintenance-repair",
    "Execution support from installation through maintenance and repair."
  ],
  [
    "Procurement Audit",
    "procurement-audit",
    "Independent review of procurement controls and commercial processes."
  ],
  [
    "Internal Audit",
    "internal-audit",
    "Process, control and risk-focused internal audit support."
  ],
  [
    "Digital Marketing",
    "digital-marketing",
    "Professional B2B digital presence and lead-oriented marketing."
  ],
  [
    "Graphic Design",
    "graphic-design",
    "Professional brand, presentation and visual communication for B2B businesses."
  ],
  [
    "Mechanical Design / 3D CAD Service",
    "mechanical-design-3d-cad-service",
    "Mechanical design, 3D CAD modelling and technical drawing support for industrial and engineering requirements."
  ],
  [
    "All Mechanical Work",
    "all-mechanical-work",
    "Practical mechanical support for fabrication, repair, modification, installation and industrial maintenance requirements."
  ],
  [
    "Safety & Industrial Equipment Supply",
    "safety-industrial-equipment-supply",
    "Reliable sourcing and supply of industrial safety equipment, PPE and essential workplace protection products."
  ]
];

export default function Services() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <span className="eyebrow">OUR SERVICES</span>

          <h1>
            Industrial procurement, sourcing and operational support.
          </h1>

          <p>
            Eleven focused capabilities designed around the way industrial
            businesses buy, operate, maintain and grow.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="serviceList">
            {items.map(([t, s, d], i) => (
              <Link
                className="serviceRow"
                href={`/services/${s}`}
                key={s}
              >
                <div className="serviceNo">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <img
                  src={`/images/services/${s}.jpg`}
                  alt={t}
                />

                <div>
                  <span className="eyebrow dark">
                    RKV SERVICE
                  </span>

                  <h2>{t}</h2>

                  <p>{d}</p>
                </div>

                <strong>↗</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}