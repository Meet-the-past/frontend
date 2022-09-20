import React, { useState } from "react";
import CommonNavbar from "../components/CommonNavbar";
import { Link, useNavigate } from "react-router-dom";
import FormInputBox from "../components/FormInputBox";
import FormButton from "../components/FormButton";
import { defaultAxios } from "../utils/axios";

import { useDispatch } from "react-redux";
import { login_sucess } from "../redux/actions/AuthActions";
import { get_email } from "../redux/actions/UserInfoActions";

import peopleIcon from "../assets/images/peopleIcon.svg";
import passwordIcon from "../assets/images/passwordIcon.svg";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const requestLogin = () => {
    //null값이라면 예외처리코드 추가

    defaultAxios
      .post(`users/auth`, {
        email: userInfo.email,
        password: userInfo.password,
      })
      .then(function (response) {
        console.log(response);
        dispatch(login_sucess(response.data.result));
        dispatch(get_email(response.data.result.email));
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        window.alert("로그인 실패, Log 확인해주세요");
      });
  };

  return (
    <div>
      <CommonNavbar />
      <div className="bg-[url('../public/assets/images/background-1.png')]">
        <div className="flex justify-center items-center commonHeight">
          <div className="shadow-lg w-4/5 h-3/4 rounded-3xl bg-white opacity-80 m-16">
            <h1 className="mt-20 text-center text-4xl font-bold text-textColor">
              로그인
            </h1>

            <FormInputBox
              text={userInfo.email}
              onChange={handleChange}
              placeholder="email"
              icon={peopleIcon}
            />
            <FormInputBox
              text={userInfo.password}
              onChange={handleChange}
              placeholder="password"
              icon={passwordIcon}
              type="password"
            />

            <FormButton
              text="로그인"
              height="h-12"
              width="w-3/5"
              color="gray"
              onClick={requestLogin}
            />

            <p className="my-10 text-center text-xl font-bold text-textColor">
              <span>Not a member yet?</span>
              <Link to="/register">
                <span className="text-blue-800 hover:text-blue-500">
                  {" "}
                  Register!
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
