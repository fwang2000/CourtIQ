"""Application configuration, loaded from environment (.env)."""
from __future__ import annotations

from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

# server/ directory (parent of app/)
SERVER_ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = SERVER_ROOT / "data"


class Settings(BaseSettings):
    """Runtime settings. Values come from env vars or server/.env."""

    model_config = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", extra="ignore"
    )

    app_name: str = "CourtIQ"
    environment: str = "development"

    # SQLite cache (M1). File lives beside the code by default.
    database_url: str = f"sqlite:///{SERVER_ROOT / 'courtiq.db'}"

    # nba_api ingestion knobs (M1a/M1b). Conservative defaults; tune after the spike.
    nba_api_request_delay_seconds: float = 0.6
    nba_api_max_retries: int = 3

    # LLM provider (M2). Loaded from env; never commit the key.
    llm_api_key: str | None = None
    llm_model: str | None = None

    # CORS: the Next.js dev origin.
    frontend_origin: str = "http://localhost:3000"


@lru_cache
def get_settings() -> Settings:
    return Settings()
