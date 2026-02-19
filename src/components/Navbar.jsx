import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  // Total quantity for cart badge
  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const linkStyle = {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <nav
      style={{
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        background: "#5b21b6",
        color: "white",
        position: "sticky",  // makes navbar stick
        top: 0,             // sticks to top
        zIndex: 1000,       // ensures it stays above other content
      }}
    >
      <h2 style={{ margin: 0 }}>MozingoX</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/credits" style={linkStyle}>Credits</Link>
        <Link to="/how" style={linkStyle}>How It Works</Link>
        <Link to="/cart" style={linkStyle}>
          Cart {totalQuantity > 0 && (
            <span style={{ background: "red", borderRadius: "50%", padding: "2px 8px", marginLeft: 5 }}>
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
