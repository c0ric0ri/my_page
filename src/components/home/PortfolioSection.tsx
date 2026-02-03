"use client";

import { motion } from "framer-motion";
import { ExternalLink, Users, Calendar, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
    title: string;
    organization: string;
    year: string;
    description: string;
    stats: { label: string; value: string }[];
    videoUrl?: string;
    link?: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        title: "Regen Hub @Devcon SEA",
        organization: "Regens Unite",
        year: "2024",
        description: "Stewarded a dedicated Community Hub inside the main Devcon venue. Delivered 30+ hours of programming connecting Southeast Asian impact projects with Ethereum builders.",
        stats: [
            { label: "Days", value: "4" },
            { label: "Participants", value: "500+" },
            { label: "Projects Showcased", value: "25+" },
        ],
        videoUrl: "https://www.youtube.com/watch?v=3VTNtFKfPpw",
    },
    {
        title: "Regen Village @EthCC Brussels",
        organization: "Regens Unite",
        year: "2024",
        description: "Designed a sponsorship model directing event surplus to seed-fund the Commons Hub (€25k). Bridged global blockchain innovation with local community impact.",
        stats: [
            { label: "Days", value: "5" },
            { label: "Economy Users", value: "600+" },
            { label: "Raised", value: "€60k" },
        ],
        videoUrl: "https://www.youtube.com/watch?v=FSCi_173Alw",
        link: "https://regenvillage.webflow.io/",
    },
    {
        title: "Arbitrum GovHack @ETHDenver",
        organization: "Hack Humanity",
        year: "2024",
        description: "Orchestrated Arbitrum DAO's first dedicated governance hackathon. Managed stakeholder relationships and authored impact reports securing future funding.",
        stats: [
            { label: "Days", value: "3" },
            { label: "Participants", value: "200" },
            { label: "Submission Rate", value: "100%" },
        ],
        videoUrl: "https://www.youtube.com/watch?v=ZxmjFw5LLaQ",
    },
    {
        title: "Regens Unite Berlin",
        organization: "Regens Unite",
        year: "2022-23",
        description: "Raised €16k in sponsorship in 3 weeks for this grassroots event. Directly funded local co-living infrastructure (Moos Space) rather than extracting value.",
        stats: [
            { label: "Workshops", value: "50+" },
            { label: "Participants", value: "200" },
            { label: "To Community", value: "€6k" },
        ],
        link: "https://www.regensunite.earth/berlin2022",
    },
];

export function PortfolioSection() {
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
                            Event Portfolio
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Events that turn temporary gatherings into lasting local infrastructure
                            and drive genuine impact in the Ethereum ecosystem.
                        </p>
                    </motion.div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {portfolioItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="premium-card overflow-hidden group"
                            >
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div>
                                            <Badge variant="secondary" className="mb-2">
                                                {item.organization}
                                            </Badge>
                                            <h3 className="font-serif font-semibold text-xl">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            {item.year}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="px-6 py-4 border-t border-border/50 bg-muted/30">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-6">
                                            {item.stats.map((stat) => (
                                                <div key={stat.label} className="text-center">
                                                    <p className="font-semibold text-lg text-primary">
                                                        {stat.value}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {stat.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {item.videoUrl && (
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    asChild
                                                >
                                                    <a
                                                        href={item.videoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label="Watch video"
                                                    >
                                                        <Play className="h-4 w-4" />
                                                    </a>
                                                </Button>
                                            )}
                                            {item.link && (
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    asChild
                                                >
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label="Visit website"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
