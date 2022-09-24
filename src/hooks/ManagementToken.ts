import { renewTokenAxios } from "../utils/axios";

/**
 * @param tokenData : accessToken 정보
 * @returns 토큰 재발급 여부
 */
const ValidationAccessToken = (tokenData: any) => {
  if (tokenData.accessToken) {
    const currentTime = new Date().getTime();

    if (tokenData.expiredTime > currentTime) {
      return true;
    }
  }
  return false;
};

/**
 *
 * @returns 토큰 재발급 함수
 */
const RequestRefreshToken = async () => {
  return await renewTokenAxios.post(`/users/auth/reissue`, {});
};

export { ValidationAccessToken, RequestRefreshToken };
