import React from "react";
import Product from "../types/type";

export default function ProductItem({ product }) {
  return (
    <div>
      <img src={product.images} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
