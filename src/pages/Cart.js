import React from "react";
import { Link } from "react-router-dom";

export default function Cart({
  cartItems,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) {
  // ✅ Total Amount Calculate
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          <div style={{ display: "grid", gap: "20px" }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />

                {/* Details */}
                <div style={{ flex: 1, marginLeft: "20px" }}>
                  <h4>{item.name}</h4>

                  {/* ✅ Price Calculation */}
                  <p style={{ fontWeight: "bold" }}>
                    ${item.price} × {item.qty} = $
                    {(item.price * item.qty).toFixed(2)}
                  </p>

                  {/* Qty Buttons */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* ✅ Total */}
          <h3 style={{ marginTop: "30px" }}>
            Total Amount: ${totalAmount.toFixed(2)}
          </h3>

          {/* ✅ Checkout Button */}
          <Link to="/checkout">
            <button
              style={{
                marginTop: "20px",
                padding: "12px 25px",
                backgroundColor: "green",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
