import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
    try {
        const contentType = req.headers.get("content-type") || "";

        const data = contentType.includes("application/json")
            ? await req.json()
            : Object.fromEntries(
                (await req.formData()).entries()
            );


        const name = String(data.name || "").trim();
        const email = String(data.email || "").trim();
        const countryCode = String(data.countryCode || "").trim();
        const phone = String(data.phone || "").trim();
        const company = String(data.company || "").trim();
        const service = String(data.type || "").trim();
        const subject = String(data.subject || "").trim();
        const message = String(data.message || "").trim();


        /* ---------------- VALIDATION ---------------- */

        if (!name) {
            return Response.json(
                {
                    ok: false,
                    message: "Full name is required."
                },
                { status: 400 }
            );
        }


        if (!email) {
            return Response.json(
                {
                    ok: false,
                    message: "Business email is required."
                },
                { status: 400 }
            );
        }


        if (!countryCode || !phone) {
            return Response.json(
                {
                    ok: false,
                    message: "Contact number is required."
                },
                { status: 400 }
            );
        }


        if (!/^[0-9]{6,15}$/.test(phone)) {
            return Response.json(
                {
                    ok: false,
                    message: "Please enter a valid contact number."
                },
                { status: 400 }
            );
        }


        if (!service) {
            return Response.json(
                {
                    ok: false,
                    message: "Requirement type is required."
                },
                { status: 400 }
            );
        }


        if (!message) {
            return Response.json(
                {
                    ok: false,
                    message: "Requirement message is required."
                },
                { status: 400 }
            );
        }


        /* ---------------- FULL PHONE ---------------- */

        const fullPhone = `${countryCode} ${phone}`;


        /* ---------------- SUPABASE ---------------- */

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
            {
                auth: {
                    persistSession: false,
                    autoRefreshToken: false
                }
            }
        );


        /* ---------------- DATABASE ---------------- */

        const { error } = await supabase
            .from("enquiries")
            .insert({
                name,
                email,
                phone: fullPhone,
                company: company || null,
                service,
                message: subject
                    ? `Subject: ${subject}\n\n${message}`
                    : message,
                status: "new"
            });


        if (error) {

            console.error(
                "RKV enquiry insert error:",
                error
            );

            return Response.json(
                {
                    ok: false,
                    message:
                        "Unable to save your enquiry. Please try again."
                },
                { status: 500 }
            );
        }


        /* ---------------- SUCCESS ---------------- */

        return Response.redirect(
            new URL("/contact?sent=1", req.url),
            303
        );

    } catch (error) {

        console.error(
            "RKV enquiry error:",
            error
        );

        return Response.json(
            {
                ok: false,
                message: "Unable to submit enquiry."
            },
            { status: 400 }
        );
    }
}