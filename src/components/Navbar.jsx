import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const linkStyle = {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };

  return (
    <nav
      style={{
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#5b21b6",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        flexWrap: "wrap", 
      }}
    >
      <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Tech Solution</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          flexWrap: "wrap", 
          marginTop: "10px", 
        }}
      >
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/credits" style={linkStyle}>Credits</Link>
        <Link to="/how" style={linkStyle}>How It Works</Link>
        <Link to="/cart" style={linkStyle}>
          Cart {totalQuantity > 0 && (
            <span
              style={{
                background: "red",
                borderRadius: "50%",
                padding: "2px 8px",
                marginLeft: 5,
                fontSize: "0.8rem",
              }}
            >
              {totalQuantity}
            </span>
          )}
        </Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/policies" style={linkStyle}>Policies</Link>
      </div>
    </nav>
  );
}
