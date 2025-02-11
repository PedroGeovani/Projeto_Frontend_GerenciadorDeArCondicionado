import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from "axios"

function apiConfig(baseUrl: string): AxiosRequestConfig {  
  return {
    baseURL: baseUrl,
  };
}

function initAxios(config: AxiosRequestConfig, token?: string): AxiosInstance {
  const defineInstance = axios.create(config)
  defineInstance.interceptors.request.use(
    (request) => {
      /*Implementar quando definir os niveis de autorização no backend*/
      //request.headers.Authorization = token ?? null
      return request;
    },
    (error) => {
      return Promise.reject(error)
    }
  );

  defineInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
  return defineInstance;
}

function api(baseURL = "/api", token?: string) {
  return initAxios(apiConfig(baseURL), token);
}

export default api;
