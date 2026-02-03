"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export function DeletePostButton({ postId }: { postId: string }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        if (!confirm("Are you sure you want to delete this post?")) return;

        setLoading(true);
        try {
            const supabase = createClient();
            const { error } = await supabase.from("posts").delete().eq("id", postId);

            if (error) throw error;

            router.refresh();
        } catch (err) {
            console.error("Error deleting post:", err);
            alert("Failed to delete post");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            disabled={loading}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
            {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
                <Trash2 className="h-4 w-4" />
            )}
        </Button>
    );
}
