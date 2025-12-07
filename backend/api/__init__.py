from fastapi import APIRouter
from . import auth, users, products

router = APIRouter()

# Include all API routers
router.include_router(auth.router, prefix="/auth", tags=["authentication"])
router.include_router(users.router, prefix="/users", tags=["users"])
router.include_router(products.router, prefix="/products", tags=["products"])