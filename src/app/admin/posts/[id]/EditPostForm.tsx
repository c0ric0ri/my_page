"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Editor } from "@/components/admin/Editor";
import { createClient } from "@/lib/supabase/client";
import { slugify } from "@/lib/utils";

interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    category: string | null;
    image_url: string | null;
    published: boolean;
    featured?: boolean;
    created_at: string;
}

const categories = ["Web3", "Community", "Partnerships", "Events", "Thoughts"];

export function EditPostForm({ post }: { post: Post }) {
    const router = useRouter();
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content || "");
    const [category, setCategory] = useState<string | null>(post.category);
    const [featured, setFeatured] = useState(post.featured || false);
    const [published, setPublished] = useState(post.published);
    const [saving, setSaving] = useState(false);

    async function handleSave() {
        if (!title.trim()) {
            alert("Please enter a title");
            return;
        }

        setSaving(true);

        try {
            const supabase = createClient();
            const slug = slugify(title);

            const { error } = await supabase
                .from("posts")
                .update({
                    title,
                    slug,
                    content,
                    category,
                    featured,
                    published,
                })
                .eq("id", post.id);

            if (error) throw error;

            router.push("/admin/posts");
            router.refresh();
        } catch (err: any) {
            console.error("Error saving post:", err);
            alert(err.message || "Failed to save post");
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="p-6 md:p-8 pt-24">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/posts">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-serif font-semibold">Edit Post</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            onClick={() => {
                                setPublished(!published);
                            }}
                        >
                            {published ? (
                                <>
                                    <EyeOff className="h-4 w-4 mr-2" />
                                    Unpublish
                                </>
                            ) : (
                                <>
                                    <Eye className="h-4 w-4 mr-2" />
                                    Publish
                                </>
                            )}
                        </Button>
                        <Button onClick={handleSave} disabled={saving}>
                            {saving ? (
                                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            ) : (
                                <Save className="h-4 w-4 mr-2" />
                            )}
                            Save Changes
                        </Button>
                    </div>
                </div>

                {/* Post Form */}
                <div className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Title</label>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter post title..."
                            className="text-lg"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Category</label>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setCategory(category === cat ? null : cat)}
                                    className="focus:outline-none"
                                >
                                    <Badge
                                        variant={category === cat ? "default" : "secondary"}
                                        className="cursor-pointer"
                                    >
                                        {cat}
                                    </Badge>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Featured Toggle */}
                    <div>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={featured}
                                onChange={(e) => setFeatured(e.target.checked)}
                                className="rounded border-input"
                            />
                            <span className="text-sm font-medium">Featured Post</span>
                            <span className="text-xs text-muted-foreground">
                                (Shows prominently at the top of the blog)
                            </span>
                        </label>
                    </div>

                    {/* Content Editor */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Content</label>
                        <Editor
                            content={content}
                            onChange={setContent}
                            placeholder="Start writing your post..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
