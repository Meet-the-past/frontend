import { GET_EMAIL, RESET_USER_INFO } from "../../utils/types";

export const get_email = (data: any) => ({
  type: GET_EMAIL,
  data,
});

export const reset_userInfo = () => ({
  type: RESET_USER_INFO,
});
