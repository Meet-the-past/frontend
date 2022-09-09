import React, { useState } from "react";
import CommonNavbar from "../components/CommonNavbar";
import { Link } from "react-router-dom";
import FormInputBox from "../components/FormInputBox";
import FormButton from "../components/FormButton";

import peopleIcon from "../assets/images/peopleIcon.svg";
import passwordIcon from "../assets/images/passwordIcon.svg";

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
    <div className="bg-[url('../public/assets/images/background-1.png')]">
      <CommonNavbar />

      <div className="flex justify-center items-center min-h-screen">
        <div className="shadow-lg w-4/5 h-3/4 rounded-3xl bg-white opacity-80 m-16">
          <h1 className="mt-20 text-center text-4xl font-bold text-textColor">
            로그인
          </h1>

          <FormInputBox
            text={userInfo.email}
            onChange={handleChange}
            placeholder="E-mail"
            icon={peopleIcon}
          />
          <FormInputBox
            text={userInfo.password}
            onChange={handleChange}
            placeholder="password"
            icon={passwordIcon}
            type="password"
          />

          <FormButton text="로그인" height="h-12" width="w-3/5" color="gray" />

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
  );
}

export default LoginPage;
