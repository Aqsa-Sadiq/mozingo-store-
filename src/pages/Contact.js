import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent (dummy).");
    setFormData({ name: "", email: "", phone: "", comment: "" });
  };

  return (
    <div style={{ padding: "50px 20px", maxWidth: 800, margin: "auto" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#7c3aed", marginBottom: 10 }}>
        Contact Us
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: 30, color: "#e0d7ff" }}>
        💡 We’re Here to Help You! <br />
        If you have any questions or need assistance with your Mozingo Credits, our support team is ready to help.
      </p>

      {/* How to Reach Us */}
      <section style={{ marginBottom: 30 }}>
        <h2 style={{ color: "#a78bfa" }}>How to Reach Us</h2>
        <p>Email: contactus@mozingo.co.uk</p>
        <p>Phone / WhatsApp: +44 07470808393 (Fastest response via WhatsApp!)</p>
      </section>

      {/* What to Include */}
      <section style={{ marginBottom: 30 }}>
        <h2 style={{ color: "#a78bfa" }}>What to Include in Your Message</h2>
        <ul style={{ marginLeft: 20, listStyleType: "disc" }}>
          <li>Your email address</li>
          <li>Your order ID / username</li>
          <li>Any specific questions or issues</li>
          <li>Providing these details will help us respond quickly and efficiently.</li>
        </ul>
      </section>

      {/* Response Time */}
      <section style={{ marginBottom: 30 }}>
        <h2 style={{ color: "#a78bfa" }}>Response Time</h2>
        <p>We typically reply within 24 hours</p>
        <p>For urgent queries, contact us via WhatsApp for the fastest response</p>
      </section>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 15, background: "#1e0a3c", padding: 30, borderRadius: 15 }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: 12, borderRadius: 8, border: "1px solid #7c3aed", background: "#0b061a", color: "white" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: 12, borderRadius: 8, border: "1px solid #7c3aed", background: "#0b061a", color: "white" }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          style={{ padding: 12, borderRadius: 8, border: "1px solid #7c3aed", background: "#0b061a", color: "white" }}
        />
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          rows={5}
          required
          style={{ padding: 12, borderRadius: 8, border: "1px solid #7c3aed", background: "#0b061a", color: "white" }}
        ></textarea>
        <button
          type="submit"
          style={{ padding: "12px", background: "#7c3aed", color: "white", border: "none", borderRadius: "8px", fontSize: "1rem", cursor: "pointer" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
