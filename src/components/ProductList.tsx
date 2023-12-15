import React from "react";
import ProductItem from "./ProductItem";
import products from "../types/type";
import product from "../types/type";

export default function ProductList(products) {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
