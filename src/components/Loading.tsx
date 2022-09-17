import React from "react";

import loadImage from "../assets/images/loadImage.svg";

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
        <img src={loadImage} alt="loading"></img>
      </div>
      <p className="mt-5 text-center"> {text} </p>
    </div>
  );
}

export default Loading;
