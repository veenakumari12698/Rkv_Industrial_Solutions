"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "../../../lib/supabase";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const supabase = getSupabase();
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.replace("/admin/dashboard");
    });
  }, [router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = getSupabase();
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
      return;
    }

    router.replace("/admin/dashboard");
    router.refresh();
  }

  return (
    <main className="admin">
      <div className="adminLoginCard">
        <div className="adminLogoWrap">
          <img src="/brand/rkv-logo.png" alt="RKV Industrial Solutions" />
        </div>
        <span className="eyebrow dark">RKV ADMIN</span>
        <h1>Secure Admin Login</h1>
        <p className="adminIntro">Sign in to manage business enquiries.</p>

        <form onSubmit={handleSubmit} className="adminForm">
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@rkvindustrial.com"
              required
              autoComplete="email"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </label>

          {error && <div className="adminError">{error}</div>}

          <button className="btn btn-orange" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in →"}
          </button>
        </form>

        <a href="/" className="adminBack">← Back to website</a>
      </div>
    </main>
  );
}
