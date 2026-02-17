"use client";

import { portfolioData } from "@/data/portfolio";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-[#EBE5D9]">
            <div className="max-w-5xl mx-auto space-y-20">

                <div className="flex flex-col items-center gap-6 text-center mb-16 max-w-2xl mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Projects</h1>
                    </div>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    </p>
                </div>

                <div className="space-y-16">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className="bg-white shadow-sm flex flex-col md:flex-row overflow-hidden group min-h-[450px]"
                        >
                            {/* Text Side */}
                            <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-2 h-10 bg-primary flex-shrink-0 mt-1" />
                                    <div className="space-y-1">
                                        <h2 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-blue-700 transition-colors">
                                            {project.title}
                                        </h2>

                                    </div>
                                </div>

                                <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex gap-6 mt-auto">
                                    {project.links?.demo && (
                                        <Link
                                            href={project.links.demo}
                                            target="_blank"
                                            className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-primary hover:text-blue-700 transition-colors"
                                        >
                                            Live Demo <MoveUpRight className="ml-1 h-3 w-3" />
                                        </Link>
                                    )}
                                    {project.links?.code && (
                                        <Link
                                            href={project.links.code}
                                            target="_blank"
                                            className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-foreground hover:text-primary transition-colors"
                                        >
                                            GitHub <MoveUpRight className="ml-1 h-3 w-3" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="flex-1 relative bg-gray-100 min-h-[300px] md:min-h-full">
                                {project.image ? (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium uppercase tracking-widest opacity-50">
                                        Project Preview
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
