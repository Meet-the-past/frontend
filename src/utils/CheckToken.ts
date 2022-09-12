import axios from "./axios";

const CheckAccessToken = (tokenData: any) => {
  if (tokenData.accessToken) {
    const currentTime = new Date().getTime() / 1000;

    if (tokenData.expiredTime > currentTime + 10000) {
      return true;
    }
    return false;
  }
};

const RequestRefreshToken = async (tokenData: any) => {
  return await axios({
    method: "post",
    url: `auth/reissue`,
    data: {
      accessToken: tokenData.accessToken,
      refreshToken: tokenData.refreshToken,
    },
  });
};

export { CheckAccessToken, RequestRefreshToken };
