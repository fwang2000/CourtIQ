"""CourtIQ FastAPI entrypoint.

M0 scaffold: app factory, CORS, and a /health liveness probe.
The typed stat endpoints (§5 of the design doc) land in M1b.
"""
from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app import __version__
from app.config import get_settings

settings = get_settings()


def create_app() -> FastAPI:
    app = FastAPI(
        title=f"{settings.app_name} API",
        version=__version__,
        description="Grounded NBA analyst API. Stats are computed in code, never by the LLM.",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=[settings.frontend_origin],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get("/health", tags=["meta"])
    def health() -> dict[str, str]:
        """Liveness probe."""
        return {
            "status": "ok",
            "app": settings.app_name,
            "version": __version__,
            "environment": settings.environment,
        }

    return app


app = create_app()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.main:app", host="127.0.0.1", port=5000, reload=True)
