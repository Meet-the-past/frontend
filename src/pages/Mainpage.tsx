import React, { useRef, useState, useEffect } from "react";
import CommonNavbar from "../components/CommonNavbar";
import { Link } from "react-router-dom";

function Mainpage() {
  const scoll1Ref1 = useRef<any>();
  const scoll1Ref2 = useRef<any>();
  const scoll1Ref3 = useRef<any>();

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(scrollY);
  // console.log(window.innerHeight);
  // console.log(window.outerHeight);

  const useMoveScrool = () => {
    if (scrollY < window.innerHeight) {
      scoll1Ref1.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollY < 2 * window.innerHeight) {
      scoll1Ref2.current.scrollIntoView({ behavior: "smooth" });
    } else {
      scoll1Ref3.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <CommonNavbar />
      <button className="fixed left-1/2 bottom-10 " onClick={useMoveScrool}>
        <span className="opacity-30 hover:opacity-100">이동하기</span>
      </button>
      <div>
        <div className="bg-[url('../public/assets/images/background-1.png')] w-full h-screen flex">
          <div className="m-auto">
            <img
              className="rounded-xl w-11/12 m-auto"
              src="/assets/images/banner.png"
              alt="banner"
            />

            <div className="text-center">
              <h1 className="sm:text-6xl text-4xl font-serif font-light text-textColor drop-shadow-md my-5">
                Meet The Past
              </h1>
              <p>찢기고 구겨진 추억을 되살려드립니다</p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scoll1Ref1}
        className="w-full bg-[url('../public/assets/images/background-2.png')]"
      >
        <div className="grid h-screen place-items-center">
          <div>
            <div className="float-center sm:float-left">
              <img
                className="h-96 "
                src="/assets/images/mainPage_people1.png"
                alt="banner"
              />
            </div>

            <div className="pl-10 float-center sm:float-right w-80 m-auto ">
              <p className="mt-20 text-xl font-bold text-textColor">
                보기만 해도 <br></br> 가슴이 아리는 사진이 있습니까?
              </p>
              <p className="mt-5 mx-auto ">
                소중한 추억이 구겨지는 것 만큼<br></br> 안타까운 일은
                없을겁니다. <br></br>
                구겨지고 찢긴 사진을 업로드하세요.
              </p>
            </div>
          </div>
        </div>

        <div ref={scoll1Ref2} className="grid place-items-center h-screen">
          <div>
            <div className="float-center sm:float-right ml-5">
              <img
                className="h-96 "
                src="/assets/images/mainPage_people2.png"
                alt="banner"
              />
            </div>

            <div className="pl-10 float-center sm:float-left w-80 m-auto ">
              <p className="mt-20 text-xl font-bold text-textColor">
                누군가의 기억과 가까운 모습으로 <br></br>
                추억을 되살려드리겠습니다
              </p>
              <p className="mt-5 mx-auto ">
                가장 아름답고 사랑스러운 그 순간인 그 시절로 되돌아 간 것처럼
                도와드립니다 사진을 원형에 가까운 모습으로 복구합니다
              </p>
            </div>
          </div>
        </div>

        <div
          ref={scoll1Ref3}
          className="flex mt-10 bg-[url('../public/assets/images/background-3.png')] w-full h-96 "
        >
          <div className="m-auto">
            <h1 className="text-3xl font-bold text-white drop-shadow-md">
              과거를 만나보시겠습니까?
            </h1>
            <div className="mt-5 flex items-center justify-center">
              <Link to="/">
                <button className=" opacity-70 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                  만나러가기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
