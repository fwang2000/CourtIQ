# Architecture Decision Log — CourtIQ

Each ADR captures one decision, its status, and its rationale. New decisions get
the next number and append here. The full context lives in
[`../courtiq-design.md`](../courtiq-design.md).

| # | Decision | Status |
|---|---|---|
| ADR-001 | Data store = SQLite cache for the MVP; Postgres + pgvector deferred until RAG needs vectors. All SQL confined to the DAL so migration stays cheap. | Accepted |
| ADR-002 | Backend = **FastAPI**; discard the Flask stub. Pydantic serves validation + LLM tool schemas + OpenAPI docs; async fits IO-bound LLM/DB work. | Accepted |
| ADR-003 | The LLM never computes or invents stats. Deterministic tools only; provenance (season + source) on every stat. | Accepted |
| ADR-004 | Data source = `nba_api` (live, primary) ingested into the SQLite cache on a cadence, behind one source adapter; tools read the cache, never the live API. RAPTOR kept as a static CSV supplement; `balldontlie` reserved as a fallback adapter. Gated on the M1a spike. | Accepted |
| ADR-005 | Player **archetypes** = deterministic unsupervised clustering over advanced stats (repurposed sklearn) + a rule-based skill-set radar; labeled "derived, not official", always shown with stat basis + nearest exemplars. | Accepted |
| ADR-006 | **Team-level analysis** is a first-class MVP capability but runs on a parallel, off-critical-path track (M-TEAM → M-FE2). | Accepted |
| ADR-007 | The **frontend is a tracked deliverable** (M-FE1, M-FE2), not an incidental wrapper. | Accepted |
| ADR-008 | Frontend = **Next.js (App Router) + TypeScript**, retaining MUI. SSR/SEO for shareable pages, file-based routing, TS types mirroring the Pydantic contract. CRA `react-scripts` shell dropped; theme/nav/pages ported. | Accepted |

Open: LLM provider/model for M2 (decide at M2 start).
