# Splunk Dashboard Mockups - Cloudflare Pages Static Site

This is a static stakeholder demo gallery for OPSTAT Splunk dashboard mockups.

## Contents

- `index.html` - main demo page
- `styles.css` - responsive styling
- `script.js` - dashboard filtering and image preview modal
- `assets/` - optimized mockup images exported from the source PDF
- `source/B-Mock-ups.pdf` - original source PDF
- `_headers` - basic Cloudflare Pages security headers

## Deploy to Cloudflare Pages

### Option 1: Drag and drop

1. Log in to Cloudflare.
2. Go to **Workers & Pages** > **Pages**.
3. Choose **Upload assets**.
4. Upload this folder or the generated ZIP.
5. No build command is required.

### Option 2: Git-backed deployment

1. Commit this folder to a repository.
2. Create a Cloudflare Pages project from the repository.
3. Use these settings:
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `/` or project root
4. Deploy.

## Recommended next work

- Replace mockup images as designs evolve.
- Add sample SPL snippets after data source owners approve field names and index naming.
- Add stakeholder signoff status per dashboard.
