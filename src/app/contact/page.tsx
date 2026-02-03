import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Cori Schlicht. Open to discussing opportunities, partnerships, or connecting with fellow builders.",
};

export default function ContactPage() {
    return (
        <div className="pt-24 md:pt-32 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
                            Let&apos;s Connect
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            Whether you&apos;re looking to collaborate, need a speaker for your event,
                            or just want to say hello – I&apos;d love to hear from you.
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>North America & Europe</span>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Form */}
                        <div className="premium-card p-8">
                            <h2 className="font-serif font-semibold text-xl mb-6">
                                Send a Message
                            </h2>
                            <ContactForm />
                        </div>

                        {/* Social Links & Info */}
                        <div className="space-y-8">
                            <SocialLinks />

                            {/* Additional info */}
                            <div className="premium-card p-6 bg-muted/50">
                                <h4 className="font-serif font-semibold mb-2">
                                    Looking for a Speaker?
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    I regularly speak at conferences and events about community building,
                                    regenerative ecosystems, and partnerships in Web3. Reach out to
                                    discuss bringing my perspective to your next event.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
