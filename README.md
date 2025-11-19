# Quantum Nebula Design System

A comprehensive, modern design system for building beautiful and consistent user interfaces.

## Overview

Quantum Nebula is a complete design system featuring 17+ component categories, 100+ components, and 200+ CSS variables. It provides everything you need to build professional, accessible, and visually appealing interfaces.

## Features

- **200+ CSS Variables** - Complete design tokens for colors, typography, spacing, shadows, and more
- **17 Component Categories** - Buttons, inputs, cards, forms, tables, charts, and more
- **Interactive Examples** - Live showcase pages for every component
- **Dark Mode Support** - Built-in support for light and dark themes
- **Accessibility First** - Semantic HTML and keyboard navigation
- **Modern CSS** - Using CSS custom properties and modern layout techniques
- **Vanilla JavaScript** - No dependencies, lightweight and fast

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quantum-nebula-42.git
cd quantum-nebula-42
```

2. Open `index.html` in your browser to view the component showcase

3. Import the CSS files in your project:
```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/components.css">
<script src="js/main.js"></script>
```

## Project Structure

```
quantum-nebula-42/
├── index.html              # Main showcase page
├── design-system.md        # Complete documentation
├── README.md               # This file
├── css/
│   ├── variables.css       # CSS custom properties
│   └── components.css      # Component styles
├── js/
│   └── main.js             # Interactive functionality
└── showcase/
    ├── buttons.html        # Button components
    ├── inputs.html         # Input & form components
    ├── cards.html          # Card components
    ├── auth.html           # Authentication forms
    ├── colors.html         # Color palette
    ├── typography.html     # Typography scale
    ├── badges.html         # Badges & tags
    └── ...                 # More component showcases
```

## Component Categories

### 1. Buttons
- Icon buttons (round, gradient)
- Chip/tag buttons
- Send buttons (dark/light variants)
- OAuth buttons (with hover/active states)
- Empty state buttons

### 2. Inputs & Forms
- Text inputs (default, focus, error, success states)
- Search inputs
- Select dropdowns
- Textareas
- Checkboxes
- Password inputs (with dots)
- Message compose input
- Form labels and groups

### 3. Cards
- Basic cards (small, medium, large, XL)
- Feature cards (horizontal scroll)
- KPI cards (with multi-layer shadows)

### 4. Badges & Tags
- Trend badges (up/down)
- Status badges (new, hot)
- Price badges
- Unread indicators

### 5. Tables
- Data tables with hover states
- Product cells
- Checkboxes
- Progress bars

### 6. Navigation
- Tab filters
- Active/inactive states

### 7. Lists
- User list items
- Settings items (with icons and states)

### 8. Messages
- Message items
- Online status indicators
- Unread dots

### 9. Charts
- Bar charts
- Progress bars
- Data visualizations

### 10. Avatars
- All sizes (XL, L, M, S)
- Status indicators
- View-all variants

### 11. Loading States
- Skeleton screens
- Shimmer effects

### 12. Empty States
- No results states
- Call-to-action buttons

### 13. Auth Forms
- Sign in/up forms
- OAuth buttons (5 states)
- Input states (default, focus, filled, error)
- Password inputs
- Floating labels

### 14. Accordion
- Expandable FAQ items
- Plus/minus icons

### 15. Panels
- Settings panels
- Search integration

### 16. Typography
- Font scales (12px - 60px)
- Font weights (400-700)
- Line heights

### 17. Colors
- Primary colors
- Semantic colors (success, error, warning)
- Neutral colors
- Gradients
- Brand icon colors

## CSS Variables

All design tokens are defined as CSS custom properties in `css/variables.css`:

```css
/* Primary Colors */
--primary-primary02: #16a34a;
--primary-primary03: #ef4444;

/* Text Colors */
--text-primary: #18181b;
--text-secondary: #71717a;
--text-tertiary: #a1a1aa;

/* Spacing */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
/* ... up to space-20 */

/* Border Radius */
--radius-xs: 1px;
--radius-full: 48px;
--radius-pill: 90px;
/* ... and many more */
```

## Usage Examples

### Button

```html
<button class="btn-icon">
  <svg class="icon">...</svg>
</button>

<button class="btn-chip">
  <svg class="icon">...</svg>
  <span>Category</span>
</button>

<button class="btn-send btn-send-dark">Send Message</button>
```

### Input

```html
<input type="text" class="input" placeholder="Enter your name">
<input type="email" class="input input-error" value="invalid@">
<input type="email" class="input input-success" value="user@example.com">
```

### Card

```html
<div class="card card-small">
  <div class="card-header">
    <h2 class="card-title">Card Title</h2>
  </div>
  <div style="padding: 12px 20px;">
    <p>Card content...</p>
  </div>
</div>
```

### Badge

```html
<span class="badge badge-trend-up">
  <svg>...</svg>
  +12.5%
</span>
```

## JavaScript Features

The `js/main.js` file provides:

- **Accordion functionality** - Expandable/collapsible sections
- **Tab navigation** - Switch between tab content
- **Tooltips** - Hover tooltips for elements
- **Copy to clipboard** - Copy code examples
- **Theme toggle** - Light/dark mode switching
- **Form validation** - Email and password validation
- **Keyboard navigation** - Arrow keys for tabs, Escape for modals
- **Smooth scroll** - For anchor links
- **Animation on scroll** - Fade-in effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dark Mode

The design system includes built-in dark mode support. Colors automatically adapt based on user preference:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #fafafa;
    --bg-surface1: #18181b;
    /* ... more overrides */
  }
}
```

Or toggle manually via JavaScript:

```javascript
document.documentElement.setAttribute('data-theme', 'dark');
```

## Customization

All components use CSS variables, making customization easy:

```css
:root {
  /* Override any variable */
  --primary-primary02: #your-color;
  --font-primary: 'Your Font', sans-serif;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this design system in your projects.

## Credits

Created as part of the Quantum Nebula project.

## Documentation

For complete documentation of all components, colors, typography, and design principles, see [design-system.md](design-system.md).

## Version

Current version: 1.0.0
Last updated: Block #17 (Auth forms, OAuth buttons, input states)

---

Built with ❤️ using modern CSS and vanilla JavaScript
