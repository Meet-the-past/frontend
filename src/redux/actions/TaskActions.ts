import { GET_TASK_ID, DELETE_TASK_ID } from "../../utils/types";

export const task_start = (data: any) => ({
  //로그인 성공시 토큰정보 갱신
  type: GET_TASK_ID,
  data,
});

export const task_end = (data: any) => ({
  //로그인 성공시 토큰정보 갱신
  type: DELETE_TASK_ID,
  data,
});
