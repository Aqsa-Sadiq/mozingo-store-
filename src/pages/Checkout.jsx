import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div style={{ padding: "50px", maxWidth: 600, margin: "auto" }}>
      <h1>Checkout</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.length > 0 && (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid gray",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <h3>{item.title}</h3>
              <p>Qty: {item.qty}</p>
              <p>Price: ${item.price * item.qty}</p>
            </div>
          ))}

          <h3>Total: ${total}</h3>

          <button
            style={{
              padding: "15px 30px",
              background: "#7c3aed",
              color: "white",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
            }}
            onClick={() => alert(" checkout complete!")}
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  );
}
