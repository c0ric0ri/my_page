"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
    categories: string[];
    selected: string | null;
    onSelect: (category: string | null) => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <button
                onClick={() => onSelect(null)}
                className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    selected === null
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
            >
                All Posts
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                        selected === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    )}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
