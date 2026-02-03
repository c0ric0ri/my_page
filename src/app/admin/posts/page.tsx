import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus, ArrowLeft, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { DeletePostButton } from "./DeletePostButton";

async function getPosts() {
    const supabase = await createClient();
    const { data: posts, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching posts:", error);
        return [];
    }

    return posts || [];
}

export default async function AdminPostsPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    const posts = await getPosts();

    return (
        <div className="p-6 md:p-8 pt-24">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/admin">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-serif font-semibold">Blog Posts</h1>
                            <p className="text-muted-foreground mt-1">
                                Manage your blog content
                            </p>
                        </div>
                    </div>
                    <Link href="/admin/posts/new">
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            New Post
                        </Button>
                    </Link>
                </div>

                {/* Posts List */}
                <div className="space-y-4">
                    {posts.length === 0 ? (
                        <Card className="p-8 text-center">
                            <p className="text-muted-foreground mb-4">No posts yet</p>
                            <Link href="/admin/posts/new">
                                <Button>Create your first post</Button>
                            </Link>
                        </Card>
                    ) : (
                        posts.map((post) => (
                            <Card key={post.id} className="p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold truncate">{post.title}</h3>
                                            {post.published ? (
                                                <Badge variant="default" className="shrink-0">
                                                    <Eye className="h-3 w-3 mr-1" />
                                                    Published
                                                </Badge>
                                            ) : (
                                                <Badge variant="secondary" className="shrink-0">
                                                    <EyeOff className="h-3 w-3 mr-1" />
                                                    Draft
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <span>{formatDate(post.created_at)}</span>
                                            {post.category && (
                                                <>
                                                    <span>•</span>
                                                    <span>{post.category}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 ml-4">
                                        <Link href={`/admin/posts/${post.id}`}>
                                            <Button variant="ghost" size="icon">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <DeletePostButton postId={post.id} />
                                    </div>
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
