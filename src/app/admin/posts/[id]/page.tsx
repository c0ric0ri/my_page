import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { EditPostForm } from "./EditPostForm";

interface PageProps {
    params: Promise<{ id: string }>;
}

async function getPost(id: string) {
    const supabase = await createClient();
    const { data: post, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        return null;
    }

    return post;
}

export default async function EditPostPage({ params }: PageProps) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    const { id } = await params;
    const post = await getPost(id);

    if (!post) {
        notFound();
    }

    return <EditPostForm post={post} />;
}
