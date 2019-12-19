import apiClient from './apiClient';
import { LoginRequest, User } from 'shared/model/auth';

export default {
  login: (request: LoginRequest) => {
    return apiClient.post<User>('/v1/auth/login', request);
  },
};
