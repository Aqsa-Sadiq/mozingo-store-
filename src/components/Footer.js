import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Welcome to Mozingo Gadget, your trusted online destination for innovative, stylish, and practical lifestyle products.</p>
       
      </div>

      <div className="footer-links">
        <div className="link-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        
        </div>

        <div className="link-section">
          <h4>Product Categories</h4>
          <Link to="/category/smart-gadgets">Smart Gadgets & Tech</Link>
                  <Link to="/category/health-gear">Health & Wellness</Link>
                  <Link to="/category/lifestyle-essentials">Lifestyle & Everyday</Link>
          
        </div>

        <div className="link-section">
          <h4>Policies</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/refund">Refund and Returns Policy</Link>
          <Link to="/terms">Terms and Conditions</Link>
        
        </div>
              <div className="link-section">
          <h4>Help</h4>
          <Link to="/order-tracking">Order Tracking</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
        
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2026 © Mozingo Gadget. All rights reserved </p>
        <p>UK Registered Business · Digital Entertainment Credits.</p>
   
      </div>
    </footer>
  );
}



