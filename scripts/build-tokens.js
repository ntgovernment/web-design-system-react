#!/usr/bin/env node

/**
 * Build Design Tokens - Custom CSS Generation System
 * 
 * Transforms design tokens from Figma (JSON format) into a layered CSS custom property architecture.
 * 
 * LAYERED ARCHITECTURE:
 *   1. common.css - Shared tokens (shadows, spacing, borders, radii)
 *   2. grid.css - Bootstrap-compatible grid configuration
 *   3. typography.css - Theme-agnostic typography (excludes fontFamily)
 *   4. ntg-theme.css - NT.GOV.AU theme (Lato font, ochre accent)
 *   5. central-theme.css - NTG Central theme (Roboto font, green accent)
 * 
 * PROPERTY MAPPINGS (tokens.json → CSS variables):
 *   fontSize → -size
 *   fontWeight → -weight
 *   lineHeight → -lh
 *   letterSpacing → -ls
 *   textDecoration → -decoration
 *   textCase → -text-transform
 *   paragraphSpacing → -paragraph-spacing
 *   fontStyle → -style
 * 
 * KEY FEATURES:
 *   - Zero duplication: Typography values shared via typography.css
 *   - Variable references: Themes use var() to reference shared values
 *   - Post-processing: Automatically generates missing property references
 *   - Complete coverage: All 7 typography properties properly handled
 * 
 * DEBUGGING:
 *   - Missing properties? Check extractTypographyTokens() extracts that property
 *   - Wrong type conversion? Check processDimension(), processShadow(), processColor()
 *   - Duplicate prefixes? Check resolveReference() logic
 *   - Missing theme references? Check generateCSS() post-processing logic
 * 
 * Usage:
 *   node scripts/build-tokens.js
 *   npm run tokens:build
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🎨 Building Design Tokens...\n');

// Check if tokens.json exists
const tokensPath = join(rootDir, 'design-tokens/tokens.json');
if (!existsSync(tokensPath)) {
  console.error('❌ Error: design-tokens/tokens.json not found!');
  console.error('   Please export design tokens from Figma and place the file at:');
  console.error('   design-tokens/tokens.json\n');
  process.exit(1);
}

// Load and validate tokens
let tokens;
try {
  const tokensContent = readFileSync(tokensPath, 'utf-8');
  tokens = JSON.parse(tokensContent);
  console.log('✓ Loaded and validated tokens.json');
} catch (error) {
  console.error('❌ Error: Invalid JSON in design-tokens/tokens.json');
  console.error(`   ${error.message}\n`);
  process.exit(1);
}

// Helper to process color values (remove alpha if fully opaque)
function processColor(value) {
  if (typeof value === 'string' && value.match(/^#[0-9a-f]{8}$/i)) {
    return value.slice(0, 7);
  }
  return value;
}

// Helper to process dimension values
function processDimension(value) {
  const num = parseFloat(value);
  if (isNaN(num)) return value;
  
  // Convert to rem for larger values
  if (num >= 16) {
    return `${num / 16}rem`;
  }
  return `${num}px`;
}

// Helper to process shadow objects
function processShadow(shadowObj) {
  if (typeof shadowObj !== 'object') return shadowObj;
  
  const x = shadowObj.offsetX !== undefined ? `${shadowObj.offsetX}px` : '0';
  const y = shadowObj.offsetY !== undefined ? `${shadowObj.offsetY}px` : '0';
  const blur = shadowObj.radius !== undefined ? `${shadowObj.radius}px` : '0';
  const spread = shadowObj.spread !== undefined ? `${shadowObj.spread}px` : '0';
  const color = shadowObj.color || 'rgba(0,0,0,0.1)';
  
  return `${x} ${y} ${blur} ${spread} ${color}`;
}

// Helper to resolve token references
function resolveReference(ref, prefix) {
  // Clean up reference path: remove 'primitives.', spaces, and convert (d) to -d
  let cleaned = ref
    .replace(/^primitives\./, '')
    .replace(/\s*\(d\)/g, '-d')  // Convert " (d)" or "(d)" to "-d" 
    .replace(/\s+d$/g, '-d')     // Convert " d" at end to "-d"
    .replace(/\s+/g, '-');       // Replace remaining spaces with dash
  
  // Split into parts and check if first part matches prefix (without trailing dash)
  const parts = cleaned.split('.');
  const prefixWithoutDash = prefix.replace(/-$/, '');
  
  // If first part matches the prefix, skip it to avoid duplication
  if (parts[0] === prefixWithoutDash) {
    cleaned = parts.slice(1).join('-');
  } else {
    cleaned = parts.join('-');
  }
  
  return `var(--${prefix}${cleaned})`;
}

// Helper to extract grid tokens
function extractGridTokens() {
  const grid = [];
  
  if (tokens.grid && tokens.grid['ntg-breakpoint']) {
    Object.entries(tokens.grid['ntg-breakpoint']).forEach(([breakpoint, config]) =>{
      if (config.value) {
        const bp = breakpoint.replace(/[()]/g, '').replace(/\s+/g, '-');
        const val = config.value;
        
        if (val.gutterSize !== undefined) {
          grid.push({ name: `--grid-gutter-${bp}`, value: `${val.gutterSize}px`, description: config.description });
        }
        if (val.count !== undefined) {
          grid.push({ name: `--grid-columns-${bp}`, value: val.count, description: null });
        }
        if (val.offset !== undefined) {
          grid.push({ name: `--grid-offset-${bp}`, value: `${val.offset}px`, description: null });
        }
        if (val.sectionSize !== undefined) {
          grid.push({ name: `--grid-section-size-${bp}`, value: `${val.sectionSize}px`, description: null });
        }
      }
    });
  }
  
  return grid;
}

/**
 * Extract Typography Tokens (Theme-Agnostic)
 * 
 * Extracts font properties from tokens.json font.ntg-type and font.ntg-type-sm sections.
 * These become variables in typography.css that both themes reference.
 * 
 * IMPORTANT: This function EXCLUDES fontFamily (theme-specific: Lato for NTG, Roboto for Central)
 * 
 * Extracted Properties:
 *   - fontSize → --type-{category}-{variant}-size
 *   - fontWeight → --type-{category}-{variant}-weight
 *   - lineHeight → --type-{category}-{variant}-lh
 *   - letterSpacing → --type-{category}-{variant}-ls
 *   - textDecoration → --type-{category}-{variant}-decoration (if not 'none')
 *   - textCase → --type-{category}-{variant}-text-transform (if not 'none')
 *   - paragraphSpacing → --type-{category}-{variant}-paragraph-spacing (if not 0)
 *   - fontStyle → --type-{category}-{variant}-style (if not 'normal')
 * 
 * Example mapping:
 *   tokens.json: font.ntg-type.heading.h1.value.fontSize: "40px"
 *   Output: --type-heading-h1-size: 2.5rem
 * 
 * Note: Properties with default values ('none', 0, 'normal') are excluded to reduce file size.
 */
// Helper to extract typography tokens from font section (theme-agnostic, excludes fontFamily)
function extractTypographyTokens() {
  const typography = [];
  
  // Process font.ntg-type (Desktop/default styles)
  if (tokens.font && tokens.font['ntg-type']) {
    Object.entries(tokens.font['ntg-type']).forEach(([category, styles]) => {
      Object.entries(styles).forEach(([variant, token]) => {
        if (token.type === 'custom-fontStyle' && token.value) {
          const prefix = `type-${category}-${variant}`.replace(/[()]/g, '').replace(/\s+/g, '-');
          const props = token.value;
          
          // Extract all font properties EXCEPT fontFamily (which is theme-specific)
          if (props.fontSize !== undefined) {
            typography.push({ name: `--${prefix}-size`, value: processDimension(props.fontSize), description: token.description });
          }
          if (props.fontWeight !== undefined) {
            typography.push({ name: `--${prefix}-weight`, value: props.fontWeight, description: null });
          }
          if (props.lineHeight !== undefined) {
            typography.push({ name: `--${prefix}-lh`, value: processDimension(props.lineHeight), description: null });
          }
          if (props.letterSpacing !== undefined) {
            typography.push({ name: `--${prefix}-ls`, value: props.letterSpacing === 0 ? '0px' : processDimension(props.letterSpacing), description: null });
          }
          if (props.textDecoration && props.textDecoration !== 'none') {
            typography.push({ name: `--${prefix}-decoration`, value: props.textDecoration, description: null });
          }
          if (props.textCase && props.textCase !== 'none') {
            typography.push({ name: `--${prefix}-text-transform`, value: props.textCase, description: null });
          }
          if (props.paragraphSpacing && props.paragraphSpacing !== 0) {
            typography.push({ name: `--${prefix}-paragraph-spacing`, value: processDimension(props.paragraphSpacing), description: null });
          }
          if (props.fontStyle && props.fontStyle !== 'normal') {
            typography.push({ name: `--${prefix}-style`, value: props.fontStyle, description: null });
          }
        }
      });
    });
  }
  
  // Process font.ntg-type-sm (Mobile styles)
  if (tokens.font && tokens.font['ntg-type-sm']) {
    Object.entries(tokens.font['ntg-type-sm']).forEach(([variant, token]) => {
      if (token.type === 'custom-fontStyle' && token.value) {
        const prefix = `type-mobile-${variant}`.replace(/[()]/g, '').replace(/\s+/g, '-');
        const props = token.value;
        
        // Extract all font properties EXCEPT fontFamily
        if (props.fontSize !== undefined) {
          typography.push({ name: `--${prefix}-size`, value: processDimension(props.fontSize), description: token.description });
        }
        if (props.fontWeight !== undefined) {
          typography.push({ name: `--${prefix}-weight`, value: props.fontWeight, description: null });
        }
        if (props.lineHeight !== undefined) {
          typography.push({ name: `--${prefix}-lh`, value: processDimension(props.lineHeight), description: null });
        }
        if (props.letterSpacing !== undefined) {
          typography.push({ name: `--${prefix}-ls`, value: props.letterSpacing === 0 ? '0px' : processDimension(props.letterSpacing), description: null });
        }
        if (props.textDecoration && props.textDecoration !== 'none') {
          typography.push({ name: `--${prefix}-decoration`, value: props.textDecoration, description: null });
        }
        if (props.textCase && props.textCase !== 'none') {
          typography.push({ name: `--${prefix}-text-transform`, value: props.textCase, description: null });
        }
        if (props.paragraphSpacing && props.paragraphSpacing !== 0) {
          typography.push({ name: `--${prefix}-paragraph-spacing`, value: processDimension(props.paragraphSpacing), description: null });
        }
      }
    });
  }
  
  return typography;
}

// Helper to map theme token paths to typography variable names
function mapToTypographyVar(path) {
  // Map: themes.ntg.type.desktop.h1.size -> --type-heading-h1-size
  // Map: themes.ntg.type.mobile.h2.weight -> --type-mobile-heading-h2-weight
  const parts = path.split('.');
  
  // Skip themes.ntg/central.type prefix
  if (parts[0] === 'themes' && parts[2] === 'type') {
    const context = parts[3]; // 'desktop' or 'mobile'
    const variant = parts[4]; // 'h1', 'h2', 'body-default', etc
    const property = parts[5]; // 'size', 'weight', 'lh', 'ls'
    
    if (context === 'desktop') {
      // Map h1-h6 to heading-h1, etc
      let category = variant.match(/^h[1-6]$/) ? `heading-${variant}` : variant;
      return `--type-${category}-${property}`;
    } else if (context === 'mobile') {
      let category = variant.match(/^h[1-6]$/) ? `heading-${variant}` : variant;
      return `--type-mobile-${category}-${property}`;
    }
  }
  
  return null;
}

// Helper to extract common tokens shared across themes
function extractCommonTokens() {
  const common = {
    shadows: [],
    spacing: [],
    borderWidths: [],
    radii: []
  };

  // Extract shadows from effect section
  if (tokens.effect && tokens.effect['ntg-shadow']) {
    Object.entries(tokens.effect['ntg-shadow']).forEach(([key, token]) => {
      if (token.type === 'custom-shadow' && token.value) {
        const varName = `--shadow-${key}`;
        const cssValue = processShadow(token.value);
        common.shadows.push({ name: varName, value: cssValue, description: token.description });
      }
    });
  }

  // Extract spacing, border-widths, and common radii from ntg theme as baseline
  const ntgTheme = tokens.themes?.ntg;
  if (ntgTheme) {
    // Spacing
    if (ntgTheme.sp) {
      Object.entries(ntgTheme.sp).forEach(([key, token]) => {
        if (token.value !== undefined) {
          const varName = `--sp-${key}`;
          const cssValue = processDimension(token.value);
          common.spacing.push({ name: varName, value: cssValue, description: token.description });
        }
      });
    }

    // Border widths
    if (ntgTheme['border-width']) {
      Object.entries(ntgTheme['border-width']).forEach(([key, token]) => {
        if (token.value !== undefined) {
          const varName = `--border-width-${key}`;
          const cssValue = `${token.value}px`;
          common.borderWidths.push({ name: varName, value: cssValue, description: token.description });
        }
      });
    }

    // Common radii (none, sm, lg)
    if (ntgTheme.radii) {
      const commonRadiiKeys = ['none', 'sm', 'lg'];
      Object.entries(ntgTheme.radii).forEach(([key, token]) => {
        if (commonRadiiKeys.includes(key) && token.value !== undefined) {
          const varName = `--radii-${key}`;
          const cssValue = processDimension(token.value);
          common.radii.push({ name: varName, value: cssValue, description: token.description });
        }
      });
    }
  }

  return common;
}

// Helper to extract CSS variables from token object (updated for common vars)
function extractVariables(obj, prefix = '', path = [], useCommonVars = false) {
  const variables = [];
  
  for (const [key, value] of Object.entries(obj)) {
    // Clean up key names (remove spaces, convert (d) to -d)
    const cleanKey = key.replace(/\s+d$/, '-d').replace(/\(d\)/, '-d').replace(/\s+/g, '-');
    const currentPath = [...path, cleanKey];
    
    // Skip common token categories if using common vars
    if (useCommonVars && path.length === 0) {
      if (key === 'sp' || key === 'border-width') {
        continue; // Skip entirely - will reference common vars
      }
    }
    
    if (value && typeof value === 'object') {
      // Check if this is a token with type and value
      if (value.type && value.value !== undefined) {
        const varName = `--${prefix}${currentPath.join('-')}`;
        let cssValue = value.value;
        
        // Handle token references first
        if (typeof cssValue === 'string' && cssValue.startsWith('{') && cssValue.endsWith('}')) {
          const ref = cssValue.slice(1, -1);
          cssValue = resolveReference(ref, prefix);
        }
        // Font weights should stay as numbers even if marked as dimension
        else if (key === 'weight' || key.includes('weight')) {
          cssValue = value.value;
        }
        // Transform based on type
        else if (value.type === 'color') {
          cssValue = processColor(cssValue);
        } else if (value.type === 'dimension') {
          cssValue = processDimension(cssValue);
        } else if (value.type === 'custom-shadow') {
          cssValue = processShadow(cssValue);
        } else if (value.type === 'number') {
          // Keep numbers as-is (e.g., font weights like 700)
          cssValue = value.value;
        } else if (value.type === 'string') {
          cssValue = value.value;
        }
        
        // For common radii, reference common vars
        if (useCommonVars && path.length === 1 && path[0] === 'radii') {
          const commonRadiiKeys = ['none', 'sm', 'lg'];
          if (commonRadiiKeys.includes(key)) {
            cssValue = `var(--radii-${key})`;
          }
        }
        
        variables.push({ name: varName, value: cssValue, description: value.description });
      } else {
        // Recursively process nested objects
        variables.push(...extractVariables(value, prefix, currentPath, useCommonVars));
      }
    }
  }
  
  return variables;
}

// Generate common CSS file content
function generateCommonCSS(commonTokens) {
  const header = `/**
 * Common Design Tokens - Auto-generated
 * 
 * ⚠️ DO NOT EDIT THIS FILE MANUALLY ⚠️
 * 
 * This file contains design tokens shared across all themes.
 * To make changes:
 * 1. Update design-tokens/tokens.json
 * 2. Run: npm run tokens:build
 * 
 * Generated: ${new Date().toISOString()}
 * Source: Figma Design Tokens
 */

:root {`;

  const sections = [];
  
  if (commonTokens.shadows.length > 0) {
    sections.push('  /* Shadows */');
    commonTokens.shadows.forEach(v => {
      const comment = v.description ? `  /* ${v.description} */\n` : '';
      sections.push(`${comment}  ${v.name}: ${v.value};`);
    });
  }
  
  if (commonTokens.spacing.length > 0) {
    sections.push('\n  /* Spacing */');
    commonTokens.spacing.forEach(v => {
      sections.push(`  ${v.name}: ${v.value};`);
    });
  }
  
  if (commonTokens.borderWidths.length > 0) {
    sections.push('\n  /* Border Widths */');
    commonTokens.borderWidths.forEach(v => {
      sections.push(`  ${v.name}: ${v.value};`);
    });
  }
  
  if (commonTokens.radii.length > 0) {
    sections.push('\n  /* Border Radius */');
    commonTokens.radii.forEach(v => {
      sections.push(`  ${v.name}: ${v.value};`);
    });
  }
  
  const footer = `\n}\n`;
  
  return header + '\n' + sections.join('\n') + footer;
}

// Generate grid CSS file content
function generateGridCSS(grid) {
  const header = `/**
 * Grid System Tokens - Auto-generated
 * 
 * ⚠️ DO NOT EDIT THIS FILE MANUALLY ⚠️
 * 
 * Bootstrap-compatible grid configuration from Figma.
 * To make changes:
 * 1. Update design-tokens/tokens.json
 * 2. Run: npm run tokens:build
 * 
 * Generated: ${new Date().toISOString()}
 * Source: Figma Design Tokens
 */

:root {`;

  const lines = [];
  
  grid.forEach(v => {
    const comment = v.description ? `  /* ${v.description} */\n` : '';
    lines.push(`${comment}  ${v.name}: ${v.value};`);
  });

  const footer = `\n}\n`;
  
  return header + '\n' + lines.join('\n') + footer;
}

// Generate typography CSS file content
function generateTypographyCSS(typography) {
  const header = `/**
 * Typography Tokens - Auto-generated
 * 
 * ⚠️ DO NOT EDIT THIS FILE MANUALLY ⚠️
 * 
 * Theme-agnostic typography definitions (excludes fontFamily).
 * Font families are defined per-theme to allow Lato vs Roboto.
 * 
 * Properties: size, weight, line-height, letter-spacing, decoration, text-transform
 * 
 * To make changes:
 * 1. Update design-tokens/tokens.json
 * 2. Run: npm run tokens:build
 * 
 * Generated: ${new Date().toISOString()}
 * Source: Figma Design Tokens
 */

:root {`;

  const lines = [];
  
  // Group by style category for better readability
  const groups = {};
  typography.forEach(v => {
    const parts = v.name.split('-');
    const category = parts.slice(0, 3).join('-'); // e.g., --font-heading-h1
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(v);
  });
  
  Object.entries(groups).forEach(([category, vars], index) => {
    if (index > 0) lines.push('');
    lines.push(`  /* ${category} */`);
    vars.forEach(v => {
      const comment = v.description ? `  /* ${v.description} */\n` : '';
      lines.push(`${comment}  ${v.name}: ${v.value};`);
    });
  });

  const footer = `\n}\n`;
  
  return header + '\n' + lines.join('\n') + footer;
}

/**
 * Generate Theme CSS with Typography References
 * 
 * Creates theme-specific CSS files (ntg-theme.css, central-theme.css) that:
 * 1. Import foundation layers (common.css, grid.css, typography.css)
 * 2. Define theme-specific font families (Lato for NTG, Roboto for Central)
 * 3. Define primitive and semantic color variables
 * 4. Reference typography.css variables using var()
 * 5. Add extension variables for properties missing from theme definitions
 * 
 * POST-PROCESSING LOGIC:
 *   The function scans font.ntg-type and font.ntg-type-sm in tokens.json to find
 *   textDecoration, textCase, and paragraphSpacing properties. If a variant has
 *   these properties in the source tokens but NOT in the theme definition, the
 *   function automatically generates a theme reference variable.
 * 
 * Example:
 *   Source (tokens.json): font.ntg-type.link.default.value.textDecoration = "underline"
 *   Typography.css: --type-link-default-decoration: underline
 *   Theme doesn't define: themes.ntg.type.desktop.link.default.decoration
 *   Result: Auto-generated in theme: --ntg-type-link-default-decoration: var(--type-link-default-decoration)
 * 
 * This ensures complete property coverage even when theme definitions are incomplete.
 * 
 * @param {string} themeName - Display name for the theme (e.g., "NT.GOV.AU")
 * @param {object} themeData - Theme token data from tokens.json
 * @param {string} prefix - CSS variable prefix (e.g., "ntg" or "central")
 * @param {boolean} useCommonVars - Whether to use common variables (legacy parameter)
 * @returns {string} Complete CSS file content with imports and variables
 */
// Generate CSS file content with typography variable references
function generateCSS(themeName, themeData, prefix, useCommonVars = false) {
  const header = `/**
 * ${themeName} Theme - Auto-generated from design tokens
 * 
 * ⚠️ DO NOT EDIT THIS FILE MANUALLY ⚠️
 * 
 * This file is automatically generated from design-tokens/tokens.json
 * To make changes:
 * 1. Update design-tokens/tokens.json
 * 2. Run: npm run tokens:build
 * 
 * Import order: common.css → grid.css → typography.css → theme
 * 
 * Generated: ${new Date().toISOString()}
 * Source: Figma Design Tokens
 */

@import './common.css';
@import './grid.css';
@import './typography.css';

:root {`;

  const variables = [];
  const fontFamilies = [];
  
  // Extract variables, separating typography into font families and references
  function processVariables(obj, currentPrefix = '', path = []) {
    for (const [key, value] of Object.entries(obj)) {
      const cleanKey = key.replace(/\s+d$/, '-d').replace(/\(d\)/, '-d').replace(/\s+/g, '-');
      const currentPath = [...path, cleanKey];
      const fullPath = currentPath.join('.');
      
      // Skip common token categories if using common vars
      if (useCommonVars && path.length === 0) {
        if (key === 'sp' || key === 'border-width') {
          continue;
        }
      }
      
if (value && typeof value === 'object') {
        if (value.type && value.value !== undefined) {
          const varName = `--${currentPrefix}${currentPath.join('-')}`;
          let cssValue = value.value;
          
          // Check if this is a typography token (type.desktop.* or type.mobile.*)
          const isTypography = path.length >= 2 && path[0] === 'type' && 
                               (path[1] === 'desktop' || path[1] === 'mobile');
          
          if (isTypography) {
            const property = currentPath[currentPath.length - 1];
            
            // Font family is theme-specific, keep as raw value
            if (property === 'family') {
              fontFamilies.push({ name: varName, value: cssValue, description: value.description });
              return; // Don't add to regular variables
            }
            
            // For other properties (size, weight, lh, ls), reference typography vars
            if (['size', 'weight', 'lh', 'ls', 'decoration', 'text-transform', 'style'].includes(property)) {
              const typographyVar = mapToTypographyVar(`themes.${prefix.replace(/-$/, '')}.${fullPath}`);
              if (typographyVar) {
                variables.push({ name: varName, value: `var(${typographyVar})`, description: value.description });
                return;
              }
            }
          }
          
          // Handle token references
          if (typeof cssValue === 'string' && cssValue.startsWith('{') && cssValue.endsWith('}')) {
            const ref = cssValue.slice(1, -1);
            cssValue = resolveReference(ref, currentPrefix);
          }
          // Font weights should stay as numbers
          else if (key === 'weight' || key.includes('weight')) {
            cssValue = value.value;
          }
          // Transform based on type
          else if (value.type === 'color') {
            cssValue = processColor(cssValue);
          } else if (value.type === 'dimension') {
            cssValue = processDimension(cssValue);
          } else if (value.type === 'custom-shadow') {
            cssValue = processShadow(cssValue);
          } else if (value.type === 'number') {
            cssValue = value.value;
          } else if (value.type === 'string') {
            cssValue = value.value;
          }
          
          // For common radii, reference common vars
          if (useCommonVars && path.length === 1 && path[0] === 'radii') {
            const commonRadiiKeys = ['none', 'sm', 'lg'];
            if (commonRadiiKeys.includes(key)) {
              cssValue = `var(--radii-${key})`;
            }
          }
          
          variables.push({ name: varName, value: cssValue, description: value.description });
        } else {
          processVariables(value, currentPrefix, currentPath);
        }
      }
    }
  }
  
  processVariables(themeData, prefix, []);
  
  // Add missing typography property references (decoration, text-transform, paragraph-spacing)
  // These exist in typography.css but not in theme tokens
  if (tokens.font && tokens.font['ntg-type']) {
    // Map of typography variants with their additional properties
    const typographyExtras = new Map();
    
    // Scan font.ntg-type for decoration, textCase, and paragraphSpacing
    Object.entries(tokens.font['ntg-type']).forEach(([category, styles]) => {
      Object.entries(styles).forEach(([variant, token]) => {
        if (token.type === 'custom-fontStyle' && token.value) {
          const props = token.value;
          const variantName = `${category}-${variant}`;
          const extras = [];
          
          if (props.textDecoration && props.textDecoration !== 'none') {
            extras.push('decoration');
          }
          if (props.textCase && props.textCase !== 'none') {
            extras.push('text-transform');
          }
          if (props.paragraphSpacing && props.paragraphSpacing !== 0) {
            extras.push('paragraph-spacing');
          }
          
          if (extras.length > 0) {
            typographyExtras.set(variantName, extras);
          }
        }
      });
    });
    
    // Scan mobile typography as well
    if (tokens.font['ntg-type-sm']) {
      Object.entries(tokens.font['ntg-type-sm']).forEach(([variant, token]) => {
        if (token.type === 'custom-fontStyle' && token.value) {
          const props = token.value;
          const extras = [];
          
          if (props.textDecoration && props.textDecoration !== 'none') {
            extras.push('decoration');
          }
          if (props.textCase && props.textCase !== 'none') {
            extras.push('text-transform');
          }
          if (props.paragraphSpacing && props.paragraphSpacing !== 0) {
            extras.push('paragraph-spacing');
          }
          
          if (extras.length > 0) {
            typographyExtras.set(`mobile-${variant}`, extras);
          }
        }
      });
    }
    
    // Generate theme variable references for these extra properties
    typographyExtras.forEach((props, variantKey) => {
      props.forEach(prop => {
        const themeVarName = `--${prefix}type-${variantKey.replace('mobile-', 'mobile-')}-${prop}`;
        const typoVarName = `--type-${variantKey}-${prop}`;
        
        // Only add if not already present
        const exists = variables.some(v => v.name === themeVarName);
        if (!exists) {
          variables.push({
            name: themeVarName,
            value: `var(${typoVarName})`,
            description: null
          });
        }
      });
    });
  }
  
  // Build CSS: font families first, then other variables
  const cssLines = [];
  
  if (fontFamilies.length > 0) {
    fontFamilies.forEach(v => {
      const comment = v.description ? `  /* ${v.description} */\n` : '';
      cssLines.push(`${comment}  ${v.name}: ${v.value};`);
    });
  }
  
  variables.forEach(v => {
    const comment = v.description ? `  /* ${v.description} */\n` : '';
    cssLines.push(`${comment}  ${v.name}: ${v.value};`);
  });
  
  const footer = `\n}\n`;
  
  return header + '\n' + cssLines.join('\n') + footer;
}

// Build common tokens file
try {
  console.log('\n📦 Building common tokens...');
  
  const commonTokens = extractCommonTokens();
  const commonCSS = generateCommonCSS(commonTokens);
  const commonPath = join(rootDir, 'src/themes/common.css');
  writeFileSync(commonPath, commonCSS, 'utf-8');
  
  const totalCommon = commonTokens.shadows.length + commonTokens.spacing.length + 
                      commonTokens.borderWidths.length + commonTokens.radii.length;
  console.log(`  ✓ Generated src/themes/common.css (${totalCommon} shared variables)`);
} catch (error) {
  console.error('  ❌ Failed to generate common tokens:', error.message);
  process.exit(1);
}

// Build grid tokens file
try {
  console.log('\n📦 Building grid tokens...');
  
  const gridTokens = extractGridTokens();
  if (gridTokens.length > 0) {
    const gridCSS = generateGridCSS(gridTokens);
    const gridPath = join(rootDir, 'src/themes/grid.css');
    writeFileSync(gridPath, gridCSS, 'utf-8');
    
    console.log(`  ✓ Generated src/themes/grid.css (${gridTokens.length} variables)`);
  } else {
    console.log('  ⚠ No grid tokens found');
  }
} catch (error) {
  console.error('  ❌ Failed to generate grid tokens:', error.message);
  process.exit(1);
}

// Build typography tokens file
try {
  console.log('\n📦 Building typography tokens...');
  
  const typographyTokens = extractTypographyTokens();
  if (typographyTokens.length > 0) {
    const typographyCSS = generateTypographyCSS(typographyTokens);
    const typographyPath = join(rootDir, 'src/themes/typography.css');
    writeFileSync(typographyPath, typographyCSS, 'utf-8');
    
    console.log(`  ✓ Generated src/themes/typography.css (${typographyTokens.length} variables)`);
  } else {
    console.log('  ⚠ No typography tokens found');
  }
} catch (error) {
  console.error('  ❌ Failed to generate typography tokens:', error.message);
  process.exit(1);
}

// Build NT.GOV.AU theme
try {
  console.log('\n📦 Building NT.GOV.AU theme...');
  
  const ntgData = {
    ...tokens.primitives?.ntg,
    ...tokens.themes?.ntg
  };
  
  const ntgCSS = generateCSS('NT.GOV.AU', ntgData, 'ntg-', true);
  const ntgPath = join(rootDir, 'src/themes/ntg-theme.css');
  writeFileSync(ntgPath, ntgCSS, 'utf-8');
  
  console.log('  ✓ Generated src/themes/ntg-theme.css');
} catch (error) {
  console.error('  ❌ Failed to generate NT.GOV.AU theme:', error.message);
  process.exit(1);
}

// Build NTG Central theme
try {
  console.log('\n📦 Building NTG Central theme...');
  
  const centralData = {
    ...tokens.primitives?.central,
    ...tokens.themes?.central
  };
  
  const centralCSS = generateCSS('NTG Central', centralData, 'central-', true);
  const centralPath = join(rootDir, 'src/themes/central-theme.css');
  writeFileSync(centralPath, centralCSS, 'utf-8');
  
  console.log('  ✓ Generated src/themes/central-theme.css');
} catch (error) {
  console.error('  ❌ Failed to generate NTG Central theme:', error.message);
  process.exit(1);
}

console.log('\n✅ Design tokens successfully built!');
console.log('\nGenerated files:');
console.log('  • src/themes/common.css');
console.log('  • src/themes/grid.css');
console.log('  • src/themes/typography.css');
console.log('  • src/themes/ntg-theme.css');
console.log('  • src/themes/central-theme.css');
console.log('\n💡 Remember to commit the generated CSS files to version control.\n');
