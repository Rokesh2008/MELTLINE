# Deployment and production integration

## Static geospatial MVP
GitHub Actions publishes the repository root to GitHub Pages. Leaflet and application source are delivered as ordinary static assets.

## Before operational production
1. Deploy a backend API (FastAPI) behind HTTPS.
2. Configure authentication (OIDC/Supabase/Auth0 or institutional identity) and server-side authorisation.
3. Add PostgreSQL + PostGIS and object storage.
4. Proxy Copernicus STAC and Open-Meteo through the backend; cache and observe provider limits.
5. Add a reproducible raster-processing worker (GDAL/Rasterio/SNAP) and version all outputs.
6. Deploy an isolated HEC-RAS worker on a supported Windows environment. Accept only validated, versioned configurations. Store HEC-RAS outputs and metadata; do not make the LLM execute shell commands.
7. Integrate LangGraph only after deterministic processing APIs exist. Require structured, evidence-linked output.
8. Validate historical reconstructions with independent observations and report uncertainty.
9. Add monitoring, alerting, rate limiting, security review, backups, audit logging, and operational runbooks.
10. Do not issue public warnings or evacuation orders without responsible authority and formal validation.
