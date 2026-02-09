import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="bg-black text-white py-16 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-display font-bold text-gold mb-6 block">
                            Luxe Dining
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-xs">
                            A sanctuary of culinary excellence and architectural beauty in the heart of the city.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/5 transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/5 transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/5 transition-all">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wide">Explore</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#menu" className="hover:text-gold transition-colors">The Menu</Link></li>
                            <li><Link href="#about" className="hover:text-gold transition-colors">Our Story</Link></li>
                            <li><Link href="#gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
                            <li><Link href="#testimonials" className="hover:text-gold transition-colors">Guest Stories</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Gift Cards</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wide">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                                <span>123 Culinary Ave,<br />Gastronomy District, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-gold shrink-0" size={18} />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-gold shrink-0" size={18} />
                                <span>concierge@luxedining.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wide">Hours</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex justify-between">
                                <span>Mon - Thu</span>
                                <span>17:00 - 23:00</span>
                            </li>
                            <li className="flex justify-between text-white">
                                <span>Fri - Sat</span>
                                <span>17:00 - 01:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>16:00 - 22:00</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Luxe Dining. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
