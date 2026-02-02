"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const education = {
    role: "B.A. Business Administration (Marketing)",
    company: "University of Florida",
    period: "Cum Laude",
    description: "Focus on Marketing.",
    tags: ["Education"],
}

const experience = [
    {
        role: "Cofounder, Partnerships & Comms",
        company: "Regens Unite",
        period: "Aug 2022 – Present",
        description: "Cofounded and grew a global community brand. Organized major hubs alongside EthCC, DevCon. Raised ~$100k in funding.",
        tags: ["Web3", "Events", "Partnerships"]
    },
    {
        role: "Marketing Lead",
        company: "RnD Ventures",
        period: "Dec 2023 – Present",
        description: "Led brand narrative and execution. Co-organized virtual hackathon for 200 builders. Spearheaded digital rebrand.",
        tags: ["Marketing", "Strategy", "Arbitrum"]
    },
    {
        role: "Storytelling & Impact",
        company: "Hack Humanity",
        period: "Jan – Mar 2024",
        description: "Supported Arbitrum GovHack execution. Managed relationships with Foundation and delegates.",
        tags: ["Hackathon", "Governance", "Impact"]
    },
    {
        role: "Cofounder, Partnerships",
        company: "Chinwags",
        period: "Jan – May 2023",
        description: "Co-founded flagship hackathon retreat in Poland. Managed sponsorships and sales.",
        tags: ["Retreat", "Sales"]
    },
    {
        role: "Communications Lead",
        company: "Giveth.io",
        period: "Jun 2022 – Jun 2023",
        description: "Led comms strategy driving platform growth. Managed marketing partnerships.",
        tags: ["DeFi", "Comms", "DAO"]
    },
    {
        role: "Regional Customer Success Manager",
        company: "Infarm",
        period: "Sep 2018 – Dec 2021",
        description: "Managed 200+ retail partners. Scaled Partner Success team from 1 to 10+.",
        tags: ["Enterprise", "Management"]
    },
    {
        role: "Enterprise Account Executive",
        company: "Mimeo",
        period: "Jul 2014 – Nov 2017",
        description: "Delivered 300% revenue growth. Led global implementation rollout valued at €115k.",
        tags: ["Sales", "Growth"]
    }
];

export function Timeline() {
    return (
        <div className="relative space-y-8 pl-8 md:pl-0 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center md:pb-12">
                <div className="md:text-right md:order-1 opacity-0" />
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md ring-4 ring-background md:order-2 md:mx-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <Calendar className="w-5 h-5" />
                </div>
                <div className="md:order-1 md:text-right">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardHeader className="p-0 pb-2">
                            <CardTitle className="text-xl font-serif">Education</CardTitle>
                            <p className="text-sm text-muted-foreground">{education.company}</p>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-muted-foreground mb-2">{education.role}</p>
                            <Badge variant="outline">{education.period}</Badge>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {experience.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 w-10 h-10 flex items-center justify-center -translate-x-1/2 rounded-full bg-background border border-border shadow-sm ring-4 ring-background md:left-1/2 md:translate-x-[-50%] z-10 group-hover:border-primary group-hover:text-primary transition-colors">
                        <Briefcase className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    </div>

                    {/* Content */}
                    <div className="w-full ml-10 md:ml-0 md:w-[calc(50%-2rem)] p-4 rounded-xl border bg-card hover:shadow-lg transition-shadow">
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <h3 className="font-serif font-bold text-lg text-primary">{item.role}</h3>
                                <span className="text-xs font-medium text-muted-foreground bg-secondary/30 px-2 py-1 rounded-full whitespace-nowrap">
                                    {item.period}
                                </span>
                            </div>
                            <p className="font-medium text-sm text-foreground">{item.company}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {item.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
