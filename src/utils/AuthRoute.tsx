import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CheckToken from "./CheckToken";

interface AuthRouteProps {
  option: boolean;
}
// true => 로그인한 유저만 출입 가능
// false => 로그인한 유저는 출입 불가능

export function AuthRoute({ option }: AuthRouteProps) {
  const navigate = useNavigate();
  console.log("cehck");
  useEffect(() => {
    (async () => {
      if (CheckToken()) {
        console.log("cehck");
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
