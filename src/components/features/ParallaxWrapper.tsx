"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxWrapperProps {
    children: React.ReactNode;
    offset?: number;
    className?: string;
}

export function ParallaxWrapper({ children, offset = 50, className }: ParallaxWrapperProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <div ref={ref} className={cn("relative overflow-hidden", className)}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
}
