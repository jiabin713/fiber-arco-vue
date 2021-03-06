import * as AuthService from '@/api/auth';

import { clearToken, setToken } from '@/utils/auth';

import { LoginRequest } from '@/api/auth/types';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userState = {};
  const login = async (req: LoginRequest) => {
    try {
      const res = await AuthService.login(req);
      setToken(res.token.access_token);
    } catch (err) {
      clearToken();
      throw err;
    }
  };

  const logout = async () => {
    await AuthService.logout();
    clearToken();
  };

  return { userState, login, logout };
});
