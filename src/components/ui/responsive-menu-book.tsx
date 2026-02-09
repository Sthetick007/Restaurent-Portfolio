"use client";

import InteractiveBook from "@/components/ui/interactive-book";

// Condensed menu pages for mobile with fewer items
const mobileMenuPages = [
    {
        pageNumber: 1,
        title: "Starters",
        content: (
            <div className="space-y-2.5">
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-xs">
                        <span className="pr-2">Wagyu Carpaccio</span>
                        <span className="shrink-0">$24</span>
                    </div>
                    <p className="text-[9px] text-neutral-500 italic leading-tight">Truffle oil, parmesan</p>
                </div>
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-xs">
                        <span className="pr-2">Seared Scallops</span>
                        <span className="shrink-0">$22</span>
                    </div>
                    <p className="text-[9px] text-neutral-500 italic leading-tight">Cauliflower purée</p>
                </div>
                <div className="pt-2 text-center">
                    <p className="text-[9px] text-neutral-600 italic">+ 6 more items</p>
                    <p className="text-[8px] text-gold font-semibold mt-1">View full menu →</p>
                </div>
            </div>
        )
    },
    {
        pageNumber: 2,
        title: "Main Courses",
        content: (
            <div className="space-y-2.5">
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-xs">
                        <span className="pr-2">Truffle Risotto</span>
                        <span className="shrink-0">$32</span>
                    </div>
                    <p className="text-[9px] text-neutral-500 italic leading-tight">Wild mushrooms</p>
                </div>
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-xs">
                        <span className="pr-2">Miso Black Cod</span>
                        <span className="shrink-0">$45</span>
                    </div>
                    <p className="text-[9px] text-neutral-500 italic leading-tight">Bok choy, ginger broth</p>
                </div>
                <div className="pt-2 text-center">
                    <p className="text-[9px] text-neutral-600 italic">+ 8 more items</p>
                    <p className="text-[8px] text-gold font-semibold mt-1">View full menu →</p>
                </div>
            </div>
        )
    },
    {
        pageNumber: 3,
        title: "Desserts & Wine",
        content: (
            <div className="space-y-2.5">
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-xs">
                        <span className="pr-2">Chocolate Fondant</span>
                        <span className="shrink-0">$16</span>
                    </div>
                    <p className="text-[9px] text-neutral-500 italic leading-tight">Vanilla gelato</p>
                </div>
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-xs">
                        <span className="pr-2">Chablis Premier</span>
                        <span className="shrink-0">$18</span>
                    </div>
                    <p className="text-[9px] text-neutral-500 italic leading-tight">Burgundy, France</p>
                </div>
                <div className="pt-2 text-center">
                    <p className="text-[9px] text-neutral-600 italic">+ 12 more items</p>
                    <p className="text-[8px] text-gold font-semibold mt-1">View full menu →</p>
                </div>
            </div>
        )
    }
];

// Full menu pages for tablet and desktop
const fullMenuPages = [
    {
        pageNumber: 1,
        title: "Starters",
        content: (
            <div className="space-y-3 md:space-y-4">
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-sm md:text-base">
                        <span className="pr-3">Wagyu Carpaccio</span>
                        <span className="shrink-0">$24</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-neutral-500 italic">Truffle oil, parmesan, capers</p>
                </div>
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-sm md:text-base">
                        <span className="pr-3">Seared Scallops</span>
                        <span className="shrink-0">$22</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-neutral-500 italic">Cauliflower purée, pancetta crisp</p>
                </div>
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-sm md:text-base">
                        <span className="pr-3">Burrata</span>
                        <span className="shrink-0">$18</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-neutral-500 italic">Heirloom tomato, basil pesto</p>
                </div>
            </div>
        )
    },
    {
        pageNumber: 2,
        title: "Main Courses",
        content: (
            <div className="space-y-3 md:space-y-4">
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-sm md:text-base">
                        <span className="pr-3">Truffle Risotto</span>
                        <span className="shrink-0">$32</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-neutral-500 italic">Wild mushrooms, parmesan crisp</p>
                </div>
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-sm md:text-base">
                        <span className="pr-3">Miso Black Cod</span>
                        <span className="shrink-0">$45</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-neutral-500 italic">Bok choy, ginger dashi broth</p>
                </div>
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-sm md:text-base">
                        <span className="pr-3">Duck Confit</span>
                        <span className="shrink-0">$38</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-neutral-500 italic">Red cabbage, orange glaze</p>
                </div>
            </div>
        )
    },
    {
        pageNumber: 3,
        title: "Desserts",
        content: (
            <div className="space-y-3 md:space-y-4">
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-sm md:text-base">
                        <span className="pr-3">Chocolate Fondant</span>
                        <span className="shrink-0">$16</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-neutral-500 italic">Vanilla gelato, raspberry coulis</p>
                </div>
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-sm md:text-base">
                        <span className="pr-3">Lemon Tart</span>
                        <span className="shrink-0">$14</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-neutral-500 italic">Italian meringue, mint garnish</p>
                </div>
            </div>
        )
    },
    {
        pageNumber: 4,
        title: "Wine List",
        content: (
            <div className="space-y-3 md:space-y-4">
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-sm md:text-base">
                        <span className="pr-3">Chablis Premier Cru</span>
                        <span className="shrink-0">$18/gl</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-neutral-500 italic">Burgundy, France</p>
                </div>
                <div>
                    <div className="flex justify-between font-bold text-neutral-800 text-sm md:text-base">
                        <span className="pr-3">Barolo DOCG</span>
                        <span className="shrink-0">$22/gl</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-neutral-500 italic">Piedmont, Italy</p>
                </div>
            </div>
        )
    }
];

export function ResponsiveMenuBook() {
    return (
        <>
            {/* Mobile - Condensed view */}
            <div className="block sm:hidden">
                <InteractiveBook
                    coverImage="https://images.unsplash.com/photo-1544681280-d25a782adc9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    bookTitle="Luxe Dining"
                    bookAuthor="Est. 2024"
                    width={240}
                    height={340}
                    pages={mobileMenuPages}
                />
            </div>

            {/* Tablet */}
            <div className="hidden sm:block lg:hidden">
                <InteractiveBook
                    coverImage="https://images.unsplash.com/photo-1544681280-d25a782adc9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    bookTitle="Luxe Dining"
                    bookAuthor="Est. 2024"
                    width={300}
                    height={420}
                    pages={fullMenuPages}
                />
            </div>

            {/* Desktop */}
            <div className="hidden lg:block">
                <InteractiveBook
                    coverImage="https://images.unsplash.com/photo-1544681280-d25a782adc9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    bookTitle="Luxe Dining"
                    bookAuthor="Est. 2024"
                    width={400}
                    height={540}
                    pages={fullMenuPages}
                />
            </div>
        </>
    );
}
