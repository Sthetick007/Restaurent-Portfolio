"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "Julian V.",
        role: "Verified Guest",
        rating: 5,
        text: "The Wagyu was life-changing. From the moment we stepped in, the ambiance and attentive service made us feel like royalty. A true gem in the city.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
        name: "Sophia M.",
        role: "Food Critic",
        rating: 5,
        text: "Exquisite atmosphere and service. The tasting menu is a choreographed dance of flavors. Luxe Dining sets a new standard for high-end cuisine.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
        name: "Marcus R.",
        role: "Local Patron",
        rating: 5,
        text: "A true culinary masterpiece. The wine pairing was spot on. I've been here five times this year and it never ceases to amaze me. Simply the best.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
];

const ratingDensity = [
    { stars: 5, percentage: 92 },
    { stars: 4, percentage: 6 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 0 },
];

export function ReviewsSection() {
    return (
        <section className="bg-dark py-20 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-8">
                        <div>
                            <span className="text-gold uppercase tracking-widest text-sm font-bold">Excellence Defined</span>
                            <h2 className="text-3xl md:text-5xl font-display mt-2 font-bold whitespace-nowrap">Guest Experiences</h2>
                        </div>
                        <div className="flex flex-col items-end mt-6 md:mt-0">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold">4.9</span>
                                <div className="flex flex-col">
                                    <div className="flex text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={20} fill="currentColor" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-400 mt-1">Based on 1,200+ verified reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-dark-lighter p-4 md:p-8 rounded-xl border border-white/5 hover:border-gold/30 transition-all duration-300">
                                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
                                    <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0 border-2 border-white/10">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base md:text-lg">{review.name}</h4>
                                        <p className="text-gold text-[10px] md:text-xs uppercase tracking-wider font-bold">{review.role}</p>
                                    </div>
                                </div>

                                <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-4 text-yellow-500">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={12} className="md:w-[14px] md:h-[14px]" fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-gray-300 italic leading-snug md:leading-relaxed text-xs md:text-sm line-clamp-3 md:line-clamp-none">
                                    &quot;{review.text}&quot;
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Rating Density */}
                    <div className="bg-dark-lighter p-4 md:p-8 rounded-xl border border-white/5 max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16">
                            <div className="text-center md:text-left shrink-0">
                                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold block mb-0.5 md:mb-1">Rating Density</span>
                                <div className="text-4xl md:text-6xl font-display font-bold text-white">98%</div>
                                <div className="text-[10px] md:text-sm text-gray-400 mt-1 md:mt-2">Recommended by guests</div>
                            </div>
                            <div className="w-full space-y-2 md:space-y-4">
                                {ratingDensity.map((item) => (
                                    <div key={item.stars} className="flex items-center gap-3 md:gap-4 text-xs md:text-sm">
                                        <span className="w-3 font-bold">{item.stars}</span>
                                        <div className="flex-1 h-1.5 md:h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full"
                                                style={{ width: `${item.percentage}%` }}
                                            />
                                        </div>
                                        <span className="w-8 text-right text-gray-400">{item.percentage}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
