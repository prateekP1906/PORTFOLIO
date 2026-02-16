import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background py-20 px-6 md:px-12 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">

                {/* Copyright */}
                <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} by {portfolioData.personal.name}.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Powered and secured by Next.js
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-16">
                    {/* Call */}
                    <div className="space-y-2">
                        <h4 className="font-bold text-foreground">Call</h4>
                        <p className="text-sm text-foreground/80">{portfolioData.personal.contact}</p>
                    </div>

                    {/* Write */}
                    <div className="space-y-2">
                        <h4 className="font-bold text-foreground">Write</h4>
                        <a href={`mailto:${portfolioData.personal.email}`} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                            {portfolioData.personal.email}
                        </a>
                    </div>

                    {/* Follow */}
                    <div className="space-y-2">
                        <h4 className="font-bold text-foreground">Follow</h4>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <Link href={portfolioData.personal.linkedin} target="_blank" className="text-foreground hover:text-primary transition-colors">
                                <Linkedin size={18} />
                            </Link>
                            <Link href={portfolioData.personal.github} target="_blank" className="text-foreground hover:text-primary transition-colors">
                                <Github size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
