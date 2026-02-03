"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
    year: string;
    title: string;
    company: string;
    description: string;
    category: "web3" | "enterprise";
    current?: boolean;
}

const timelineData: TimelineItem[] = [
    {
        year: "2024",
        title: "Marketing Lead",
        company: "RnD Ventures (RnDAO)",
        description: "Leading brand narrative and builder acquisition for a venture studio in the Arbitrum ecosystem. Co-organized virtual hackathons for 200+ builders.",
        category: "web3",
        current: true,
    },
    {
        year: "2022",
        title: "Cofounder, Partnerships & Comms",
        company: "Regens Unite",
        description: "Cofounded a global community brand organizing major hubs alongside EthCC, DevCon, and DevConnect. Raised ~$100k in public goods funding.",
        category: "web3",
        current: true,
    },
    {
        year: "2024",
        title: "Storytelling & Impact",
        company: "Hack Humanity",
        description: "Supported the Arbitrum GovHack during ETHDenver. Managed stakeholder relationships and authored impact reports.",
        category: "web3",
    },
    {
        year: "2023",
        title: "Cofounder",
        company: "Chinwags",
        description: "Co-founded a 4-day hackathon retreat in Poland for 25+ Web3 operators. Managed partnerships and sponsorship sales.",
        category: "web3",
    },
    {
        year: "2022",
        title: "Communications Lead",
        company: "Giveth.io",
        description: "Led communications and content strategy drivi ng platform growth and brand awareness. Represented the DAO at major conferences.",
        category: "web3",
    },
    {
        year: "2022",
        title: "Partnerships Lead",
        company: "The DAOist",
        description: "Executed partnership sales strategy for the organization's transition to a DAO structure.",
        category: "web3",
    },
    {
        year: "2018",
        title: "Customer Success Manager (DACH)",
        company: "Infarm",
        description: "Managed 200+ retail partners achieving 100% retention for top-tier accounts. Scaled team from 1 to 10+ employees.",
        category: "enterprise",
    },
    {
        year: "2014",
        title: "Enterprise Account Executive",
        company: "Mimeo",
        description: "Delivered 300% revenue growth in 16 months. Led global implementation rollouts valued at €115k.",
        category: "enterprise",
    },
    {
        year: "2011",
        title: "Commercial Account Executive",
        company: "Tyco Integrated Security",
        description: "Managed full-cycle sales for 5-to-6 figure commercial security projects in NYC.",
        category: "enterprise",
    },
];

export function Timeline() {
    return (
        <section className="py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
                            My Journey
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            From enterprise sales to Web3 ecosystem building – a timeline of
                            impact and growth.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Center line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                        {timelineData.map((item, index) => (
                            <motion.div
                                key={`${item.company}-${item.year}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className={`relative flex items-start gap-6 mb-8 md:mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-2 z-10" />

                                {/* Content card */}
                                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                                    <div className="premium-card p-6 hover:border-primary/30">
                                        <div className={`flex items-center gap-2 mb-2 flex-wrap ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                            <Badge variant={item.category === "web3" ? "default" : "secondary"}>
                                                {item.category === "web3" ? "Web3" : "Enterprise"}
                                            </Badge>
                                            {item.current && (
                                                <Badge variant="outline" className="border-primary text-primary">
                                                    Current
                                                </Badge>
                                            )}
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground">
                                            {item.year}
                                        </span>
                                        <h3 className="font-serif font-semibold text-lg mt-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-primary font-medium text-sm mt-0.5">
                                            {item.company}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
