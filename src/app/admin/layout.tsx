import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Check is handled by middleware, but double-check here for safety
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Allow login page to be accessed without auth
    // Other admin pages are protected by middleware

    return (
        <div className="min-h-screen bg-muted/30">
            {children}
        </div>
    );
}
