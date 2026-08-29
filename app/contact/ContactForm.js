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
      <form
        className="premiumContactForm"
        onSubmit={handleSubmit}
      >

        <div className="premiumFormTop">
          <span>BUSINESS ENQUIRY</span>

          <h2>Tell us what you need.</h2>

          <p>
            Share your requirement and our team will review
            the details and get back to you.
          </p>
        </div>

        <div className="premiumFormGrid">

          <div className="formField">
            <label htmlFor="name">Full name *</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              autoComplete="name"
            />
          </div>

          <div className="formField">
            <label htmlFor="company">Company name</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your company"
              autoComplete="organization"
            />
          </div>

          <div className="formField">
            <label htmlFor="email">Business email *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="formField">
            <label>Phone number</label>
            <PhoneField />
          </div>

          <div className="formField">
            <label htmlFor="type">Requirement type *</label>

            <select
              id="type"
              name="type"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select requirement type
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
          </div>

          <div className="formField">
            <label htmlFor="subject">Subject</label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What is this regarding?"
            />
          </div>

          <div className="formField formFieldFull">
            <label htmlFor="message">
              Requirement details *
            </label>

            <textarea
              id="message"
              name="message"
              rows="7"
              placeholder="Tell us about the specification, part number, quantity, application, project scope or delivery requirement..."
              required
            />
          </div>

        </div>

        <div className="premiumFormBottom">

          <button
            className="premiumSubmit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Enquiry"}
            <span>↗</span>
          </button>

          <small>
            Your information is used only to respond to your
            business enquiry.
          </small>

        </div>

      </form>

      {/* SUCCESS */}
      {showSuccess && (
        <div className="formModalOverlay">
          <div className="formModal">

            <div className="modalCheck">✓</div>

            <span>THANK YOU</span>

            <h2>Enquiry received.</h2>

            <p>
              Your requirement has been successfully submitted.
              Our team will review the details and get back to you.
            </p>

            <button
              type="button"
              className="premiumSubmit"
              onClick={() => setShowSuccess(false)}
            >
              Continue
            </button>

          </div>
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="formModalOverlay">
          <div className="formModal">

            <div className="modalError">!</div>

            <span>PLEASE TRY AGAIN</span>

            <h2>We couldn't submit this.</h2>

            <p>{error}</p>

            <button
              type="button"
              className="premiumSubmit"
              onClick={() => setError("")}
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}