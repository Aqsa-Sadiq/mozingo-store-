import React from "react";
import { Link } from "react-router-dom";

export default function Wishlist({
  wishlistItems,
  removeFromWishlist,
  addToCart,
}) {
  return (
    <div style={{ padding: 40 }}>
      <h2>Your Wishlist 🤍</h2>

      {/* Empty */}
      {wishlistItems.length === 0 ? (
        <p>No products saved in wishlist.</p>
      ) : (
        wishlistItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              marginBottom: 15,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              style={{ width: 80, height: 80, objectFit: "contain" }}
            />

            {/* Info */}
            <div style={{ flex: 1, marginLeft: 20 }}>
              <h4>{item.name}</h4>
              <p>${item.price}</p>

              {/* Buttons */}
              <button onClick={() => addToCart(item)}>
                Add to Cart
              </button>

              <button
                style={{ marginLeft: 10, background: "red", color: "white" }}
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>

            {/* View */}
            <Link to={`/product/${item.id}`}>
              <button>View</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
