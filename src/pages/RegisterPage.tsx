import React, { useState } from "react";
import CommonNavbar from "../components/CommonNavbar";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";

function RegisterPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    userName: "",
    password: "",
    checkPassword: "",
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
            회원 가입
          </h1>

          <InputBox
            text={userInfo.email}
            onChange={handleChange}
            placeholder="E-mail"
            icon="/assets/images/people-Icon.png"
          />

          <InputBox
            text={userInfo.userName}
            onChange={handleChange}
            placeholder="Name"
            icon="/assets/images/people-Icon.png"
          />

          <InputBox
            text={userInfo.password}
            onChange={handleChange}
            placeholder="password"
            icon="/assets/images/password-Icon.png"
            type="password"
          />

          <InputBox
            text={userInfo.checkPassword}
            onChange={handleChange}
            placeholder="Conform Password"
            icon="/assets/images/password-Icon2.png"
            type="password"
          />

          <div className="mt-5 w-full items-center text-center relative flex justify-center align-middle rounded-full">
            <button className="w-3/5 h-12 border-black border-2  bg-gray-600 hover:bg-gray-400 text-white font-bold rounded-full">
              회원가입
            </button>
          </div>

          <p className="mt-16 text-center text-xl font-bold text-textColor">
            <span>Already have account?</span>
            <Link to="/login">
              <span className="text-blue-800 hover:text-blue-500"> Login!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
