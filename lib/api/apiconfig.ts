// API Configuration for Thulir Lab Instruments Backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

// API Endpoints Configuration
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REFRESH: `${API_BASE_URL}/auth/refresh`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
  },

  // Products
  PRODUCTS: {
    LIST: `${API_BASE_URL}/products`,
    CREATE: `${API_BASE_URL}/products`,
    DETAIL: (id: string) => `${API_BASE_URL}/products/${id}`,
    UPDATE: (id: string) => `${API_BASE_URL}/products/${id}`,
    DELETE: (id: string) => `${API_BASE_URL}/products/${id}`,
  },

  // Activities
  ACTIVITIES: {
    LATEST: `${API_BASE_URL}/activities/latest`,
    RECENT: `${API_BASE_URL}/activities/recent`,
  },

  // Contact
  CONTACT: {
    SUBMIT: `${API_BASE_URL}/contact`,
    LIST: `${API_BASE_URL}/contact`,
    DETAIL: (id: string) => `${API_BASE_URL}/contact/${id}`,
  },

  // Health Check
  HEALTH: `${API_BASE_URL}/health`,
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

// API Response Messages
export const API_MESSAGES = {
  SUCCESS: 'Operation completed successfully',
  ERROR: 'An error occurred',
  UNAUTHORIZED: 'Unauthorized access',
  NETWORK_ERROR: 'Network error occurred',
};

// File Upload Configuration
export const UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
  ],
  MAX_FILES: 10,
};

// API Timeout Configuration
export const API_TIMEOUT = {
  DEFAULT: 30000, // 30 seconds
  UPLOAD: 60000,  // 60 seconds for file uploads
  SHORT: 10000,   // 10 seconds for quick requests
};

// Environment Configuration
export const ENV_CONFIG = {
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  API_BASE_URL,
};

export default API_ENDPOINTS;
