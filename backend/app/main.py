from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import router
from .config import settings

app = FastAPI(
    title="StoreAdmin Backend API",
    description="Backend API for inventory and order management system",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API router
app.include_router(router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "StoreAdmin Backend API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}