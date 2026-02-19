import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home({ cart, setCart, addToCart }) {
  // ✅ State for quantity
  const [quantity, setQuantity] = useState(1);

  // ✅ Inline styles for buttons
  const qtyBtnStyle = {
    padding: "10px 15px",
    background: "#7c3aed",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const cartBtnStyle = {
    padding: "10px 20px",
    background: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const paypalBtnStyle = {
    padding: "10px 20px",
    background: "#ffc439",
    color: "#111",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  // ✅ Add item to cart
  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "Mozingo Credits",
      price: 1,
      quantity,
    };

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1764702223042-fe8113a2f7b7?w=1200&auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "120px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "3.5rem", marginBottom: 20 }}>
            MozingoX Gaming Credits
          </h1>
          <p style={{ fontSize: "1.3rem", marginBottom: 30 }}>
            Buy instant digital credits safely & easily for your favorite games
          </p>
          <Link to="/credits">
            <button
              style={{
                padding: "15px 40px",
                fontSize: "1.1rem",
                borderRadius: "12px",
                border: "none",
                background: "#7c3aed",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Buy Credits Now
            </button>
          </Link>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "80px 60px",
          gap: "50px",
          flexWrap: "wrap",
          background: "#fff",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1", minWidth: "320px" }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1769370513048-d8fb4e2f5dc9?w=800&auto=format&fit=crop&q=80"
            alt="Mozingo Credits"
            style={{
              width: "100%",
              maxWidth: "700px", 
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "1", minWidth: "320px" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "bold" }}>
            MOZINGO CREDITS
          </h2>

          <p style={{ marginTop: "10px", fontSize: "16px", color: "#444" }}>
            $1.00 USD
          </p>

          {/* Quantity + Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            {/* Quantity Box */}
            <div
              style={{
                display: "flex",
                border: "1px solid #ccc",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <button
                style={qtyBtnStyle}
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span style={{ padding: "10px 18px" }}>{quantity}</span>
              <button
                style={qtyBtnStyle}
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button style={cartBtnStyle} onClick={handleAddToCart}>
              🛒 Add to cart
            </button>

            {/* PayPal Button */}
            <button
              style={paypalBtnStyle}
              onClick={() =>
                (window.location.href =
                  "https://www.paypal.com/checkoutnow?atomic-event-state=eyJkb21haW4iOiJzZGtfcGF5cGFsX3Y1IiwiZXZlbnRzIjpbXSwiaW50ZW50IjoiY2xpY2tfcGF5bWVudF9idXR0b24iLCJpbnRlbnRUeXBlIjoiY2xpY2siLCJpbnRlcmFjdGlvblN0YXJ0VGltZSI6MzYwNzEuNSwidGltZVN0YW1wIjozNjA3MiwidGltZU9yaWdpbiI6MTc3MTQ5NTM4NTc1OC4zLCJ0YXNrIjoic2VsZWN0X29uZV90aW1lX2NoZWNrb3V0IiwiZmxvdyI6Im9uZS10aW1lLWNoZWNrb3V0IiwidWlTdGF0ZSI6IndhaXRpbmciLCJwYXRoIjoiL3NtYXJ0L2J1dHRvbnMiLCJ2aWV3TmFtZSI6InBheXBhbC1zZGsifQ%3D%3D&sessionID=uid_d9a4b43c81_mta6mdm6mdu&buttonSessionID=uid_f2abd597df_mta6mdm6mdu&stickinessID=uid_a4bc49b936_mdc6ndi6mja&smokeHash=&sign_out_user=false&fundingSource=paypal&buyerCountry=PK&locale.x=en_US&commit=false&client-metadata-id=uid_d9a4b43c81_mta6mdm6mdu&standaloneFundingSource=paypal&branded=true&token=12489266SB546774N&clientID=AexZEtAxk09Ncgj6FSWFFyGKbxxAZ_LTyJ2DPdJWl1YUlecinmc5AfIaRF2qYjWlusWahlzz6SVkY5Ci&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jb21wb25lbnRzPWJ1dHRvbnMmY29tbWl0PWZhbHNlJmN1cnJlbmN5PVVTRCZsb2NhbGU9ZW5fVVMmY2xpZW50LWlkPUFleFpFdEF4azA5TmNnajZGU1dGRnlHS2J4eEFaX0xUeUoyRFBkSldsMVlVbGVjaW5tYzVBZklhUkYycVlqV2x1c1dhaGx6ejZTVmtZNUNpJmludGVudD1jYXB0dXJlIiwiYXR0cnMiOnsiZGF0YS11aWQiOiJ1aWRfanppc2dvZmZmemJ2emJpcW5qc2NwYmdjZ3FreWJ0In19&country.x=US&xcomponent=1&integration_artifact=PAYPAL_JS_SDK&version=5.0.532&hasShippingCallback=false")
              }
            >
              Pay with <b>PayPal</b>
            </button>
            <p
  style={{
    marginTop: "15px",
    fontSize: "14px",
    color: "red",
    cursor: "pointer",
    textDecoration: "underline",
  }}
  onClick={() =>
    window.open(
      "https://mozingo.co.uk/checkouts/cn/hWN8xfM9MAapLEVY3NY8R69O/en-gb?_r=AQABvjntUrFj2otSoxQHKLg2z7YlRplUaEVL4_WHz-QaIJU&skip_shop_pay=true",
      "_blank"
    )
  }
>
  More payment options
</p>
          </div>
        </div>
      </section>

      {/* FEATURED GAMES SECTION */}
      <section style={{ padding: "70px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
          Featured Gaming Credits
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {/* Cards go here */}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section
        style={{
          padding: "70px 40px",
          textAlign: "center",
          background: "#0f172a",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: 40 }}>Why Choose Mozingo?</h2>
        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={featureBox}>
            <h3>⚡ Instant Delivery</h3>
            <p>Credits delivered immediately after purchase.</p>
          </div>
          <div style={featureBox}>
            <h3>🔒 Secure Payment</h3>
            <p>Trusted & safe payment providers.</p>
          </div>
          <div style={featureBox}>
            <h3>💬 24/7 Support</h3>
            <p>Our team is always ready to help you.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* STYLES */
const featureBox = {
  background: "#1e293b",
  padding: "25px",
  borderRadius: "15px",
  width: "260px",
};
