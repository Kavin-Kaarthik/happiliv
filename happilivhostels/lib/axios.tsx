// config/axios.tsx
import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT } from './constant';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: API_TIMEOUT,
});

// Optional: Add interceptors here for token handling or error logging
api.interceptors.request.use(
  (config) => {
    // Perform actions before request is sent, like adding an Auth token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;