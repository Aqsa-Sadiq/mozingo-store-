import { useParams } from "react-router-dom";
import products from "../data/products"; 
import { useState } from "react";
import "./ProductDetail.css";


export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));


  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  if (!product) return <p>Product not found!</p>;

  const addToCart = () => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button className="add-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
