import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { Timeline } from "@/components/home/Timeline";
import { PortfolioSection } from "@/components/home/PortfolioSection";

export default function HomePage() {
    return (
        <>
            <Hero />
            <AboutSection />
            <Timeline />
            <PortfolioSection />
        </>
    );
}
