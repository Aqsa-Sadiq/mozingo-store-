import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Credits from "./pages/Credits";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Policies from "./pages/Policies";
import HowItWorks from "./pages/HowItWorks";

function App() {
  // Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add item to cart
  const addToCart = (item) => {
    // Check if item already exists
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      // Update quantity if exists
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      );
    } else {
      setCart([...cart, item]);
    }
  };

  // Total quantity for navbar badge
  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <BrowserRouter>
      {/* Navbar with total quantity */}
      <Navbar cartCount={totalQuantity} />

      <Routes>
        {/* Pass cart state and addToCart */}
        <Route
          path="/"
          element={<Home cart={cart} setCart={setCart} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
