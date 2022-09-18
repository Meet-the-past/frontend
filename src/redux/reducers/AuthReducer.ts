import { GET_AUTH, RESET_AUTH, REFRESH_AUTH } from "../../utils/types";

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
        expiredTime: new Date(action.data.expiredTime).getTime(), //Date타입 파싱
      };

    case RESET_AUTH:
      return {
        state: AuthInitialState,
      };

    case REFRESH_AUTH:
      return {
        ...state,
        accessToken: action.data.access_token,
        expiredTime: new Date(action.data.expiredTime).getTime(), //향후 backendResponse수정 및 프론트코드 바꾸기
      };
    default:
      return state;
  }
};
