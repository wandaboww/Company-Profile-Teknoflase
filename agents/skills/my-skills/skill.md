---
name: landingpage-developer
description: Skill to build premium, modern, responsive landing pages using semantic HTML, React, Tailwind, Vite, vanilla CSS, and advanced web platform features.
---

# Landing Page Developer Skill

This skill provides comprehensive guidelines, architectural paradigms, and strict technical best practices for creating stunning, high-performance, accessible, and fluidly responsive landing pages. It ensures that digital environments are not only visually engaging but structurally robust and optimized for conversion.

## When to Use This Skill

- When designing, structuring, or coding the main landing page or its sub-sections.
- When styling elements using Vanilla CSS (flexbox, grid, custom properties, animations).
- When integrating modern browser features (e.g., `<dialog>` for modals, popovers, scroll-driven animations).
- When optimizing the landing page for SEO, performance (LCP, INP, CLS), and accessibility (A11y).

## Design System & Styling Guidelines

### 1. Color Palette (Modern & Harmonic)

- Use custom properties (CSS variables) for design tokens.
- Prefer HSL or OKLCH color spaces for better color manipulation and accessibility.
- Implement light and dark mode support using `light-dark()` or `prefers-color-scheme`.

```css
:root {
  --primary-hue: 250;
  --primary: hsl(var(--primary-hue) 80% 50%);
  --primary-hover: hsl(var(--primary-hue) 80% 40%);
  --background: light-dark(#ffffff, #121214);
  --text: light-dark(#1a1a1e, #f4f4f6);
}
```

### 2. Typography

- Import and use modern fonts (e.g., Inter, Outfit, or Roboto).
- Ensure heading hierarchy is clear (exactly one `<h1>` per page).
- Use `text-wrap: balance` for headings and `text-wrap: pretty` for body paragraphs.

### 3. Layouts & Responsiveness

- Use CSS Grid for complex layouts and Flexbox for linear elements.
- Avoid hardcoded pixel values for layouts; use relative units (`rem`, `em`, `vh`, `vw`, `ch`).
- Implement fluid scaling using clamp: `font-size: clamp(1rem, 2.5vw + 0.5rem, 2rem)`.

## Premium UI Components & Micro-Animations

### Modals & Dialogs

- Use the native `<dialog>` element instead of custom div-based modals.
- Style the backdrop using `::backdrop` and handle entry/exit transitions cleanly.

### Scroll Effects & Parallax

- Leverage CSS scroll-driven animations where supported, or lightweight Intersection Observers for entry animations.
- Ensure all animations respect user preferences with `@media (prefers-reduced-motion: reduce)`.

## SEO & Accessibility Best Practices

- Always include descriptive `alt` tags for images.
- Use semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
- Ensure all interactive elements have unique and descriptive `id` attributes.
- Maintain appropriate color contrast ratios (WCAG AA standard).
