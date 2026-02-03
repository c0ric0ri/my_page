import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Earth tone palette - Light mode
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",

                // Brand colors
                sage: {
                    50: "#f6f7f4",
                    100: "#e8ebe4",
                    200: "#d1d7c9",
                    300: "#b3bda7",
                    400: "#94a182",
                    500: "#768767",
                    600: "#5c6b50",
                    700: "#4a5642",
                    800: "#3d4638",
                    900: "#343b30",
                    950: "#1a1f18",
                },
                terracotta: {
                    50: "#fdf6f3",
                    100: "#fceae4",
                    200: "#fad5c8",
                    300: "#f5b8a2",
                    400: "#ee916e",
                    500: "#e47048",
                    600: "#d15834",
                    700: "#ae4629",
                    800: "#903c26",
                    900: "#773624",
                    950: "#401910",
                },
                cream: {
                    50: "#fdfcfb",
                    100: "#f9f7f4",
                    200: "#f4efe8",
                    300: "#ebe4d8",
                    400: "#ddd2c1",
                    500: "#cdbca5",
                    600: "#b9a085",
                    700: "#a38869",
                    800: "#867058",
                    900: "#6e5c4a",
                    950: "#3a3026",
                },

                // Shadcn semantic colors
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "Georgia", "serif"],
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                "slide-in-right": "slideInRight 0.6s ease-out forwards",
                "float": "float 6s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
