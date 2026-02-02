import { BlogCard } from "@/components/features/BlogCard";
import { Badge } from "@/components/ui/badge";

// Mock data until Supabase is integrated
const categories = ["All", "Web3", "Community", "Events", "Storytelling"];
const posts = [
    {
        id: "1",
        title: "Why Regenerative Finance Matters",
        slug: "why-refi-matters",
        description: "exploring the intersection of web3 tech and ecological regeneration.",
        date: "2024-01-15",
        category: "Web3",
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb77c35e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "2",
        title: "Building Community in a Bear Market",
        slug: "community-bear-market",
        description: "Strategies for keeping engagement high when prices are low.",
        date: "2023-11-20",
        category: "Community",
        imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16 px-4 md:px-6">
            <div className="container mx-auto space-y-12">
                <div className="space-y-4 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">Thoughts & Updates</h1>
                    <p className="text-muted-foreground text-lg font-sans">
                        Sharing insights on community building, events, and the future of work.
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <Badge key={cat} variant={cat === "All" ? "default" : "outline"} className="cursor-pointer px-4 py-2 rounded-full text-sm">
                            {cat}
                        </Badge>
                    ))}
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </main>
    );
}
