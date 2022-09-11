const LOGIN = "user_login";
const LOGOUT = "user_logout";
const REFRESH = "renew_refreshToken";

const AuthInitialState = {
  accessToken: null,
  refreshToken: null,
  userEmail: "",
};

export const login_sucess = (data: any) => ({
  type: LOGIN,
  data,
});

export const AuthReducer = (state = AuthInitialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
        expiredTime: action.data.accessTokenExpiresIn,
        userEmail: "tempEmail",
      };

    case LOGOUT:
      return {
        ...state,
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
