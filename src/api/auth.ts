import { LoginRequest, LoginResponse } from '@/types/auth';

import request from './request';

const URL = '/auth';

// export const AuthService = {
//   login: async (data: Partial<LoginRequest>): Promise<LoginResponse> => {
//     return request.post(`${URL}/login`, data);
//   },

//   logout: async () => {
//     return request.post(`${URL}/logout`);
//   },
// };

export const login = async (data: Partial<LoginRequest>): Promise<LoginResponse> => {
  return request.post(`${URL}/login`, data);
};

export const logout = async () => {
  return request.post(`${URL}/logout`);
};
