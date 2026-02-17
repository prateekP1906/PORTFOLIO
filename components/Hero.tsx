"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-white">
            {/* Layer 1: The Background Graphic (Left side beige block) */}
            <div className="absolute top-0 left-0 bottom-0 w-[40%] bg-[#F2EFE9] z-0" />

            {/* Layer 2: The Content Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-12 flex flex-col md:flex-row items-center">

                {/* Left Item: The Profile Card */}
                <div className="w-full md:w-96 bg-white shadow-2xl p-12 flex flex-col items-center text-center mt-10 md:mt-0 flex-shrink-0">
                    {/* Image Placeholder */}
                    {/* Profile Image */}
                    <div className="w-56 h-56 rounded-full mb-8 overflow-hidden relative shadow-lg">
                        <img
                            src="/profile.jpg"
                            alt={portfolioData.personal.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h2 className="text-2xl font-extrabold text-black mb-4">
                        {portfolioData.personal.name}
                    </h2>

                    {/* Blue Separator Line */}
                    <div className="w-12 h-1 bg-[#0055FF] mb-6" />

                    <p className="text-sm tracking-[0.2em] font-light text-black uppercase mb-12">
                        {portfolioData.personal.title}
                    </p>

                    {/* Social Footer */}
                    <div className="w-full pt-8 border-t border-gray-100 flex justify-center gap-6">
                        <Link href={portfolioData.personal.linkedin} target="_blank" className="text-black hover:text-[#0055FF] transition-colors">
                            <Linkedin size={20} />
                        </Link>
                        <Link href={portfolioData.personal.github} target="_blank" className="text-black hover:text-[#0055FF] transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href={`mailto:${portfolioData.personal.email}`} className="text-black hover:text-[#0055FF] transition-colors">
                            <Mail size={20} />
                        </Link>
                        {/* Added a 4th icon as per 'social icons' request, using Twitter as placeholder */}
                        <Link href="#" className="text-black hover:text-[#0055FF] transition-colors">
                            <Twitter size={20} />
                        </Link>
                    </div>
                </div>

                {/* Right Item: The Bio */}
                <div className="flex-1 md:pl-24 pt-10 md:pt-0 text-center md:text-left">
                    <h1 className="text-6xl md:text-9xl font-extrabold text-black mb-4 tracking-tight">
                        Hello
                    </h1>
                    <h3 className="text-xl md:text-2xl font-medium text-black mb-8">
                        Here&apos;s who I am & what I do
                    </h3>

                    {/* Buttons */}
                    <div className="flex flex-row gap-4 justify-center md:justify-start mb-10">
                        <Link href="/resume" className="inline-block">
                            <button className="px-10 py-3 rounded-full bg-[#0055FF] text-white text-sm font-bold tracking-wider hover:bg-blue-700 transition-colors">
                                RESUME
                            </button>
                        </Link>
                        <Link href="/projects" className="inline-block">
                            <button className="px-10 py-3 rounded-full bg-white text-black border border-black text-sm font-bold tracking-wider hover:bg-gray-50 transition-colors">
                                PROJECTS
                            </button>
                        </Link>
                    </div>

                    {/* Body Text */}
                    <div className="space-y-6 max-w-lg mx-auto md:mx-0 text-gray-600 leading-relaxed font-normal">
                        <p>
                            {portfolioData.personal.summary}
                        </p>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
