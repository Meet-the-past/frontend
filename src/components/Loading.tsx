import React from "react";

/**
 * @component : 로딩 컴포넌트
 */

/**
 * @param text - 이미지 하단의 텍스트
 **/

interface LoadingProps {
  text?: string;
}

function Loading({ text }: LoadingProps) {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <img
          className="w-30 h-30"
          src="assets/images/loadingIcon.gif"
          alt="loading"
        ></img>
      </div>
      <p className="mt-5 text-center"> {text} </p>
    </div>
  );
}

export default Loading;
