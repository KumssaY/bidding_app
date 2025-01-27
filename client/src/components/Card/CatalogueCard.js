import React from "react";
import "./CatalogueCard.css";

const CatalogueCard = ({ product, onProductClick }) => {
  return (
    <div className="card" onClick={() => onProductClick(product)}>
      <img src={product.image} alt={product.description} />
      <p>{product.description}</p>
    </div>
  );
};

export default CatalogueCard;
