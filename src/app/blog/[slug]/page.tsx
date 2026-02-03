import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { formatDate, getReadingTime } from "@/lib/utils";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
    const supabase = await createClient();
    const { data: post, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();

    if (error) {
        return null;
    }

    return post;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.content?.replace(/<[^>]*>/g, "").slice(0, 160),
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-24 md:pt-32 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <header className="mb-8">
                        {post.category && (
                            <Badge variant="secondary" className="mb-4">
                                {post.category}
                            </Badge>
                        )}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formatDate(post.created_at)}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {getReadingTime(post.content || "")}
                            </span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {post.image_url && (
                        <div className="aspect-video rounded-xl overflow-hidden mb-8">
                            <div
                                className="w-full h-full bg-sage-200 dark:bg-sage-800"
                                style={{
                                    backgroundImage: `url(${post.image_url})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div
                        className="prose-custom"
                        dangerouslySetInnerHTML={{ __html: post.content || "" }}
                    />
                </div>
            </div>
        </article>
    );
}
