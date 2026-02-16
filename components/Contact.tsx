"use client";

import { Button } from "./ui/Button";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 md:px-12 bg-[#EBE5D9]">
            <div className="max-w-3xl mx-auto text-center space-y-12">

                <div className="flex flex-col items-center gap-4">
                    <div className="w-6 h-6 bg-primary rounded-sm" />
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Let&apos;s talk</h2>
                </div>

                <div className="bg-white p-8 md:p-12 shadow-sm text-left">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-bold text-foreground">First Name *</label>
                                <input type="text" id="firstName" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary bg-transparent transition-colors" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-bold text-foreground">Last Name *</label>
                                <input type="text" id="lastName" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary bg-transparent transition-colors" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-foreground">Email *</label>
                            <input type="email" id="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary bg-transparent transition-colors" required />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-bold text-foreground">Subject</label>
                            <input type="text" id="subject" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary bg-transparent transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-foreground">Message</label>
                            <textarea id="message" rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary bg-transparent resize-none transition-colors" />
                        </div>

                        <div className="pt-6">
                            <Button type="submit" className="rounded-full px-12 py-3 bg-primary hover:bg-blue-700 text-white font-bold tracking-widest uppercase">
                                Send
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="pt-12 text-center text-muted-foreground">
                    <p>Or request a call: <a href={`tel:${portfolioData.personal.contact}`} className="text-primary hover:underline">{portfolioData.personal.contact}</a></p>
                    <p>Email: <a href={`mailto:${portfolioData.personal.email}`} className="text-primary hover:underline">{portfolioData.personal.email}</a></p>
                </div>

            </div>
        </section>
    );
}
