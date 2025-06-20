import React from "react";
import { Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-8 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left text-gray-700 text-sm">
        {/* Shop */}
        <div>
          <h3 className="font-bold mb-3 text-gray-900">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">All Products</a></li>
            <li><a href="#" className="hover:underline">Categories</a></li>
            <li><a href="#" className="hover:underline">Deals</a></li>
          </ul>
        </div>
        {/* Customer Service */}
        <div>
          <h3 className="font-bold mb-3 text-gray-900">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Shipping Information</a></li>
            <li><a href="#" className="hover:underline">Returns & Exchanges</a></li>
          </ul>
        </div>
        {/* About */}
        <div>
          <h3 className="font-bold mb-3 text-gray-900">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        {/* Connect With Us */}
        <div>
          <h3 className="font-bold mb-3 text-gray-900">Connect With Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:opacity-75"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">&copy; {new Date().getFullYear()} AI-Amazona. All rights reserved.</div>
    </footer>
  );
} 