import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';


import { LoginRes, Response } from '../types/global';
import cookie from '../utils/cookie';

const openRequests: string[] = ['/authentication/signin'];

const commonConfig: AxiosRequestConfig = {};

export const ADMIN_BASE_URL = 'http://localhost:8090/api';

const administrationModuleConfig: AxiosRequestConfig = {
  ...commonConfig,
  baseURL: 'http://localhost:8090/api',
};


const applicationAxios = axios.create(administrationModuleConfig);

const authIgnore: string[] = ['/', '/complete-profile'];

const interceptAdminReq = (config: AxiosRequestConfig) => {
  const token = cookie.getCookie('jwt_info');

  // when request is open no need to add bearer token
  if (!openRequests.find((link) => link === config.url)) {
    if (token) {
      const jwtInfo: LoginRes = JSON.parse(token);
      // @ts-ignore
      config.headers['Authorization'] = `Bearer ${jwtInfo.token}`;
    }
  }
  return config;
};

const interceptAdminResError = (error: Error | AxiosError<AxiosResponse<Response>>) => {
  if (axios.isAxiosError(error)) {
    const e = error?.response;

    if (
      e?.status === 401 &&
      !authIgnore.includes(window.location.pathname) &&
      window.location.pathname !== '/signin'
    ) {
      window.location.href = '/signin';
    }

    if (import.meta.env.DEV) {
      if (e?.status === 400) toast.error(`Bad Request on, ${e.config.url}`);
      // @ts-ignore
      else toast.error((e?.data.message || e?.data?.data?.error) + '');
    }

    // unauthorized
    throw error;
  } else {
    console.log(error);
    return error;
  }
};

applicationAxios.interceptors.request.use(interceptAdminReq);
// applicationAxios.interceptors.response.use((config) => config, interceptAdminResError);

export { applicationAxios};
