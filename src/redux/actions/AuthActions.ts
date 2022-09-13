import { GET_AUTH, RESET_AUTH, REFRESH_AUTH } from "../../utils/types";

export const login_sucess = (data: any) => ({
  type: GET_AUTH,
  data,
});

export const reset_auth = () => ({
  type: RESET_AUTH,
});

export const renew_auth = (data: any) => ({
  type: REFRESH_AUTH,
  data,
});
