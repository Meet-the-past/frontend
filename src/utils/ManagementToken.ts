import { renewTokenAxios } from "./axios";

const ValidationAccessToken = (tokenData: any) => {
  if (tokenData.accessToken) {
    const currentTime = new Date().getTime() / 1000;

    if (tokenData.expiredTime > currentTime + 100000000000000) {
      return true;
    }
  }
  return false;
};

const RequestRefreshToken = async () => {
  return await renewTokenAxios.post(`/users/auth/reissue`, {});
};

export { ValidationAccessToken, RequestRefreshToken };
