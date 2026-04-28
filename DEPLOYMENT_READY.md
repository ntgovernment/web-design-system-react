# Header DXP Component — Deployment Complete

**Status:** ✅ **DEPLOYED AND LIVE**

The Header DXP component (v1.0.1) has been successfully deployed to the Squiz DXP cloud.

**Deployment Details:**

- **Namespace:** `ntg-web-design-system`
- **Component:** `header`
- **Version:** `1.0.1`
- **Type:** Edge Function (Server-Side Rendering)
- **Status:** Live on DXP Cloud

## Deployment Checklist

- ✅ Component source prepared (`npm run cmp-header-prepare`)
- ✅ Manifest schema validated (`npm run cmp-header-deploy:dry-run`)
- ✅ Version bumped from 1.0.0 → 1.0.1
- ✅ Deployed to DXP cloud (`npm run cmp-header-deploy`)
- ✅ Component available in Page Builder
- ✅ Code committed and pushed to GitHub

## Using the Component in Squiz DXP

The Header component is now available for use in the DXP Page Builder:

1. In the DXP Console, navigate to **Page Builder**
2. Create a new page or edit an existing one
3. Add the **NT Gov Header** component to the **header** zone
4. Configure the component with:
   - **Variant:** `nt-gov-au`, `agency-internet`, or `other-site`
   - **Navigation Items:** Array of `{ label, href, icon?, active? }`
   - **Search:** Enable/disable and set variant (`expanded` or `icon`)
   - **Agency Name:** (for agency-internet and other-site variants)

See [src/components/Header/dxp/README.md](src/components/Header/dxp/README.md) for full configuration details.

## Future Deployments

To deploy new versions or bug fixes:

1. Make changes to `src/components/Header/` (component code or styles)
2. Update the version in `src/components/Header/dxp/manifest.json` using semantic versioning:
   ```json
   "version": "1.0.2"  // increment patch, minor, or major
   ```
3. Regenerate inlined CSS (if you edited styles):
   ```bash
   node scripts/inline-header-css.js
   ```
4. Commit and push to GitHub:
   ```bash
   git add -A
   git commit -m "Deploy: Header component v1.0.2 — <change description>"
   git push origin <branch>
   ```
5. Deploy to DXP:
   ```bash
   npm run cmp-header-prepare
   npm run cmp-header-deploy
   ```

The `cmp-header-prepare` and `cmp-header-deploy` commands will auto-run if you use npm task hooks. The Footer component service uses parallel `cmp-footer-*` scripts.
