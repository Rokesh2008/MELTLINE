# GitHub repository and deployment

Repository: https://github.com/Rokesh2008/MELTLINE

## GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Set the deployment source to **GitHub Actions** if it is not selected automatically.
3. Open **Actions** and inspect the `Deploy MELTLINE to GitHub Pages` workflow.
4. After the workflow completes successfully, the website will be available at:
   `https://rokesh2008.github.io/MELTLINE/`

The included `.github/workflows/deploy-pages.yml` deploys the static site on every push to `main` and supports manual dispatch.

## Local development

```bash
npm start
```

Open http://localhost:4173. No npm packages are required; Node.js 18+ is sufficient.