export interface LoginRequest {
  username: string;
  password: string;
  remember?: boolean;
}

export interface Token {
  access_token: string;
  refresh_token: string;
}

export interface LoginResponse {
  id: string;
  username: string;
  avatar: string;
  token: Token;
}
