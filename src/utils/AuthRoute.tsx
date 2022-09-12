import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CheckAccessToken, RequestRefreshToken } from "./CheckToken";
import { useSelector, useDispatch } from "react-redux";
import { log_out, login_sucess } from "../redux/reducers/AuthReducer";

interface AuthRouteProps {
  option: boolean;
}
// true => 로그인한 유저만 출입 가능
// false => 로그인한 유저는 출입 불가능

export function AuthRoute({ option }: AuthRouteProps) {
  const dispatch = useDispatch();
  const authData = useSelector((state: any) => state.Auth);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (CheckAccessToken(authData)) {
        console.log("accessToken만료 X");
        if (!option) {
          navigate("/");
          window.alert("비정상적인 접근 입니다.");
        }
      } else {
        console.log("만료");
        //accessToken이 만료
        RequestRefreshToken(authData)
          .then((response) => {
            console.log(response);
            dispatch(login_sucess(response.data));
            if (!option) {
              navigate("/");
              window.alert("비정상적인 접근 입니다.");
            }
          })
          .catch((error) => {
            console.log(error);
            dispatch(log_out());
            if (option) {
              navigate("/login");
              window.alert("로그인이 필요합니다.");
            }
          });
      }
    })();
  }, []);

  return <Outlet />;
}

export default AuthRoute;
