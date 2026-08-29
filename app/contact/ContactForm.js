"use client";

import { useState } from "react";
import PhoneField from "../../components/PhoneField";

export default function ContactForm() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");
        setShowSuccess(false);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Something went wrong."
                );
            }

            form.reset();
            setShowSuccess(true);

        } catch (err) {
            setError(
                err.message || "Unable to submit enquiry."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* FORM */}
            <form
                className="proForm"
                onSubmit={handleSubmit}
            >

                {/* FORM TITLE */}
                <div className="formTitle">

                    <span>BUSINESS ENQUIRY</span>

                    <h2>
                        Tell us about your requirement.
                    </h2>

                </div>


                {/* FORM FIELDS */}
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
                    disabled={loading}
                >
                    {loading
                        ? "Sending..."
                        : "Send Enquiry →"
                    }
                </button>


                <small>
                    We use your details only to respond to your
                    business enquiry.
                </small>

            </form>


            {/* SUCCESS POPUP */}
            {showSuccess && (
                <div className="successOverlay">
                    <div className="successPopup">

                        <div className="successIcon">
                            ✓
                        </div>

                        <h2>
                            Enquiry Submitted!
                        </h2>

                        <p>
                            Your requirement has been securely
                            submitted. Our team will review it
                            and get back to you.
                        </p>

                        <button
                            type="button"
                            className="btn btn-orange"
                            onClick={() => setShowSuccess(false)}
                        >
                            OK
                        </button>

                    </div>
                </div>
            )}


            {/* ERROR POPUP */}
            {error && (
                <div className="successOverlay">
                    <div className="successPopup">

                        <div className="errorIcon">
                            !
                        </div>

                        <h2>
                            Submission Failed
                        </h2>

                        <p>
                            {error}
                        </p>

                        <button
                            type="button"
                            className="btn btn-orange"
                            onClick={() => setError("")}
                        >
                            OK
                        </button>

                    </div>
                </div>
            )}
        </>
    );
}