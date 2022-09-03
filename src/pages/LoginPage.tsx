import React, { useState } from "react";
import CommonNavbar from "../components/CommonNavbar";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import FormButton from "../components/FormButton";

function LoginPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="bg-[url('../public/assets/images/background-1.png')] w-full">
      <CommonNavbar />

      <div className="flex justify-center items-center w-full h-screen">
        <div className="shadow-lg w-4/5 h-3/4 rounded-3xl bg-white opacity-80">
          <h1 className="mt-20 text-center text-4xl font-bold text-textColor">
            로그인
          </h1>

          <InputBox
            text={userInfo.email}
            onChange={handleChange}
            placeholder="E-mail"
            icon="/assets/images/people-Icon.png"
          />
          <InputBox
            text={userInfo.password}
            onChange={handleChange}
            placeholder="password"
            icon="/assets/images/password-Icon.png"
            type="password"
          />

          <FormButton text="로그인" height="h-12" width="w-3/5" color="gray" />

          <p className="mt-10 text-center text-xl font-bold text-textColor">
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
  );
}

export default LoginPage;
