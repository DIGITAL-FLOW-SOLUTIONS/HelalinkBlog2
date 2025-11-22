# HELALINK Blog

## Overview

HELALINK Blog is a content-first web application promoting online earning opportunities across East Africa (Kenya, Uganda, Tanzania). The platform serves as an informational resource showcasing multiple revenue streams including surveys, video rewards, games, casino, and affiliate programs. Built with a modern TypeScript stack, it features server-side rendering, comprehensive SEO optimization, and mobile-first responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Technology Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as build tool and development server for fast HMR
- **Wouter** for lightweight client-side routing (SPA)
- **TanStack Query v5** for server state management, caching, and data fetching
- **Tailwind CSS** with custom design tokens for consistent HELALINK branding

**UI Component System:**
- **Shadcn UI** components (new-york style) providing accessible, pre-built UI primitives
- **Radix UI** headless components for complex interactions
- Custom design tokens:
  - Primary Green: `#10B981` (CTAs, links, accents)
  - Secondary Blue: `#3B82F6` (category tags, secondary buttons)
  - Accent Yellow: `#FBBF24` (highlights, badges)
- Mobile-first responsive grid system (1 column mobile, 2-3 columns desktop)

**Page Structure:**
- `/` - Homepage with article grid displaying all content
- `/article/:slug` - Individual article pages with full content, images, and CTAs
- Custom 404 page for unmatched routes

**Key Components:**
- `Header` - Sticky navigation with HELALINK branding and Create Account CTA
- `Footer` - Contact information, quick links, WhatsApp integration
- `ArticleCard` - Reusable card component for article listings with hover effects
- `WhatsAppButton` - Fixed floating button for WhatsApp contact (+254713332676)
- `HomePage` - Article grid with loading states and Organization Schema
- `ArticlePage` - Full article view with featured images, navigation, and dynamic meta tags

**SEO Implementation:**
- Comprehensive meta tags (title, description, keywords, author)
- Open Graph tags for social media sharing
- Twitter/X card metadata
- Dynamic per-article meta descriptions and keywords
- JSON-LD Schema markup (Article and Organization types)
- Canonical URLs for all pages
- Robots.txt configuration for search engine crawling

### Backend Architecture

**Server Framework:**
- **Express.js** with TypeScript for API routes
- Separate development (`index-dev.ts`) and production (`index-prod.ts`) entry points
- Custom middleware for request logging and JSON body parsing

**Data Storage:**
- **In-Memory Storage** (`MemStorage` class) for article content
- Articles stored as typed objects conforming to Zod schemas
- No database dependency in current implementation (ready for Drizzle/PostgreSQL integration)

**API Routes:**
- `GET /api/articles` - Fetch all articles
- `GET /api/articles/:slug` - Fetch single article by slug

**Static Asset Handling:**
- Promotional posters and images served from `/attached_assets` directory
- Vite handles client-side asset bundling with hash-based cache busting
- Production build outputs to `dist/public` directory

**Development vs Production:**
- Development: Vite middleware for HMR and instant updates
- Production: Pre-built static files served via Express with fallback to `index.html`

**Schema Validation:**
- **Zod** schemas for runtime type checking
- Article schema includes: id, slug, title, excerpt, content, images, category, country, fees, currency, dates, SEO metadata
- Category schema for content organization

### Build & Deployment

**Build Process:**
- Client builds via Vite to `dist/public`
- Server bundles via esbuild to `dist/index.js`
- TypeScript compilation with strict mode enabled

**Vercel Configuration:**
- Serverless function deployment via `vercel.json`
- Custom rewrites for API routes and static file serving
- Cache headers for optimal performance (31536000s for assets, 0s for HTML)
- Environment variables: `NODE_ENV`, `SESSION_SECRET`

**Path Aliases:**
- `@/*` - Client source files
- `@shared/*` - Shared types and schemas
- `@assets/*` - Static assets (images, posters)

## External Dependencies

### Third-Party Services
- **WhatsApp Business** - Direct customer contact integration (+254713332676)
- **HELALINK Platform** - Referral link for account creation (`https://helalink.com/register.php?ref=VinM`)
- **Google Fonts** - Inter and Poppins font families

### Deployment Platform
- **Vercel** - Serverless hosting with automatic deployments
- Node.js 20.x runtime
- 1024MB memory allocation
- 60s max function duration

### Database Preparation
- **Drizzle ORM** configured but not actively used
- **@neondatabase/serverless** installed for PostgreSQL connectivity
- Schema defined in `shared/schema.ts` ready for migration
- Database connection expects `DATABASE_URL` environment variable

### UI Framework Dependencies
- **Radix UI** primitives for 20+ component types
- **cmdk** for command palette functionality
- **embla-carousel-react** for carousel components
- **date-fns** for date formatting
- **class-variance-authority** for component variant management
- **tailwind-merge** and **clsx** for className utilities

### Development Tools
- **Replit plugins** for development banner, cartographer, and runtime error overlay
- **TypeScript** with strict type checking
- **PostCSS** with Tailwind and Autoprefixer