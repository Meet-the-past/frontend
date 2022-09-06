/* eslint-disable react/require-default-props */
import React from "react";

/**
 * @name : Teawon
 * @component : 회원가입 시 유효성에 맞지 않을 때 출력하는 메세지 컴포넌트입니다.
 * @create-date 2022-09-05
 */

/**
 * @param message - 화면에 출력하는 메시지
 * @param isValid - 화면에 출력하는 메세지의 색을 지정 (ex : 유효하다면 초록색)
 */
interface FormAlertMessageProps {
  message: string;
  isValid: boolean;
}

export default function FormAlertMessage({
  message,
  isValid,
}: FormAlertMessageProps) {
  return (
    <div className="justify-left text-sm items-left">
      <span className={isValid ? "text-green-800 " : "text-red-800"}>
        {message}
      </span>
    </div>
  );
}
