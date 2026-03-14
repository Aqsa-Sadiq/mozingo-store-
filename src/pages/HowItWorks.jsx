export default function HowItWorks() {
  return (
    <div style={{ padding: "50px 20px", maxWidth: 900, margin: "auto" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#7c3aed", marginBottom: 15 }}>
        How It Works – Arcade Tech Solution
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: 30, color: "#a48cfc" }}>
        💡 Recharge Your Wallet in 3 Easy Steps
      </p>

      <p style={{ marginBottom: 30 }}>
        Buy credits instantly and use them for supported games and digital services.
      </p>

      {/* Step 1 */}
      <section style={{ marginBottom: 30, background: "#1e0a3c", padding: 20, borderRadius: 12 }}>
        <h2 style={{ color: "#a78bfa" }}>Step 1: Buy Credits</h2>
        <ul style={{ marginLeft: 20, listStyleType: "disc", color: "#fff" }}>
          <li>Select the number of credits you want to purchase</li>
          <li>Each credit costs $1</li>
          <li>Enter your email at checkout</li>
          <li>Click “Buy Credits Now” to complete payment</li>
          <li>Shopify securely processes your payment via Shopify Payments / Stripe</li>
        </ul>
      </section>

      {/* Step 2 */}
      <section style={{ marginBottom: 30, background: "#1e0a3c", padding: 20, borderRadius: 12 }}>
        <h2 style={{ color: "#a78bfa" }}>Step 2: Credits Delivered Instantly</h2>
        <ul style={{ marginLeft: 20, listStyleType: "disc", color: "#fff" }}>
          <li>Once payment is complete, your credits are added instantly</li>
          <li>You can use your credits immediately for supported games or digital services</li>
          <li>Invoice / receipt will be sent to your email within 24 hours</li>
        </ul>
      </section>

      {/* Important Notes */}
      <section style={{ marginBottom: 30, background: "#1e0a3c", padding: 20, borderRadius: 12 }}>
        <h2 style={{ color: "#a78bfa" }}>Important Notes</h2>
        <ul style={{ marginLeft: 20, listStyleType: "disc", color: "#fff" }}>
          <li>Credits are only usable for supported games/services</li>
          <li>No gambling, sweepstakes, or cash-out games are supported</li>
          <li>All purchases are final</li>
          <li>For assistance, contact us via the Contact Us page</li>
        </ul>
      </section>
    </div>
  );
}
