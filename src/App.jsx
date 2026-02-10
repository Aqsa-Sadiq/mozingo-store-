import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import OrderTracking from "./pages/OrderTracking";
import CategoryPage from "./pages/CategoryPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // ============================
  // CART STATE
  // ============================
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ============================
  // WISHLIST STATE
  // ============================
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // ============================
  // LOCAL STORAGE SAVE
  // ============================
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // ============================
  // CART FUNCTIONS
  // ============================
  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);

    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // ============================
  // ✅ UPDATED WISHLIST FUNCTIONS
  // ============================
  const addToWishlist = (product) => {
    const already = wishlistItems.find((item) => item.id === product.id);

    if (already) {
      alert("Already in Wishlist!");
      return;
    }

    setWishlistItems([...wishlistItems, product]);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  // ============================
  // ROUTES
  // ============================
  return (
    <BrowserRouter>
      {/* Navbar with live counts */}
      <Navbar
        cartCount={cartItems.reduce((a, c) => a + c.qty, 0)}
        wishlistCount={wishlistItems.length}
      />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Home addToCart={addToCart} addToWishlist={addToWishlist} />
          }
        />

        {/* Shop */}
        <Route
          path="/shop"
          element={
            <Shop addToCart={addToCart} addToWishlist={addToWishlist} />
          }
        />

        {/* Category */}
        <Route
          path="/category/:slug"
          element={
            <CategoryPage
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />

        {/* Product Detail */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />

        {/* Wishlist */}
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistItems={wishlistItems}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
            />
          }
        />

        {/* Other Pages */}
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
