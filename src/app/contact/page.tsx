import { ContactForm } from "@/components/features/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16 px-4 md:px-6 flex items-center justify-center">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                        I'm always open to discussing new opportunities, partnerships, or just chatting about the future of Web3.
                    </p>
                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-foreground">Email:</span>
                            <a href="mailto:corinna.schlicht@gmail.com" className="text-primary hover:underline">corinna.schlicht@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-foreground">Socials:</span>
                            <div className="flex gap-4">
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">X (Twitter)</a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
