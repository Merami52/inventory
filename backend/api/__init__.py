from fastapi import APIRouter
from . import auth, users, products, orders, customers, categories

router = APIRouter()

# Include all API routers
router.include_router(auth.router, prefix="/auth", tags=["authentication"])
router.include_router(users.router, prefix="/users", tags=["users"])
router.include_router(products.router, prefix="/products", tags=["products"])
router.include_router(orders.router, prefix="/orders", tags=["orders"])
router.include_router(customers.router, prefix="/customers", tags=["customers"])
router.include_router(categories.router, prefix="/categories", tags=["categories"])