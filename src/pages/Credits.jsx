import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";

export default function Credits() {
  const { addToCart } = useContext(CartContext);

  const [quantities, setQuantities] = useState(
    products.reduce((acc, prod) => {
      acc[prod.id] = 1;
      return acc;
    }, {})
  );

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: quantities[product.id] });
    alert(`${product.title} added to cart!`);
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities({
      ...quantities,
      [id]: Math.max(1, quantities[id] + delta),
    });
  };

  return (
    <div style={{ padding: 40, maxWidth: 1000, margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: 40 }}>Mozingo Credits</h1>
      {products.map((product) => (
        <div key={product.id} style={productCardStyle}>
          <img src={product.img} alt={product.title} style={imgStyle} />

          <div style={{ flex: 1, minWidth: 250 }}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price} USD</p>

            <div style={qtyWrapper}>
              <button onClick={() => handleQuantityChange(product.id, -1)} style={qtyBtnStyle}>-</button>
              <span>{quantities[product.id]}</span>
              <button onClick={() => handleQuantityChange(product.id, 1)} style={qtyBtnStyle}>+</button>
            </div>

            <button onClick={() => handleAddToCart(product)} style={cartBtnStyle}>
              🛒 Add to Cart
            </button>

            <button style={paypalBtnStyle} onClick={() => window.location.href="https://www.paypal.com/checkoutnow?atomic-event-state=eyJkb21haW4iOiJzZGtfcG"}>
              Pay with <b>PayPal</b>
            </button>

            <p style={morePaymentStyle} onClick={() => window.open("https://mozingo.co.uk/products/mozingo-credits", "_blank")}>
              More payment options
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* STYLES */
const productCardStyle = {
  display: "flex",
  gap: 20,
  flexWrap: "wrap",
  background: "#1e0a3c",
  padding: 20,
  borderRadius: 15,
  marginBottom: 30,
  color: "#fff",
  alignItems: "center",
};
const imgStyle = { width: "100%", maxWidth: 400, borderRadius: 12 };
const qtyWrapper = { display: "flex", alignItems: "center", gap: 10, marginBottom: 20 };
const qtyBtnStyle = { padding: "8px 14px", background: "#7c3aed", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: "bold" };
const cartBtnStyle = { padding: "10px 20px", background: "#10b981", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: "bold", marginRight: 10, marginTop: 5 };
const paypalBtnStyle = { padding: "10px 20px", background: "#ffc439", color: "#111", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: "bold", marginTop: 10 };
const morePaymentStyle = { marginTop: 10, fontSize: 14, color: "#ff6363", cursor: "pointer", textDecoration: "underline" };
