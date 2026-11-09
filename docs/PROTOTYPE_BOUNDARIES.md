# Prototype boundaries

This repository implements the front-end navigation and interaction prototype described in the MELTLINE application blueprint. It is not yet the operational scientific platform.

## Implemented in this build

- Public landing, authentication mock, registration mock, password recovery mock, onboarding and guided tour.
- Mission Control, Lake Registry, lake profile, investigation list and five-step investigation wizard.
- Observation Lab, lake evolution, environmental context and hazard review.
- Agent Operations Console with a timed UI demonstration (not real LLM calls).
- Breach Laboratory, simulation viewer and scenario comparison shells.
- Impact Atlas, population and infrastructure assessment, response planning.
- Evidence Ledger, report builder and report library.
- Alerts, monitoring configuration, data catalogue, team/access, settings, job centre, audit log and help.
- Local browser state for demo login, role, source toggles, investigation drafts and monitoring rules.
- Download actions for selected CSV, JSON, SVG and HTML demo artifacts.

## Not connected yet

- Authentication provider or backend session service.
- Copernicus STAC / Sentinel data retrieval.
- NASA GPM IMERG or ERA5 retrieval.
- Raster processing, NDWI/MNDWI/SAR classification and lake-boundary validation.
- PostgreSQL/PostGIS, object storage, Redis or Celery.
- LangGraph and external LLM providers.
- HEC-RAS / HEC-HMS worker or actual hydraulic model output.
- Population/infrastructure overlays computed from real data.
- Durable audit, email notification and team invitation services.

Every example value and cartographic rendering in the UI is labelled as a demo or illustration. Do not use the prototype for scientific conclusions, public warnings or operational decisions.