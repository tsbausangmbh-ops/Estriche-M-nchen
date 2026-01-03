# Design Guidelines: Estrich München Professional Service Website

## Design Approach

**Reference-Based Approach** drawing from trusted service industry leaders:
- Primary inspiration: **Stripe** (clarity, trust, professional restraint)
- Secondary: **Linear** (precise typography, clean sections)
- Tertiary: **German Handwerk sites** (professional craftsmanship aesthetic)

**Core Principle**: Build immediate trust through clarity, precision, and professional competence. This is a B2C/B2B service site where customers need to feel confident in technical expertise.

---

## Typography System

**Font Stack**: Inter (already selected - excellent choice)
- **Headings**: 
  - H1: 800 weight, tracking-tight
  - H2: 700 weight
  - H3: 600 weight
  - All headings: Slightly tighter line-height (1.1-1.2)
  
- **Body**: 400 weight, relaxed line-height (1.6-1.7)
- **Accents**: 600 weight for trust elements, labels
- **Fine Print**: 400 weight, smaller size

**Hierarchy Focus**: Strong contrast between heading weights and body text creates professional authority

---

## Layout & Spacing System

**Tailwind Spacing Units**: Consistently use 2, 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24
- Grid gaps: gap-6, gap-8
- Margins between elements: mb-4, mb-6, mb-8

**Container Strategy**:
- Max-width: max-w-7xl for full sections
- Content-focused sections: max-w-4xl (FAQ, process steps)
- Form sections: max-w-md

**Grid Patterns**:
- Service cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Trust badges: grid-cols-2 md:grid-cols-4
- Pricing: grid-cols-1 md:grid-cols-3

---

## Component Library

### Navigation
- Sticky header with subtle shadow on scroll
- Desktop: horizontal nav with ghost buttons, primary CTA stands out
- Mobile: hamburger menu, full-screen overlay
- Topbar: Slim info bar with location/response time badges

### Hero Section
**Layout**: Two-column split (60/40)
- Left: Headline, value proposition, dual CTAs, trust row
- Right: Lead capture form in elevated card

**Image Strategy**: 
- Background: Subtle, slightly blurred image of professional floor work (worker with tools on clean site)
- Placement: Full-width behind hero with gradient overlay for text legibility
- Alternative: Clean, light background with geometric accent

### Service Cards
- Equal-height cards with subtle border
- Icon/visual element at top (tool symbols, checkmarks)
- Heading, description, bullet list of benefits
- Consistent padding: p-6 or p-8
- Hover: Subtle lift effect (shadow increase)

### Process Steps
- Numbered timeline layout
- Large, distinctive step numbers (circle or square badge)
- Clear heading + description
- Visual connector line between steps (desktop only)
- Stack on mobile

### Trust Elements
- Badge row with icons/symbols
- "Trusted by" elements with specific numbers
- Response time guarantees
- Service area specifics

### Forms
- Clean, generous spacing between fields
- Clear labels above inputs
- Required field indicators (*)
- Input focus states: border emphasis
- Submit button: Full-width on mobile, auto on desktop
- Privacy note in smaller text below

### Pricing Cards
- Clear "ab XX€/m²" pricing display
- Service name as header
- Brief description
- Subtle "request quote" prompt
- Equal heights enforced

### FAQ Section
- Accordion-style expandable items
- Question as button/trigger
- Generous answer spacing
- Clear open/close indicators

### Footer
- Multi-column layout (desktop): Services, Company, Legal, Contact
- Single column stack (mobile)
- Newsletter signup if applicable
- Social proof elements (certifications, associations)
- Copyright and legal links

---

## Images

**Hero Image**: 
- Professional estrich worker on clean construction site, using leveling tool
- Image should convey: precision, cleanliness, professionalism
- Treatment: Slightly darkened with gradient overlay for text contrast
- Placement: Full-width background behind hero content

**Service Section**: 
- Optional small icons or pictograms for each service type
- Keep minimal - focus on text clarity

**Process Section**:
- Optional: Small illustrations or photos showing each stage
- Alternative: Icon-only approach maintains cleaner feel

**General Image Approach**: Conservative use - this is a trust-based service site where clarity > visual flair

---

## Interactions & Animation

**Minimal Animation Philosophy** - Use only for clarity and polish:
- Smooth scroll to anchor links (smooth scrolling behavior)
- Card hover: Subtle transform translateY(-4px) + shadow increase
- Button hover: Slight background darkening
- Mobile menu: Slide-in animation
- Form focus states: Border color transition
- NO unnecessary scroll animations, parallax, or decorative motion

**Micro-interactions**:
- Accordion expand/collapse
- Form field validation states
- Success message on form submission

---

## Accessibility Standards

- Semantic HTML throughout
- Proper heading hierarchy (no skipped levels)
- Form labels properly associated
- Sufficient contrast ratios (WCAG AA minimum)
- Focus indicators on all interactive elements
- Alt text for all images
- ARIA labels for icon-only buttons
- Keyboard navigation fully supported

---

## Mobile-First Considerations

- All multi-column layouts collapse to single column
- Touch-friendly tap targets (minimum 44x44px)
- Sticky CTA button on mobile scroll
- Simplified navigation
- Form optimized for mobile input
- Pricing cards stack gracefully
- Process steps: vertical timeline on mobile

---

## Key Design Principles

1. **Trust Through Clarity**: No ambiguity in services, pricing, or process
2. **Professional Restraint**: Clean, uncluttered layouts that convey competence
3. **Scannable Content**: Strong hierarchy allows quick information gathering
4. **Action-Oriented**: Clear CTAs throughout the journey
5. **Local Credibility**: Emphasize Munich/regional service area prominently

This design creates a professional, trustworthy presence that converts service inquiries while maintaining the technical credibility essential for a specialized construction service.