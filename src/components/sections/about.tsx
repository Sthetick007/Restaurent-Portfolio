import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutSection() {
    return (
        <section id="about" className="py-12 md:py-16 lg:py-20 bg-dark text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Chef plating a dish"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-3/4 h-3/4 border-2 border-gold -z-10 rounded-lg hidden md:block" />
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                        <span className="text-gold uppercase tracking-widest text-xs md:text-sm font-semibold">Our Story</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
                            A Symphony of <span className="text-gold">Taste</span> & Tradition
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg">
                            Established in 2010, Luxe Dining began with a simple vision: to bridge the gap between
                            traditional culinary artistry and modern innovation. Our executive chef, Julian Vance,
                            curates seasonal menus that celebrate the finest local ingredients.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg">
                            Every dish tells a story, and every meal is an occasion. We invite you to step into a world
                            where gastronomy meets luxury, and every bite is a memory in the making.
                        </p>
                        <div className="pt-2 md:pt-4">
                            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-dark text-sm md:text-base">
                                Learn More
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
