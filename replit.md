# Estrich München - Professional Flooring Service Website

## Overview

This is a professional B2C/B2B service website for Estrich München, a flooring (screed) installation company serving Munich and surrounding areas. The application is built as a single-page marketing website with a contact form for lead generation. The design follows professional German craftsmanship aesthetics inspired by Stripe and Linear, emphasizing trust, clarity, and technical competence.

**Key Features:**
- Single-page landing site with sections for services, process, pricing, and FAQ
- Contact form with form validation for customer inquiries
- Responsive design optimized for mobile and desktop
- Light/dark theme support
- German language content targeting local Munich market

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **State Management:** TanStack React Query for server state
- **Styling:** Tailwind CSS with custom design tokens defined in CSS variables
- **UI Components:** shadcn/ui component library (New York style) with Radix UI primitives
- **Form Handling:** React Hook Form with Zod validation
- **Build Tool:** Vite with React plugin

The frontend follows a component-based architecture with:
- Pages in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utilities and API client in `client/src/lib/`

### Backend Architecture
- **Runtime:** Node.js with Express.js
- **Language:** TypeScript (ES modules)
- **API Pattern:** RESTful endpoints under `/api/` prefix
- **Build:** esbuild for production bundling

The backend serves three purposes:
1. API endpoints for contact form submissions
2. Static file serving for the built frontend
3. SEO bot detection with static content serving

### Hybrid Rendering (Google 2026 Optimized)
The server implements a Hybrid Rendering strategy optimized for Google 2026 standards, combining client-side React with server-side pre-rendered content for crawlers.

**Bot Detection & SSR (`server/seo-bot-middleware.ts`):**
- Comprehensive bot detection for 70+ crawlers including AI/LLM bots
- Google Family: Googlebot, Google-Extended, Google-InspectionTool
- AI Crawlers: GPTBot, ClaudeBot, PerplexityBot, Cohere-AI, Amazonbot
- Microsoft/Copilot: Bingbot, BingPreview, MicrosoftPreview
- SEO Tools: SEMrushBot, AhrefsBot, Screaming Frog

**Google 2026 Headers:**
- `X-SSR-Rendered: true` for crawler identification
- `X-Robots-Tag: index, follow, max-image-preview:large`
- `Cache-Control: stale-while-revalidate` for edge caching
- `Accept-CH` Client Hints for Core Web Vitals
- `Link` preload/preconnect for performance

**Speculation Rules (Prerendering):**
- High-priority pages prerended: zementestrich, fussbodenheizung, kontakt, preise
- Secondary pages prefetched: industrieboeden, waermedaemmung, sanierung

**Static Content:** Pre-generated HTML with full meta tags, Open Graph, JSON-LD structured data in `server/seo-static-content.ts`

### Data Storage
- **Schema Definition:** Drizzle ORM with PostgreSQL dialect
- **Current Storage:** In-memory storage (MemStorage class) for development
- **Production Ready:** PostgreSQL schema defined in `shared/schema.ts`

The storage layer uses an interface pattern (`IStorage`) allowing easy switching between in-memory and database implementations.

### Design System
- **Typography:** Inter font family with specific weight hierarchy (400-800)
- **Colors:** Custom HSL-based color tokens with semantic naming
- **Spacing:** Consistent Tailwind spacing units (2, 4, 6, 8, 12, 16, 20, 24, 32)
- **Primary Color:** Orange/amber tones (hsl 24° with 85% saturation)

## External Dependencies

### Third-Party Services
- **Fonts:** Google Fonts (Inter)
- **Database:** PostgreSQL (when provisioned via DATABASE_URL)

### Key NPM Packages
- **UI Framework:** @radix-ui/* primitives for accessible components
- **Forms:** react-hook-form, @hookform/resolvers, zod
- **Database:** drizzle-orm, drizzle-zod, pg
- **Carousel:** embla-carousel-react
- **Date Handling:** date-fns
- **Utilities:** class-variance-authority, clsx, tailwind-merge

### Development Tools
- **TypeScript:** Strict mode enabled with path aliases (@/, @shared/)
- **Replit Plugins:** vite-plugin-runtime-error-modal, cartographer, dev-banner
- **Database Migrations:** drizzle-kit for schema management

### API Structure
- `POST /api/contact` - Submit contact inquiry (validated with Zod)
- `GET /api/contact` - Retrieve all contact inquiries (admin use)