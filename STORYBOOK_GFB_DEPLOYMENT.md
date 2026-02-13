# Deploying Storybook to Squiz Matrix via Git File Bridge

This guide explains how to deploy the Storybook documentation site to Squiz Matrix using Git File Bridge (GFB) at the URL: `https://cmsexternal.nt.gov.au/webds/storybook`

## Overview

Storybook provides interactive documentation for all components in the NT Government Web Design System. Unlike the component library itself (which is deployed as individual Component Services), Storybook is deployed as a complete static site.

**Deployment Method**: Git File Bridge  
**Target URL**: https://cmsexternal.nt.gov.au/webds/storybook  
**Build Output**: `storybook-static/` directory

## Prerequisites

- Access to the Git File Bridge repository configured in Squiz Matrix
- Node.js 22+ installed locally
- Git installed and configured
- Clone of this repository (web-design-system)
- Clone of the GFB repository

## Build Process

### 1. Build Storybook for Squiz Matrix

Note: the Storybook *development server* (`npm run storybook`) runs from the repository root and does **not** use the `/webds/storybook/` base path. The `/webds/storybook/` base is applied only for production builds (so local dev won't produce the GFB-style asset paths).

From the web-design-system repository:

```bash
# Install dependencies (if not already done)
npm install

# Build Storybook with Squiz Matrix configuration
npm run build-storybook:squiz
```

This creates a production-ready Storybook site in the `storybook-static/` directory with:

- All asset paths configured for `/webds/storybook/` base path
- Optimized and minified JavaScript bundles
- Compiled CSS with theme support
- Static HTML files for all component stories

#### Optional: prepare a GFB-ready package (automated)

To simplify deployment to Git File Bridge you can create a ready-to-commit package that mirrors the expected GFB repo layout. This copies `storybook-static/` into `gfb-package/webds/storybook/` so you can directly copy or commit the prepared files.

```bash
# Build + prepare files for GFB in one step
npm run prepare-storybook-gfb

# The prepared files will be in:
# gfb-package/webds/storybook/
```

This is useful when you want a reproducible, reviewable package prior to copying into the GFB repository.

### 2. Verify Build Output

Before deploying, verify the build completed successfully:

```bash
# Check that storybook-static directory exists
ls storybook-static/

# Key files to verify:
# - index.html (main Storybook UI)
# - iframe.html (component preview frame)
# - assets/ (JS and CSS bundles)
# - sb-addons/ (Storybook addon bundles)
# - sb-manager/ (Storybook manager runtime)
```

## Deployment to Git File Bridge

### Step 1: Navigate to GFB Repository

```bash
# Navigate to your Git File Bridge repository
cd /path/to/your/gfb-repo
```

### Step 2: Create Target Directory Structure

Ensure the correct directory structure exists in your GFB repo to match the Matrix configuration:

```bash
# Example: if GFB maps to /webds in Matrix
mkdir -p webds/storybook
```

**Note**: The exact directory structure depends on your GFB configuration in Squiz Matrix. Confirm with your Matrix administrator.

### Step 3: Copy Storybook Build

Copy the entire contents of `storybook-static/` to the GFB repository:

```bash
# From the GFB repository root
# Adjust paths based on your setup

# Clear existing files (be careful!)
rm -rf webds/storybook/*

# Copy new build
cp -r /path/to/web-design-system/storybook-static/* webds/storybook/
```

**Windows PowerShell**:

```powershell
# Clear existing files
Remove-Item webds\storybook\* -Recurse -Force

# Copy new build
Copy-Item C:\Projects\web-design-system\storybook-static\* webds\storybook\ -Recurse
```

### Step 4: Commit and Push to GFB

```bash
# Add all files
git add webds/storybook/

# Commit with descriptive message
git commit -m "Deploy Storybook v0.1.0 - [brief description of changes]"

# Push to trigger Git File Bridge sync
git push origin main
```

**Important**: Replace `main` with your configured branch name if different.

### Step 5: Verify in Squiz Matrix

1. **Allow time for GFB sync** (usually 1-5 minutes depending on configuration)
2. **Check Matrix Admin** to see file updates
3. **Clear Matrix cache** if needed (System Management > Caching)
4. **Visit the URL**: https://cmsexternal.nt.gov.au/webds/storybook
5. **Test navigation** between components
6. **Verify assets load** (check browser console for errors)

## Verification Checklist

After deployment, verify the following:

- [ ] Homepage loads at https://cmsexternal.nt.gov.au/webds/storybook
- [ ] All component stories are accessible
- [ ] Assets load correctly (no 404 errors in browser console)
- [ ] Theme switching works (NT.GOV.AU ↔ NTG Central)
- [ ] Accessibility addon functions properly
- [ ] All images and icons display
- [ ] Search functionality works
- [ ] Navigation between stories works

## Troubleshooting

### Assets Return 404 Errors

**Problem**: JavaScript/CSS files fail to load, browser console shows 404 errors.

**Likely Causes**:

- Base path configuration incorrect
- GFB directory structure doesn't match Matrix URL mapping
- Matrix caching issues

**Solutions**:

1. Verify base path in `.storybook/main.ts` is `/webds/storybook/`
2. Confirm GFB directory structure with Matrix administrator
3. Clear Matrix cache (System Management > Caching)
4. Check Matrix URL mapping for the Design Area

### Storybook Loads but Stories Don't Render

**Problem**: Main Storybook UI loads but component previews are blank.

**Likely Causes**:

- Bootstrap CSS not loading
- FontAwesome Kit not loading
- iframe.html not found

**Solutions**:

1. Check `iframe.html` exists in deployment
2. Verify Bootstrap CDN is accessible from browser
3. Check browser console for specific errors
4. Ensure Matrix doesn't block external CDN requests

### GFB Sync Not Triggering

**Problem**: Pushed changes don't appear in Matrix.

**Likely Causes**:

- GFB not configured correctly
- Wrong branch pushed
- GFB sync disabled or failing

**Solutions**:

1. Verify push to correct branch (check GFB configuration)
2. Check Matrix System Logs for GFB errors
3. Contact Matrix administrator to verify GFB status
4. Manually trigger sync in Matrix (if option available)

### Build Contains Wrong Paths

**Problem**: Built files reference wrong paths (e.g., `/assets/` instead of `/webds/storybook/assets/`).

**Likely Cause**: Base path not configured or build cache issue.

**Solutions**:

1. Verify `.storybook/main.ts` has `config.base = '/webds/storybook/';`
2. Clean build and rebuild:
   ```bash
   rm -rf storybook-static
   npm run build-storybook:squiz
   ```
3. Inspect `storybook-static/index.html` to verify paths

## Best Practices

### 1. Version Tracking

Include version numbers in commit messages:

```bash
git commit -m "Deploy Storybook v0.2.0 - Added new Alert component"
```

### 2. Testing Before Deploy

Always test the build locally before deploying:

```bash
# Serve locally with same base path
npx http-server storybook-static -p 8080

# Then test at: http://localhost:8080
```

**Note**: Local testing won't perfectly match the `/webds/storybook/` path, but verifies the build succeeded.

### 3. Backup Before Major Updates

Before deploying major Storybook updates:

1. Tag the current GFB commit: `git tag storybook-v0.1.0`
2. Document the deployed version
3. Keep rollback plan ready

### 4. Coordinate with Matrix Team

- Notify Matrix administrators before large deployments
- Schedule deployments during low-traffic periods
- Coordinate cache clearing if needed

### 5. Document Changes

Maintain a deployment log with:

- Date and time of deployment
- Version deployed
- Components added/changed
- Any issues encountered

## Directory Structure Reference

### Source Repository (web-design-system)

```
web-design-system/
├── .storybook/
│   ├── main.ts              # Base path configured here
│   ├── preview.tsx
│   └── ...
├── storybook-static/        # Build output (git-ignored)
│   ├── index.html
│   ├── iframe.html
│   ├── assets/
│   ├── sb-addons/
│   └── ...
└── package.json
```

### GFB Repository (example structure)

```
gfb-repo/
└── webds/
    └── storybook/          # Maps to /webds/storybook in Matrix
        ├── index.html
        ├── iframe.html
        ├── assets/
        ├── sb-addons/
        └── ...
```

### URL Mapping in Squiz Matrix

```
Git File Bridge Repo Path    →    Matrix URL
─────────────────────────────────────────────────
webds/storybook/index.html   →    https://cmsexternal.nt.gov.au/webds/storybook/
webds/storybook/assets/*     →    https://cmsexternal.nt.gov.au/webds/storybook/assets/*
```

## Updates and Maintenance

### Updating Storybook

When updating to a new Storybook version:

1. Update dependencies in `package.json`
2. Run `npm install`
3. Test locally: `npm run storybook`
4. Build and test: `npm run build-storybook:squiz`
5. Deploy following standard process above

### Updating Components

When components are added or updated:

1. Update component and stories in `src/components/`
2. Test locally: `npm run storybook`
3. Build: `npm run build-storybook:squiz`
4. Deploy to GFB
5. Update deployment log

### Rollback Procedure

If deployment causes issues:

```bash
# In GFB repository
git revert HEAD
git push origin main

# Or restore to specific version
git reset --hard <previous-commit-hash>
git push origin main --force
```

## Related Documentation

- [SQUIZ_DXP_DEPLOYMENT.md](SQUIZ_DXP_DEPLOYMENT.md) - Component library deployment
- [README.md](README.md) - Main project documentation
- [FEATURES.md](FEATURES.md) - Component feature documentation

## Support

For deployment issues:

1. Check this troubleshooting section
2. Review Matrix System Logs
3. Contact Matrix administrator for GFB issues
4. Contact development team for build issues
