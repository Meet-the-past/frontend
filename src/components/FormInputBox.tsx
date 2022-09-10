import React, { useState } from "react";
import FormAlertMessage from "./FormAlertMessage";

/**
 * @name : Teawon
 * @component : 회원가입 , 로그인 Form에서 공통으로 사용하는 각각의 input
 * @create-date 2022-09-05
 */

/**
 * @param onChange - text값이 변할때마다 실행하는 함수
 * @param placeholder - Input값에 들어가는 기본 텍스트
 * @param text - 현재 입력된 값
 * @param icon - 아이콘
 * @param type - password & text등의 타입 지정
 * @param message - 유효하지 않을 때 출력하는 텍스트 (선택사항)
 * @param isValid - 입력한 값이 유효하지 않는 지 나타내는 boolean 변수 (선택사항)
 * @param blurEvnet - focusOut되었을 때 실행하는 함수 (선택사항) -
 */
interface InputBoxProps {
  onChange?: any;
  placeholder: string;
  text: string;
  icon: any;
  type?: string;
  message?: string;
  isValid?: boolean;
  blurEvnet?: () => void;
}

export default function FormInputBox({
  onChange = () => {},
  placeholder,
  icon,
  text = "",
  type = "text",
  message = "",
  isValid = false,
  blurEvnet = () => {},
}: InputBoxProps) {
  const [value, setValue] = useState(text);

  const handleTextChange = (e: any) => {
    setValue(e.target.value);
    onChange({ target: { name: placeholder, value: e.target.value } });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center align-middle ">
      <div className="flex flex-wrap items-stretch w-3/5 border-black border-2 rounded-full m-5 p-2">
        <div className="flex -mr-px justify-center w-15 ">
          <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
            {<img src={icon} alt={placeholder}></img>}
          </span>
        </div>

        <input
          type={type}
          className="flex-shrink flex-grow flex-auto relative leading-normal h-10  rounded placeholder-gray-400 object-left-top  pl-16"
          placeholder={placeholder}
          value={value}
          onChange={handleTextChange}
          onBlur={blurEvnet}
        />
      </div>
      {message !== "" && (
        <FormAlertMessage message={message} isValid={isValid} />
      )}
    </div>
  );
}
