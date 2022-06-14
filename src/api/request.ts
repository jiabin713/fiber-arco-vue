import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { HttpResponse } from './global';
import { Notification } from '@arco-design/web-vue';
import { getToken } from '@/utils/auth';

const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// if (import.meta.env.VITE_API_BASE_URL) {
//   axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
// }

const request = axios.create({
  baseURL: '/api',
  timeout: 3 * 1000,
  withCredentials: true,
});

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // let each request carry token
    // this example using the JWT token
    // Authorization is a custom headers key
    // please modify it according to the actual situation
    const token = getToken();
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  },
);
// add response interceptors
request.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const { success, data, errorCode, errorMessage } = response.data;

    // // if the custom code is not 20000, it is judged as an error.
    if (!success) {
      Notification.error({
        content: errorMessage || 'Error',
        duration: 5 * 1000,
      });
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if ([50008, 50012, 50014].includes(res.code) && response.config.url !== '/api/user/info') {
      //   Dialog.error({
      //     title: 'Confirm logout',
      //     content: 'You have been logged out, you can cancel to stay on this page, or log in again',
      //     okText: 'Re-Login',
      //     async onOk() {
      //       const userStore = useUserStore();

      //       window.location.reload();
      //     },
      //   });
      // }
      return Promise.reject(new Error(errorMessage || 'Error'));
    }
    return data;
  },
  (error) => {
    Notification.error({
      content: error.response?.data.errorMessage || error.message,
      duration: 3 * 1000,
    });
    return Promise.reject(error);
  },
);

export default request;
