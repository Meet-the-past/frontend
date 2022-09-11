import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

interface AuthRouteProps {
  option: boolean;
}
// true => 로그인한 유저만 출입 가능
// false => 로그인한 유저는 출입 불가능

export function AuthRoute({ option }: AuthRouteProps) {
  const accessToken = useSelector((state: any) => state.Auth.accessToken); //향후 토큰의 유효성을 체크하도록 코드 변경 (지금은 토큰값의 유무로 판별)
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (accessToken == null) {
        if (option) {
          //option이 true일때 로그인으로 강제 이동
          window.alert("로그인이 만료되었습니다.");
          navigate("/login");
        }
      } else {
        //로그인을 했을때
        if (!option) {
          navigate("/");
          window.alert("비정상적인 접근 입니다.");
        }
      }
    })();
  }, []);

  return <Outlet />;
}

export default AuthRoute;
