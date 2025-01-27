import React from "react";
import { useNavigate } from "react-router-dom";
import CatalogueCard from "../components/Card/CatalogueCard";
import "./../styles/Catalogue.css";

const products = [
  { id: 1, image: "https://media.businessdesk.co.nz/file/c_fill,w_700,q_100/Audemars-Piguet-CODE-11.59-Tourbillon-copy.webp", description: "Elegant Watch" },
  { id: 2, image: "https://media.businessdesk.co.nz/file/BFXiz0PgEeRLfkYQs0AGjwJ885EofocIkl8clQDC-D.jpeg", description: "Luxury Timepiece" },
  { id: 3, image: "https://luxurytimenyc.com/cdn/shop/products/patek-philippe-40mm-nautilus-grand-complication-perpetual-calendar-watch-blue-dial-57401g-703147_300x300.jpg?v=1592904554", description: "Classic Wristwatch" },
  { id: 4, image: "https://iconiclife.com/wp-content/uploads/2021/10/luxury-timepiece-from-A.-Lange-and-Sohne-Zeitwerk.jpg", description: "Modern Watch Design" },
  { id: 5, image: "https://iconiclife.com/wp-content/uploads/2021/10/modern-luxury-timepiece-by-Zenith.jpg", description: "Vintage Collectible" },
  { id: 6, image: "https://iconiclife.com/wp-content/uploads/2021/10/Vacheron-Constantin-luxury-timepiece.jpg", description: "Premium Model" },
];

const Catalogue = ({ setSelectedProduct }) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="catalogue-container">
      <h1>View Catalogue</h1>
      <div className="catalogue-grid">
        {products.map((product) => (
          <CatalogueCard key={product.id} product={product} onProductClick={handleProductClick} />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
