import {
  GET_EMAIL,
  GET_AUTH,
  RESET_AUTH,
  REFRESH_AUTH,
} from "../../utils/types";

const AuthInitialState = {
  accessToken: null,
  refreshToken: null,
  expiredTime: null,
};

export const login_sucess = (data: any) => ({
  //redux의 action 향후 분리필요
  type: GET_AUTH,
  data,
});

export const reset_auth = () => ({
  //redux의 action 향후 분리필요
  type: RESET_AUTH,
});

export const renew_auth = (data: any) => ({
  //redux의 action 향후 분리필요
  type: REFRESH_AUTH,
  data,
});

export const get_email = (data: any) => ({
  //redux의 action 향후 분리필요
  type: GET_EMAIL,
  data,
});

export const AuthReducer = (state = AuthInitialState, action: any) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
        expiredTime: action.data.accessTokenExpiresIn,
      };

    case RESET_AUTH:
      return {
        state: AuthInitialState,
      };

    case REFRESH_AUTH:
      return {
        ...state,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
        expiredTime: action.data.accessTokenExpiresIn,
      };
    default:
      return state;
  }
};
