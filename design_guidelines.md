# HELALINK Blog Design Guidelines

## Design Approach
**Content-First Blog Design** - Clean, mobile-optimized layout prioritizing readability and easy navigation. Reference inspiration: Medium, WordPress blogs with modern card layouts. The design should feel approachable and trustworthy for African smartphone users.

## Core Design Elements

### Typography
- **Headings**: Bold sans-serif, clear hierarchy
  - H1: Large, bold (2.5rem desktop, 2rem mobile)
  - H2: Medium-bold (2rem desktop, 1.75rem mobile)
  - H3: Medium (1.5rem)
- **Body Text**: Sans-serif, comfortable reading size (1rem/16px base, 1.125rem for article content)
- **Line Height**: 1.6-1.8 for body text, 1.2-1.3 for headings
- Use single font family (Google Fonts: Inter or Poppins) for consistency

### Layout System
- **Spacing Units**: Tailwind 4, 6, 8, 12, 16 for consistent rhythm
- **Container**: max-w-6xl centered with px-4 mobile, px-8 desktop
- **Article Grid**: 1 column mobile, 2-3 columns tablet/desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Article Content**: max-w-3xl centered for optimal reading width

### Color Palette (from promotional posters)
- **Primary**: Vibrant green (#10B981 or similar) - CTAs, links, accents
- **Secondary**: Bright blue (#3B82F6) - category tags, secondary buttons
- **Accent**: Yellow/gold (#FBBF24) - highlights, badges
- **Background**: Clean white (#FFFFFF) with light gray sections (#F9FAFB)
- **Text**: Dark gray (#1F2937) for body, near-black (#111827) for headings

## Component Library

### Navigation Header
- Logo/brand (HELALINK text or graphic)
- Simple horizontal menu: Home, Categories, About
- Mobile: Hamburger menu
- Sticky on scroll with subtle shadow
- Height: 64px-80px

### Homepage Article Cards
- Featured image at top (16:9 ratio, full-width within card)
- Category badge (small, colored pill)
- Article title (2-3 lines max, truncated)
- Brief excerpt (2-3 lines)
- "Read More" link
- Card styling: White background, rounded corners (rounded-lg), subtle shadow on hover
- Spacing: gap-6 between cards

### Article Detail Page
- Large featured image at top (poster image, full-width, aspect-16/9)
- Article title (large, centered or left-aligned)
- Category tag and date
- Full article content with proper paragraph spacing (space-y-4)
- Embedded promotional posters within content (centered, with captions)
- Related articles section at bottom (3-4 cards)

### Fixed Action Buttons
- **WhatsApp Button**: 
  - Position: Fixed bottom-right (bottom-6 right-6)
  - Green circular button with WhatsApp icon
  - Size: 56px x 56px, shadow-lg
  - Always visible, floats above content
  
- **Create Account Button**:
  - Position: Fixed top-right in header OR secondary fixed button
  - Vibrant color (primary green or accent yellow)
  - Clear text: "Create Account" or "Join Now"
  - Medium size: px-6 py-3

### Footer
- Three columns (mobile stacks): About, Quick Links, Contact
- WhatsApp contact number
- Social media icons
- Copyright notice
- Background: Dark gray (#1F2937), white text

## Images Strategy

### Homepage
- No large hero image - immediately show article grid for content priority
- Each article card has featured image (use poster0-7.jpg)

### Article Pages
- **Featured Image**: Full-width at top of article (one of poster0-7.jpg relevant to country)
- **In-Content Posters**: Embed 2-3 promotional posters within article text
  - Centered, max-width 600px
  - Rounded corners (rounded-lg)
  - Subtle shadow
  - Optional caption below

### Image Descriptions
- **Poster Images**: Promotional graphics with vibrant colors (green, blue, yellow, pink) showcasing HELALINK earning opportunities, featuring text about daily earnings, activation fees, and benefits

## Mobile-First Priorities
1. **Touch-Friendly**: Buttons minimum 44px height, generous tap targets
2. **Fast Loading**: Optimize poster images, lazy load below fold
3. **Readable**: Larger base font size (16px minimum), ample line height
4. **Thumb Zone**: WhatsApp button positioned for easy thumb access
5. **Single Column**: Article cards stack vertically on mobile with full-width cards

## Key Interactions
- Smooth scroll behavior
- Card hover: Subtle lift (translateY) and shadow increase
- Link hover: Underline or color change
- Button hover: Slight scale or brightness increase
- NO complex animations - keep interactions snappy and simple

## Critical Design Notes
- **Poster Integration**: Strategically place promotional posters (poster0-7) throughout articles as visual breaks
- **Category Colors**: Use secondary blue for category tags consistently
- **Readability First**: Wide margins, generous spacing, clear typography hierarchy
- **Trust Signals**: Display WhatsApp contact prominently, professional layout builds credibility
- **Responsive Images**: All posters scale properly on mobile (max-width: 100%, height: auto)