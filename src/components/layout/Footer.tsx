import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <Link
                            href="/"
                            className="font-serif text-lg font-semibold tracking-tight"
                        >
                            <span className="gradient-text">Cori Schlicht</span>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-2">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-6 text-sm">
                        <Link
                            href="/"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/blog"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://twitter.com/CorinnaSchlicht"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
                            aria-label="X (Twitter)"
                        >
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/corinna-schlicht"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="mailto:corinna.schlicht@gmail.com"
                            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
