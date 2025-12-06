from fastapi import APIRouter
from typing import List
from pydantic import BaseModel

from ..models.product import Product
from ..services.product_service import ProductService

router = APIRouter()

class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    quantity: int

class ProductUpdate(BaseModel):
    name: str = None
    description: str = None
    price: float = None
    quantity: int = None

@router.get("/", response_model=List[Product])
async def get_products(skip: int = 0, limit: int = 100):
    """Get all products"""
    service = ProductService()
    return service.get_products(skip, limit)

@router.get("/{product_id}", response_model=Product)
async def get_product(product_id: int):
    """Get product by ID"""
    service = ProductService()
    product = service.get_product(product_id)
    if not product:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@router.post("/", response_model=Product)
async def create_product(product: ProductCreate):
    """Create a new product"""
    service = ProductService()
    return service.create_product(product)

@router.put("/{product_id}", response_model=Product)
async def update_product(product_id: int, product_update: ProductUpdate):
    """Update product by ID"""
    service = ProductService()
    updated_product = service.update_product(product_id, product_update)
    if not updated_product:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Product not found")
    return updated_product

@router.delete("/{product_id}")
async def delete_product(product_id: int):
    """Delete product by ID"""
    service = ProductService()
    success = service.delete_product(product_id)
    if not success:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product deleted successfully"}