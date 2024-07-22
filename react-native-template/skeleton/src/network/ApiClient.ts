import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';
import { AuthHelper } from './AuthHelper';
import { ApiError } from './ApiError';

// TODO: Should be read from environment config
const API_BASE_URL = 'http://localhost:3000/api';

const handleSuccess = <T>(response: AxiosResponse): T => {
  const { data, status } = response;
  if (status >= 300) {
    const errorMessage = (data && data.message) || status;
    throw new AxiosError(errorMessage, String(status), undefined, undefined, response);
  }
  return data as T;
};

const handleError = (e: AxiosError) => {
  const { message, response } = e;

  // @ts-ignore
  const errorMessage = response?.data?.message || message;
  throw new ApiError(errorMessage);
};

const withBearerTokenInterceptor = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(async function (config) {
    try {
      const token = await AuthHelper.getBearerToken();
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  });
  return axiosInstance;
};

const getAxiosInstance = (): AxiosInstance => {
  let axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  axiosInstance = withBearerTokenInterceptor(axiosInstance);

  return axiosInstance;
};

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = getAxiosInstance();
  }

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.axiosInstance.request(config);
      return Promise.resolve(handleSuccess<T>(response));
    } catch (e) {
      return Promise.reject(handleError(e as AxiosError));
    }
  }

  public async get<T>(url: string, params?: unknown, headers?: RawAxiosRequestHeaders) {
    return this.request<T>({ method: 'GET', url, params, headers });
  }

  public async post<D, T>(
    url: string,
    data: D,
    params?: unknown,
    headers?: RawAxiosRequestHeaders,
  ) {
    return this.request<T>({ method: 'POST', url, data, params, headers });
  }

  public async put<D, T>(url: string, data: D, params?: unknown, headers?: RawAxiosRequestHeaders) {
    return this.request<T>({ method: 'PUT', url, data, params, headers });
  }

  public async delete<T>(url: string, params?: unknown, headers?: RawAxiosRequestHeaders) {
    return this.request<T>({ method: 'DELETE', url, params, headers });
  }
}

const apiClient = new ApiClient();
export { apiClient as ApiClient };
