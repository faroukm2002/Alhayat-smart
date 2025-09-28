import { User } from "@/lib/types/user";

export async function login(
  email: string,
  password: string
): Promise<User | null> {
  // TODO: Implement login logic
  return null;
}

export async function logout(): Promise<void> {
  // TODO: Implement logout logic
}

export async function getCurrentUser(): Promise<User | null> {
  // TODO: Implement get current user logic
  return null;
}
