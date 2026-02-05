import { Link } from "react-router-dom";
import products from "../data/products";

export default function Shop() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>All Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            className="product-card"
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "150px", height: "150px", objectFit: "contain", marginBottom: "15px" }}
            />
            <h3 style={{ marginBottom: "10px" }}>{p.name}</h3>
            <p style={{ fontWeight: "bold", marginBottom: "10px" }}>${p.price}</p>
            <p style={{ fontSize: "14px", color: "#555", marginBottom: "15px" }}>
              {p.description.substring(0, 80)}...
            </p>
            <Link
              to={`/product/${p.id}`}
              style={{
                display: "inline-block",
                padding: "8px 15px",
                borderRadius: "5px",
                backgroundColor: "#0a0a0a",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
