import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Samsung S20",
    price: 80000,
    availability: "Out of Stock",
  };

  return (
    <div>
      <h1>Product Details</h1>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Availability:</strong> {product.availability}</p>
    </div>
  );
};

export default ProductInfo;