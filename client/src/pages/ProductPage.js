import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./../styles/Product.css"
import Navbar from "../components/Navbar/Navbar";


const ProductPage = ({ product }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [highestBid, setHighestBid] = useState(null);
  const [biddingEndTime, setBiddingEndTime] = useState(
    new Date(Date.now() + 3600 * 1000)
  );
  const [closed, setClosed] = useState(false);
  const [bid, setBid] = useState("");

  const isBiddingOpen = !closed && new Date() < new Date(biddingEndTime);

  useEffect(() => {
    const closeBiddingTimeout = setTimeout(() => {
      setClosed(true);
    }, 1800 * 1000); 

    return () => clearTimeout(closeBiddingTimeout);
  }, []);

  const handleBid = () => {
    if (!isBiddingOpen) return;
    if (!bid || isNaN(bid) || bid <= (highestBid || 0)) {
      alert("Invalid bid. Ensure it's higher than the current highest bid.");
      return;
    }

    setHighestBid(parseFloat(bid));
    setBid("");
  };

  if (!product) {
    return (
      <div className="product-page">
        <h2>No Product Selected</h2>
        <button onClick={() => navigate("/catalogue")}>Back to Catalogue</button>
      </div>
    );
  }

  return (

    <div className="product-page">
      <Navbar/>
      <button onClick={() => navigate("/catalogue")}>← Back to Catalogue</button>
      <h1>{product.description}</h1>
      <img src={product.image} alt={product.description} />
      <p>
        Highest Bid: {highestBid ? `$${highestBid}` : "No bids yet"}
      </p>
      <p>Bidding Status: {isBiddingOpen ? "Open" : "Closed"}</p>
      <p>
        Bidding Ends At: {new Date(biddingEndTime).toLocaleTimeString()}
      </p>
      {isBiddingOpen && (
        <div>
          <input
            type="number"
            placeholder="Enter your bid"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
          />
          <button onClick={handleBid}>Place Bid</button>
        </div>
      )}
      {!isBiddingOpen && <p>Bidding is closed for this product.</p>}
    </div>
  );
};

export default ProductPage;
