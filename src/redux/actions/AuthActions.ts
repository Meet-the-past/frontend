import { GET_AUTH, RESET_AUTH, REFRESH_AUTH } from "../../utils/types";

export const login_sucess = (data: any) => ({
  //로그인 성공시 토큰정보 갱신
  type: GET_AUTH,
  data,
});

export const reset_auth = () => ({
  //로그아웃, 토큰유효성 실패시 정보 삭제
  type: RESET_AUTH,
});

export const renew_auth = (data: any) => ({
  //refresh 토큰 갱신
  type: REFRESH_AUTH,
  data,
});
