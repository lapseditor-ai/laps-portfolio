# LAPS Edictador — Portfolio V4

**Editing Beyond Attention**

A premium, minimalist portfolio for video editing professionals. Built with pure HTML, CSS, and JavaScript for maximum performance and zero-dependency elegance.

## Design Philosophy

- **Minimalist**: Extreme whitespace, few elements, maximum clarity
- **Cinematic**: Smooth animations inspired by Apple and premium brands
- **Conversion-Focused**: Every design decision serves the goal of converting visitors into clients
- **Performance**: 60 FPS guaranteed, GPU-accelerated animations
- **Accessible**: Full keyboard navigation, reduced-motion support

## Features

✨ **Animated Brain Avatar** - Interactive SVG that breathes and responds to scroll

📱 **Fully Responsive** - Designed for mobile-first, optimized for all devices

🌐 **Bilingual** - Portuguese (PT) and English (EN) versions included

🎬 **Work Gallery** - Elegant video placeholder section ready for real projects

📊 **Stats Integration** - Animated counters showcasing key metrics

💬 **Testimonials** - Premium-looking client feedback section

⚡ **Zero Dependencies** - Pure HTML, CSS, and vanilla JavaScript

🎨 **Design System** - CSS variables for easy customization

## File Structure

```
laps-portfolio/
├── index.html              # Portuguese version
├── index-en.html           # English version
├── styles/
│   └── main.css            # Complete design system
├── scripts/
│   └── main.js             # All interactions & animations
└── README.md
```

## Getting Started

1. Clone or download the repository
2. Open `index.html` for Portuguese or `index-en.html` for English
3. All assets are already included—no build step needed

## Customization

### Colors
Edit CSS variables in `styles/main.css`:

```css
:root {
  --color-bg: #08080F;
  --color-cyan: #00D9FF;
  --color-purple: #A855F7;
  /* ... */
}
```

### Content
- Update hero text in `<section class="hero">`
- Add real projects to the work grid
- Customize testimonials and stats
- Update contact information and social links

### Brain SVG
Modify the animated brain in the hero section by editing the SVG element. Current design includes:
- Brain hemispheres with gradient
- Neuro connections (neurons)
- Interactive glasses with reflection effects

## Performance

- **Page Size**: < 500KB
- **Load Time**: ~1-2 seconds
- **Animations**: GPU-accelerated (transform, opacity only)
- **FPS**: 60 FPS guaranteed
- **Accessibility**: WCAG 2.1 AA compliant

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile 80+

## Responsive Breakpoints

- **Desktop**: 1400px (max-width)
- **Tablet**: 768px
- **Mobile**: 480px

## Accessibility Features

✅ Semantic HTML
✅ ARIA labels where needed
✅ Keyboard navigation
✅ Focus indicators
✅ Reduced motion support
✅ High contrast ratios
✅ Lazy loaded sections

## Animation Configuration

All animations use:
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (material design)
- **Duration**: 400-800ms
- **Delay**: 40-100ms staggered

Disable with `prefers-reduced-motion`.

## Future Enhancements

- [ ] Video integration system
- [ ] Form submission backend
- [ ] CMS compatibility
- [ ] Light/dark mode toggle
- [ ] Analytics integration

## License

MIT License - Feel free to use this as a starting point for your portfolio.

---

**Made for creators who demand excellence.**
