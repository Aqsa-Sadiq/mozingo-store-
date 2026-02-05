import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      
      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>Upgrade Your Life with Mozingo Gadgets</h1>

        <p>
          Welcome to <b>Mozingo Gadget</b>, your trusted online store for smart
          home, lifestyle, and innovative gadgets.  
          We bring you products that make everyday life easier, stylish, and more
          comfortable.
        </p>

        {/* INFO BOXES */}
        <div className="about-boxes">
          <div className="box">
            <h3>Our Vision</h3>
            <p>
              To provide modern lifestyle gadgets that improve daily living.
            </p>
          </div>

          <div className="box">
            <h3>Our Journey</h3>
            <p>
              Mozingo Gadget was created to make smart shopping simple and
              accessible for everyone.
            </p>
          </div>

          <div className="box">
            <h3>Why Choose Us?</h3>
            <p>
              We offer trendy, useful, and affordable gadgets with customer
              satisfaction as our priority.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="about-image">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          alt="Team Discussion"
        />
      </section>

      {/* THIRD PARTY NOTE */}
      <section className="about-note">
        <p>
          Mozingo Gadget works with trusted third-party suppliers to bring you
          high-quality products at the best prices.  
          This allows us to offer a wide variety of gadgets and lifestyle items.
        </p>
      </section>

      {/* WHAT SETS US APART */}
      <section className="about-features">
        <h2>What Sets Us Apart</h2>

        <div className="features-grid">
          <div className="feature-img">
            <img
              src="https://images.pexels.com/photos/3943746/pexels-photo-3943746.jpeg"
              alt="Lifestyle"
            />
          </div>

          <div className="feature-list">
            <ul>
              <li>✔ Smart gadgets for modern living</li>
              <li>✔ Affordable lifestyle essentials</li>
              <li>✔ Trusted third-party product sourcing</li>
              <li>✔ Secure shopping experience</li>
              <li>✔ Fast support and customer care</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="about-community">
        <h2>Join the Mozingo Gadget Community</h2>
        <p>
          Explore our latest gadgets and lifestyle products.  
          Thank you for choosing Mozingo Gadget as your shopping partner.
        </p>
      </section>
    </div>
  );
}
