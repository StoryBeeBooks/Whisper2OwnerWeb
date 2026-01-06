# K12Path Design System
## Luxury Typography & Visual Design Guide
### Inspired by Hermès, LVMH, and High-End Fashion Houses

---

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Typography](#typography)
3. [Color Palette](#color-palette)
4. [Spacing System](#spacing-system)
5. [Buttons](#buttons)
6. [Cards & Containers](#cards--containers)
7. [Form Elements](#form-elements)
8. [Icons](#icons)
9. [Borders & Shadows](#borders--shadows)
10. [Navigation Elements](#navigation-elements)
11. [Badges & Labels](#badges--labels)
12. [Progress Indicators](#progress-indicators)
13. [Modals & Panels](#modals--panels)
14. [Tables](#tables)
15. [Animations & Transitions](#animations--transitions)
16. [Responsive Considerations](#responsive-considerations)
17. [CSS Variables Reference](#css-variables-reference)

---

## Design Philosophy

The K12Path luxury design system draws inspiration from high-end fashion houses like Hermès, LVMH, Chanel, and Dior. The aesthetic prioritizes:

- **Restraint over excess** - Minimal decoration, maximum impact
- **Typography as art** - Thin, elegant letterforms with generous spacing
- **Neutral sophistication** - Muted color palette with subtle accents
- **Whitespace as luxury** - Generous padding and margins
- **Timeless elegance** - Avoiding trendy design elements
- **Refined interactions** - Subtle, smooth animations

### Key Principles
1. Less is more - Remove anything that doesn't serve a purpose
2. Typography carries the design - Let beautiful type do the heavy lifting
3. Monochromatic with purpose - Use color sparingly and meaningfully
4. Sharp corners, clean lines - Minimal border-radius (2px maximum)
5. Understated confidence - The design doesn't need to shout

---

## Typography

### Font Families

```css
/* Display Font - For headings, titles, word displays */
--font-display: 'Cormorant Garamond', 'Didot', 'Bodoni MT', Georgia, serif;

/* Body Font - For paragraphs, labels, UI text */
--font-body: 'Josefin Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Letter Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| Tight | -0.02em | Large display text (3rem+) |
| Normal | 0.02em | Body text, paragraphs |
| Wide | 0.08em | Headings, brand titles |
| Luxury | 0.15em | Uppercase labels, buttons |

```css
--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0.02em;
--letter-spacing-wide: 0.08em;
--letter-spacing-luxury: 0.15em;
```

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Body text, descriptions, hints |
| Regular | 400 | Default text, buttons, labels |
| Medium | 500 | Headings, emphasis, values |
| Semi-bold | 600 | Rarely used - only for strong emphasis |
| Bold | 700 | Almost never used in luxury design |

### Type Scale

| Element | Font Family | Size | Weight | Letter Spacing | Transform |
|---------|-------------|------|--------|----------------|-----------|
| Display Word | Display | 3.5rem | 400 | wide (0.08em) | lowercase |
| Page Title | Display | 2rem | 400 | wide | uppercase |
| Section Header | Display | 1.4rem | 500 | wide | uppercase |
| Card Header | Display | 1.1rem | 500 | normal | none |
| Body Large | Body | 1rem | 300 | normal | none |
| Body | Body | 0.9rem | 300 | normal | none |
| Body Small | Body | 0.8rem | 300 | normal | none |
| Label | Body | 0.75rem | 400 | wide | uppercase |
| Caption | Body | 0.7rem | 400 | normal | uppercase |
| Micro | Body | 0.65rem | 400 | wide | uppercase |

### Text Rendering
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
```

### Line Heights
- Headings: 1.2 - 1.3
- Body text: 1.5 - 1.7
- UI labels: 1.3 - 1.4

---

## Color Palette

### Core Neutrals

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Black | #1a1a1a | 26, 26, 26 | Primary text, buttons, borders |
| Dark Gray | #2d2d2d | 45, 45, 45 | Secondary buttons, gradients |
| Charcoal | #3d3d3d | 61, 61, 61 | Hover states |
| Medium Gray | #666666 | 102, 102, 102 | Secondary text, icons |
| Light Gray | #999999 | 153, 153, 153 | Muted text, placeholders |

### Warm Neutrals (Backgrounds)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Off White | #faf9f6 | 250, 249, 246 | Primary background |
| Warm White | #fdfcfa | 253, 252, 250 | Card backgrounds |
| Cream | #f5f3ef | 245, 243, 239 | Secondary backgrounds |
| Linen | #f0ede8 | 240, 237, 232 | Hover backgrounds |
| Sand | #e8e4dc | 232, 228, 220 | Borders, dividers |
| Taupe | #d4cfc7 | 212, 207, 199 | Secondary borders |

### Accent Colors (Use Sparingly)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Champagne Gold | #b8a88a | 184, 168, 138 | Premium accents, warnings |
| Sage Green | #8ab88a | 138, 184, 138 | Success states |
| Dusty Blue | #8a9db8 | 138, 157, 184 | Info, definitions |
| Dusty Rose | #b88a8a | 184, 138, 138 | Errors, warnings |
| Ivory Gold | #faf7f0 | 250, 247, 240 | Gold tinted backgrounds |

### Semantic Colors

| State | Background | Border | Text |
|-------|------------|--------|------|
| Success | #f6faf6 | #8ab88a | #5a8a5a |
| Warning | #faf7f0 | #b8a88a | #5a4a3a |
| Error | #faf6f6 | #b88a8a | #8a5a5a |
| Info | #f8f9fc | #8a9db8 | #5a6a8a |

### Text Colors

| Usage | Color |
|-------|-------|
| Primary text | #1a1a1a |
| Secondary text | #666666 |
| Muted text | #999999 |
| Inverse text (on dark) | #ffffff |
| Link text | #1a1a1a |
| Link hover | #666666 |

---

## Spacing System

### Base Unit: 4px

| Variable | Value | Usage |
|----------|-------|-------|
| --space-xs | 4px | Tight gaps, icon margins |
| --space-sm | 8px | Small gaps, compact padding |
| --space-md | 16px | Standard gaps, button padding |
| --space-lg | 24px | Section gaps, card padding |
| --space-xl | 32px | Large gaps, section margins |
| --space-2xl | 48px | Extra large gaps, page sections |

### Component Padding Guidelines

| Component | Padding |
|-----------|---------|
| Button | 16px 32px (md xl) |
| Card | 24px (lg) |
| Modal | 24px (lg) |
| Input | 16px (md) |
| Badge | 8px 16px (sm md) |
| Tag/Label | 4px 8px (xs sm) |

---

## Buttons

### Primary Button
```css
.btn-primary {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: white;
    padding: 16px 32px;
    border-radius: 2px;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.15em; /* luxury spacing */
    text-transform: uppercase;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    min-height: 52px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
    background: linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-primary:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}
```

### Secondary Button
```css
.btn-secondary {
    background: white;
    color: #1a1a1a;
    padding: 16px 32px;
    border-radius: 2px;
    border: 1px solid #1a1a1a;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    min-height: 52px;
    box-shadow: none;
    transition: all 0.2s ease;
}

.btn-secondary:hover {
    background: #1a1a1a;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
```

### Ghost Button (Transparent)
```css
.btn-ghost {
    background: transparent;
    color: #1a1a1a;
    padding: 8px 16px;
    border: 1px solid #d4cfc7;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: all 0.2s ease;
}

.btn-ghost:hover {
    background: #1a1a1a;
    color: white;
    border-color: #1a1a1a;
}
```

### Icon Button
```css
.btn-icon {
    width: 44px;
    height: 44px;
    border-radius: 2px;
    border: 1px solid #d4cfc7;
    background: transparent;
    color: #1a1a1a;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.btn-icon:hover {
    background: #1a1a1a;
    color: white;
    border-color: #1a1a1a;
}
```

### Button Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| Small | 36px | 8px 16px | 0.7rem |
| Default | 44px | 12px 24px | 0.8rem |
| Large | 52px | 16px 32px | 0.85rem |

---

## Cards & Containers

### Standard Card
```css
.card {
    background: #faf9f6;
    border-radius: 2px;
    padding: 24px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid #e8e4dc;
}
```

### Elevated Card
```css
.card-elevated {
    background: #faf9f6;
    border-radius: 2px;
    padding: 24px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    border: 1px solid #e8e4dc;
}
```

### Interactive Card
```css
.card-interactive {
    background: #faf9f6;
    border-radius: 2px;
    padding: 16px 24px;
    border: 1px solid #e8e4dc;
    cursor: pointer;
    transition: all 0.3s ease;
}

.card-interactive:hover {
    border-color: #1a1a1a;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
    transform: translateX(4px);
}
```

### Card Header
```css
.card-header h3 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #1a1a1a;
}
```

---

## Form Elements

### Text Input
```css
.input {
    padding: 16px;
    font-size: 1rem;
    font-family: var(--font-body);
    font-weight: 300;
    border: 1px solid #d4cfc7;
    border-radius: 2px;
    background: white;
    transition: border-color 0.2s ease;
}

.input:focus {
    outline: none;
    border-color: #1a1a1a;
}

.input::placeholder {
    color: #999999;
    font-weight: 300;
}
```

### Input Label
```css
.input-label {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #666666;
    margin-bottom: 8px;
    display: block;
}
```

### Select Dropdown
```css
.select {
    padding: 16px;
    font-size: 0.9rem;
    font-family: var(--font-body);
    font-weight: 300;
    border: 1px solid #d4cfc7;
    border-radius: 2px;
    background: white;
    cursor: pointer;
    appearance: none;
}
```

### Checkbox / Radio
```css
.checkbox {
    width: 18px;
    height: 18px;
    border: 1px solid #d4cfc7;
    border-radius: 2px;
    background: white;
    cursor: pointer;
}

.checkbox:checked {
    background: #1a1a1a;
    border-color: #1a1a1a;
}
```

---

## Icons

### Icon Styling Guidelines

1. **Use outline/line icons** - Not filled icons
2. **Subtle opacity** - 0.7 opacity for decorative icons
3. **Consistent sizing** - 1.2rem for UI, 1.8rem for feature icons
4. **Monochrome** - Match text color, no colored icons

### Icon Sizes

| Context | Size |
|---------|------|
| Inline text | 1rem |
| UI buttons | 1.2rem |
| Navigation | 1.3rem |
| Feature icons | 1.8rem |
| Large decorative | 2.5rem |

### Icon Button Container
```css
.icon-container {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #faf7f0;
    border-radius: 2px;
    font-size: 1.8rem;
}
```

### Icon with Label
```css
.icon-label {
    display: flex;
    align-items: center;
    gap: 8px;
}

.icon-label .icon {
    font-size: 1rem;
    opacity: 0.7;
}

.icon-label .label {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}
```

---

## Borders & Shadows

### Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;    /* Standard for all elements */
--radius-md: 2px;    /* Same as sm in luxury design */
--radius-lg: 2px;    /* Same as sm in luxury design */
```

**Note:** In luxury design, we use 2px border-radius for everything. No rounded corners.

### Border Colors

| Usage | Color |
|-------|-------|
| Primary border | #e8e4dc |
| Secondary border | #d4cfc7 |
| Hover border | #1a1a1a |
| Divider | #e8e4dc |

### Box Shadows

| Level | Shadow |
|-------|--------|
| Subtle | 0 2px 8px rgba(0, 0, 0, 0.04) |
| Default | 0 2px 12px rgba(0, 0, 0, 0.05) |
| Medium | 0 4px 20px rgba(0, 0, 0, 0.08) |
| Elevated | 0 8px 30px rgba(0, 0, 0, 0.08) |
| High | 0 10px 40px rgba(0, 0, 0, 0.1) |
| Modal | 0 25px 50px rgba(0, 0, 0, 0.15) |

### Divider Lines
```css
.divider {
    height: 1px;
    background: #e8e4dc;
    margin: 24px 0;
}

.divider-vertical {
    width: 1px;
    background: #e8e4dc;
}
```

---

## Navigation Elements

### Side Button (Floating)
```css
.side-btn {
    width: 52px;
    height: 52px;
    border-radius: 2px;
    border: 1px solid #e8e4dc;
    background: #faf9f6;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.side-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    background: #1a1a1a;
    color: white;
    border-color: #1a1a1a;
}
```

### Tooltip
```css
.tooltip {
    background: #1a1a1a;
    color: white;
    padding: 8px 16px;
    border-radius: 2px;
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
}
```

### Tab Navigation
```css
.tab {
    padding: 8px 16px;
    background: transparent;
    border: 1px solid #d4cfc7;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    transition: all 0.2s ease;
}

.tab:hover {
    background: #1a1a1a;
    color: white;
    border-color: #1a1a1a;
}

.tab.active {
    background: #1a1a1a;
    color: white;
    border-color: #1a1a1a;
}
```

### Back Button
```css
.back-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: transparent;
    border: 1px solid #d4cfc7;
    border-radius: 2px;
    color: #666666;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    transition: all 0.2s ease;
}

.back-btn:hover {
    background: #1a1a1a;
    color: white;
    border-color: #1a1a1a;
}
```

---

## Badges & Labels

### Stat Badge
```css
.stat-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: transparent;
    border: 1px solid #e8e4dc;
    border-radius: 2px;
}

.stat-badge .icon {
    font-size: 0.9rem;
    opacity: 0.7;
}

.stat-badge .value {
    font-weight: 500;
    font-size: 1rem;
    color: #1a1a1a;
}

.stat-badge .label {
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: #666666;
    text-transform: uppercase;
}
```

### Status Badge
```css
.badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 2px;
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.badge-default {
    background: transparent;
    border: 1px solid #d4cfc7;
    color: #666666;
}

.badge-success {
    background: #f6faf6;
    border: 1px solid #8ab88a;
    color: #5a8a5a;
}

.badge-warning {
    background: #faf7f0;
    border: 1px solid #b8a88a;
    color: #5a4a3a;
}

.badge-error {
    background: #faf6f6;
    border: 1px solid #b88a8a;
    color: #8a5a5a;
}
```

### Tag
```css
.tag {
    display: inline-block;
    padding: 4px 8px;
    background: transparent;
    border: 1px solid #1a1a1a;
    border-radius: 2px;
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #1a1a1a;
}
```

### Rarity Label (for collectibles)
```css
.rarity-label {
    font-size: 0.6rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #666666;
    padding: 2px 8px;
    border: 1px solid #d4cfc7;
    border-radius: 2px;
}
```

---

## Progress Indicators

### Progress Bar
```css
.progress-bar {
    height: 3px;
    background: #e8e4dc;
    border-radius: 0;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: #1a1a1a;
    transition: width 0.3s ease;
}
```

### Milestone Bar (Gradient)
```css
.milestone-bar {
    height: 3px;
    background: #e8e4dc;
    border-radius: 0;
    overflow: hidden;
}

.milestone-fill {
    height: 100%;
    background: linear-gradient(90deg, #b8a88a, #8ab88a, #1a1a1a);
    transition: width 0.5s ease;
}
```

### Circular Progress
```css
.progress-circle {
    width: 120px;
    height: 120px;
    border: 3px solid #e8e4dc;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.progress-percent {
    font-family: var(--font-display);
    font-size: 2.2rem;
    font-weight: 500;
    color: #1a1a1a;
}

.progress-label {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #666666;
}
```

### Stat Display
```css
.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 16px;
    background: #faf9f6;
    border-radius: 2px;
    border: 1px solid #e8e4dc;
}

.stat-value {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 500;
    color: #1a1a1a;
}

.stat-label {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #666666;
}
```

---

## Modals & Panels

### Modal Overlay
```css
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 300;
    padding: 24px;
}
```

### Modal Container
```css
.modal {
    background: #faf9f6;
    border-radius: 2px;
    max-width: 700px;
    width: 100%;
    max-height: 90vh;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}
```

### Modal Header
```css
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-bottom: 1px solid #e8e4dc;
}

.modal-header h2 {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}
```

### Modal Close Button
```css
.modal-close {
    width: 36px;
    height: 36px;
    border-radius: 2px;
    border: 1px solid #d4cfc7;
    background: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.modal-close:hover {
    background: #1a1a1a;
    color: white;
    border-color: #1a1a1a;
}
```

### Side Panel
```css
.side-panel {
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    height: 100vh;
    background: #faf9f6;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
    z-index: 200;
    transform: translateX(100%);
    transition: transform 0.3s ease;
}

.side-panel.open {
    transform: translateX(0);
}
```

### Panel Header
```css
.panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-bottom: 1px solid #e8e4dc;
}

.panel-header h2 {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}
```

---

## Tables

### Table Styling
```css
.table {
    width: 100%;
    border-collapse: collapse;
}

.table th,
.table td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e8e4dc;
    font-weight: 300;
}

.table th {
    background: #f5f3ef;
    font-weight: 500;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    font-size: 0.75rem;
}

.table td {
    font-size: 0.9rem;
}

.table tr:hover td {
    background: #faf9f6;
}
```

---

## Animations & Transitions

### Transition Timings
```css
--transition-fast: 0.15s ease;
--transition-normal: 0.2s ease;
--transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 0.5s ease;
```

### Standard Transitions
```css
/* Buttons, interactive elements */
transition: all 0.2s ease;

/* Cards, hover effects */
transition: all 0.3s ease;

/* Complex animations (flips, transforms) */
transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover Transforms

| Element | Transform |
|---------|-----------|
| Button lift | translateY(-1px) |
| Card slide | translateX(4px) |
| Button press | translateY(0) |
| Icon scale | scale(1.05) |

### Fade In Animation
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.3s ease;
}
```

### Shimmer Effect (for luxury items)
```css
@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.shimmer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
    );
    animation: shimmer 2s infinite;
}
```

---

## Responsive Considerations

### Breakpoints
```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

### Mobile Typography Adjustments

| Element | Desktop | Mobile |
|---------|---------|--------|
| Display Word | 3.5rem | 2rem |
| Page Title | 2rem | 1.5rem |
| Section Header | 1.4rem | 1.2rem |
| Body | 0.9rem | 0.85rem |

### Mobile Spacing
- Reduce padding by ~25%
- Stack horizontal layouts vertically
- Hide decorative labels on badges
- Simplify complex layouts

### Touch Targets
- Minimum touch target: 44px × 44px
- Add extra padding to small buttons
- Increase tap areas on mobile

---

## CSS Variables Reference

### Complete Variables Block
```css
:root {
    /* Typography */
    --font-display: 'Cormorant Garamond', 'Didot', 'Bodoni MT', Georgia, serif;
    --font-body: 'Josefin Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    
    /* Letter Spacing */
    --letter-spacing-tight: -0.02em;
    --letter-spacing-normal: 0.02em;
    --letter-spacing-wide: 0.08em;
    --letter-spacing-luxury: 0.15em;
    
    /* Colors - Neutrals */
    --color-black: #1a1a1a;
    --color-dark: #2d2d2d;
    --color-charcoal: #3d3d3d;
    --color-gray: #666666;
    --color-gray-light: #999999;
    
    /* Colors - Backgrounds */
    --bg-primary: #faf9f6;
    --bg-card: #fdfcfa;
    --bg-secondary: #f5f3ef;
    --bg-hover: #f0ede8;
    --bg-sand: #e8e4dc;
    --bg-taupe: #d4cfc7;
    
    /* Colors - Accents */
    --accent-gold: #b8a88a;
    --accent-sage: #8ab88a;
    --accent-blue: #8a9db8;
    --accent-rose: #b88a8a;
    
    /* Colors - Semantic Backgrounds */
    --success-bg: #f6faf6;
    --warning-bg: #faf7f0;
    --error-bg: #faf6f6;
    --info-bg: #f8f9fc;
    
    /* Spacing */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    
    /* Border Radius */
    --radius: 2px;
    
    /* Shadows */
    --shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.04);
    --shadow-default: 0 2px 12px rgba(0, 0, 0, 0.05);
    --shadow-medium: 0 4px 20px rgba(0, 0, 0, 0.08);
    --shadow-elevated: 0 8px 30px rgba(0, 0, 0, 0.08);
    --shadow-high: 0 10px 40px rgba(0, 0, 0, 0.1);
    --shadow-modal: 0 25px 50px rgba(0, 0, 0, 0.15);
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.2s ease;
    --transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Implementation Checklist

When applying this design system to a new page:

### Typography
- [ ] Import Cormorant Garamond and Josefin Sans
- [ ] Set base font to Josefin Sans, weight 300
- [ ] Apply letter-spacing to all text elements
- [ ] Use uppercase + wide spacing for labels
- [ ] Apply antialiased font smoothing

### Colors
- [ ] Replace primary colors with #1a1a1a
- [ ] Change backgrounds to warm neutrals (#faf9f6)
- [ ] Update borders to #e8e4dc or #d4cfc7
- [ ] Mute all accent colors

### Shapes
- [ ] Change all border-radius to 2px
- [ ] Remove rounded corners from buttons
- [ ] Flatten shadows (more subtle)

### Buttons
- [ ] Uppercase text with luxury letter-spacing
- [ ] Dark gradient background for primary
- [ ] Border outline for secondary
- [ ] Hover: invert colors or subtle lift

### Interactive Elements
- [ ] Subtle hover transforms (translateY, translateX)
- [ ] Smooth transitions (0.2s - 0.3s)
- [ ] Remove any bounce or playful animations

### Final Polish
- [ ] Review all font weights (prefer 300-500)
- [ ] Check color contrast for accessibility
- [ ] Verify touch targets on mobile
- [ ] Test hover states on all interactive elements

---

## Brand Voice in Design

The visual design should communicate:

- **Confidence** - Bold typography choices, assured color palette
- **Intelligence** - Clean organization, clear hierarchy
- **Aspiration** - Premium feel without being inaccessible
- **Timelessness** - Classic proportions, enduring elegance
- **Education** - Clear readability, focused presentation

---

*Last updated: December 2024*
*Version: 1.0*
