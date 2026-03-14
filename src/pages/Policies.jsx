import React from "react";

export default function Policies() {
  const policySections = [
    {
      title: "Privacy Policy",
      content: [
        "At Arcade tech solution, we respect your privacy and ensure all personal information is handled securely.",
        "Information Collected:",
        "• Contact info submitted via forms",
        "• Payment confirmation details submitted to our clients",
        "Usage of Information:",
        "• Respond to inquiries",
        "• Support payment verification",
        "• Maintain secure merchant operations",
        "Data Protection:",
        "• We do not sell, trade, or share personal information",
        "• Data is handled according to UK data protection regulations",
        "Third-Party Platforms:",
        "• Arcade tech solution is not responsible for privacy practices of external gaming platforms or social media pages",
      ],
    },
    {
      title: "Terms and Conditions",
      content: [
        "By purchasing from Arcade tech solution, you agree to the following:",
        "Service Scope:",
        "• Arcade tech solution provides digital credits for use in supported games and services.",
        "• We sell credits only; any game or service access is your responsibility.",
        "Purchasing Credits:",
        "• Credits are purchased through our secure checkout system.",
        "• Once payment is confirmed, credits are instantly applied to your account.",
        "Using Credits:",
        "• Customers can redeem credits according to the instructions provided on the website.",
        "• It is the customer’s responsibility to use credits correctly.",
        "No Guarantees:",
        "• Arcade tech solution does not guarantee specific outcomes from using credits.",
        "• Credits are digital products, and their value is limited to services offered on the platform.",
        "Limitation of Liability:",
        "• Arcade tech solution is not responsible for any misuse of credits or technical issues on your account.",
        "Refunds:",
        "• All digital credit purchases are final and non-refundable, except for technical payment errors.",
        "Changes to Terms:",
        "• Arcade tech solution reserves the right to update these terms at any time without prior notice.",
      ],
    },
    {
      title: "Refund Policy",
      content: [
        "All purchases of digital credits are final and non-refundable.",
        "Credits are redeemable only for supported digital games or services.",
        "For payment or technical issues, customers can contact us via WhatsApp or email.",
        "Refunds are considered only for technical payment errors, not for outcomes or service performance.",
      ],
    },
    {
      title: "Shipping Policy",
      content: [
        "All purchases from Arcade tech solution are digital credits.",
        "No physical products are shipped.",
        "Credits are delivered instantly to your account after payment confirmation.",
        "An invoice will be sent to your email within 24 hours of purchase.",
        "For any delivery or technical issues, contact us via WhatsApp or email.",
      ],
    },
  ];

  return (
    <div style={{ padding: "40px", maxWidth: 900, margin: "auto" }}>
      <h1 style={{ color: "#7f54ff", marginBottom: "30px" }}>Policies</h1>

      {policySections.map((section, index) => (
        <div
          key={index}
          style={{
            background: "#1e0a3c",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "25px",
            color: "white",
            lineHeight: 1.6,
          }}
        >
          <h2 style={{ color: "#f3e8ff", marginBottom: "15px" }}>
            {section.title}
          </h2>
          {section.content.map((line, i) => (
            <p key={i} style={{ margin: "5px 0" }}>
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
