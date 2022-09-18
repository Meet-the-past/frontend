import axios from "axios";
import store from "../redux/configStore";

const BASEURL = "http://localhost:8000/api/v1/";

const commonApi = (url: string, options: any = null) => {
  const authData = store.getState();
  console.log(authData);
  return axios.create({
    baseURL: url,
    ...options,
  });
};

const authApi = (url: string, options: any = null) => {
  return axios.create({
    baseURL: url,
    ...options,
  });
};

const refreshApi = (url: string, options: any = null) => {
  return axios.create({
    baseURL: url,
    ...options,
  });
};

export const defaultAxios = commonApi(BASEURL); //Header에 토큰을 필요로 하지 않을 때 사용
export const authAxios = authApi(BASEURL); //Header에서 토큰을 필요로 할 때 사용
export const renewTokenAxios = refreshApi(BASEURL); //accessToken을 refresh할 때 사용

renewTokenAxios.interceptors.request.use((config: any) => {
  // HTTP Authorization 요청 헤더에 jwt-token을 넣음
  // 서버측 미들웨어에서 이를 확인하고 검증한 후 해당 API에 요청함.
  const authData = store.getState().Auth as any;
  const refreshToken = authData.refreshToken;
  config.headers.Authorization = `${refreshToken}`;
  return config;
});

authAxios.interceptors.request.use((config: any) => {
  // HTTP Authorization 요청 헤더에 jwt-token을 넣음
  // 서버측 미들웨어에서 이를 확인하고 검증한 후 해당 API에 요청함.
  const authData = store.getState().Auth as any;
  const accessToken = authData.accessToken;
  config.headers.Authorization = `${accessToken}`;
  return config;
});
