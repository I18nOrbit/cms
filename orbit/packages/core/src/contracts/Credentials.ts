export interface Credentials {
  type: string;
  token: string;
  abilities: string[];
  expiresAt: string;
  lastUsedAt: string | null;
  name: string | null;
}
