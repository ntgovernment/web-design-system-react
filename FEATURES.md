# NT Government Web Design System - Features

## Overview

A modern, production-ready component library built with Vite, React, TypeScript, and Bootstrap 5.3, designed for deployment in Squiz DXP Component Services.

## ✅ Completed Features

### 1. Modern Technology Stack

- **Vite 5.4** - Fast build tool with HMR
- **React 18.2** - Latest React with TypeScript support
- **TypeScript 5.3** - Full type safety
- **Bootstrap 5.3.3** - Via CDN with CSS variables support

### 2. Dual Theme System

**Automated Design Token Workflow:**

- Design tokens exported from Figma as JSON
- Style Dictionary transforms tokens into CSS custom properties
- Automated generation on every build
- Version-controlled token source of truth

- **NT.GOV.AU Theme** - CSS variables with `ntg-` prefix
  - Primary: #003366 (NT Government blue)
  - Accent: #00a3e0
  - Fully customizable via design tokens
- **NTG Central Theme** - CSS variables with `central-` prefix
  - Primary: #0d6efd (Bootstrap blue)
  - Accent: #fd7e14 (Orange)
  - Fully customizable via design tokens

**Design Token Features:**

- Single source of truth in `design-tokens/tokens.json`
- Automated CSS generation via Style Dictionary
- Bootstrap 5.3 CSS variable integration
- Validation scripts for token structure
- Build-time transformation
- 4000+ token definitions from Figma

### 3. Component Library

The project includes a set of reusable, production-ready React components.  Each
component is documented thoroughly in its own markdown file under
`src/components/<ComponentName>/<COMPONENTNAME>.md`.  These files contain usage
examples, props tables, design token references and Storybook guidance.

Current components:

- Notification
- Image
- Tag
- Pill
- Button
- Card
- Callout
- Icon

(See the per-component documentation for details.)

### 4. Storybook Integration

- **Storybook 7.6** configured with React and Vite
- Interactive component documentation
- Live component preview
- Code view to see HTML output
- Auto-generated docs from TypeScript
- Responsive testing tools

### 5. Build System

- **Library Mode**: Generates ES and UMD bundles
- **TypeScript Declarations**: Full `.d.ts` files
- **CSS Bundle**: Compiled theme CSS
- **Tree-shakeable**: ES modules for optimal bundle size
- **Source Maps**: For debugging

### 6. Development Experience

- Hot Module Replacement (HMR)
- TypeScript IntelliSense
- Storybook hot reload
- Demo application included
- Comprehensive documentation

### 7. Squiz DXP Ready

- UMD and ES module formats
- Standalone CSS file
- CDN-compatible Bootstrap integration
- Component Services deployment guide
- Example integration code

## 📦 Build Artifacts

After running `npm run build`, you get:

```
dist/
├── web-design-system.es.js    (22 KB, gzipped: 6.6 KB)
├── web-design-system.umd.js   (15 KB, gzipped: 5.7 KB)
├── style.css                   (1.4 KB, gzipped: 0.6 KB)
└── index.d.ts                  (TypeScript definitions)
```

## 🚀 Deployment Options

### Option 1: NPM Package

Install via npm/yarn and import components directly

### Option 2: Squiz DXP Component Services

Upload build artifacts to Matrix and use as Component Services

### Option 3: CDN

Host the built files and load via script tags

## 📚 Documentation

- **Main Documentation** - Project README with setup and usage
- **SQUIZ_DXP_DEPLOYMENT.md** - Detailed deployment guide for Squiz DXP
- **Storybook** - Interactive component documentation
- **TypeScript** - IntelliSense and type hints in IDEs

## 🎨 Theming

All themes extend Bootstrap 5.3 CSS variables:

- Fully customizable color schemes
- Prefix-based variables prevent conflicts
- Easy to add new themes
- Based on design tokens from Figma

## 🔧 Developer Tools

- `npm run dev` - Start development server
- `npm run build` - Build library
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build static Storybook site

## 🌟 Design Decisions

1. **Bootstrap from CDN**: Reduces bundle size, better caching
2. **CSS Variables**: Dynamic theming without rebuilding
3. **TypeScript**: Type safety and better DX
4. **Vite**: Fast builds and excellent DX
5. **Storybook**: Best-in-class component documentation
6. **Minimal Bundle**: Only 22KB for the entire library

## 🎯 Use Cases

1. **NT Government Websites**: Use NT.GOV.AU theme
2. **NT Government Intranet**: Use NTG Central theme
3. **Component Services**: Deploy to Squiz DXP
4. **Prototyping**: Quick UI development with pre-built components
5. **Custom Applications**: Extend and build upon the library

## 📝 License

MIT License - Free to use and modify
