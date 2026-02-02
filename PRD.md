# Product Requirement Document (PRD): Personal Website - Cori Schlicht

## 1. Executive Summary
This project aims to build a high-quality, professional, and visually appealing personal website for Cori Schlicht. The site will serve as a portfolio, resume, and blog, highlighting her background as a founder, storyteller, partnerships, and sales professional. The design will be clean, minimal, and modern, utilizing earth tones and sophisticated typography.

## 2. Target Audience
-   Potential employers and clients in the Web3 and Tech ecosystem.
-   Event organizers and partners.
-   Community members and followers.

## 3. Technology Stack
-   **Framework:** Next.js (Latest version)
-   **Architecture:** Feature-driven mono repo architecture.
-   **UI Library:** Shadcn UI.
-   **Styling:** Tailwind CSS.
-   **Backend/Database:** Supabase (PostgreSQL).
-   **Authentication:** Supabase Auth (Email/Password).
-   **CMS Interface:** Custom Admin Dashboard built with Next.js + Shadcn UI (protected route).
-   **Deployment:** Vercel (recommended) or any Node.js hosting.

## 4. Design System & Aesthetics
### 4.1. Visual Style
-   **Theme:** Clean, minimal, elegant, modern, "tech meets nature".
-   **Color Palette:** Natural earth tones (Greens, Browns, Beiges, Whites) balanced with a modern tech aesthetic.
-   **Modes:** User-toggleable Light and Dark mode.
-   **Effects:**
    -   Parallax scrolling on the Home page.
    -   Smooth, elegant animations and transitions throughout.
    -   Responsive design ensuring a clean, non-cramped UI on mobile.

### 4.2. Typography
-   **Headings:** Serif font (Elegant, editorial feel).
-   **Body:** Sans-serif font (Modern, clean, similar to TT Norms).

## 5. Core Pages & Features

### 5.1. Home / Landing Page
-   **Purpose:** Introduction to Cori, her work, and her portfolio.
-   **Key Sections:**
    -   **Hero Section:** High-impact introduction with personal branding.
    -   **About Me:** Summary of background (referencing resume "TL;DR").
    -   **Interactive Timeline:** A visual journey of professional history:
        -   *Current:* Regens Unite, RnD Ventures.
        -   *Past:* Chinwags, Giveth.io, The DAOist, Infarm, Mimeo, Tyco.
    -   **Portfolio Highlights:** Showcase of key projects (Regens Unite events, Hackathons, etc.).
    -   **Parallax Effects:** Used to create depth and engagement as the user scrolls.

### 5.2. Blog
-   **Purpose:** Share thoughts and updates.
-   **Features:**
    -   **CMS Integration:** Simple "One-button" creation flow.
    -   **WYSIWYG Editor:** Intuitive writing experience with font size customization.
    -   **Featured Posts:** "Top 2" or highlighted posts displayed prominently at the top.
    -   **Categorization:** Filter posts by topic.
    -   **Layout:** Clean, readable content area.

### 5.3. Contact Page
-   **Components:**
    -   Personal Photo.
    -   Email Address (`corinna.schlicht@gmail.com`).
    -   Social Links (X, LinkedIn).
    -   Contact Form (Functional, sending messages to email or CMS).

### 5.4. Admin Dashboard (Protected)
-   **Access:** Secure login via Email/Password (Supabase Auth). Restricted to a single admin user.
-   **Purpose:** Create, edit, and delete blog posts and manage portfolio items.
-   **Features:**
    -   Dashboard overview.
    -   WYSIWYG Editor for blog content.
    -   Image upload management (Supabase Storage).
- use supabase MCP to create, configure and manage db schema and auth config under my account, choose relevant project naming and modorate security settings.

## 6. Functional Requirements
1.  **Responsiveness:** Fluid adaptation to mobile, tablet, and desktop. Mobile view must remain spacious.
2.  **Performance & SEO:**
    -   Server-Side Rendering (SSR) for SEO critical pages.
    -   Meta tags, Open Graph images, and semantic HTML structure.
    -   Optimized image loading (Next.js Image).
3.  **Backend Usability:** The admin interface must be robust yet simple enough for a non-developer to manage content easily.
4.  **Authentication:** Secure Email/Password login for admin access using Supabase Auth.
5.  **Database:** Supabase for storing blog posts, portfolio items, and contact form submissions.

## 7. Content Strategy (Resume Integration)
-   **Profile:** "I build bridges between capital and community..."
-   **Experience:**
    -   *Web3 & Ecosystem (2022-Present):* Focus on Regens Unite, RnDAO, Hack Humanity.
    -   *Enterprise Sales (2009-2021):* Infarm, Mimeo, Tyco.
-   **Education:** University of Florida.
-   **Skills:** Salesforce, Notion, Discord, AI Tools.

## 8. Implementation Plan
1.  **Setup:** Initialize Next.js mono repo with Shadcn UI and Tailwind.
2.  **Design System:** Configure fonts (Serif/Sans) and Earth Tone color variables in Tailwind.
3.  **Backend:** Initialize Supabase project. Configure Database schemas (Blog, Portfolio) and Auth policies. Build Admin Dashboard.
4.  **Components:** Build reusable UI blocks (Timeline, Hero, BlogCard, ContactForm).
5.  **Pages:** Assemble Home, Blog, and Contact pages.
6.  **Polish:** Add parallax effects, dark mode toggle, and animations.
