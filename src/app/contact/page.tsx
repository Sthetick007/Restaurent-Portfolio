import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LocationSection } from "@/components/sections/location";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-dark w-full overflow-x-hidden">
            <Navbar />
            <div className="pt-24 md:pt-28 lg:pt-32">
                <LocationSection />
            </div>
            <Footer />
        </main>
    );
}
