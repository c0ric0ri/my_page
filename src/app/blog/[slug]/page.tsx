import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

// Mock data
const posts = [
    {
        id: "1",
        title: "Why Regenerative Finance Matters",
        slug: "why-refi-matters",
        content: `
      <p>Regenerative Finance (ReFi) is not just a buzzword; it's a fundamental shift in how we view capital and value. Traditional finance extracts value, often at the expense of the environment and society. ReFi seeks to regenerate resources.</p>
      <h2>The Problem with Extractive Systems</h2>
      <p>Our current economic models are based on infinite growth on a finite planet. This is sustainable only in the short term. We need systems that account for externalities.</p>
      <h2>The Web3 Opportunity</h2>
      <p>Blockchain technology allows us to program money. We can create currencies that degrade if not used or that automatically donate a portion to a cause. Programmable money enables programmable values.</p>
    `,
        date: "2024-01-15",
        category: "Web3",
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb77c35e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "2",
        title: "Building Community in a Bear Market",
        slug: "community-bear-market",
        content: "<p>Bear markets are for building.</p>",
        date: "2023-11-20",
        category: "Community",
        imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        // Return a basic fallback for development if slug doesn't match mock
        return (
            <div className="min-h-screen pt-24 px-4 text-center">
                <h1 className="text-2xl font-bold">Post Not Found</h1>
                <p>This is a mock page. Try /blog/why-refi-matters</p>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-background pt-24 pb-16 px-4 md:px-6">
            <div className="container mx-auto max-w-3xl space-y-8">
                <div className="space-y-4 text-center">
                    <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground">{post.category}</Badge>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">{post.title}</h1>
                    <p className="text-muted-foreground font-medium">{format(new Date(post.date), "MMMM d, yyyy")}</p>
                </div>

                {post.imageUrl && (
                    <div className="w-full aspect-video overflow-hidden rounded-xl shadow-lg relative">
                        <img src={post.imageUrl} alt={post.title} className="object-cover w-full h-full" />
                    </div>
                )}

                <div className="prose prose-lg dark:prose-invert font-sans mx-auto text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </article>
    );
}
