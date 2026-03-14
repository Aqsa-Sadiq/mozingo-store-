import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: 40 }}>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
                padding: 15,
                borderRadius: 10,
                boxShadow: "0 3px 10px rgba(158, 62, 248, 0.2)",
              }}
            >
              <div>
                <h3>{item.title || item.name}</h3>
                <p>${item.price} each</p>
              </div>

              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  background: "#7c3aed",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Remove ❌
              </button>
            </div>
          ))}

          <h3 style={{ marginTop: 30 }}>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}
