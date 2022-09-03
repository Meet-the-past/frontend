import React, { useState } from "react";
import CommonNavbar from "../components/CommonNavbar";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";

function LoginPage() {
  const [userInfo, setUserInfo] = useState({
    username: "",
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
            text={userInfo.username}
            onChange={handleChange}
            placeholder="username"
            icon="/assets/images/people-Icon.png"
          />
          <InputBox
            text={userInfo.password}
            onChange={handleChange}
            placeholder="password"
            icon="/assets/images/password-Icon.png"
            type="password"
          />

          <div className="mt-5 w-full items-center text-center relative flex justify-center align-middle rounded-full">
            <button className="w-3/5 h-12 border-black border-2  bg-gray-600 hover:bg-gray-400 text-white font-bold  rounded-full">
              로그인
            </button>
          </div>

          <p className="mt-16 text-center text-xl font-bold text-textColor">
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
