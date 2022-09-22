import { GET_AUTH, RESET_AUTH, REFRESH_AUTH } from "../../utils/types";
const KR_TIME_DIFF = 9 * 60 * 60 * 1000; //UTC to KST (UTC + 9시간)
const AuthInitialState = {
  accessToken: null,
  refreshToken: null,
  expiredTime: null,
};

export const AuthReducer = (state = AuthInitialState, action: any) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
        expiredTime: new Date(action.data.expiredTime).getTime() + KR_TIME_DIFF, //Date타입 파싱
      };

    case RESET_AUTH:
      return {
        state: AuthInitialState,
      };

    case REFRESH_AUTH:
      return {
        ...state,
        accessToken: action.data.accessToken,
        expiredTime: new Date(action.data.expiredTime).getTime() + KR_TIME_DIFF, //향후 backendResponse수정 및 프론트코드 바꾸기
      };
    default:
      return state;
  }
};
