import React, { useState } from "react";

/**
 * @name : Teawon
 * @component : 회원가입 , 로그인 Form에서 공통으로 사용하는 버튼
 * @create-date 2022-09-05
 */

/**
 * @param text - 버튼에 들어가는 텍스트
 * @param onClick - 버튼 클릭 시 실행하는 함수
 * @param height - 버튼의 height
 * @param width - 버튼의 width
 * @param color - 버튼의 색
 */
interface FormButtonProps {
  text: string;
  onClick?: () => void;
  height: string;
  width: string;
  color: string;
}

export default function FormButton({
  text,
  onClick = () => {},
  height,
  width,
  color,
}: FormButtonProps) {
  return (
    <div className="mt-5 w-full items-center text-center relative flex justify-center align-middle rounded-full">
      <button
        className={`${width} ${height} bg-${color}-600 hover:bg-${color}-400 text-white font-bold rounded-full`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
