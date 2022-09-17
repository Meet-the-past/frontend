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
        accessToken: action.data.accessToken,
        expiredTime: new Date(action.data.expiredTime).getTime(),
      };
    default:
      return state;
  }
};
