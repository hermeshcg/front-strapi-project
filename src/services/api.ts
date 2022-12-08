import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  timeout: 1000,
});

axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = sessionStorage.getItem('@bearer');
    config.headers!.Authorization = `Bearer ${token}`;

    return config;
  }
);

export default api;
