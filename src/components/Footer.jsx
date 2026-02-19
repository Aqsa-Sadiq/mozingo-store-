import React from "react";

export default function Footer({ theme = "dark" }) {
  const isDark = theme === "dark";

  const bgColor = isDark ? "#000" : "#f9f9f9";
  const textColor = isDark ? "#fff" : "#333";
  const bottomBg = isDark ? "#111" : "#eaeaea";
  const bottomText = isDark ? "#ccc" : "#555";

  return (
    <footer>
      {/* Top Section */}
      <div
        style={{
          backgroundColor: bgColor,
          color: textColor,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "30px 40px",
        }}
      >
        {/* Links Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", 
            gap: "12px",
          }}
        >
          <a href="/" style={linkStyle(textColor)}>
            Home
          </a>

          <a href="/credits" style={linkStyle(textColor)}>
            Mozingo Credits
          </a>

          <a href="/how-it-works" style={linkStyle(textColor)}>
            How It Works
          </a>

          <a href="/contact" style={linkStyle(textColor)}>
            Contact
          </a>

          <a href="/policies" style={linkStyle(textColor)}>
            Policies
          </a>
        </div>

        {/* PayPal Logo Right Side */}
        <div>
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal"
            style={{ width: "55px" }}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          backgroundColor: bottomBg,
          color: bottomText,
          textAlign: "center",
          padding: "12px",
          fontSize: "14px",
        }}
      >
        © 2026 MOZINGOX, Powered by MOZNGO |{" "}
        <a href="/terms" style={linkStyle(bottomText)}>
          Terms & Policies
        </a>
      </div>
    </footer>
  );
}

const linkStyle = (color) => ({
  color,
  textDecoration: "none",
  fontSize: "15px",
});
