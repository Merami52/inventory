from typing import List, Optional
from ..models.user import User, UserCreate, UserUpdate

class UserService:
    def __init__(self):
        # In a real application, this would connect to a database
        self.users_db = []
        self.next_id = 1

    def get_users(self, skip: int = 0, limit: int = 100) -> List[User]:
        """Get list of users with pagination"""
        return self.users_db[skip:skip + limit]

    def get_user(self, user_id: int) -> Optional[User]:
        """Get user by ID"""
        for user in self.users_db:
            if user.id == user_id:
                return user
        return None

    def create_user(self, user: UserCreate) -> User:
        """Create a new user"""
        db_user = User(
            id=self.next_id,
            username=user.username,
            email=user.email,
            full_name=user.full_name
        )
        self.users_db.append(db_user)
        self.next_id += 1
        return db_user

    def update_user(self, user_id: int, user_update: UserUpdate) -> Optional[User]:
        """Update user by ID"""
        for i, user in enumerate(self.users_db):
            if user.id == user_id:
                updated_user = user.copy(update=user_update.dict(exclude_unset=True))
                self.users_db[i] = updated_user
                return updated_user
        return None

    def delete_user(self, user_id: int) -> bool:
        """Delete user by ID"""
        for i, user in enumerate(self.users_db):
            if user.id == user_id:
                del self.users_db[i]
                return True
        return False