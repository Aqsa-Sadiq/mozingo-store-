import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop({ addToCart, addToWishlist }) {
  return (
    <div className="shop-page">
      <h2>Shop All Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}   
          />
        ))}
      </div>
    </div>
  );
}
