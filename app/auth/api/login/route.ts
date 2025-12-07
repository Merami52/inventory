// app/auth/api/login/route.ts
import { NextRequest } from 'next/server';
import { createToken, setUserCookie } from '@/lib/auth/server';
import { User } from '@/lib/auth/types';

// Mock database of users (in real app, this would be a real database)
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User'
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'Regular User'
  }
];

// Mock function to find user by email and password (in real app, you'd hash passwords)
function findUserByEmailAndPassword(email: string, password: string): User | undefined {
  // In a real application, you would verify the hashed password
  return mockUsers.find(user => user.email === email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Find user (in real app, verify password here)
    const user = findUserByEmailAndPassword(email, password);

    if (!user) {
      return Response.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Create JWT token
    const token = await createToken(user);

    // Set cookie with the token
    await setUserCookie(token);

    return Response.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      },
      token: token // Also return token in case client wants to store it locally too
    });
  } catch (error) {
    console.error('Login error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}