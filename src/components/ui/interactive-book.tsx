"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RefreshCcw, X } from 'lucide-react';

export interface BookPage {
    title?: string;
    content: React.ReactNode;
    backContent?: React.ReactNode;
    pageNumber: number;
}

export interface InteractiveBookProps {
    coverImage: string;
    bookTitle?: string;
    bookAuthor?: string;
    pages: BookPage[];
    className?: string;
    width?: number | string;
    height?: number | string;
}

export default function InteractiveBook({
    bookTitle = "Book Title",
    bookAuthor = "Author Name",
    pages,
    className,
    width = 350,
    height = 500,
}: InteractiveBookProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPageIndex, setCurrentPageIndex] = useState(-1);
    const [isHovering, setIsHovering] = useState(false);

    // Calculate dynamic width/height values for animations
    const widthNum = typeof width === 'number' ? width : 350;

    // Sync container shift with cover open
    const BOOK_OPEN_DURATION = 1.5;
    const EASING: [number, number, number, number] = [0.25, 0, 0, 1]; // milder smoothing

    const handleOpenBook = () => setIsOpen(true);

    const handleCloseBook = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIsOpen(false);
        setCurrentPageIndex(-1);
    };

    const nextPage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex((prev) => prev + 1);
        }
    };

    const prevPage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentPageIndex >= 0) {
            setCurrentPageIndex((prev) => prev - 1);
        }
    };

    const restartBook = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentPageIndex(-1);
    };



    // Keyboard navigation
    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                if (currentPageIndex < pages.length - 1) {
                    setCurrentPageIndex((prev) => prev + 1);
                }
            }
            if (e.key === 'ArrowLeft') {
                if (currentPageIndex >= 0) {
                    setCurrentPageIndex((prev) => prev - 1);
                }
            }
            if (e.key === 'Escape') handleCloseBook();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentPageIndex, pages.length]);

    return (
        <div
            className={cn("relative flex items-center justify-center perspective-[2000px]", className)}
            style={{
                width: typeof width === 'number' ? width * 2.2 : '100%',
                height: typeof height === 'number' ? height + 100 : 'auto'
            }}
        >
            <motion.div
                className={cn(
                    "relative preserve-3d"
                )}
                style={{ width, height }}
                initial={{ x: 0 }}
                animate={{ x: isOpen ? widthNum / 2 : 0 }}
                transition={{ duration: BOOK_OPEN_DURATION, ease: EASING }}
            >

                {/* Front Cover */}
                <motion.div
                    className="absolute inset-0 w-full h-full origin-left"
                    initial={{ rotateY: 0, zIndex: 100 }}
                    animate={{
                        rotateY: isOpen ? -180 : (isHovering ? -15 : 0),
                        zIndex: isOpen ? 0 : 100
                    }}
                    transition={{
                        rotateY: { duration: BOOK_OPEN_DURATION, ease: EASING },
                        zIndex: { delay: isOpen ? BOOK_OPEN_DURATION * 0.6 : BOOK_OPEN_DURATION * 0.4 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                    onClick={!isOpen ? handleOpenBook : undefined}
                    onHoverStart={() => !isOpen && setIsHovering(true)}
                    onHoverEnd={() => setIsHovering(false)}
                >
                    {/* Front Face */}
                    <div
                        className="absolute inset-0 w-full h-full backface-hidden rounded-r-md rounded-l-sm shadow-2xl cursor-pointer overflow-hidden group bg-[#4a0404]"
                        style={{ transform: 'translateZ(0.5px)' }}
                    >
                        {/* Leather Texture Overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] bg-blend-overlay opacity-30" />

                        {/* Thick Double Golden Borders */}
                        <div className="absolute inset-3 border-2 border-yellow-500/40 rounded-sm" />
                        <div className="absolute inset-[15px] border border-yellow-500/20 rounded-sm" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                            {/* Logo Symbol */}
                            <div className="w-12 h-12 rounded-full border border-yellow-500 flex items-center justify-center mb-4">
                                <span className="text-xl font-display text-yellow-500">L</span>
                            </div>

                            {/* Brand Name */}
                            <h1 className="text-2xl font-display text-yellow-500 font-bold tracking-[0.2em] uppercase mb-1 drop-shadow-md">
                                Luxe
                            </h1>
                            <p className="text-[10px] font-sans tracking-[0.3em] text-white/80 uppercase">
                                Dining
                            </p>

                            <div className="w-8 h-[1px] bg-yellow-500/50 my-4" />
                            <p className="text-[8px] font-sans tracking-widest text-yellow-500/70 uppercase">
                                {bookAuthor}
                            </p>
                        </div>

                        {/* Spine Highlight */}
                        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 to-transparent" />
                        <div className="absolute left-[8px] top-0 bottom-0 w-[1px] bg-black/20" />
                    </div>

                    {/* Back Face (Inner Cover) */}
                    <div
                        className="absolute inset-0 w-full h-full backface-hidden rounded-l-md rounded-r-sm bg-[#fdfbf7] rotate-y-180 flex flex-col p-8 border-r border-neutral-200 shadow-xl cursor-pointer hover:bg-[#fcfaf5] transition-colors"
                        style={{ transform: 'rotateY(180deg) translateZ(0.5px)' }}
                        onClick={(e) => {
                            e.stopPropagation();
                            prevPage();
                        }}
                    >
                        <div className="flex-1 flex flex-col justify-center items-center text-center opacity-80">
                            <h2 className="text-2xl font-serif text-neutral-800 mb-2 tracking-wide">{bookTitle}</h2>
                            <div className="w-8 h-[1px] bg-neutral-300 mb-3" />
                            <p className="text-xs text-neutral-500 uppercase tracking-widest">Interactive Edition</p>
                        </div>
                    </div>
                </motion.div>

                {/* Pages Stack */}
                <div className="absolute inset-0 w-full h-full z-0" style={{ transformStyle: 'preserve-3d' }}>
                    {pages.map((page, index) => {
                        const isFlipped = index <= currentPageIndex;
                        // Stagger delays slightly for a realistic "whip" effect if user clicks fast, 
                        // but mostly we want instant feedback with smooth transition.

                        return (
                            <motion.div
                                key={index}
                                className="absolute inset-0 w-full h-full origin-left bg-[#fdfbf7] rounded-r-md rounded-l-sm shadow-sm border border-neutral-100"
                                style={{ transformStyle: 'preserve-3d' }}
                                initial={{ rotateY: 0, zIndex: pages.length - index }}
                                animate={{
                                    rotateY: isFlipped ? -180 : 0,
                                    zIndex: isFlipped ? index + 1 : pages.length - index
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.645, 0.045, 0.355, 1]
                                }}
                            >
                                {/* Front Face (Right Side) */}
                                <div
                                    className="absolute inset-0 w-full h-full backface-hidden p-8 flex flex-col bg-[#fdfbf7] cursor-pointer hover:bg-[#fcfaf5] transition-colors"
                                    style={{ transform: 'translateZ(0.5px)' }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextPage();
                                    }}
                                >
                                    <div className="flex-1">
                                        <div className="text-xs text-neutral-400 text-right mb-4 font-sans tracking-wider">
                                            {page.pageNumber * 2 - 1}
                                        </div>
                                        <div className="prose prose-neutral prose-sm max-w-none font-serif text-neutral-700 leading-relaxed select-none">
                                            {page.title && (
                                                <h3 className="text-xl font-medium text-center mb-6 text-neutral-800 tracking-tight">
                                                    {page.title}
                                                </h3>
                                            )}
                                            {page.content}
                                        </div>
                                    </div>
                                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent pointer-events-none mix-blend-multiply" />
                                </div>

                                {/* Back Face (Left Side) */}
                                <div
                                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#fdfbf7] border-r border-neutral-200 overflow-hidden p-8 flex flex-col cursor-pointer hover:bg-[#fcfaf5] transition-colors"
                                    style={{ transform: 'rotateY(180deg) translateZ(0.5px)' }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevPage();
                                    }}
                                >
                                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/5 to-transparent pointer-events-none mix-blend-multiply" />

                                    <div className="flex-1 overflow-hidden">
                                        <div className="text-xs text-neutral-400 text-left mb-4 font-sans tracking-wider">
                                            {page.pageNumber * 2}
                                        </div>
                                        <div className="prose prose-neutral prose-sm max-w-none font-serif text-neutral-700 leading-relaxed select-none h-full flex flex-col">
                                            {page.backContent ? (
                                                <div className="flex-1">
                                                    {page.backContent}
                                                </div>
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center opacity-[0.03]">
                                                    <span className="font-serif text-8xl italic font-bold text-black">
                                                        {page.pageNumber * 2}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Back Cover (Static) */}
                    <div
                        className="absolute inset-0 w-full h-full bg-[#fdfbf7] rounded-r-md rounded-l-sm shadow-xl border border-neutral-200"
                        style={{ transform: 'translateZ(-1px)', zIndex: -1 }}
                    >
                        <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center opacity-70">
                            <p className="font-display text-neutral-500 italic mb-2 text-xl">Fin.</p>
                            <div className="w-8 h-px bg-neutral-300 mb-4" />
                            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-6">Luxe Dining Experience</p>
                            <button
                                onClick={restartBook}
                                className="flex items-center gap-2 px-6 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors text-xs uppercase tracking-widest text-neutral-600 cursor-pointer"
                            >
                                <RefreshCcw size={12} /> Replay
                            </button>
                        </div>
                    </div>
                </div>

            </motion.div>

            {/* Generic Close Button */}
            <AnimatePresence>
                {isOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={handleCloseBook}
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 text-neutral-500 hover:text-neutral-800 transition-all z-50 group"
                        aria-label="Close"
                    >
                        <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Hint */}
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-4 text-neutral-500 dark:text-neutral-400 text-sm font-medium tracking-widest uppercase cursor-pointer z-50 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                    onClick={handleOpenBook}
                >
                    Click to Open
                </motion.div>
            )}
        </div>
    );
}
