"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "ABOUT ME", href: "/" },
        { name: "RESUME", href: "/resume" },
        { name: "PROJECTS", href: "/projects" },
        { name: "CONTACT", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

                {/* Left: Branding */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-4 h-4 bg-[#0055FF] rounded-sm" /> {/* The Blue Square */}
                    <div className="flex items-baseline gap-2">
                        <span className="font-extrabold text-xl tracking-tight text-black">
                            {portfolioData.personal.name}
                        </span>
                        <span className="font-light text-sm text-black/60 hidden sm:inline-block">
                            / {portfolioData.personal.title}
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "text-xs font-medium tracking-widest transition-colors",
                                pathname === link.href ? "text-[#0055FF]" : "text-black hover:text-[#0055FF]"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-200"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "text-sm font-medium tracking-widest transition-colors",
                                        pathname === link.href ? "text-[#0055FF]" : "text-black hover:text-[#0055FF]"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
