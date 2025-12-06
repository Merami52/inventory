from typing import List, Optional
from ..models.product import Product, ProductCreate, ProductUpdate

class ProductService:
    def __init__(self):
        # In a real application, this would connect to a database
        self.products_db = []
        self.next_id = 1

    def get_products(self, skip: int = 0, limit: int = 100) -> List[Product]:
        """Get list of products with pagination"""
        return self.products_db[skip:skip + limit]

    def get_product(self, product_id: int) -> Optional[Product]:
        """Get product by ID"""
        for product in self.products_db:
            if product.id == product_id:
                return product
        return None

    def create_product(self, product: ProductCreate) -> Product:
        """Create a new product"""
        db_product = Product(
            id=self.next_id,
            name=product.name,
            description=product.description,
            price=product.price,
            quantity=product.quantity
        )
        self.products_db.append(db_product)
        self.next_id += 1
        return db_product

    def update_product(self, product_id: int, product_update: ProductUpdate) -> Optional[Product]:
        """Update product by ID"""
        for i, product in enumerate(self.products_db):
            if product.id == product_id:
                updated_product = product.copy(update=product_update.dict(exclude_unset=True))
                self.products_db[i] = updated_product
                return updated_product
        return None

    def delete_product(self, product_id: int) -> bool:
        """Delete product by ID"""
        for i, product in enumerate(self.products_db):
            if product.id == product_id:
                del self.products_db[i]
                return True
        return False