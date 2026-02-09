"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const menuCategories = [
    { id: "appetizers", label: "Appetizers" },
    { id: "mains", label: "Main Course" },
    { id: "desserts", label: "Desserts" },
    { id: "wine", label: "Wine List" },
];

const menuItems = {
    appetizers: [
        { name: "Truffle Arancini", price: "$22", description: "Crispy risotto balls infused with black truffle, parmesan core, roasted garlic aioli." },
        { name: "Wagyu Carpaccio", price: "$32", description: "Thinly sliced A5 Wagyu, capers, arugula, truffle oil, shaved pecorino." },
        { name: "Saffron Scallops", price: "$28", description: "Pan-seared Atlantic scallops, saffron cream sauce, crispy leeks, citrus zest." },
        { name: "Wild Mushroom Tart", price: "$18", description: "Buttery pastry, seasonal mushrooms, thyme, balsamic reduction." },
        { name: "Burrata & Heirloom", price: "$24", description: "Imported Burrata, heirloom tomatoes, basil pesto, pine nuts, aged balsamic." },
        { name: "Lobster Bisque", price: "$26", description: "Creamy lobster velvet soup, cognac finish, chive crème fraîche." },
        { name: "Foie Gras Terrine", price: "$34", description: "Duck foie gras, fig jam, toasted brioche, port wine reduction." },
        { name: "Oysters Rockefeller", price: "$29", description: "Half-dozen fresh oysters, spinach, mornay sauce, herb breadcrumbs." },
        { name: "Ceviche Classico", price: "$25", description: "Fresh seabass, leche de tigre, sweet potato, cilantro oil." },
        { name: "Spicy Tuna Tartare", price: "$28", description: "Bluefin tuna, avocado mousse, chili oil, sesame crisp." },
    ],
    mains: [
        { name: "Herb-Crusted Lamb", price: "$48", description: "Grass-fed rack of lamb, mint-parsley crust, parsnip puree, red wine jus." },
        { name: "Black Cod Miso", price: "$54", description: "24-hour miso marinated cod, bok choy, ginger-soy emulsion, sesame brittle." },
        { name: "Paneer Mille-Feuille", price: "$36", description: "Layered artisan paneer, spiced spinach, makhani sauce reduction, gold leaf." },
        { name: "Lobster Thermidor", price: "$62", description: "Butter-poached lobster tail, brandy cream, gruyère crust, micro greens." },
        { name: "Duck Confit", price: "$42", description: "Slow-cooked duck leg, truffle mash, braised red cabbage, orange glaze." },
        { name: "Filet Mignon", price: "$58", description: "8oz Prime beef tenderloin, potato gratin, asparagus, bordelaise sauce." },
        { name: "Risotto Nero", price: "$38", description: "Squid ink risotto, calamari, lemon zest, basil oil." },
        { name: "Chilean Sea Bass", price: "$52", description: "Pan-roasted bass, cauliflower pureé, salsa verde, chorizo crumble." },
        { name: "Osso Buco", price: "$46", description: "Braised veal shanks, polenta, gremolata, roasted root vegetables." },
        { name: "Truffle Mushroom Pasta", price: "$34", description: "Handmade tagliatelle, wild mushrooms, black truffle cream, parmesan reggiano." },
    ],
    desserts: [
        { name: "Cardamom Panna Cotta", price: "$16", description: "Silky cream infused with green cardamom, pistachio crumble, rose syrup." },
        { name: "Dark Chocolate Fondant", price: "$18", description: "Molten 70% dark chocolate center, hazelnut praline, vanilla bean gelato." },
        { name: "Deconstructed Baklava", price: "$18", description: "Phyllo shards, honey-walnut mousse, saffron honey, orange blossom water." },
        { name: "Lemon Basil Tart", price: "$15", description: "Zesty lemon curd, basil infusion, meringue shards, shortbread crust." },
        { name: "Tiramisu Moderno", price: "$17", description: "Espresso-soaked savoiardi, mascarpone mousse, cocoa dust, coffee caviar." },
        { name: "Raspberry Soufflé", price: "$19", description: "Light and airy raspberry soufflé, white chocolate ganache pour." },
        { name: "Gold Leaf Opera Cake", price: "$20", description: "Layers of almond sponge, coffee buttercream, chocolate ganache, 24k gold leaf." },
        { name: "Mango Saffron Mousse", price: "$16", description: "Alphonso mango mousse, saffron threads, coconut tuile." },
        { name: "Artisan Cheese Board", price: "$24", description: "Selection of 4 premium cheeses, honeycomb, fig jam, crackers." },
    ],
    wine: [
        { name: "Château Margaux 2015", price: "$450", description: "Bordeaux, France - Elegant, complex, notes of blackcurrant and violet." },
        { name: "Opus One 2018", price: "$380", description: "Napa Valley, USA - Full-bodied, silky tannins, dark fruit aromatics." },
        { name: "Cloudy Bay Sauvignon Blanc", price: "$85", description: "Marlborough, NZ - Vibrant, aromatic, notes of passionfruit and lime." },
        { name: "Dom Perignon 2012", price: "$320", description: "Champagne, France - Fresh, precise, notes of white flowers and citrus." },
        { name: "Barolo Cannubi 2016", price: "$180", description: "Piedmont, Italy - Intense, tannic, notes of cherry, tar, and roses." },
        { name: "Sassanica Super Tuscan", price: "$250", description: "Tuscany, Italy - Bold, structured, notes of dark berries and spice." },
        { name: "Whispering Angel Rosé", price: "$65", description: "Provence, France - Pale pink, crisp, notes of strawberry and peach." },
        { name: "Penfolds Grange 2014", price: "$600", description: "South Australia - Powerful, rich, notes of blackberry and chocolate." },
        { name: "Cakebread Chardonnay", price: "$110", description: "Napa Valley, USA - Creamy, oaky, notes of apple and pear." },
        { name: "Rioja Gran Reserva", price: "$95", description: "Spain - Smooth, aged, notes of vanilla, tobacco, and red fruit." },
    ],
};

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState("appetizers");
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const currentItems = menuItems[activeCategory as keyof typeof menuItems];
    const itemsToShow = isMobile && !isExpanded ? 4 : currentItems.length;
    const visibleItems = currentItems.slice(0, itemsToShow);
    const hasMore = isMobile && currentItems.length > 4;

    return (
        <section id="menu" className="py-12 md:py-20 bg-dark-lighter">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-4">The Dinner Menu</h2>
                    <div className="w-24 h-1 bg-gold mx-auto" />
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12">
                    {menuCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveCategory(category.id);
                                setIsExpanded(false); // Reset expansion when changing category
                            }}
                            className={cn(
                                "pb-2 text-sm md:text-lg uppercase tracking-wider transition-all border-b-2",
                                activeCategory === category.id
                                    ? "text-gold border-gold"
                                    : "text-gray-400 border-transparent hover:text-white"
                            )}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Menu Items */}
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8 grid-cols-1 md:grid-cols-2"
                        >
                            {visibleItems.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <div className="flex justify-between items-baseline mb-2 border-b border-gray-800 pb-1">
                                        <h3 className="text-lg md:text-xl text-white font-display pr-2">{item.name}</h3>
                                        <span className="text-gold font-bold ml-2 shrink-0">{item.price}</span>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm italic">{item.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* View More Button - Mobile Only */}
                    {hasMore && (
                        <div className="mt-8 text-center md:hidden">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold text-gold hover:bg-gold hover:text-dark transition-all rounded-full font-semibold text-sm uppercase tracking-wider"
                            >
                                {isExpanded ? (
                                    <>
                                        Show Less
                                        <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
                                    </>
                                ) : (
                                    <>
                                        View More ({currentItems.length - 4} more)
                                        <ChevronDown className="w-4 h-4 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
