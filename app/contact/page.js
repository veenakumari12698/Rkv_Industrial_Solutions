import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact RKV Industrial Solutions | Request a Quote",
  description:
    "Contact RKV Industrial Solutions for MRO sourcing, CAPEX material supply, procurement consulting, industrial products, audits and operational support.",
  alternates: {
    canonical: "https://www.rkvindustrialsolutions.com/contact",
  },
  openGraph: {
    title: "Contact RKV Industrial Solutions",
    description:
      "Discuss your industrial sourcing, procurement or material supply requirement with RKV Industrial Solutions.",
    url: "https://www.rkvindustrialsolutions.com/contact",
    siteName: "RKV Industrial Solutions",
    locale: "en_IN",
    type: "website",
  },
};

export default function Contact() {
  return (
    <main className="contactPage">

      {/* HERO */}
      <section className="contactHeroNew">
        <div className="container contactHeroContent">

          <span className="contactLabel">
            CONTACT RKV INDUSTRIAL SOLUTIONS
          </span>

          <h1>
            Tell us what
            <br />
            <em>you need.</em>
          </h1>

          <p>
            Share your industrial sourcing, procurement or material
            requirement. Our team will review the requirement and coordinate
            the next step.
          </p>

        </div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className="contactMain">
        <div className="container contactGrid">

          {/* LEFT */}
          <div className="contactInfo">

            <span className="contactLabel dark">
              LET'S TALK
            </span>

            <h2>
              A direct line to your procurement requirement.
            </h2>

            <p className="contactLead">
              Whether you need MRO products, CAPEX materials, supplier
              sourcing, procurement consulting or operational support,
              send the details directly to us.
            </p>

            <div className="contactDetails">

              <div className="contactDetail">
                <span>EMAIL</span>

                <a href="mailto:info@rkvindustrialsolutions.com">
                  info@rkvindustrialsolutions.com
                </a>
              </div>

              <div className="contactDetail">
                <span>WHATSAPP</span>

                <a
                  href="https://wa.me/918789856983"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 87898 56983
                </a>
              </div>

              <div className="contactDetail">
                <span>LOCATION</span>
                <strong>Gurugram, India</strong>
              </div>

              <div className="contactDetail">
                <span>AVAILABILITY</span>
                <strong>Monday – Saturday</strong>
              </div>

            </div>

            <a
              className="contactWhatsApp"
              href="https://wa.me/918789856983"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>◉</span>
              Start a WhatsApp conversation
              <b>↗</b>
            </a>

          </div>

          {/* FORM */}
          <div className="contactFormWrap">

            
            <ContactForm />

          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contactBottom">
        <div className="container">

          <div className="contactBottomInner">

            <div>
              <span className="contactLabel">
                RKV INDUSTRIAL SOLUTIONS
              </span>

              <h2>
                Have a requirement ready?
              </h2>

              <p>
                Let's find the right sourcing route for it.
              </p>
            </div>

            <a
              href="https://wa.me/918789856983"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-orange"
            >
              WhatsApp Us ↗
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}