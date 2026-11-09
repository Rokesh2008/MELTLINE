# MELTLINE — Real-data geospatial MVP

MELTLINE is a browser-based glacial-lake investigation workspace focused initially on South Lhonak Lake, Sikkim.

## Live functionality
- Interactive Leaflet maps using OpenStreetMap, Esri World Imagery and OpenTopoMap.
- Draw/edit study boundaries and save them in browser storage.
- Export study areas as GeoJSON and import polygon/multipolygon GeoJSON.
- Search real Sentinel-1 GRD and Sentinel-2 L2A catalogue metadata through the Copernicus Data Space STAC API.
- Retrieve real hourly historical weather/reanalysis through the Open-Meteo Archive API.
- Query nearby OpenStreetMap waterways, roads and settlement tags through Overpass.
- Create local investigations; persist them in the browser; export workspace JSON.
- Create traceable HEC-RAS scenario input manifests; save and export configurations.
- Generate evidence registers and print/save report previews.

## Run locally
No build step or npm dependency install is required. Open index.html through a local HTTP server, for example:
```bash
python -m http.server 4173
```
Then open http://localhost:4173.

## Deployment
The repository is deployed with GitHub Pages from main. All paths are relative so it works at https://rokesh2008.github.io/MELTLINE/.

## External services and attribution
- Copernicus Data Space STAC: https://documentation.dataspace.copernicus.eu/APIs/STAC.html
- Open-Meteo Historical Weather: https://open-meteo.com/en/docs/historical-weather-api
- OpenStreetMap: https://www.openstreetmap.org/copyright
- OpenTopoMap: https://opentopomap.org/about
- Esri World Imagery: attribution is returned by Esri and displayed in the map.
- Leaflet: https://leafletjs.com/
- Leaflet.draw: https://github.com/Leaflet/Leaflet.draw

Public services have availability, fair-use, licence and latency constraints. For a sustained production service, proxy catalogue/weather requests through a backend, cache responses, observe rate limits, and review provider terms.

## What is not yet operational
This is a **real-data geospatial MVP**, not a certified GLOF early-warning system. This deployment does not yet include:
- secure multi-user identity, organisation tenancy or server-side database persistence;
- automated downloading and raster processing of full-resolution Sentinel assets;
- calibrated lake-water classification and validated bathymetry/volume estimation;
- a remote HEC-RAS/HEC-HMS compute worker and hydraulic result ingestion;
- validated flood exposure calculations from hydraulic rasters;
- LangGraph/LLM agent execution;
- institutional alerts or emergency notifications.

The Breach Laboratory saves and exports scenario configurations, but does not claim to run HEC-RAS. The app must not be used for emergency decisions or public warning. Historical reanalysis is not a local weather station and a scenario is not a forecast.

## Data privacy
Investigation settings, study polygons and scenarios are stored in the current browser's localStorage. They are not synchronised to a secure shared workspace. Do not store confidential information in this public static deployment.

## Scientific guardrails
- A configured site coordinate is not a surveyed lake boundary.
- Surface area is not lake volume.
- Sentinel catalogue metadata is not a processed water mask.
- Weather reanalysis is contextual, not a breach trigger.
- OSM feature absence does not prove physical feature absence.
- Exposure intersection does not establish structural damage.
- Scenario simulation is conditional on its inputs and is not a prediction.
