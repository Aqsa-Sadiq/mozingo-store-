import React from "react"; 
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Home.css";

// Dummy category images
const categories = [
  {
    name: "Smart Gadgets & Tech Products",
    image: "https://neulifestyle.com/wp-content/uploads/2025/05/1-15-600x600.png",
    link: "/category/smart-gadgets",
  },
  {
    name: "Health & Wellness Gear",
    image: "https://neulifestyle.com/wp-content/uploads/2025/05/1-22-600x600.png",
    link: "/category/health-gear",
  },
  {
    name: "Lifestyle & Everyday Essentials",
    image: "https://neulifestyle.com/wp-content/uploads/2025/05/4-17-400x400.png",
    link: "/category/lifestyle-essentials",
  },
];


export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Smart Home & Lifestyle Gadgets</h1>
          <p>Upgrade your daily life with smart and stylish gadgets.</p>
        </div>
      </section>

      {/* Categories */}
     <section className="categories">
  <h2>Shop By Category</h2>

  <div className="category-grid">
    {categories.map((cat, index) => (
      <Link to={cat.link} className="cat-card" key={index}>
        <img src={cat.image} alt={cat.name} className="cat-img" />
        <h3>{cat.name}</h3>
      </Link>
    ))}
  </div>
</section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
