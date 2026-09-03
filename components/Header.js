"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  ["MRO – Global Sourcing", "mro-global-sourcing"],
  ["CAPEX – Material Supply", "capex-material-supply"],
  ["Procurement Consulting", "procurement-consulting"],
  ["Installation & Maintenance", "installation-commissioning-maintenance-repair"],
  ["Procurement Audit", "procurement-audit"],
  ["Internal Audit", "internal-audit"],
  ["Digital Marketing", "digital-marketing"],
  ["Graphic Design", "graphic-design"],

  // NEW SERVICES
  ["Mechanical Design / 3D CAD Service", "mechanical-design-3d-cad-service"],
  ["All Mechanical Work", "all-mechanical-work"],
  ["Safety & Industrial Equipment Supply", "safety-industrial-equipment-supply"],
];

const products = [
  ["MRO Products", "mro-products"],
  ["Instrumentation & Automation", "instrumentation-automation"],
  ["Packaging Solutions", "packaging-solutions"],
  ["Industrial Machinery", "industrial-machinery"],
  ["Corporate Gifts", "corporate-gifts"],
  ["Infrastructure Solutions", "infrastructure-solutions"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbarIn">
          <span>Gurugram, India</span>
          <span>Monday – Saturday</span>
          <span>Industrial Sourcing • Supply • Support</span>
        </div>
      </div>

      <header className="siteHeader">
        <div className="container navIn">

          <Link
            href="/"
            className="brand"
            onClick={closeMenu}
          >
            <img
              src="/brand/rkv-logo.png"
              alt="RKV Industrial Solutions"
            />
          </Link>

          <nav>
            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            <div className="navDrop">
              <Link href="/services">
                Services <small>⌄</small>
              </Link>

              <div className="megaMenu">
                <div>
                  <span>SERVICES</span>

                  {services.map(([t, s]) => (
                    <Link
                      key={s}
                      href={`/services/${s}`}
                    >
                      {t}
                    </Link>
                  ))}
                </div>

                <div className="menuFeature">
                  <b>
                    Procurement that moves operations forward.
                  </b>

                  <p>
                    Global sourcing, CAPEX supply, consulting,
                    audits and lifecycle support.
                  </p>

                  <Link href="/services">
                    View all services →
                  </Link>
                </div>
              </div>
            </div>

            <div className="navDrop">
              <Link href="/products">
                Products <small>⌄</small>
              </Link>

              <div className="megaMenu">
                <div>
                  <span>PRODUCTS</span>

                  {products.map(([t, s]) => (
                    <Link
                      key={s}
                      href={`/products/${s}`}
                    >
                      {t}
                    </Link>
                  ))}
                </div>

                <div className="menuFeature">
                  <b>
                    Source around the specification.
                  </b>

                  <p>
                    Industrial products and equipment
                    coordinated around your requirement.
                  </p>

                  <Link href="/products">
                    View products →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/industries">
              Industries
            </Link>
          </nav>

          <Link
            className="headerCta"
            href="/contact"
          >
            Request a Quote <b>↗</b>
          </Link>

          <div className="mobileMenu">
            <button
              type="button"
              className="mobileMenuButton"
              aria-label={
                open ? "Close menu" : "Open menu"
              }
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              {open ? "×" : "☰"}
            </button>

            {open && (
              <div className="mobileMenuPanel">
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>

                <Link href="/about" onClick={closeMenu}>
                  About
                </Link>

                <Link href="/services" onClick={closeMenu}>
                  Services
                </Link>

                <Link href="/products" onClick={closeMenu}>
                  Products
                </Link>

                <Link href="/industries" onClick={closeMenu}>
                  Industries
                </Link>

                <Link
                  className="mobileQuote"
                  href="/contact"
                  onClick={closeMenu}
                >
                  Request a Quote
                </Link>
              </div>
            )}
          </div>

        </div>
      </header>
    </>
  );
}