# Deployment

## Local

```bash
npm start
```

Open http://localhost:4173.

## GitHub Pages

The project is static. Push the repository's `main` branch and select **GitHub Actions** under repository **Settings → Pages**. The workflow in `.github/workflows/deploy-pages.yml` deploys the repository root. The application uses hash-based routing and relative assets so it works in a repository subpath.

## Other static hosts

Upload the repository root to Cloudflare Pages, Netlify or another static host. No build step is required; the publish directory is `.`.