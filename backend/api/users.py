from fastapi import APIRouter, Depends, HTTPException
from typing import List
from pydantic import BaseModel

from models.user import User
from services.user_service import UserService
from .auth import get_current_active_user

router = APIRouter()

class UserCreate(BaseModel):
    username: str
    email: str
    full_name: str
    password: str

class UserUpdate(BaseModel):
    email: str
    full_name: str

@router.get("/", response_model=List[User])
async def get_users(skip: int = 0, limit: int = 100):
    """Get all users"""
    service = UserService()
    return service.get_users(skip, limit)

@router.get("/{user_id}", response_model=User)
async def get_user(user_id: int):
    """Get user by ID"""
    service = UserService()
    user = service.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/", response_model=User)
async def create_user(user: UserCreate):
    """Create a new user"""
    service = UserService()
    return service.create_user(user)

@router.put("/{user_id}", response_model=User)
async def update_user(user_id: int, user_update: UserUpdate):
    """Update user by ID"""
    service = UserService()
    updated_user = service.update_user(user_id, user_update)
    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")
    return updated_user

@router.delete("/{user_id}")
async def delete_user(user_id: int):
    """Delete user by ID"""
    service = UserService()
    success = service.delete_user(user_id)
    if not success:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}