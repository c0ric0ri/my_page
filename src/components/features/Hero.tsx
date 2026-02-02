import { Button } from "@/components/ui/button";
import { ParallaxWrapper } from "./ParallaxWrapper";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background text-foreground pt-16">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-secondary/20 blur-3xl opacity-50" />
                <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl opacity-50" />
            </div>

            <div className="container px-4 md:px-6 z-10 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
                    <ParallaxWrapper offset={20}>
                        <div className="space-y-4">
                            <h1 className="text-5xl font-serif font-bold tracking-tight sm:text-6xl xl:text-7xl text-primary leading-tight">
                                Building bridges between <span className="italic text-accent">capital</span> and <span className="italic text-accent">community</span>.
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl font-sans leading-relaxed">
                                I'm Cori Schlicht. Founder, Storyteller, and Builder in the Web3 ecosystem.
                                Currently driving growth at Regens Unite and RnD Ventures.
                            </p>
                        </div>
                    </ParallaxWrapper>

                    <ParallaxWrapper offset={10}>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 px-8 text-lg font-medium">
                                Check my work
                            </Button>
                            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-secondary/20 rounded-full h-12 px-8 text-lg font-medium">
                                Contact Me
                            </Button>
                        </div>
                    </ParallaxWrapper>
                </div>

                <ParallaxWrapper offset={-30} className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-105" />
                        <div className="absolute inset-0 rounded-full border border-secondary scale-110 opacity-50" />
                        <div className="w-full h-full rounded-full overflow-hidden bg-muted flex items-center justify-center relative z-10 shadow-xl">
                            {/* Placeholder until we have an image */}
                            <span className="text-4xl text-muted-foreground font-serif italic">Cori Schlicht</span>
                        </div>
                    </div>
                </ParallaxWrapper>
            </div>
        </section>
    );
}
