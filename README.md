# MELTLINE — Glacial Hazard Intelligence

An interactive, dependency-free front-end prototype for the MELTLINE product blueprint.

## Run locally

Requirements: Node.js 18+ (no npm packages are required).

```bash
npm start
```

Open http://localhost:4173.

## What is implemented

- Public landing page, sign-in, registration, password recovery and first-time workspace setup.
- Mission Control and map-led workspace shell.
- Lake Registry and site profile.
- Investigation wizard and investigation overview.
- Satellite Observation Lab, acquisition timeline, lake evolution and environmental context.
- Hazard review and multi-agent workflow console.
- Breach Laboratory, simulation viewer and scenario comparison.
- Impact Atlas, population/infrastructure assessment and response-planning desk.
- Evidence Ledger and report builder/library.
- Alerts, monitoring configuration, data catalogue, team/access, settings, job centre, audit log and help.
- Working route navigation, local demo session, wizard state, modal forms, source toggles, report/CSV/JSON downloads and interactive controls.

## Important prototype boundary

This repository is the **front-end prototype**, not the operational scientific system. It uses clearly labelled demonstration fixtures and custom SVG cartographic illustrations. It does not yet connect to Copernicus, NASA GPM, ERA5, PostGIS, LangGraph, Celery, MinIO or HEC-RAS. It does not calculate actual GLOF risk, issue warnings or run hydraulic simulations. The UI intentionally displays “not connected”/“demo” states where a real service is required.

The real-data implementation should follow the MELTLINE Complete Application Blueprint: start with reproducible South Lhonak satellite ingestion and lake-boundary validation, then terrain/HEC-RAS workflows, then agent orchestration and impact assessment.

## Deployment

This is a static site and can be hosted on GitHub Pages, Cloudflare Pages, Netlify or any static web host. For GitHub Pages, set the Pages deployment source to **GitHub Actions**. The included workflow deploys the repository root on pushes to `main`. See `docs/GITHUB_SETUP.md`.