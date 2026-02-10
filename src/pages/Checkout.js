import React from "react";

export default function Checkout({ cartItems }) {
  // ✅ Total Amount Calculate
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // ✅ Empty Cart Condition
  if (cartItems.length === 0) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Checkout</h2>
        <p>Your cart is empty. Please add products first.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h2>Checkout</h2>

      {/* ✅ Order Summary */}
      <h3 style={{ marginTop: "25px" }}>Order Summary</h3>

      <div style={{ marginTop: "15px" }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            <p>
              {item.name} × {item.qty}
            </p>
            <p>${(item.price * item.qty).toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* ✅ Total */}
      <h3 style={{ marginTop: "20px" }}>
        Total Amount: ${totalAmount.toFixed(2)}
      </h3>

      {/* ✅ Shipping Form */}
      <h3 style={{ marginTop: "30px" }}>Shipping Details</h3>

      <form style={{ display: "grid", gap: "12px", maxWidth: "400px" }}>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Full Address" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="Phone Number" required />

        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "12px",
            backgroundColor: "black",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
