import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";

const productsUrl = "https://api.escuelajs.co/api/v1/products";

function App() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios
      .get(productsUrl)
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;
