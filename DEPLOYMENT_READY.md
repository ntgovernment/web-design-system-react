# DXP Component Services — Deployment Status

**Status:** ✅ **THREE COMPONENTS DEPLOYED AND LIVE**

The Header, Footer, and Quick Exit DXP Component Services have been successfully deployed to the Squiz DXP cloud under the `ntg-web-design-system` namespace.

---

## Header Component Service

**Deployed location:**
`https://dxp.squiz.cloud/organization/ntgov-4670/component-service/all-components/ntg-web-design-system/header`

| Field     | Value                                        |
| --------- | -------------------------------------------- |
| Namespace | `ntg-web-design-system`                      |
| Name      | `header`                                     |
| Version   | `1.0.3`                                      |
| Type      | Edge (Server-Side Rendering)                 |
| Previews  | `nt-gov-au`, `agency-internet`, `other-site` |

### Deployment Checklist — Header

- ✅ Component source prepared (`npm run cmp-header-prepare`)
- ✅ Manifest schema validated (`npm run cmp-header-deploy:dry-run`)
- ✅ Deployed to DXP cloud (`npm run cmp-header-deploy`)
- ✅ Component available in Page Builder
- ✅ Code committed and pushed to GitHub

### Using the Header in Squiz DXP

1. In the DXP Console, navigate to **Page Builder**
2. Create or edit a page and add the **NT Gov Header** component to the **header** zone
3. Configure:
   - **Variant:** `nt-gov-au`, `agency-internet`, or `other-site`
   - **Navigation Items:** Array of `{ label, href, icon?, active? }`
   - **Search:** Enable/disable and set variant (`expanded` or `icon`)
   - **Agency Name:** (for `agency-internet` and `other-site` variants)

See [src/components/Header/dxp/README.md](src/components/Header/dxp/README.md) for full configuration details.

---

## Footer Component Service

**Deployed location:**
`https://dxp.squiz.cloud/organization/ntgov-4670/component-service/all-components/ntg-web-design-system/footer`

| Field     | Value                                                          |
| --------- | -------------------------------------------------------------- |
| Namespace | `ntg-web-design-system`                                        |
| Name      | `footer`                                                       |
| Version   | `0.1.1`                                                        |
| Type      | Edge (Server-Side Rendering)                                   |
| Previews  | `default`, `minimal`, `multiple-sections`, `social-media-only` |

### Deployment Checklist — Footer

- ✅ Component source prepared (`npm run cmp-footer-prepare`)
- ✅ Manifest schema validated (`npm run cmp-footer-deploy:dry-run`)
- ✅ Deployed to DXP cloud (`npm run cmp-footer-deploy`)
- ✅ Component available in Page Builder
- ✅ Code committed and pushed to GitHub (v0.5.0)

### Using the Footer in Squiz DXP

1. In the DXP Console, navigate to **Page Builder**
2. Create or edit a page and add the **NT Gov Footer** component to the **footer** zone
3. Configure:
   - **Sections:** Array of `{ title, links: [{ label, href }], columns? }` — main link groups
   - **Social Links:** Array of `{ platform, href, icon? }` — shown under "Connect with us"
   - **Bottom Links:** Utility links (Privacy, Accessibility, Contact, etc.)
   - **Acknowledgement:** Acknowledgement of Country text
   - **Copyright Text:** Copyright statement

See [src/components/Footer/dxp/README.md](src/components/Footer/dxp/README.md) for full configuration details.

---

---

## Quick Exit Component Service

**Deployed location:**
`https://dxp.squiz.cloud/organization/ntgov-4670/component-service/all-components/ntg-web-design-system/quick-exit`

| Field     | Value                                                                      |
| --------- | -------------------------------------------------------------------------- |
| Namespace | `ntg-web-design-system`                                                    |
| Name      | `quick-exit`                                                               |
| Version   | `0.1.0`                                                                    |
| Type      | Edge (Server-Side Rendering)                                               |
| Icon      | `exit_to_app` (red)                                                        |
| Previews  | `default`, `domestic-violence`, `child-safety`, `whistleblower`, `mental-health` |

### Deployment Checklist — Quick Exit

- ✅ Component source prepared (`npm run cmp-quickexit-prepare`)
- ✅ Manifest schema validated (`npm run cmp-quickexit-deploy:dry-run`)
- ✅ Deployed to DXP cloud (`npm run cmp-quickexit-deploy`)
- ✅ Component available in Page Builder

### Using Quick Exit in Squiz DXP

1. In the DXP Console, navigate to **Page Builder**
2. Create or edit a page and add the **NT Gov Quick Exit** component to the **header** zone (above all page content)
3. Configure:
   - **Heading:** Banner heading (default: `Quick exit`)
   - **Content:** Body copy — include emergency contact info where relevant
   - **Exit URL:** Benign decoy site opened in a new tab (default: `https://www.bom.gov.au/`)
   - **Redirect URL:** URL the current tab is replaced with — disables back button (default: `https://www.google.com/`)
   - **ARIA Label:** Accessible label for screen readers

See [src/components/QuickExit/dxp/README.md](src/components/QuickExit/dxp/README.md) for full configuration details.

---

## Re-deploying a Component

To deploy a new version or bug fix:

1. Edit `src/components/{Name}/` (code or styles)
2. Bump the version in `src/components/{Name}/dxp/manifest.json`
3. Run `npm run build` to rebuild theme CSS bundles
4. Commit and push to GitHub
5. Deploy:

   ```bash
   # Header
   npm run cmp-header-deploy

   # Footer
   npm run cmp-footer-deploy

   # Quick Exit
   npm run cmp-quickexit-deploy
   ```

All deploy scripts automatically run `prepare` (copies source → `dist/components/{name}/` and inlines `theme-ntg.min.css`) before calling `dxp-next cmp deploy .`.

For a pre-flight validation without deploying:

```bash
npm run cmp-header-deploy:dry-run
npm run cmp-footer-deploy:dry-run
npm run cmp-quickexit-deploy:dry-run
```
