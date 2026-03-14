import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home({ cart, setCart }) {
  const [quantity, setQuantity] = useState(1);

  // Button styles
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

  const featureBox = {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "15px",
    width: "260px",
    flex: "1 1 250px", // responsive for flex-wrap
    minWidth: "200px",
  };

  // Add to cart
  const handleAddToCart = () => {
    const product = { id: 1, name: "Mozingo Credits", price: 1, quantity };
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
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "2.8rem", marginBottom: 20 }}>Tech Solution</h1>
          <p style={{ fontSize: "1.1rem", marginBottom: 30 }}>
            Buy instant digital credits safely & easily for your favorite games
          </p>
          <Link to="/credits">
            <button
              style={{
                padding: "12px 30px",
                fontSize: "1rem",
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
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "60px 20px",
          gap: "30px",
          background: "#fff",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1 1 300px", maxWidth: "500px" }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1769370513048-d8fb4e2f5dc9?w=800&auto=format&fit=crop&q=80"
            alt="Mozingo Credits"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "1 1 300px", maxWidth: "500px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>ArcadeTech Solution CREDITS</h2>
          <p style={{ marginTop: "10px", fontSize: "16px", color: "#444" }}>$1.00 USD</p>

          {/* Quantity + Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                border: "1px solid #ccc",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <button style={qtyBtnStyle} onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </button>
              <span style={{ padding: "10px 18px" }}>{quantity}</span>
              <button style={qtyBtnStyle} onClick={() => setQuantity((q) => q + 1)}>
                +
              </button>
            </div>

            <button style={cartBtnStyle} onClick={handleAddToCart}>
              🛒 Add to cart
            </button>

            <button
              style={paypalBtnStyle}
              onClick={() =>
                (window.location.href =
                  "https://www.paypal.com/checkoutnow?fundingSource=paypal")
              }
            >
              Pay with <b>PayPal</b>
            </button>

            <p
              style={{
                marginTop: "10px",
                fontSize: "14px",
                color: "red",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() =>
                window.open("https://mozingo.co.uk/checkouts/cn/hWN8xfM9MAapLEVY3NY8R69O/en-gb?_r=AQABvjntUrFj2otSoxQHKLg2z7YlRplUaEVL4_WHz-QaIJU&skip_shop_pay=true", "_blank")
              }
            >
              More payment options
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED GAMES SECTION */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: 30 }}>Featured Tech Credits</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* Cards go here */}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section
        style={{
          padding: "50px 20px",
          textAlign: "center",
          background: "#0f172a",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: 30 }}>Why Choose Arcade Tech Solution?</h2>
        <div
          style={{
            display: "flex",
            gap: "20px",
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
