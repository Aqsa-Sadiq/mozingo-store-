import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

export default function ProductCard({ product, addToCart, addToWishlist }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <div
        className="btn-group"
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {/* View Button */}
        <Link to={`/product/${product.id}`} style={{ flex: 1 }}>
          <button
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            View
          </button>
        </Link>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          style={{
            flex: 1,
            padding: "5px",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          Add to Cart
        </button>

        {/* Wishlist Button */}
        <button
          onClick={() => addToWishlist(product)}
          style={{
            flex: 1,
            padding: "0px",
            fontSize: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaRegHeart size={16} />
        </button>
      </div>
    </div>
  );
}
