import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function CategoryPage({ addToCart, addToWishlist }) {
  const { slug } = useParams();

  const filteredProducts = products.filter(
    (p) => p.categorySlug === slug
  );

  return (
    <div className="category-page">
      <h2>Category: {slug.replace("-", " ")}</h2>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}   
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}
