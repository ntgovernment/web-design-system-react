#!/usr/bin/env node

import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, '..');
const srcThemesDir = join(rootDir, 'src', 'themes');
const distDir = join(rootDir, 'dist');

console.log('🔨 Building distribution files...\n');

// Ensure dist directory exists
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Simple CSS minifier
function minifyCSS(css) {
  return css
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove extra whitespace
    .replace(/\s+/g, ' ')
    // Remove whitespace around special characters
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    // Remove leading/trailing whitespace
    .trim();
}

// Minify theme files
const themeFiles = [
  { src: 'ntg-theme.css', dest: 'ntg-theme.min.css' },
  { src: 'central-theme.css', dest: 'central-theme.min.css' },
];

console.log('📦 Minifying theme files...');
themeFiles.forEach(({ src, dest }) => {
  const srcPath = join(srcThemesDir, src);
  const destPath = join(distDir, dest);
  
  if (existsSync(srcPath)) {
    const css = readFileSync(srcPath, 'utf-8');
    const minified = minifyCSS(css);
    writeFileSync(destPath, minified);
    
    const originalSize = (css.length / 1024).toFixed(2);
    const minifiedSize = (minified.length / 1024).toFixed(2);
    const savings = ((1 - minified.length / css.length) * 100).toFixed(1);
    
    console.log(`  ✓ ${dest} (${originalSize}KB → ${minifiedSize}KB, -${savings}%)`);
  } else {
    console.warn(`  ⚠ Warning: ${src} not found`);
  }
});

// Create demo index.html
console.log('\n📄 Generating index.html demo...');
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NT Government Web Design System - Demo</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- FontAwesome Kit -->
    <script src="https://kit.fontawesome.com/9bf658a5c7.js" crossorigin="anonymous"></script>
    
    <!-- Component Styles -->
    <link rel="stylesheet" href="./components.min.css">
    
    <!-- Default Theme (NT.GOV.AU) -->
    <link rel="stylesheet" href="./ntg-theme.min.css" id="theme-css">
    
    <style>
        body {
            background: var(--clr-bg-default);
            color: var(--clr-text-default);
        }
        .theme-switcher {
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 1000;
        }
        .hero {
            background: linear-gradient(135deg, var(--clr-action-primary), var(--clr-bg-accent));
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            margin-bottom: 3rem;
            border-radius: 0.5rem;
        }
    </style>
</head>
<body>
    <div class="theme-switcher">
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary active" onclick="switchTheme('ntg')">NT.GOV.AU</button>
            <button type="button" class="btn btn-outline-primary" onclick="switchTheme('central')">NTG Central</button>
        </div>
    </div>

    <div class="container my-5">
        <div class="hero">
            <h1 class="display-4">NT Government Web Design System</h1>
            <p class="lead">Production-ready component library with dual theme support</p>
        </div>

        <!-- Buttons Section -->
        <section class="mb-5">
            <h2>Buttons</h2>
            <div class="d-flex gap-2 flex-wrap">
                <button class="btn btn-primary">Primary</button>
                <button class="btn btn-secondary">Secondary</button>
                <button class="btn btn-success">Success</button>
                <button class="btn btn-danger">Danger</button>
                <button class="btn btn-warning">Warning</button>
                <button class="btn btn-info">Info</button>
            </div>
        </section>

        <!-- Buttons with Icons -->
        <section class="mb-5">
            <h2>Buttons with Icons</h2>
            <div class="d-flex gap-2 flex-wrap">
                <button class="btn btn-primary">
                    <i class="fa-light fa-home me-2"></i>Home
                </button>
                <button class="btn btn-success">
                    <i class="fa-light fa-check me-2"></i>Confirm
                </button>
                <button class="btn btn-danger">
                    Delete<i class="fa-light fa-trash ms-2"></i>
                </button>
            </div>
        </section>

        <!-- Alerts Section -->
        <section class="mb-5">
            <h2>Alerts</h2>
            <div class="alert alert-primary" role="alert">
                <i class="fa-light fa-circle-info me-2"></i>
                This is a primary alert with an icon
            </div>
            <div class="alert alert-success" role="alert">
                <i class="fa-light fa-circle-check me-2"></i>
                Your action was successful!
            </div>
            <div class="alert alert-warning" role="alert">
                <i class="fa-light fa-triangle-exclamation me-2"></i>
                Warning: Please review before proceeding
            </div>
            <div class="alert alert-danger" role="alert">
                <i class="fa-light fa-circle-xmark me-2"></i>
                Error: Something went wrong
            </div>
        </section>

        <!-- Cards Section -->
        <section class="mb-5">
            <h2>Cards</h2>
            <div class="row g-3">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                <i class="fa-light fa-chart-line me-2"></i>Analytics
                            </h5>
                            <p class="card-text">View your analytics dashboard and track progress.</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                <i class="fa-light fa-users me-2"></i>Users
                            </h5>
                            <p class="card-text">Manage user accounts and permissions.</p>
                            <a href="#" class="btn btn-secondary">Manage</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                <i class="fa-light fa-cog me-2"></i>Settings
                            </h5>
                            <p class="card-text">Configure system settings and preferences.</p>
                            <a href="#" class="btn btn-info">Configure</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Icons Section -->
        <section class="mb-5">
            <h2>Icons</h2>
            <div class="d-flex gap-3 flex-wrap" style="font-size: 2rem;">
                <i class="fa-light fa-home" title="Home"></i>
                <i class="fa-light fa-user" title="User"></i>
                <i class="fa-light fa-heart" style="color: #dc3545;" title="Heart"></i>
                <i class="fa-light fa-star" style="color: #ffc107;" title="Star"></i>
                <i class="fa-light fa-circle-check" style="color: #28a745;" title="Check"></i>
                <i class="fa-light fa-circle-info" style="color: #17a2b8;" title="Info"></i>
                <i class="fa-light fa-triangle-exclamation" style="color: #ffc107;" title="Warning"></i>
                <i class="fa-light fa-circle-xmark" style="color: #dc3545;" title="Error"></i>
            </div>
        </section>

        <!-- Theme Information -->
        <section class="mb-5">
            <h2>Theme System</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">NT.GOV.AU Theme</h5>
                            <p class="card-text">Professional theme for NT.GOV.AU websites using Lato font and navy blue primary colors.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">NTG Central Theme</h5>
                            <p class="card-text">Modern theme for NTG Central intranet using Roboto font and blue/orange color scheme.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="text-center text-muted py-4">
            <p>NT Government Web Design System v0.1.0</p>
            <p class="small">Components: Button, Alert, Card, Icon | Themes: NT.GOV.AU, NTG Central</p>
        </footer>
    </div>

    <script>
        function switchTheme(theme) {
            const themeLink = document.getElementById('theme-css');
            const buttons = document.querySelectorAll('.theme-switcher .btn');
            
            // Update CSS file
            themeLink.href = theme === 'ntg' ? './ntg-theme.min.css' : './central-theme.min.css';
            
            // Update button states
            buttons.forEach((btn, index) => {
                if ((theme === 'ntg' && index === 0) || (theme === 'central' && index === 1)) {
                    btn.classList.add('active');
                    btn.classList.remove('btn-outline-primary');
                    btn.classList.add('btn-primary');
                } else {
                    btn.classList.remove('active');
                    btn.classList.remove('btn-primary');
                    btn.classList.add('btn-outline-primary');
                }
            });
            
            console.log(\`✅ Theme switched to: \${theme === 'ntg' ? 'NT.GOV.AU' : 'NTG Central'}\`);
        }
        
        console.log('🎨 NT Government Web Design System loaded');
        console.log('📦 Distribution files:');
        console.log('   • components.min.js');
        console.log('   • components.min.css');
        console.log('   • ntg-theme.min.css');
        console.log('   • central-theme.min.css');
    </script>
    
    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

writeFileSync(join(distDir, 'index.html'), htmlContent);
console.log('  ✓ index.html created');

// Rename CSS file if needed
const wrongCSSPath = join(distDir, 'web-design-system.css');
const correctCSSPath = join(distDir, 'components.min.css');
if (existsSync(wrongCSSPath) && !existsSync(correctCSSPath)) {
  copyFileSync(wrongCSSPath, correctCSSPath);
  console.log('\n📝 Renamed web-design-system.css → components.min.css');
}

// Build summary
console.log('\n✅ Build complete!\n');
console.log('📦 Distribution files in dist/:');
console.log('   • components.min.js       - Minified component library');
console.log('   • components.min.css      - Minified component styles');
console.log('   • ntg-theme.min.css       - Minified NT.GOV.AU theme');
console.log('   • central-theme.min.css   - Minified NTG Central theme');
console.log('   • index.html              - Demo page with theme switching');
console.log('   • index.d.ts              - TypeScript definitions');
console.log('\n🚀 To test: open dist/index.html in a browser');
