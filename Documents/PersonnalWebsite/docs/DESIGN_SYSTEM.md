# Design System & Aesthetic Policy

## Philosophy

**Minimalist, Technical, Professional**

This website embodies a minimalist aesthetic that prioritizes clarity, precision, and content-first design. Inspired by engineering blueprints, technical documentation, and modern portfolio design, we emphasize:

- **Clarity over decoration** - Every element serves a purpose
- **Whitespace as a design element** - Generous spacing creates focus
- **Typography as hierarchy** - Font weight, size, and spacing guide the eye
- **Subtle interactions** - Micro-animations provide feedback without distraction

## Color Palette

### Primary Colors
- **Black**: `#000000` (0 0% 0%) - Primary text, strong emphasis
- **White**: `#FFFFFF` (0 0% 100%) - Background, contrast
- **Gray Scale**: 
  - Light Gray: `#F5F5F5` (0 0% 96%) - Subtle backgrounds
  - Medium Gray: `#888888` (0 0% 53%) - Secondary text
  - Dark Gray: `#333333` (0 0% 20%) - Muted emphasis

### Accent
- **System Accent**: Uses system default color for subtle highlights (borders, hover states)

### Usage Guidelines
- **Text**: Black (#000) for primary, Gray (#888) for secondary/muted
- **Backgrounds**: White for primary, Light Gray (#F5F5F5) for sections
- **Borders**: Subtle gray borders (#E5E5E5) for separation
- **Hover States**: Slight darkening or shadow elevation

## Typography

### Font Stack
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

### Type Scale
- **Display (Hero)**: 48px / 56px line-height, 700 weight, tracking: -0.02em
- **H1**: 36px / 44px, 700 weight, tracking: -0.01em
- **H2**: 28px / 36px, 600 weight
- **H3**: 22px / 28px, 600 weight
- **Body Large**: 18px / 28px, 400 weight
- **Body**: 16px / 24px, 400 weight
- **Body Small**: 14px / 20px, 400 weight
- **Caption**: 12px / 16px, 400 weight

### Typography Principles
1. **Generous Line Height**: 1.5-1.75 for body text (readability)
2. **Tight Leading for Headings**: 1.15-1.25 (compact, impactful)
3. **Consistent Spacing**: Use 4px base unit (4, 8, 12, 16, 24, 32, 48, 64px)
4. **Text Balance**: Use `text-wrap: balance` for headings

## Spacing System

Based on 4px base unit:
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 96px

### Section Spacing
- **Section Padding**: 96px vertical (mobile: 64px)
- **Content Max Width**: 1200px (container)
- **Article Width**: 768px (readable line length)

## Layout Principles

### Grid System
- **12-column grid** for complex layouts
- **Flexbox** for simple component layouts
- **CSS Grid** for card grids

### Container
- **Max Width**: 1200px
- **Padding**: 16px mobile, 24px tablet, 32px desktop
- **Centered**: `margin: 0 auto`

### Card Design
- **Border Radius**: 16px (rounded-2xl)
- **Padding**: 24px (p-6)
- **Shadow**: Subtle elevation on hover
- **Border**: 1px solid, light gray

## Animation & Interactions

### Duration
- **Fast**: 150ms (hover states)
- **Medium**: 300ms (transitions)
- **Slow**: 500ms (page transitions)

### Easing
- **Default**: `ease-in-out`
- **Hover**: `ease-out`
- **Enter**: `ease-in`

### Micro-interactions
1. **Button Hover**: Slight scale (1.02) + shadow elevation
2. **Card Hover**: Lift (translateY -2px) + shadow
3. **Link Hover**: Underline animation (0.2s)
4. **Focus States**: 2px ring, primary color

### Motion Preferences
Always respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Component Guidelines

### Buttons
- **Primary**: Black background, white text
- **Secondary**: White background, black text, border
- **Ghost**: No background, hover state
- **Size**: 40px height (lg: 44px, sm: 36px)
- **Padding**: 16px horizontal (lg: 24px, sm: 12px)

### Cards
- **Background**: White
- **Border**: 1px, light gray
- **Shadow**: None default, subtle on hover
- **Padding**: 24px
- **Border Radius**: 16px

### Badges/Tags
- **Background**: Light gray or white
- **Border**: 1px, gray
- **Padding**: 4px 12px
- **Border Radius**: 999px (pill shape)
- **Font**: 12px, 500 weight

### Forms
- **Input Height**: 40px
- **Border**: 1px, gray
- **Focus**: 2px ring, black
- **Border Radius**: 6px
- **Padding**: 12px horizontal

## Visual Hierarchy

### Levels
1. **Level 1 (Hero)**: Largest, boldest, most space
2. **Level 2 (Sections)**: Clear headings, good spacing
3. **Level 3 (Content)**: Readable body text
4. **Level 4 (Supporting)**: Smaller, muted text

### Techniques
- **Size**: Larger = more important
- **Weight**: Bold = emphasis
- **Color**: Darker = primary, lighter = secondary
- **Spacing**: More space = more importance
- **Position**: Above fold = priority

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Start with mobile styles
- Use `md:` prefix for tablet+
- Use `lg:` prefix for desktop+

## Accessibility

### Color Contrast
- **Text**: Minimum 4.5:1 for body, 3:1 for large text
- **Interactive**: Minimum 3:1 for focus states

### Focus States
- **Visible**: Always show focus indicators
- **Style**: 2px solid ring, high contrast
- **Keyboard**: Full keyboard navigation

### Screen Readers
- Semantic HTML
- ARIA labels where needed
- Alt text for all images

## Implementation Notes

1. **Consistency**: Use design tokens (CSS variables)
2. **Performance**: Minimize animations, optimize images
3. **Maintainability**: Component-based, reusable styles
4. **Scalability**: Easy to add new components

