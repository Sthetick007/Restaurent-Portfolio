"use client";

import { MapPin, Clock, ExternalLink } from "lucide-react";

export function LocationSection() {
    return (
        <section className="bg-dark py-12 md:py-16 lg:py-20 text-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-0 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-dark-lighter">

                    {/* Info */}
                    <div className="p-6 md:p-10 lg:p-16 flex flex-col justify-center">
                        <span className="text-gold uppercase tracking-widest text-xs md:text-sm font-bold mb-2">Visit Us</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 md:mb-8">In the Heart of London</h2>
                        <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-sm md:text-base lg:text-lg">
                            Experience the pinnacle of culinary art in our flagship Mayfair location.
                            Valet parking is available for all dinner guests.
                        </p>

                        <div className="space-y-8 md:space-y-10 lg:space-y-12">
                            {/* Address */}
                            <div className="flex gap-4 md:gap-6 items-start">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-900/20 flex items-center justify-center shrink-0 text-gold border border-gold/10">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-display font-bold text-lg md:text-xl mb-1 md:mb-2 text-gold tracking-tight uppercase">Address</h4>
                                    <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">42 Berkeley Square<br />Mayfair, London W1J 5AW<br />United Kingdom</p>
                                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gold mt-3 md:mt-4 text-xs md:text-sm font-bold hover:underline tracking-widest uppercase">
                                        Open in Maps <ExternalLink size={12} className="ml-2 md:w-3.5 md:h-3.5" />
                                    </a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex gap-4 md:gap-6 items-start">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-900/20 flex items-center justify-center shrink-0 text-gold border border-gold/10">
                                    <Clock size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="w-full">
                                    <h4 className="text-white font-display font-bold text-lg md:text-xl mb-4 md:mb-6 text-gold tracking-tight uppercase">Operating Hours</h4>
                                    <div className="grid grid-cols-1 gap-3 md:gap-4 max-w-sm">
                                        <div className="flex justify-between items-center py-2 border-b border-white/5 group">
                                            <span className="text-gray-400 uppercase tracking-widest text-[10px] md:text-xs">Mon - Wed</span>
                                            <span className="text-white font-medium text-sm md:text-base">17:00 - 23:00</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-white/5 group">
                                            <span className="text-gray-400 uppercase tracking-widest text-[10px] md:text-xs">Thu - Sat</span>
                                            <span className="text-white font-medium text-sm md:text-base">17:00 - 01:00</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-white/5 group">
                                            <span className="text-gray-400 uppercase tracking-widest text-[10px] md:text-xs">Sunday</span>
                                            <span className="text-white font-medium text-sm md:text-base">12:00 - 22:00</span>
                                        </div>
                                    </div>
                                    <p className="mt-3 md:mt-4 text-[10px] md:text-[11px] text-gold/60 italic">
                                        * Late Night Lounge: 2 AM Fri & Sat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] h-full w-full bg-[#121212] mb-0 group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.099195610746!2d-0.14725518422998858!3d51.51130387963578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d49f4b0f97%3A0x74c7c728a4329244!2sBerkeley%20Square!5e0!3m2!1sen!2suk!4v1645564756836!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="grayscale invert brightness-[0.8] contrast-[1.2] hover:filter-none transition-all duration-700 absolute inset-0 opacity-0 animate-in fade-in fill-mode-forwards duration-1000"
                            title="London Location"
                            onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                        />

                        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white/10 pointer-events-none transition-all group-hover:bg-gold group-hover:border-gold group-hover:text-black">
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase group-hover:text-black">Luxe Dining • Mayfair</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
