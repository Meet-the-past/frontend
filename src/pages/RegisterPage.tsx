import React, { useState, useEffect } from "react";
import CommonNavbar from "../components/CommonNavbar";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import FormButton from "../components/FormButton";
import FormAlertMessage from "../components/FormAlertMessage";

function RegisterPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    userName: "",
    password: "",
    checkPassword: "",
  });

  //출력할 오류 메세지
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");

  //정규식
  const EMAIL_REGEX =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  // 유효성 검사
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [validPasswrodConfirm, setValidPasswrodConfirm] =
    useState<boolean>(false);

  useEffect(() => {
    if (userInfo.email === "") {
      setValidEmail(false);
      setEmailMessage("필수 정보 입니다.");
    } else {
      setValidEmail(EMAIL_REGEX.test(userInfo.email));
      console.log(validEmail);
      console.log(userInfo.email);
      if (!validEmail) {
        setEmailMessage("이메일 형식이 적합하지 않습니다.");
      } else {
        setEmailMessage("사용 가능한 이메일입니다.");
      }
    }
  }, [userInfo.email]);

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
            placeholder="email"
            icon="/assets/images/people-Icon.png"
            message={emailMessage}
            isValid={validEmail}
          />

          <InputBox
            text={userInfo.userName}
            onChange={handleChange}
            placeholder="userName"
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
            placeholder="checkPassword"
            icon="/assets/images/password-Icon2.png"
            type="password"
          />

          <FormButton
            text="회원가입"
            height="h-12"
            width="w-3/5"
            color="gray"
          />

          <p className="mt-10 text-center text-xl font-bold text-textColor">
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
