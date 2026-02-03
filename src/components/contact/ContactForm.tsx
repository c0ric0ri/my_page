"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/lib/supabase/client";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        try {
            const supabase = createClient();
            const { error } = await supabase
                .from("messages")
                .insert([{ name, email, message }]);

            if (error) throw error;

            setFormState("success");
            (e.target as HTMLFormElement).reset();

            // Reset to idle after 5 seconds
            setTimeout(() => setFormState("idle"), 5000);
        } catch (err) {
            console.error("Contact form error:", err);
            setFormState("error");
            setErrorMessage("Something went wrong. Please try again.");
        }
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
        >
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Name
                    </label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        disabled={formState === "loading"}
                        className="bg-background"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        disabled={formState === "loading"}
                        className="bg-background"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        rows={5}
                        required
                        disabled={formState === "loading"}
                        className="bg-background"
                    />
                </div>
            </div>

            <Button
                type="submit"
                size="lg"
                disabled={formState === "loading" || formState === "success"}
                className="w-full"
            >
                {formState === "loading" && (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Sending...
                    </>
                )}
                {formState === "success" && (
                    <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Message Sent!
                    </>
                )}
                {formState === "error" && (
                    <>
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Try Again
                    </>
                )}
                {formState === "idle" && (
                    <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                    </>
                )}
            </Button>

            {formState === "success" && (
                <p className="text-sm text-center text-primary">
                    Thank you! I&apos;ll get back to you soon.
                </p>
            )}
            {formState === "error" && errorMessage && (
                <p className="text-sm text-center text-destructive">{errorMessage}</p>
            )}
        </motion.form>
    );
}
