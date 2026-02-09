import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MenuSection } from "@/components/sections/menu";
import { CuisinesSection } from "@/components/sections/cuisines";

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-dark w-full overflow-x-hidden">
            <Navbar />
            <div className="pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-10 text-center bg-dark-lighter px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4 md:mb-6">Our Menu</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
                    A culinary journey through diverse flavors and exceptional ingredients.
                </p>
            </div>
            <CuisinesSection />
            <MenuSection />
            <Footer />
        </main>
    );
}
