const LOGIN = "user_login";
const LOGOUT = "user_logout";
const REFRESH = "renew_refreshToken";

const AuthInitialState = {
  accessToken: null,
  refreshToken: null,
  userEmail: "",
};

export const login_sucess = (data: any) => ({
  //redux의 action 향후 분리필요
  type: LOGIN,
  data,
});

export const log_out = () => ({
  //redux의 action 향후 분리필요
  type: LOGOUT,
});

export const AuthReducer = (state = AuthInitialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
        expiredTime: action.data.accessTokenExpiresIn,
        userEmail: "tempEmail", //임시값, api붙이면 추가 설정 필요
      };

    case LOGOUT:
      return {
        state: AuthInitialState,
      };

    case REFRESH:
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
