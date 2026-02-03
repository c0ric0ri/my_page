import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: {
        default: "Cori Schlicht | Founder, Storyteller & Connector",
        template: "%s | Cori Schlicht",
    },
    description:
        "I build bridges between capital and community. Co-founder of Regens Unite, organizing hackathons and helping DAOs grow in the Ethereum ecosystem.",
    keywords: [
        "Web3",
        "Ethereum",
        "Community Building",
        "DAOs",
        "Regens Unite",
        "Partnerships",
        "Events",
        "Hackathons",
    ],
    authors: [{ name: "Cori Schlicht" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://corischlicht.com",
        siteName: "Cori Schlicht",
        title: "Cori Schlicht | Founder, Storyteller & Connector",
        description:
            "I build bridges between capital and community. Co-founder of Regens Unite, organizing hackathons and helping DAOs grow.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cori Schlicht | Founder, Storyteller & Connector",
        description:
            "I build bridges between capital and community. Co-founder of Regens Unite, organizing hackathons and helping DAOs grow.",
        creator: "@CorinnaSchlicht",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-background">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="relative flex min-h-screen flex-col">
                        <Navbar />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
