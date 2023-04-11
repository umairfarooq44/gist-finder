import axios, { AxiosRequestConfig } from 'axios';
import { concatUrlWithParams, IParam } from './concatUrlWithParams';

const axiosInstance = axios.create({
  baseURL: ' https://api.github.com'
});

type BaseParams = { url: string; params?: IParam };
type IGet = { config?: AxiosRequestConfig; } & BaseParams;
type IPost = {
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
};


const get = async <T = unknown>(args: IGet) => {
  return axiosInstance.get<T>(
    concatUrlWithParams(args.url, args.params),
    args.config
  );
};

const post = async <T = unknown>(args: IPost) => {
  return axiosInstance.post<T>(args.url, args.data, args.config);
};

const put = async <T = unknown>(args: IPost) => {
  return axiosInstance.put<T>(args.url, args.data, args.config);
};

const patch = async <T = unknown>(args: IPost) => {
  return axiosInstance.patch<T>(args.url, args.data, args.config);
};

const deleteMethod = async <T = unknown>(args: Omit<IPost, 'data'>) => {
  return axiosInstance.delete<T>(args.url, args.config);
};


const httpService = {
  get,
  post,
  put,
  patch,
  delete: deleteMethod,
};

export default httpService;
