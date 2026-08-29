"use client";

import { useState } from "react";
import {
    parsePhoneNumberFromString,
    getCountries,
    getCountryCallingCode,
} from "libphonenumber-js";

const countryNames = {
    IN: "India",
    US: "USA",
    GB: "United Kingdom",
    AE: "UAE",
    SA: "Saudi Arabia",
    SG: "Singapore",
    MY: "Malaysia",
    AU: "Australia",
    DE: "Germany",
    FR: "France",
    JP: "Japan",
    KR: "South Korea",
    CN: "China",
    RU: "Russia",
    ZA: "South Africa",
};

export default function PhoneField() {
    const [country, setCountry] = useState("IN");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const callingCode = getCountryCallingCode(country);

    function handleCountryChange(e) {
        setCountry(e.target.value);
        setPhone("");
        setError("");
    }

    function handlePhoneChange(e) {
        const value = e.target.value.replace(/\D/g, "");

        setPhone(value);
        setError("");

        if (!value) {
            return;
        }

        const parsed = parsePhoneNumberFromString(
            `+${callingCode}${value}`
        );

        if (parsed && !parsed.isValid()) {
            setError("Please enter a valid phone number.");
        }
    }

    function validatePhone() {
        if (!phone) {
            setError("Contact number is required.");
            return false;
        }

        const parsed = parsePhoneNumberFromString(
            `+${callingCode}${phone}`
        );

        if (!parsed || !parsed.isValid()) {
            setError(
                `Please enter a valid ${countryNames[country] || ""} phone number.`
            );
            return false;
        }

        setError("");
        return true;
    }

    return (
        <div className="phoneFieldWrapper">

            <div className="phoneField">

                <select
                    name="countryCode"
                    value={country}
                    onChange={handleCountryChange}
                    required
                    aria-label="Country"
                >
                    {getCountries().map((code) => (
                        <option
                            key={code}
                            value={code}
                        >
                            {code} +{getCountryCallingCode(code)}
                        </option>
                    ))}
                </select>

                <input
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={validatePhone}
                    placeholder="Contact number*"
                    required
                    inputMode="numeric"
                    autoComplete="tel"
                />

            </div>

            {error && (
                <span className="phoneError">
                    {error}
                </span>
            )}

        </div>
    );
}