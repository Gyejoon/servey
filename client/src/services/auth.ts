import apiClient from './apiClient';
import { LoginRequest } from '../../../shared/src/model/auth';

export default {
  login: (request: LoginRequest) => {
    return apiClient.post('/auth/login', request);
  },
};
