"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, LogOut, ArrowLeft, Save } from "lucide-react";
import { Editor } from "@/components/features/Editor";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [view, setView] = useState<"list" | "edit">("list");

    // Editor State
    const [currentPost, setCurrentPost] = useState<{ id?: string, title: string, content: string, status: string }>({ title: "", content: "", status: "Draft" });

    // Mock posts for admin view
    const [posts, setPosts] = useState([
        { id: "1", title: "Why Regenerative Finance Matters", status: "Published", date: "2024-01-15", content: "<p>Initial content...</p>" },
        { id: "2", title: "Building Community in a Bear Market", status: "Draft", date: "2023-11-20", content: "" },
    ]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsAuthenticated(true);
        } else {
            alert("Invalid password");
        }
    };

    const handleCreate = () => {
        setCurrentPost({ title: "", content: "", status: "Draft" });
        setView("edit");
    };

    const handleEdit = (post: any) => {
        setCurrentPost({ ...post });
        setView("edit");
    };

    const handleSave = () => {
        alert("Saved (Mock)!");
        // Logic to update `posts` state or call API
        setView("list");
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Card className="w-full max-w-md border-border">
                    <CardHeader>
                        <CardTitle className="text-center font-serif">Admin Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter admin password"
                                />
                            </div>
                            <Button type="submit" className="w-full">Login</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (view === "edit") {
        return (
            <div className="min-h-screen bg-background pt-24 pb-16 px-4 md:px-6">
                <div className="container mx-auto space-y-6 max-w-4xl">
                    <div className="flex items-center justify-between">
                        <Button variant="ghost" onClick={() => setView("list")}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <div className="flex gap-2">
                            <Button variant="outline">Draft</Button>
                            <Button onClick={handleSave}>
                                <Save className="w-4 h-4 mr-2" /> Publish
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Input
                            placeholder="Post Title"
                            className="text-3xl font-serif font-bold h-auto py-4 border-none shadow-none focus-visible:ring-0 px-0 bg-transparent placeholder:text-muted-foreground/50"
                            value={currentPost.title}
                            onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                        />
                        <Editor
                            content={currentPost.content}
                            onChange={(html) => setCurrentPost({ ...currentPost, content: html })}
                        />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-16 px-4 md:px-6">
            <div className="container mx-auto space-y-8 max-w-5xl">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-serif font-bold">Content Manager</h1>
                    <div className="flex gap-4">
                        <Button onClick={() => setIsAuthenticated(false)} variant="outline">
                            <LogOut className="w-4 h-4 mr-2" /> Logout
                        </Button>
                        <Button onClick={handleCreate}>
                            <Plus className="w-4 h-4 mr-2" /> Create New Post
                        </Button>
                    </div>
                </div>

                <div className="grid gap-4">
                    {posts.map((post) => (
                        <div key={post.id} className="flex items-center justify-between p-4 bg-card border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div>
                                <h3 className="font-bold text-lg">{post.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {post.status} • {post.date}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}>
                                    <Edit className="w-4 h-4 text-primary" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Trash2 className="w-4 h-4 text-destructive" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
