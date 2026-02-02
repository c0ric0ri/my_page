import { Hero } from "@/components/features/Hero";
import { Timeline } from "@/components/features/Timeline";
import { ParallaxWrapper } from "@/components/features/ParallaxWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      {/* About / Timeline Section */}
      <section id="about" className="w-full py-20 px-4 md:px-6 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-background/5 z-10 pointer-events-none" />

        <div className="container mx-auto space-y-16">
          <ParallaxWrapper offset={30}>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">My Journey</h2>
              <p className="text-muted-foreground text-lg md:text-xl font-sans leading-relaxed">
                From enterprise sales to Web3 community building. A timeline of how I've built bridges across ecosystems.
              </p>
            </div>
          </ParallaxWrapper>

          <Timeline />
        </div>
      </section>

      {/* Portfolio / Featured Work - Placeholder */}
      <section id="portfolio" className="w-full py-24 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto space-y-12">
          <ParallaxWrapper offset={20}>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Featured Projects</h2>
                <p className="text-muted-foreground">Recent work in community, events, and storytelling.</p>
              </div>
              <Button variant="link" className="text-primary p-0 h-auto font-medium group">
                View all projects <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ParallaxWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* We will populate this with real Portfolio Items later */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/3] rounded-xl bg-background border border-border shadow-sm flex items-center justify-center text-muted-foreground">
                <span className="font-serif italic">Project Placeholder {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="w-full py-24 px-4 md:px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" /> {/* Texture placeholder */}
        <div className="container mx-auto text-center space-y-8 relative z-10">
          <ParallaxWrapper offset={40}>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Ready to build something?</h2>
            <p className="max-w-2xl mx-auto text-primary-foreground/80 text-xl font-sans pt-4">
              Let's discuss how we can collaborate on driving growth and community impact.
            </p>
            <div className="pt-8">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg font-bold hover:scale-105 transition-transform">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </ParallaxWrapper>
        </div>
      </section>
    </main>
  );
}
