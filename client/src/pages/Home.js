import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar"
import "../styles/Home.css";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://betterworld.org/_astro/what-is-the-best-way-to-display-silent-auction-items_fKT6i.jpg",
    "https://www.givesmart.com/wp-content/uploads/2021/07/Auction_photo_A18CEA9522C63.jpg", 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div id="navbar">
        <Navbar />
      </div>
      <div>
        {/* Background image */}
        <div
          className="background-slideshow"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        ></div>

        {/* Overlay Text */}
        <div className="text-overlay">
          <p className="quote">"The best Works Sell themselves."</p>
          <a href="/catalogue" className="view-catalogue-btn">
            View Catalogue
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
