"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const heroImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Food 1
    "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Food 2
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Interior/Food
];

export function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>
            </AnimatePresence>

            <div className="container relative z-10 px-4 text-center">
                <span className="inline-block py-1 px-3 border border-gold text-gold text-xs uppercase tracking-[0.2em] mb-6 rounded-full">
                    Michelin Star Experience
                </span>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
                    Luxe <br /> Dining
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed">
                    Culinary Excellence Defined. Experience a symphony of flavors crafted by
                    world-class chefs in an atmosphere of unparalleled luxury.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                    <Link href="/menu">
                        <Button variant="outline" size="lg" className="min-w-[180px]">
                            View Menu
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
