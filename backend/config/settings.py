rom pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    # Database settings
    database_url: str = "postgresql://user:password@localhost:5432/storeadmin"
    database_url_mysql: Optional[str] = "mysql://user:password@localhost:3306/storeadmin"
    database_url_mongo: Optional[str] = "mongodb://localhost:27017/storeadmin"
    
    # API settings
    api_v1_prefix: str = "/api/v1"
    debug: bool = True
    project_name: str = "StoreAdmin Backend API"
    version: str = "1.0.0"
    
    # Security settings
    secret_key: str = "your-secret-key-here"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    
    # Supabase settings (for compatibility with frontend)
    supabase_url: Optional[str] = None
    supabase_key: Optional[str] = None

    class Config:
        env_file = ".env"


settings = Settings()