import React from "react";

export default function Navbar() {
  return (
    <header className="w-full p-4 border-b flex items-center justify-between bg-white">
      <div className="font-bold text-xl">AI-Amazona</div>
      <form className="flex-1 mx-8 max-w-md">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border rounded px-3 py-2"
        />
      </form>
      <nav className="flex gap-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Products</a>
        <a href="#" className="hover:underline">Cart</a>
        <a href="#" className="hover:underline">Login</a>
      </nav>
    </header>
  );
} 