"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // TODO: Integrate Supabase
        setIsLoading(false);
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <Card className="bg-secondary/20 border-0 shadow-inner">
                <CardContent className="flex flex-col items-center justify-center p-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary">Message Sent!</h3>
                    <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Send another message
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Jane Doe" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="jane@example.com" required className="bg-background/50" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[150px] bg-background/50 resize-y"
                    required
                />
            </div>
            <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isLoading}>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    );
}
