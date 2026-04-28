# Header DXP Component — Deployment Ready

**Status:** ✅ **PREPARED AND VALIDATED**

The Header DXP component has been successfully prepared and validated. All source files are in place at `dist/components/header/` and the manifest schema is correct.

## Pre-Deployment Checklist

- ✅ Component source copied from `src/components/Header/dxp/` to `dist/components/header/`
- ✅ Theme CSS inlined into `dist/components/header/previews/wrapper.html`
- ✅ Manifest schema validation passed
- ✅ Entry point (`main.js`) verified

## Next Steps: Authenticate and Deploy

### 1. Authenticate with Squiz DXP

```bash
dxp-next auth login --tenant=<TENANT-ID>
```

Replace `<TENANT-ID>` with your DXP tenant ID. You can find this in:
- Your Squiz DXP Console URL
- Your account settings in the DXP admin panel
- Your Squiz documentation or onboarding materials

**Example:**
```bash
dxp-next auth login --tenant=my-tenant-id-abc123
```

This is a one-time setup. The CLI will securely store your authentication token.

### 2. Deploy the Component

Once authenticated, run:

```bash
npm run cmp-deploy
```

This will:
- Push the Header component to your DXP tenant
- Register it as an available component service
- Make it available for use in Page Builder

### 3. Verify Deployment

After deployment succeeds, verify in the DXP Console:

1. Navigate to **Component Service** → **Components & Layouts**
2. Look for **NT Gov Header** in the component list
3. Check that the manifest displays:
   - **Name:** `header`
   - **Namespace:** `ntg-web-design-system`
   - **Type:** `edge`
   - **Inputs:** variant, agencyName, navItems, showSearch, searchVariant, etc.

## Using the Component in Squiz DXP

Once deployed, drop the **NT Gov Header** component into the **header** zone of the `full-width-section` Page Layout.

## Troubleshooting

**"Unauthorized" (401) error:**
- You haven't authenticated yet, or your session expired
- Run: `dxp-next auth login --tenant=<TENANT-ID>`

**"Cannot upload component version ... already exists" error:**
- The component version has already been deployed to this tenant
- **Solution:** Increment the version in `src/components/Header/dxp/manifest.json`

  ```json
  {
    "version": "1.0.1"  // Bump from 1.0.0 to 1.0.1 (or 1.1.0 for minor, 2.0.0 for major)
  }
  ```

- Then re-prepare and re-deploy:
  ```bash
  npm run cmp-prepare
  npm run cmp-deploy
  ```

**"No components found" error:**
- The `cmp-prepare` step may not have run
- Retry: `npm run cmp-prepare && npm run cmp-deploy`

**Component not appearing in Page Builder:**
- Verify deployment succeeded (check DXP Console)
- Refresh the Page Builder UI
- Clear your browser cache

**For more help:**
See [src/components/Header/dxp/README.md](src/components/Header/dxp/README.md) or [CONTRIBUTING.md](CONTRIBUTING.md#component-services).
