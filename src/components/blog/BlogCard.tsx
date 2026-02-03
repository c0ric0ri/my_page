"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate, getReadingTime } from "@/lib/utils";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    category: string | null;
    image_url: string | null;
    published: boolean;
    created_at: string;
}

interface BlogCardProps {
    post: BlogPost;
    featured?: boolean;
    index?: number;
}

export function BlogCard({ post, featured = false, index = 0 }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Link href={`/blog/${post.slug}`}>
                <Card className={`group overflow-hidden hover:border-primary/30 cursor-pointer ${featured ? "md:flex" : ""}`}>
                    {post.image_url && (
                        <div className={`relative overflow-hidden ${featured ? "md:w-1/2" : "aspect-video"}`}>
                            <div
                                className="absolute inset-0 bg-sage-200 dark:bg-sage-800"
                                style={{
                                    backgroundImage: `url(${post.image_url})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    )}
                    <div className={featured ? "md:w-1/2" : ""}>
                        <CardHeader className="pb-2">
                            {post.category && (
                                <Badge variant="secondary" className="w-fit mb-2">
                                    {post.category}
                                </Badge>
                            )}
                            <h3 className={`font-serif font-semibold group-hover:text-primary transition-colors ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
                                {post.title}
                            </h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                {post.content?.replace(/<[^>]*>/g, "").slice(0, 150)}...
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {formatDate(post.created_at)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {getReadingTime(post.content || "")}
                                    </span>
                                </div>
                                <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}
