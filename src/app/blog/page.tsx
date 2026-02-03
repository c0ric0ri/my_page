import { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
    title: "Blog",
    description: "Thoughts on Web3, community building, partnerships, and the regenerative ecosystem.",
};

async function getPosts() {
    const supabase = await createClient();
    const { data: posts, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching posts:", error);
        return [];
    }

    return posts || [];
}

export default async function BlogPage() {
    const posts = await getPosts();

    return <BlogContent posts={posts} />;
}
