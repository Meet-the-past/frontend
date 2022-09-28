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
function CommonNavbar() {
  const dispatch = useDispatch();
  const [menuToggle, setMenuToggle] = useState(false); // Toggle여부 변수
  const [isLogin] = useState(
    useSelector((state: any) => state.Auth.accessToken) != null
  );
  const [userEmail] = useState<string>(
    useSelector((state: any) => state.User.email)
  );

  /**
   * @name : Teawon
   * @function logout: 로그아웃 시 redux값 갱신 및 라우팅 이동
   * @create-date 2022-09-13
   */
  const logout = async () => {
    await dispatch(reset_auth());
    dispatch(reset_userInfo());
    alert("로그아웃 되셨습니다.");
    window.location.replace("/");
  };

  return (
    <div>
      <nav className="bg-navbarColor opacity=80 h-16">
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
              {isLogin ? (
                <>
                  <span className="text-gray-200 pr-5">{userEmail}</span>{" "}
                  <Link
                    className="py-5 px-3 hover:bg-navbarHoverColor"
                    to="/history"
                  >
                    <span className=" text-white">히스토리</span>
                  </Link>
                  <Link
                    className="py-5 px-3 hover:bg-navbarHoverColor"
                    onClick={logout}
                    to="#"
                  >
                    <span className="text-white">로그아웃</span>
                  </Link>
                </>
              ) : (
                <>
                  {" "}
                  <Link
                    className="py-5 px-3 hover:bg-navbarHoverColor"
                    to="/login"
                  >
                    <span className=" text-white">로그인</span>
                  </Link>
                  <Link
                    className="py-5 px-3 hover:bg-navbarHoverColor"
                    to="/register"
                  >
                    <span className=" text-white">회원가입</span>
                  </Link>
                </>
              )}
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
          <div className="text-center bg-navbarColor z-50 border-black opacity=80 md:hidden opacity-1">
            {isLogin ? (
              <>
                {" "}
                <Link
                  className="block py-2 px-6 text-sm hover:bg-navbarHoverColor"
                  to="/history"
                >
                  <span className="text-white">히스토리</span>
                </Link>
                <Link
                  className="block py-2 px-6 text-sm hover:bg-navbarHoverColor"
                  to="#"
                  onClick={logout}
                >
                  <span className="text-white ">로그아웃</span>
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link
                  className="block py-2 px-6 text-sm hover:bg-navbarHoverColor"
                  to="/login"
                >
                  <span className="text-white">로그인</span>
                </Link>
                <Link
                  className="block py-2 px-6 text-sm hover:bg-navbarHoverColor"
                  to="/register"
                >
                  <span className="text-white">회원가입</span>
                </Link>
              </>
            )}
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default CommonNavbar;
