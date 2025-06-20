import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import ProductGrid from "./ProductGrid";

const carouselImages = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 flex flex-col items-center w-full">
        {/* Full-width Carousel */}
        <section className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {carouselImages.map((src, idx) => (
                <CarouselItem key={idx} className="w-full h-[320px] md:h-[420px] relative">
                  <Image
                    src={src}
                    alt={`Banner ${idx + 1}`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="rounded-none"
                    priority={idx === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        {/* Welcome message and tagline */}
        <section className="w-full flex flex-col items-center justify-center py-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">Welcome to AI Amazona</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-xl">
            Discover amazing products at great prices.
          </p>
        </section>
        {/* Featured Products */}
        <section className="w-full max-w-6xl px-4 mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <ProductGrid />
        </section>
        {/* Latest Products */}
        <section className="w-full max-w-6xl px-4 mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
          <ProductGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
} 