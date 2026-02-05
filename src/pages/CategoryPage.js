import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { slug } = useParams();

  // Filter products by category
  const filteredProducts = products.filter(
    (p) => p.categorySlug === slug
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center" }}>
        Category: {slug.replace("-", " ")}
      </h2>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
