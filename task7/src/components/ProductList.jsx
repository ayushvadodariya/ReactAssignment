import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$599" },
        { id: 2, name: "Laptop", price: "$900" },
        { id: 3, name: "mouse", price: "$99" },
        { id: 4, name: "Headphones", price: "$257" },
      ];
  return (
    <div>
      <h2>Product List:</h2>
      {products.map((product)=>(
        <ol key={product.id}>
            <li>{product.name}  {product.price}</li>
        </ol>
      ))}
    </div>
  )
}

export default ProductList