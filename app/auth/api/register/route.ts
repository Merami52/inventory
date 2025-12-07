// app/auth/api/register/route.ts
import { NextRequest } from 'next/server';
import { createToken, setUserCookie } from '@/lib/auth/server';
import { User } from '@/lib/auth/types';

// Mock database of users (in real app, this would be a real database)
let mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User'
  }
];

// Mock function to find user by email (in real app, you'd hash passwords)
function findUserByEmail(email: string): User | undefined {
  return mockUsers.find(user => user.email === email);
}

// Mock function to add a new user
function addUser(userData: Omit<User, 'id'>): User {
  const newUser: User = {
    id: String(mockUsers.length + 1),
    ...userData
  };
  mockUsers.push(newUser);
  return newUser;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return Response.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return Response.json({ error: 'User with this email already exists' }, { status: 409 });
    }

    // Create new user (in real app, hash the password)
    const newUser = addUser({
      email,
      name: name || email.split('@')[0], // Use email prefix as name if not provided
    });

    // Create JWT token
    const token = await createToken(newUser);

    // Set cookie with the token
    await setUserCookie(token);

    return Response.json({
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      },
      token: token
    });
  } catch (error) {
    console.error('Registration error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}