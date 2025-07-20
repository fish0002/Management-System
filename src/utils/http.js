import axios from 'axios';

const instance = axios.create({
   baseURL: '/api/',
   timeout: 5000,
   withCredentials: true // 全局启用
});
instance.interceptors.request.use(
   config => {
      // 在发送请求前进行处理，例如添加 token
      return config;
   },
   error => {
      return Promise.reject(error);
   }
);

// 响应拦截器
instance.interceptors.response.use(
   response => {
      return response.data;
   },
   error => {
      return Promise.reject(error);
   }
);
export const httpGet = (url, query) => {
   return instance.get(url, query);
};
export const httpPost = (url, data) => {
   return instance.post(url, data);
};
