"use client";

import Image from "next/image";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Restaurant ambiance with elegant lighting",
        large: true,
    },
    {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Fine dining table setting",
        large: false,
    },
    {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Signature dish presentation",
        large: false,
    },
    {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Chef preparing cuisine",
        large: false,
    },
    {
        src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Premium seafood platter",
        large: false,
    },
    {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Restaurant bar area",
        large: false,
    },
    {
        src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Exquisite dessert plating",
        large: false,
    },
    {
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Private dining room",
        large: false,
    },
    {
        src: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Cocktail crafting",
        large: false,
    },
];

export function GallerySection() {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <span className="text-gold uppercase tracking-widest text-xs md:text-sm font-semibold">Visual Journey</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mt-2">Gallery</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-3 md:mt-4 text-sm md:text-base px-4">
                        A glimpse into the artistry and ambiance that define our culinary experience.
                    </p>
                </div>

                {/* Responsive Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                    {/* Large featured image - spans 2 columns on all screens, 2 rows on md+ */}
                    <div className="col-span-2 row-span-1 md:row-span-2 relative group overflow-hidden rounded-lg md:rounded-xl aspect-[4/3] md:aspect-auto md:h-full">
                        <Image
                            src={galleryImages[0].src}
                            alt={galleryImages[0].alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Remaining images - responsive grid */}
                    {galleryImages.slice(1).map((image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg md:rounded-xl aspect-square"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
