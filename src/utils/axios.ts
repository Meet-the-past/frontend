import axios from "axios";
import store from "../redux/configStore";

const BASEURL = "http://localhost:8000/api/v1/"; //향후 backend이름으로 분리하기 (지금은 임시로 타 서버의 데이터를 이용)

const commonApi = (url: string, options: any = null) => {
  return axios.create({
    baseURL: url,
    ...options,
  });
};

const authApi = (url: string, options: any = null) => {
  const authData = store.getState().Auth as any;
  const accessToken = authData.accessToken;
  //const refreshToken = authData.refreshToken;
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: accessToken,
    },
    ...options,
  });
};

export const defaultAxios = commonApi(BASEURL); //Header에 토큰을 필요로 하지 않을 때 사용
export const authAxios = authApi(BASEURL); //Header에서 토큰을 필요로 할 때 사용
