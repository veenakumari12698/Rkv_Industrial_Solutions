import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <main>

            {/* HERO */}
            <section className="pageHero contactHero">
                <div className="container">
                    <span className="eyebrow">CONTACT RKV</span>

                    <h1>
                        Let's make your next procurement requirement easier.
                    </h1>

                    <p>
                        Tell us what you need, where it is required and when it
                        is needed. We will review the requirement and coordinate
                        the next step.
                    </p>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="section">
                <div className="container contactPro">

                    {/* LEFT SIDE */}
                    <div className="contactAside">

                        <span className="eyebrow dark">
                            RKV INDUSTRIAL SOLUTIONS
                        </span>

                        <h2>
                            Talk to a sourcing partner.
                        </h2>

                        <p>
                            For MRO, CAPEX, procurement consulting, audits,
                            industrial products or operational support, send
                            your requirement directly.
                        </p>

                        <div className="contactCards">

                            <div>
                                <span>LOCATION</span>
                                <b>Gurugram, India</b>
                            </div>

                            <div>
                                <span>OFFICE</span>
                                <b>Monday – Saturday</b>
                            </div>

                            <div>
                                <span>Email</span>
                                <a href="mailto:info@rkvindustrialsolutions.com">
                                    info@rkvindustrialsolutions.com
                                </a>
                            </div>

                            <div>
                                <span>WHATSAPP</span>

                                <a
                                    href="https://wa.me/918789856983"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +91 87898 56983
                                </a>
                            </div>

                        </div>

                        {/* WHATSAPP BUTTON */}
                        <a
                            className="waButton"
                            href="https://wa.me/918789856983"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>◉</span>
                            Chat on WhatsApp
                        </a>

                    </div>

                    {/* FORM */}
                    <ContactForm />

                </div>
            </section>

        </main>
    );
}