import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ValidationAccessToken, RequestRefreshToken } from "./ManagementToken";
import { useSelector, useDispatch } from "react-redux";
import { reset_auth, login_sucess } from "../redux/actions/AuthActions";
import { reset_userInfo } from "../redux/actions/UserInfoActions";
interface AuthRouteProps {
  needLogin: boolean;
}
// true => 로그인한 유저만 출입
// false => 로그인한 유저는 출입 X

export function AuthRoute({ needLogin }: AuthRouteProps) {
  const dispatch = useDispatch();
  const authData = useSelector((state: any) => state.Auth);
  const navigate = useNavigate();

  const LoginRoute = (needLogin: boolean) => {
    if (needLogin) {
      navigate("/login");
      window.alert("로그인이 필요합니다");
    }
  };

  const NotLoginRoute = (needLogin: boolean) => {
    if (!needLogin) {
      navigate("/");
      window.alert("비정상적인 접근 입니다.");
    }
  };

  useEffect(() => {
    (async () => {
      if (authData.accessToken) {
        //accessToken여부 확인
        if (ValidationAccessToken(authData)) {
          //accessToken 유효성 확인

          NotLoginRoute(needLogin);
        } else {
          //accessToken이 만료
          RequestRefreshToken(authData) //refreshToken재발급 요청
            .then((response) => {
              console.log(response);
              dispatch(login_sucess(response.data)); //성공시 redux전역변수 값 변경
              NotLoginRoute(needLogin);
            })
            .catch((error) => {
              console.log(error);
              dispatch(reset_auth()); //실패시 (refreshToken만료) 값 지움
              dispatch(reset_userInfo());
              LoginRoute(needLogin);
            });
        }
      } else {
        LoginRoute(needLogin);
      }
    })();
  }, []);

  return <Outlet />;
}

export default AuthRoute;
