import { LoginRequest, LoginResponse } from './types';

import request from '@/api/request';

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

export const queryUserInfo = async () => {
  return request.get(`${URL}/info`);
};
