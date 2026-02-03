"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";

interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    category: string | null;
    image_url: string | null;
    published: boolean;
    created_at: string;
    featured?: boolean;
}

interface BlogContentProps {
    posts: Post[];
}

export function BlogContent({ posts }: BlogContentProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Get unique categories
    const categories = Array.from(
        new Set(posts.map((p) => p.category).filter(Boolean))
    ) as string[];

    // Filter posts
    const filteredPosts = selectedCategory
        ? posts.filter((p) => p.category === selectedCategory)
        : posts;

    // Separate featured and regular posts
    const featuredPosts = filteredPosts.filter((p) => p.featured).slice(0, 2);
    const regularPosts = filteredPosts.filter((p) => !featuredPosts.includes(p));

    return (
        <div className="pt-24 md:pt-32 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
                            Blog
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            Thoughts on Web3, community building, partnerships, and the regenerative ecosystem.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    {categories.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex justify-center mb-12"
                        >
                            <CategoryFilter
                                categories={categories}
                                selected={selectedCategory}
                                onSelect={setSelectedCategory}
                            />
                        </motion.div>
                    )}

                    {/* Featured Posts */}
                    {featuredPosts.length > 0 && (
                        <div className="mb-12">
                            <h2 className="font-serif font-semibold text-2xl mb-6">Featured</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {featuredPosts.map((post, index) => (
                                    <BlogCard key={post.id} post={post} featured index={index} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* All Posts */}
                    {regularPosts.length > 0 ? (
                        <div>
                            <h2 className="font-serif font-semibold text-2xl mb-6">
                                {featuredPosts.length > 0 ? "All Posts" : ""}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {regularPosts.map((post, index) => (
                                    <BlogCard key={post.id} post={post} index={index} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                                <PenLine className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="font-serif font-semibold text-xl mb-2">
                                No posts yet
                            </h3>
                            <p className="text-muted-foreground">
                                Check back soon for new content!
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
