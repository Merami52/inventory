// lib/auth/client.ts
import { User } from './types';

// Get token from localStorage
export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
}

// Set token in localStorage
export function setToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
}

// Remove token from localStorage
export function removeToken(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
  }
}

// Get user info from token (decode JWT)
export function getUserFromToken(): User | null {
  const token = getToken();
  if (!token) return null;

  try {
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    const user = JSON.parse(decodedPayload);
    return {
      id: user.id || user.sub,
      email: user.email,
      name: user.name,
    };
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return !!getToken();
}

// Sign out function
export function signOut(): Promise<void> {
  return new Promise((resolve) => {
    removeToken();
    resolve();
  });
}