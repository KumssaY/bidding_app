import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import ProductPage from "./pages/ProductPage";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue setSelectedProduct={setSelectedProduct} />} />
          <Route path="/product/:id" element={<ProductPage product={selectedProduct} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
