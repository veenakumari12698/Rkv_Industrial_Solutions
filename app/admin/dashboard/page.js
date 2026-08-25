"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "../../../lib/supabase";

export default function Dashboard() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function load() {
    const supabase = getSupabase();
    const { data: authData } = await supabase.auth.getSession();

    if (!authData.session) {
      router.replace("/admin/login");
      return;
    }

    setSession(authData.session);

    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage(error.message);
    } else {
      setEnquiries(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function logout() {
    const supabase = getSupabase();
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  async function updateStatus(id, status) {
    const supabase = getSupabase();
    const { error } = await supabase
      .from("enquiries")
      .update({ status })
      .eq("id", id);

    if (error) {
      setMessage(error.message);
      return;
    }

    setEnquiries((items) =>
      items.map((item) => (item.id === id ? { ...item, status } : item))
    );
  }

  async function deleteEnquiry(id) {
    if (!window.confirm("Delete this enquiry permanently?")) return;

    const supabase = getSupabase();
    const { error } = await supabase.from("enquiries").delete().eq("id", id);

    if (error) {
      setMessage(error.message);
      return;
    }

    setEnquiries((items) => items.filter((item) => item.id !== id));
  }

  const stats = useMemo(() => ({
    total: enquiries.length,
    new: enquiries.filter((x) => x.status === "new").length,
    contacted: enquiries.filter((x) => x.status === "contacted").length,
    completed: enquiries.filter((x) => x.status === "completed").length,
  }), [enquiries]);

  if (loading) {
    return <main className="admin"><div className="adminLoading">Loading RKV Admin...</div></main>;
  }

  if (!session) return null;

  return (
    <main className="admin adminDashboard">
      <div className="dash">
        <header className="dashHeader">
          <div>
            <span className="eyebrow dark">RKV INDUSTRIAL SOLUTIONS</span>
            <h1>Enquiry Dashboard</h1>
            <p>{session.user.email}</p>
          </div>
          <div className="dashActions">
            <a className="btn btn-outline" href="/">View Website</a>
            <button className="btn btn-orange" onClick={logout}>Sign out</button>
          </div>
        </header>

        <div className="stats">
          <b>{stats.total}<span>Total Enquiries</span></b>
          <b>{stats.new}<span>New</span></b>
          <b>{stats.contacted}<span>Contacted</span></b>
          <b>{stats.completed}<span>Completed</span></b>
        </div>

        {message && <div className="adminError">{message}</div>}

        <section className="enquiryPanel">
          <div className="panelHead">
            <div>
              <span className="eyebrow dark">BUSINESS LEADS</span>
              <h2>Recent Enquiries</h2>
            </div>
            <button className="btn btn-outline" onClick={load}>Refresh</button>
          </div>

          {enquiries.length === 0 ? (
            <div className="emptyState">
              <h3>No enquiries yet</h3>
              <p>New contact form submissions will appear here automatically.</p>
            </div>
          ) : (
            <div className="enquiryTableWrap">
              <table className="enquiryTable">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Contact</th>
                    <th>Company</th>
                    <th>Requirement</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((item) => (
                    <tr key={item.id}>
                      <td>{new Date(item.created_at).toLocaleDateString("en-IN")}</td>
                      <td>
                        <strong>{item.name}</strong>
                        <small>{item.email}</small>
                        {item.phone && <small>{item.phone}</small>}
                      </td>
                      <td>{item.company || "—"}</td>
                      <td>{item.service || "General enquiry"}</td>
                      <td className="messageCell">{item.message}</td>
                      <td>
                        <select
                          value={item.status}
                          onChange={(e) => updateStatus(item.id, e.target.value)}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                      <td>
                        <button className="deleteBtn" onClick={() => deleteEnquiry(item.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
