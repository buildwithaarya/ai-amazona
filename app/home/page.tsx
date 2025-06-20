import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">Welcome to AI Amazona</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-xl">
          Discover amazing products at great prices.
        </p>
      </main>
      <Footer />
    </div>
  );
} 