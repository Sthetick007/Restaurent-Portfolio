import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { GallerySection } from "@/components/sections/gallery";
import { ReviewsSection } from "@/components/sections/reviews";
import { Footer } from "@/components/layout/footer";
import { ResponsiveMenuBook } from "@/components/ui/responsive-menu-book";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />

      {/* Menu Book Teaser */}
      <section className="py-12 md:py-20 lg:py-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-dark-lighter relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-gold uppercase tracking-widest text-xs md:text-sm font-semibold">Taste the Extraordinary</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mt-2">Our Signature Selection</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3 md:mt-4 text-sm md:text-base px-4">
              Explore our carefully curated menu featuring seasonal ingredients and culinary craftsmanship.
            </p>
          </div>

          <div className="hidden sm:flex justify-center items-center min-h-[420px] md:min-h-[520px] lg:min-h-[620px]">
            <ResponsiveMenuBook />
          </div>
        </div>
      </section>

      <GallerySection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
