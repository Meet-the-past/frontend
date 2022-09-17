export interface ImageDto {
  //결과 이미지 정보에 대한 DTO
  image_id: number;
  after_url: string;
}

export interface ResultImageDto {
  origin_url: string;
  processed_url: string;
}
// redux's CONST
export const GET_AUTH = "LOGIN";
export const RESET_AUTH = "LOGOUT";
export const REFRESH_AUTH = "RENEW_REFRESHTOKEN";

export const GET_EMAIL = "USER_EMAIL";
export const RESET_USER_INFO = "RESET_USER_INFO";

export const GET_TASK_ID = "GET_TASK_ID";
export const DELETE_TASK_ID = "DELETE_TASK_ID";
