"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
    {
        name: "X (Twitter)",
        href: "https://twitter.com/CorinnaSchlicht",
        icon: Twitter,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/corinna-schlicht",
        icon: Linkedin,
    },
    {
        name: "Email",
        href: "mailto:corinna.schlicht@gmail.com",
        icon: Mail,
    },
];

export function SocialLinks() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
        >
            <div>
                <h3 className="font-serif font-semibold text-xl mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                    I&apos;m always open to discussing new opportunities, partnerships, or
                    just connecting with fellow builders in the ecosystem.
                </p>
            </div>

            <div className="space-y-4">
                <a
                    href="mailto:corinna.schlicht@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Mail className="h-5 w-5" />
                    </div>
                    <span>corinna.schlicht@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <Phone className="h-5 w-5" />
                    </div>
                    <span>+1 561 809 5183</span>
                </div>
            </div>

            <div className="pt-4">
                <h4 className="text-sm font-medium mb-4 text-muted-foreground">
                    Connect on Social
                </h4>
                <div className="flex items-center gap-3">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                            aria-label={link.name}
                        >
                            <link.icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
