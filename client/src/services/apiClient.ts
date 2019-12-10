import axios from 'axios';


const API_ROOT = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_ROOT,
  timeout: 10000,
});

export const setHeader = (jwt: string) => {
  apiClient.defaults.headers['authorization'] = `Token ${jwt}`;
};

export default apiClient;
