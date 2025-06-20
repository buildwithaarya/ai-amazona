import React from "react";

export default function Footer() {
  return (
    <footer className="w-full p-4 border-t text-center bg-white mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        <div className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} AI-Amazona. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <a href="#" aria-label="Twitter" className="hover:opacity-75">🐦</a>
          <a href="#" aria-label="Instagram" className="hover:opacity-75">📸</a>
          <a href="#" aria-label="Facebook" className="hover:opacity-75">📘</a>
        </div>
      </div>
    </footer>
  );
} 