import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * @name : Teawon
 * @component : 상단의 메뉴를 나타내는 Navbar입니다. 화면이 줄어들면 Toggle버튼을 눌러 메뉴로 이동합니다.
 * @create-date 2022-09-05
 */
function CommonNavbar() {
  const [menuToggle, setMenuToggle] = useState(false); // Toggle여부 변수

  return (
    <div>
      <nav className="bg-navbarColor opacity=80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* MTP메인 화면 */}
            <div className="flex space-x-4">
              <Link
                className="flex items-center py-5 px-2 text-gray-700"
                to="/"
              >
                <span className="font-bold text-white">MTP</span>
              </Link>
            </div>

            {/* 로그인 및 회원가입 메뉴 */}
            <div className="hidden md:flex items-center space-x-1">
              <Link className="py-5 px-3" to="/login">
                <span className=" text-white">로그인</span>
              </Link>

              <Link className="" to="/register">
                <span className=" text-white">회원가입</span>
              </Link>
            </div>

            {/* 모바일 */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuToggle(!menuToggle)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 Toggle메뉴 */}
        {menuToggle ? (
          <div className="md:hidden opacity-1">
            <Link
              className="block py-2 px-6 text-sm hover:bg-navbarColorToggle"
              to="/login"
            >
              <span className="text-white">로그인</span>
            </Link>

            <Link
              className="block py-2 px-6 text-sm hover:bg-navbarColorToggle"
              to="/register"
            >
              <span className="text-white">회원가입</span>
            </Link>
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default CommonNavbar;
