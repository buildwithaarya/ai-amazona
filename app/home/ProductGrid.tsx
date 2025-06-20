import React from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 19.99,
    imageUrl: "/images/p11-1.jpg",
  },
  {
    id: 2,
    name: "Graphic Print Tee",
    price: 24.99,
    imageUrl: "/images/p11-2.jpg",
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    price: 49.99,
    imageUrl: "/images/p21-1.jpg",
  },
  {
    id: 4,
    name: "Classic Blue Jeans",
    price: 44.99,
    imageUrl: "/images/p21-2.jpg",
  },
  {
    id: 5,
    name: "Running Sneakers",
    price: 59.99,
    imageUrl: "/images/p31-1.jpg",
  },
  {
    id: 6,
    name: "Leather Boots",
    price: 89.99,
    imageUrl: "/images/p31-2.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sampleProducts.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center bg-white shadow">
          <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover mb-2" />
          <div className="font-semibold text-lg mb-1">{product.name}</div>
          <div className="text-green-600 font-bold mb-2">${product.price}</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
        </div>
      ))}
    </div>
  );
} 