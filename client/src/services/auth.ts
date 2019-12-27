import apiClient from './apiClient';
import { LoginRequest, AuthenticationResponse, User } from 'shared/model/auth';

export default {
  login: (request: LoginRequest) => {
    return apiClient.post<AuthenticationResponse>('/v1/auth/login', request);
  },
  me: () => {
    return apiClient.get<User>('/v1/auth/me');
  },
};
