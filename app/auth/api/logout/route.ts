// app/auth/api/logout/route.ts
import { NextRequest } from 'next/server';
import { clearUserCookie } from '@/lib/auth/server';

export async function POST(request: NextRequest) {
  try {
    // Clear the auth cookie
    await clearUserCookie();

    return Response.json({ message: 'Successfully logged out' });
  } catch (error) {
    console.error('Logout error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}