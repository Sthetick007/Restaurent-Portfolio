import Image from "next/image";
import { ArrowRight } from "lucide-react";


const cuisines = [
    {
        title: "Modern Indian",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "#indian"
    },
    {
        title: "Mediterranean Fusion",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "#mediterranean"
    },
    {
        title: "Contemporary French",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "#french"
    }
];

export function CuisinesSection() {
    return (
        <section className="py-20 bg-dark">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-gold uppercase tracking-widest text-sm font-bold">Culinary Excellence</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white mt-2">Signature Cuisines</h2>
                    </div>
                    <p className="text-gray-400 max-w-md mt-6 md:mt-0 text-right md:text-left">
                        Our master chefs bring together tradition and innovation, crafting dishes that celebrate the finest global flavors with a modern twist.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cuisines.map((cuisine, index) => (
                        <div key={index} className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                            <Image
                                src={cuisine.image}
                                alt={cuisine.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h3 className="text-2xl font-display text-white font-bold mb-4">{cuisine.title}</h3>
                                <div className="flex items-center text-gold text-sm font-bold tracking-wider uppercase group-hover:translate-x-2 transition-transform duration-300">
                                    <span>Explore Menu</span>
                                    <ArrowRight size={16} className="ml-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
