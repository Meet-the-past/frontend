import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { reset_auth } from "../redux/actions/AuthActions";
import { reset_userInfo } from "../redux/actions/UserInfoActions";
/**
 * @name : Teawon
 * @component : 상단의 메뉴를 나타내는 Navbar입니다. 화면이 줄어들면 Toggle버튼을 눌러 메뉴로 이동합니다.
 * @create-date 2022-09-05
 */
/**
 * @param image_url - 다운로드 받을 이미지 url
 * @param color - 버튼의 색
 */
interface DownloadImageButtonProps {
  image_url: string;
  color: string;
}

function DownloadImageButton({ image_url, color }: DownloadImageButtonProps) {
  const downloadImage = (image_url: string) => {
    fetch(image_url, { method: "GET" })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resultImage";
        document.body.appendChild(a);
        a.click();
        setTimeout((_) => {
          window.URL.revokeObjectURL(url);
        }, 60000);
        a.remove();
      })
      .catch((err) => {
        console.error("err: ", err);
      });
  };

  return (
    <div>
      <button
        className={`mt-20 bg-${color}-300 hover:bg-${color}-400 text-${color}-800 font-bold py-2 px-4 rounded inline-flex items-center`}
        onClick={() => downloadImage(image_url)}
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download</span>
      </button>
    </div>
  );
}

export default DownloadImageButton;
