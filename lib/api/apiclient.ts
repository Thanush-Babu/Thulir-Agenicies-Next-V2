import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_ENDPOINTS, HTTP_STATUS, API_MESSAGES, API_TIMEOUT, ENV_CONFIG } from './apiconfig';

// Create axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: ENV_CONFIG.API_BASE_URL,
  timeout: API_TIMEOUT.DEFAULT,
  withCredentials: true, // For HttpOnly cookies
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Log requests in development
    if (ENV_CONFIG.IS_DEVELOPMENT) {
      console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log responses in development
    if (ENV_CONFIG.IS_DEVELOPMENT) {
      console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    }
    return response;
  },
  async (error) => {
    // Log errors in development
    if (ENV_CONFIG.IS_DEVELOPMENT) {
      console.error(`❌ API Error: ${error.response?.status} ${error.config?.url}`, {
        message: error.message,
        response: error.response?.data,
      });
    }

    // Handle authentication errors
    if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
      const originalRequest = error.config;
      
      // Check if this is already a retry attempt
      if (originalRequest._retry) {
        // If already retried, redirect to login
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }

      // Mark as retry attempt
      originalRequest._retry = true;

      try {
        // Try to refresh the token using HttpOnly cookies
        // The refresh endpoint will automatically use the refresh token cookie
        const refreshResponse = await axiosInstance.post(API_ENDPOINTS.AUTH.REFRESH);
        
        // Update the auth store to reflect successful refresh
        if (typeof window !== 'undefined') {
          const { useAuthStore } = await import('@/lib/store/auth-store');
          useAuthStore.setState({ isAuthenticated: true });
        }

        // Retry the original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        // If refresh fails, redirect to login
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }
    }

    return Promise.reject(error);
  }
);

// Helper function to create FormData for file uploads
const createFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();
  
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      if (Array.isArray(data[key])) {
        // Handle arrays (like images, tags, etc.)
        data[key].forEach((item: any, index: number) => {
          if (item instanceof File) {
            // For File objects, append directly
            formData.append(key, item);
          } else {
            // For other array items, append with index
            formData.append(`${key}[${index}]`, item);
          }
        });
      } else if (data[key] instanceof File) {
        // Handle single file
        formData.append(key, data[key]);
      } else if (typeof data[key] === 'object') {
        // Handle objects (like specifications)
        formData.append(key, JSON.stringify(data[key]));
      } else {
        // Handle primitive values
        formData.append(key, data[key]);
      }
    }
  });
  
  return formData;
};

// API Client Class
class ApiClient {
  // Generic request methods
  async get(url: string, config: AxiosRequestConfig = {}) {
    try {
      const response = await axiosInstance.get(url, {
        timeout: API_TIMEOUT.SHORT,
        ...config,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post(url: string, data: any = {}, config: AxiosRequestConfig = {}) {
    try {
      const response = await axiosInstance.post(url, data, {
        timeout: API_TIMEOUT.DEFAULT,
        ...config,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put(url: string, data: any = {}, config: AxiosRequestConfig = {}) {
    try {
      const response = await axiosInstance.put(url, data, {
        timeout: API_TIMEOUT.DEFAULT,
        ...config,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete(url: string, config: AxiosRequestConfig = {}) {
    try {
      const response = await axiosInstance.delete(url, {
        timeout: API_TIMEOUT.SHORT,
        ...config,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // File upload method
  async upload(url: string, data: Record<string, any>, config: AxiosRequestConfig = {}) {
    try {
      const formData = createFormData(data);
      const response = await axiosInstance.post(url, formData, {
        timeout: API_TIMEOUT.UPLOAD,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        ...config,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Error handler
  handleError(error: any) {
    if (error.response) {
      const { status, data } = error.response;
      return {
        status,
        message: data.message || API_MESSAGES.ERROR,
        errors: data.errors || [],
        data: data.data || null,
      };
    } else if (error.request) {
      return {
        status: 0,
        message: API_MESSAGES.NETWORK_ERROR,
        errors: [],
        data: null,
      };
    } else {
      return {
        status: 0,
        message: error.message || API_MESSAGES.ERROR,
        errors: [],
        data: null,
      };
    }
  }

  // Authentication methods
  async login(credentials: { username: string; password: string }) {
    return await this.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
  }

  async refresh() {
    return await this.post(API_ENDPOINTS.AUTH.REFRESH);
  }

  async logout() {
    try {
      await this.post(API_ENDPOINTS.AUTH.LOGOUT);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  // Product methods
  async getProducts(params: Record<string, any> = {}) {
    return await this.get(API_ENDPOINTS.PRODUCTS.LIST, { params });
  }

  async getProduct(id: string) {
    return await this.get(API_ENDPOINTS.PRODUCTS.DETAIL(id));
  }

  async createProduct(data: Record<string, any>) {
    return await this.upload(API_ENDPOINTS.PRODUCTS.CREATE, data);
  }

  async updateProduct(id: string, data: Record<string, any>) {
    return await this.upload(API_ENDPOINTS.PRODUCTS.UPDATE(id), data);
  }

  async deleteProduct(id: string) {
    return await this.delete(API_ENDPOINTS.PRODUCTS.DELETE(id));
  }

  // Activity methods
  async getLatestActivities() {
    return await this.get(API_ENDPOINTS.ACTIVITIES.LATEST);
  }

  async getRecentActivities() {
    return await this.get(API_ENDPOINTS.ACTIVITIES.RECENT);
  }

  // Contact methods
  async submitContact(data: Record<string, any>) {
    return await this.post(API_ENDPOINTS.CONTACT.SUBMIT, data);
  }

  async getContacts(params: Record<string, any> = {}) {
    return await this.get(API_ENDPOINTS.CONTACT.LIST, { params });
  }

  async getContact(id: string) {
    return await this.get(API_ENDPOINTS.CONTACT.DETAIL(id));
  }

  // Health check
  async healthCheck() {
    return await this.get(API_ENDPOINTS.HEALTH);
  }
}

// Create and export singleton instance
const apiClient = new ApiClient();

export default apiClient;
export { ApiClient };
