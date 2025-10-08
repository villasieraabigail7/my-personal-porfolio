import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, brand, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      
      <div className="product-info">
        {/* Name and Plus button aligned */}
        <div className="name-button">
          <h3 className="product-name">{name}</h3>
          <button className="add-button">+</button>
        </div>

        <p className="product-brand">{brand}</p>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
