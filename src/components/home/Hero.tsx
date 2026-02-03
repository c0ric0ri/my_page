"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-cream-50 to-terracotta-50/30 dark:from-sage-950 dark:via-background dark:to-terracotta-950/20" />

            {/* Floating shapes for parallax effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-sage-200/40 dark:bg-sage-800/20 rounded-full blur-3xl"
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-terracotta-200/30 dark:bg-terracotta-800/20 rounded-full blur-3xl"
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/3 w-64 h-64 bg-cream-300/30 dark:bg-cream-700/10 rounded-full blur-3xl"
                    animate={{
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground mb-6">
                            <Sparkles className="h-4 w-4 text-terracotta-500" />
                            <span>Founder • Storyteller • Connector</span>
                            <Sparkles className="h-4 w-4 text-terracotta-500" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight mb-6"
                    >
                        I build bridges between{" "}
                        <span className="gradient-text">capital</span> and{" "}
                        <span className="gradient-text">community</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        After 10 years closing 6-figure deals and scaling teams, I pivoted into Web3
                        to build things I believe in. Co-founding communities, organizing hackathons,
                        and helping DAOs grow.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button asChild size="lg" className="w-full sm:w-auto">
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                            <Link href="/blog">Read My Blog</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="h-6 w-6 text-muted-foreground" />
                </motion.div>
            </motion.div>
        </section>
    );
}
