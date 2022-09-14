import { GET_EMAIL, RESET_USER_INFO } from "../../utils/types";

export const get_email = (data: any) => ({
  //로그인성공 시 userEmail정보 등록
  type: GET_EMAIL,
  data,
});

export const reset_userInfo = () => ({
  //로그아웃, 토큰만료시 user정보 reset
  type: RESET_USER_INFO,
});
