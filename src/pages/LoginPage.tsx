import React from "react";
import CommonNavbar from "../components/CommonNavbar";
import { Link } from "react-router-dom";

const asdads = asdadasdasd;

function LoginPage() {
  return (
    <div className="bg-[url('../public/assets/images/background-1.png')] w-full">
      <CommonNavbar />

      <div className="flex justify-center items-center w-full h-screen">
        <div className="shadow-lg w-4/5 h-3/4 rounded-3xl bg-formBoxColor opacity-80">
          <h1 className="mt-20 text-center text-4xl font-bold text-white">
            로그인
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
