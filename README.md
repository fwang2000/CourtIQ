# CourtIQ

An AI basketball analyst. Ask natural-language questions about NBA players and
teams; CourtIQ answers with **real statistics computed in code** — player
lookups, comparisons, derived archetypes/skill-sets, and team analysis — with the
season and source recorded on every number. The LLM only selects tools and
explains results; it never does arithmetic or invents stats.

> Built on the cloned `Metaball` repo (originally a college-basketball ML
> scaffold). The React/MUI theme and page structure were ported into a Next.js
> app; the Flask stub and Selenium scraper were discarded. See
> [`docs/courtiq-design.md`](docs/courtiq-design.md).

## Repository layout

```
server/        FastAPI backend (Python)
  app/           main.py (app factory + /health), config.py
  tests/         pytest smoke tests
  data/          NBA datasets — RAPTOR CSV (static supplement), all_seasons.csv (fixture)
  models/        sklearn clustering — repurposed for player archetypes (M-ARCH)
  requirements.txt, pyproject.toml, .env.example
web/           Next.js (App Router) + TypeScript frontend
  src/app/       routes: / (landing), /about, /search, /methodology, /author
  src/components/NavigationBar.tsx
  src/theme/     ported MUI theme
  src/lib/       typed API client
docs/          design doc + architecture decision log (ADRs)
```

## Getting started

### Backend (FastAPI)

```bash
cd server
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env            # fill in as needed
uvicorn app.main:app --reload --port 5000 --host 127.0.0.1
# health check: http://127.0.0.1:5000/health
pytest                          # run smoke tests
```

### Frontend (Next.js)

```bash
cd web
npm install
cp .env.example .env.local
npm run dev                     # http://localhost:3000  (/api/* proxies to :5000)
npm run typecheck
```

## Status

M0 (project reset + scaffold) complete: FastAPI skeleton with `/health`, Next.js +
TypeScript app with the ported theme/nav/pages, docs, and dead files removed.
Next: **M1a** — validate `nba_api` reachability, headers, rate limits, and ToS
before building the ingestion pipeline (M1b). See the milestone table in the
design doc.
