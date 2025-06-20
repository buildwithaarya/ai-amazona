import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductGrid from "./ProductGrid";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="p-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to AI-Amazona</h1>
          <p className="text-lg text-gray-600 mb-6">Discover the best T-shirts, Jeans, and Shoes!</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold px-8 mb-4">Featured Products</h2>
          <ProductGrid />
        </section>
        <section>
          <h2 className="text-2xl font-semibold px-8 mt-8 mb-4">Latest Products</h2>
          <ProductGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
} 