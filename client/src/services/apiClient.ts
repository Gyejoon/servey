import axios from 'axios';
import { useHistory } from 'react-router';

const API_ROOT = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_ROOT,
  timeout: 10000,
});

apiClient.interceptors.response.use((response: any) => {
  if (response.status === 401) {
    const history = useHistory();
    history.push('/login');
    return response;
  }

  return response;
});

export const setHeader = (jwt: string) => {
  apiClient.defaults.headers['Authorization'] = `Bearer ${jwt}`;
};

export default apiClient;
