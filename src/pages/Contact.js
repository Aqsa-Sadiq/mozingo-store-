import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      
      {/* HEADER */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions or need support?  
          The Mozingo Gadget team is here to help you anytime.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-content">
        
        {/* LEFT SIDE FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* RIGHT SIDE INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            📧 <b>Email:</b> Mrbusinessuk1@gmail.com
          </p>

          <p>
            📞 <b>Phone:</b> 07943976961
          </p>

          <p>
            📍 <b>Address:</b> <br />
            86 Paget Street <br />
            Cardiff, CF11 7JZ <br />
            United Kingdom
          </p>
        </div>
      </section>
    </div>
  );
}
