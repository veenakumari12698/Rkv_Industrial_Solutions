import PhoneField from "../../components/PhoneField";
export default function Contact({ searchParams }) {
    const sent = searchParams?.sent === "1";
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
                    <form
                        className="proForm"
                        action="/api/contact"
                        method="post"
                    >

                        <div className="formTitle">

                            <span>BUSINESS ENQUIRY</span>

                            <h2>
                                {sent
                                    ? "Thank you. Your enquiry is with RKV."
                                    : "Tell us about your requirement."
                                }
                            </h2>

                            {sent && (
                                <p className="formSuccess">
                                    Your requirement has been securely submitted.
                                    Our team will review it and get back to you.
                                </p>
                            )}

                        </div>


                        <div className="formGrid">

                            {/* NAME */}
                            <input
                                name="name"
                                type="text"
                                placeholder="Full name *"
                                required
                                autoComplete="name"
                            />


                            {/* COMPANY */}
                            <input
                                name="company"
                                type="text"
                                placeholder="Company name"
                                autoComplete="organization"
                            />


                            {/* EMAIL */}
                            <input
                                name="email"
                                type="email"
                                placeholder="Business email *"
                                required
                                autoComplete="email"
                            />


                            {/* PHONE */}
                            <PhoneField />


                            {/* REQUIREMENT TYPE */}
                            <select
                                name="type"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Requirement type *
                                </option>

                                <option value="Service">
                                    Service
                                </option>

                                <option value="Product">
                                    Product
                                </option>

                                <option value="Industrial project">
                                    Industrial Project
                                </option>

                                <option value="Audit / Consulting">
                                    Audit / Consulting
                                </option>

                                <option value="Other">
                                    Other
                                </option>

                            </select>


                            {/* SUBJECT */}
                            <input
                                name="subject"
                                type="text"
                                placeholder="Subject"
                            />


                            {/* MESSAGE */}
                            <textarea
                                name="message"
                                rows="7"
                                placeholder="Describe your requirement, specification, quantity or project scope *"
                                required
                            ></textarea>

                        </div>


                        {/* SUBMIT */}
                        <button
                            className="btn btn-orange"
                            type="submit"
                        >
                            Send Enquiry →
                        </button>


                        <small>
                            We use your details only to respond to your
                            business enquiry.
                        </small>

                    </form>

                </div>
            </section>

        </main>
    );
}