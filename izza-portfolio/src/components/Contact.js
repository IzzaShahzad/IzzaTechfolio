import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgzpkkp"; // 

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");            
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setSending(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _replyto: form.email,
          _subject: "New message from portfolio site"
        })
      });

      if (res.ok) {
        setStatus("Message sent — thank you!");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setStatus(data?.error || "Failed to send message. Try again later.");
      }
    } catch (err) {
      setStatus("Network error — try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="container contact">
      <h2>Contact</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          required
        />

        <button type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>

        {status && <p style={{ marginTop: 12 }}>{status}</p>}
      </form>
    </section>
  );
}
