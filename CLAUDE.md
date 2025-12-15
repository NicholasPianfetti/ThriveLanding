# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Thrive Landing is a landing page application built with React 19, TypeScript, and Vite. It uses Tailwind CSS for styling and follows a component-based architecture. The design emphasizes clean, professional aesthetics with a dark blue color scheme and consistent section backgrounds.

## Development Commands

```bash
# Start development server with hot module replacement
npm run dev

# Type-check and build for production
npm run build

# Lint all TypeScript/TSX files
npm run lint

# Preview production build locally
npm run preview
```

## Architecture

### Component Structure

The application follows a simple, flat component structure located in `src/`:

- **App.tsx**: Root component that composes all page sections in order: Header → Hero → About → HowItWorks → Footer
- **main.tsx**: Application entry point that renders App with React StrictMode
- All components are individual TSX files at the root of `src/`, no nested component directories

### Styling System

**Parametrized Color Scheme** (tailwind.config.js:8-35):
- Custom `brand` color palette controls all CTAs, accents, and interactive elements
- Custom `neutral` color palette for text and backgrounds
- To change the entire site's color scheme, modify the brand colors in `tailwind.config.js`
- All components use these parametrized colors, ensuring consistent theming

**Design Patterns**:
- Clean, minimalist design inspired by professional SaaS landing pages
- Subtle hover effects with simple color transitions
- Consistent white/neutral-50 backgrounds across sections
- Simple rounded corners (rounded-lg) for buttons and elements
- Numbered icons for features and process steps

**Global Styles** (src/index.css):
- Smooth scrolling with scroll-padding for sticky header
- Standard system font stack for professional appearance
- Optimized font rendering

### TypeScript Configuration

- Uses **composite project structure** with `tsconfig.json` as the root
- `tsconfig.app.json`: Application code configuration with strict mode enabled, targeting ES2022
- `tsconfig.node.json`: Vite config/build tooling configuration
- Type checking runs before build via `tsc -b`

## Customizing Colors

To change the site's color scheme, edit `tailwind.config.js` lines 10-21:

```js
brand: {
  500: '#YOUR_MAIN_COLOR',  // Primary brand color
  600: '#YOUR_HOVER_COLOR', // Hover state (usually darker)
  // Adjust other shades as needed
}
```

All buttons, gradients, shadows, and interactive elements will automatically update.

## Tech Stack

- **React 19.2.0** with react-jsx transform
- **Vite 7** for build tooling and dev server
- **TypeScript 5.9** with strict mode enabled
- **Tailwind CSS 3.4** for utility-first styling
- **ESLint 9** with TypeScript support and React-specific rules (react-hooks, react-refresh)
