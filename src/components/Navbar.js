import { Link } from "react-router-dom";
import React from "react";

export default function Navbar({ cartCount = 0, wishlistCount = 0 }) {
  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "999",
        background: "white",
      }}
    >
      {/* Top Navbar */}
      <nav className="top-nav">
        <h2 className="logo">MozingoGadget</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/cart">Cart ({cartCount})</Link>
          <Link to="/wishlist">Wishlist ({wishlistCount})</Link>
        </div>
      </nav>

      {/* Categories Navbar */}
      <nav className="category-nav">
        <Link to="/category/smart-gadgets">Smart Gadgets & Tech</Link>
        <Link to="/category/health-gear">Health & Wellness</Link>
        <Link to="/category/lifestyle-essentials">
          Lifestyle & Everyday
        </Link>
      </nav>
    </header>
  );
}
