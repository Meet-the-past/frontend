export interface ImageDto {
  image_id: number;
  after_url: string;
}

// redux's CONST
export const GET_AUTH = "LOGIN";
export const RESET_AUTH = "LOGOUT";
export const REFRESH_AUTH = "RENEW_REFRESHTOKEN";
export const GET_EMAIL = "USER_EMAIL";
