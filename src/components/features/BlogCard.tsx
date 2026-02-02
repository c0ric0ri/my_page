import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

interface Post {
    id: string;
    title: string;
    description: string;
    date: string;
    category: string;
    slug: string;
    imageUrl?: string;
}

export function BlogCard({ post }: { post: Post }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card flex flex-col">
                <div className="aspect-video w-full overflow-hidden bg-muted relative">
                    {post.imageUrl ? (
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-secondary/30 text-muted-foreground">
                            <span className="font-serif italic text-lg opacity-50">Cori Schlicht</span>
                        </div>
                    )}
                </div>
                <CardHeader className="space-y-3 p-6 pb-2">
                    <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="font-normal text-xs bg-secondary/50 hover:bg-secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{format(new Date(post.date), "MMM d, yyyy")}</span>
                    </div>
                    <h3 className="font-serif font-bold text-xl group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {post.title}
                    </h3>
                </CardHeader>
                <CardContent className="p-6 pt-2 flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {post.description}
                    </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 text-sm font-medium text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </CardFooter>
            </Card>
        </Link>
    );
}
