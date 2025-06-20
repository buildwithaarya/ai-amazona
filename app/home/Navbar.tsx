import React from "react";
import { ShoppingCart } from "lucide-react";

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
      <nav className="flex items-center gap-4">
        <a href="#" aria-label="Cart" className="hover:text-blue-600">
          <ShoppingCart className="w-6 h-6" />
        </a>
        <a href="#" className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition text-sm font-semibold">
          Sign In
        </a>
      </nav>
    </header>
  );
} 