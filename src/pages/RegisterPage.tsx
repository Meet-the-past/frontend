import React, { useState } from "react";
import CommonNavbar from "../components/CommonNavbar";
import { Link, useNavigate } from "react-router-dom";
import FormInputBox from "../components/FormInputBox";
import FormButton from "../components/FormButton";

import { defaultAxios } from "../utils//axios";

import peopleIcon from "../assets/images/peopleIcon.svg";
import passwordIcon from "../assets/images/passwordIcon.svg";
import passwordCheckIcon from "../assets/images/passwordCheckIcon.svg";

function RegisterPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    userName: "",
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();

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
      if (!EMAIL_REGEX.test(userInfo.email)) {
        setEmailMessage("이메일 형식이 유효하지 않습니다.");
        setValidEmail(false);
      } else {
        checkEmailDuplicate();
      }
    }
  };

  const requestSignup = () => {
    console.log(validEmail);
    console.log(validUserName);
    console.log(validPassword);
    console.log(validPasswrodConfirm);

    if (validEmail && validUserName && validPassword && validPasswrodConfirm) {
      defaultAxios
        .post(`/users/create`, {
          email: userInfo.email,
          password: userInfo.password,
          name: userInfo.userName,
        })
        .then(function (response) {
          console.log("성공");
          window.alert("정상적으로 회원가입되었습니다.");
          navigate("/login");
        })
        .catch(function (error) {
          console.log(error);
          window.alert("회원가입 실패, Log 확인해주세요");
        });
    } else {
      window.alert("입력창을 다시 확인해주세요.");
    }
  };

  const checkEmailDuplicate = () => {
    defaultAxios
      .post(`/users/email/validation`, {
        email: userInfo.email,
      })
      .then(function (response) {
        console.log("성공");
        setEmailMessage("사용 가능한 이메일입니다.");
        setValidEmail(true);
      })
      .catch(function (error) {
        setEmailMessage("사용중인 이메일 입니다.");
        setValidEmail(false);
        console.log("실패");
      });
  };

  const checkUserName = () => {
    if (userInfo.userName === "") {
      setValidUserName(false);
      setUserNameMesssage("필수 정보입니다.");
    } else {
      setValidUserName(true);
      setUserNameMesssage("");
    }
  };

  const checkPassword = () => {
    if (userInfo.password === "") {
      setValidPassword(false);
      setPasswordMessage("필수 정보입니다.");
    } else {
      if (!PWD_REGEX.test(userInfo.password)) {
        setPasswordMessage(
          "8-24자 영문 대 소문자, 숫자, 특수문자를 사용하세요"
        );
        setValidPassword(false);
      } else {
        setPasswordMessage("사용 가능한 비밀번호 입니다.");
        setValidPassword(true);
      }
    }
  };

  const checkPasswordConfirm = () => {
    if (userInfo.passwordConfirm === "") {
      setValidPasswrodConfirm(false);
      setPasswordConfirmMessage("필수 정보입니다.");
    } else {
      if (userInfo.password !== userInfo.passwordConfirm) {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        setValidPasswrodConfirm(false);
      } else {
        setPasswordConfirmMessage("");
        setValidPasswrodConfirm(true);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <CommonNavbar />
      <div className="bg-[url('../public/assets/images/background-1.png')]">
        <div className="flex justify-center items-center commonHeight">
          <div className="shadow-lg w-4/5 h-3/4 rounded-3xl bg-white opacity-80 m-16">
            <h1 className="mt-20 text-center text-4xl font-bold text-textColor">
              회원 가입
            </h1>

            <FormInputBox
              text={userInfo.email}
              onChange={handleChange}
              placeholder="email"
              icon={peopleIcon}
              message={emailMessage}
              isValid={validEmail}
              blurEvnet={checkEmail}
            />

            <FormInputBox
              text={userInfo.userName}
              onChange={handleChange}
              placeholder="userName"
              icon={peopleIcon}
              message={userNameMesssage}
              isValid={validUserName}
              blurEvnet={checkUserName}
            />

            <FormInputBox
              text={userInfo.password}
              onChange={handleChange}
              placeholder="password"
              icon={passwordIcon}
              type="password"
              message={passwordMessage}
              isValid={validPassword}
              blurEvnet={checkPassword}
            />

            <FormInputBox
              text={userInfo.passwordConfirm}
              onChange={handleChange}
              placeholder="passwordConfirm"
              icon={passwordCheckIcon}
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
              onClick={requestSignup}
            />

            <p className="my-10 text-center text-xl font-bold text-textColor">
              <span>Already have account?</span>
              <Link to="/login">
                <span className="text-blue-800 hover:text-blue-500">
                  {" "}
                  Login!
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
