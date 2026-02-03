"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Globe, Heart } from "lucide-react";

const highlights = [
    {
        icon: Rocket,
        title: "Web3 Pioneer",
        description: "Co-founding regenerative communities and DAOs since 2022",
    },
    {
        icon: Users,
        title: "Community Builder",
        description: "Organizing events with 600+ attendees across 3 continents",
    },
    {
        icon: Globe,
        title: "Global Connector",
        description: "Building partnerships from Berlin to Bangkok to Buenos Aires",
    },
    {
        icon: Heart,
        title: "Impact Driven",
        description: "Raised $100k+ in public goods funding for regenerative projects",
    },
];

export function AboutSection() {
    return (
        <section className="py-24 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
                            About Me
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            I specialize in building networks and high-value partnerships that power
                            community-driven events and drive genuine impact in the Ethereum ecosystem.
                        </p>
                    </motion.div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="premium-card p-6 text-center group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-serif font-semibold text-lg mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 max-w-3xl mx-auto text-center"
                    >
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            My background spans both corporate and startup worlds – from enterprise
                            sales at Tyco and Mimeo to scaling partner success at Infarm. Now I&apos;m
                            fully immersed in Web3, bringing together capital, builders, and
                            communities to create lasting local infrastructure through events like
                            Regens Unite and hackathons for the Arbitrum ecosystem.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
