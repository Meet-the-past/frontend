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
    passwordConfirm: "",
  });

  //출력할 오류 메세지
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");
  const [userNameMesssage, setUserNameMesssage] = useState<string>("");

  //정규식
  const EMAIL_REGEX =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  // 유효성 검사
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validUserName, setValidUserName] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [validPasswrodConfirm, setValidPasswrodConfirm] =
    useState<boolean>(false);

  const checkEmail = () => {
    if (userInfo.email === "") {
      setValidEmail(false);
      setEmailMessage("필수 정보입니다.");
    } else {
      setValidEmail(EMAIL_REGEX.test(userInfo.email));
      if (!validEmail) {
        setEmailMessage("이메일 형식이 유효하지 않습니다.");
      } else {
        setEmailMessage("사용 가능한 이메일입니다.");
      }
    }
  };

  const checkUserName = () => {
    if (userInfo.userName === "") {
      setValidUserName(false);
      setUserNameMesssage("필수 정보입니다.");
    } else {
      setValidUserName(true);
    }
  };

  const checkPassword = () => {
    if (userInfo.password === "") {
      setValidPassword(false);
      setPasswordMessage("필수 정보입니다.");
    } else {
      setValidPassword(PWD_REGEX.test(userInfo.password));
      if (!validPassword) {
        setPasswordMessage(
          "8-24자 영문 대 소문자, 숫자, 특수문자를 사용하세요"
        );
      } else {
        setPasswordMessage("사용 가능한 비밀번호 입니다.");
      }
    }
  };

  const checkPasswordConfirm = () => {
    if (userInfo.passwordConfirm === "") {
      setValidPasswrodConfirm(false);
      setPasswordConfirmMessage("필수 정보입니다.");
    } else {
      setValidPasswrodConfirm(userInfo.password === userInfo.passwordConfirm);
      if (!validPasswrodConfirm) {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      } else {
        setPasswordConfirmMessage("");
      }
    }
  };

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
            blurEvnet={checkEmail}
          />

          <InputBox
            text={userInfo.userName}
            onChange={handleChange}
            placeholder="userName"
            icon="/assets/images/people-Icon.png"
            message={userNameMesssage}
            isValid={validUserName}
            blurEvnet={checkUserName}
          />

          <InputBox
            text={userInfo.password}
            onChange={handleChange}
            placeholder="password"
            icon="/assets/images/password-Icon.png"
            type="password"
            message={passwordMessage}
            isValid={validPassword}
            blurEvnet={checkPassword}
          />

          <InputBox
            text={userInfo.passwordConfirm}
            onChange={handleChange}
            placeholder="passwordConfirm"
            icon="/assets/images/password-Icon2.png"
            type="password"
            message={passwordConfirmMessage}
            isValid={validPasswrodConfirm}
            blurEvnet={checkPasswordConfirm}
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
