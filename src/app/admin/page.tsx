import Link from "next/link";
import { redirect } from "next/navigation";
import { PenLine, MessageSquare, Briefcase, LogOut, Plus } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getStats() {
    const supabase = await createClient();

    const [postsResult, messagesResult] = await Promise.all([
        supabase.from("posts").select("id", { count: "exact" }),
        supabase.from("messages").select("id", { count: "exact" }),
    ]);

    return {
        posts: postsResult.count || 0,
        messages: messagesResult.count || 0,
    };
}

async function handleSignOut() {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/admin/login");
}

export default async function AdminDashboard() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    const stats = await getStats();

    return (
        <div className="p-6 md:p-8 pt-24">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-serif font-semibold">Dashboard</h1>
                        <p className="text-muted-foreground mt-1">
                            Welcome back! Manage your website content.
                        </p>
                    </div>
                    <form action={handleSignOut}>
                        <Button variant="outline" type="submit">
                            <LogOut className="h-4 w-4 mr-2" />
                            Sign Out
                        </Button>
                    </form>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Blog Posts
                            </CardTitle>
                            <PenLine className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-semibold">{stats.posts}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Messages
                            </CardTitle>
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-semibold">{stats.messages}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Portfolio Items
                            </CardTitle>
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-semibold">4</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="hover:border-primary/30 transition-colors">
                        <Link href="/admin/posts/new" className="block p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Plus className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Create New Post</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Write and publish a new blog post
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Card>

                    <Card className="hover:border-primary/30 transition-colors">
                        <Link href="/admin/posts" className="block p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                                    <PenLine className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Manage Posts</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Edit or delete existing blog posts
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    );
}
