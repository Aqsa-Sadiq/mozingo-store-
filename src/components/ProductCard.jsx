import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "15px",
        width: "250px",
      }}
    >
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "10px",
          width: "100%",
          background: "#7c3aed",
          border: "none",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
