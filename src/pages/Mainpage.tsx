import React, { useRef, useState, useEffect } from "react";
import CommonNavbar from "../components/CommonNavbar";
import CommonFooter from "../components/CommonFooter";
import { Link } from "react-router-dom";

import useScrollFadeIn from "../utils/useScrollFadeIn";

import Banner from "../assets/images/banner.svg";
import MainPagePeople1 from "../assets/images/mainPagePeople1.svg";
import MainPagePeople2 from "../assets/images/mainPagePeople2.svg";
import BottomArrowIcon from "../assets/images/bottomArrowIcon.svg";

function Mainpage() {
  const scrollRef = useRef<(HTMLDivElement | null)[]>([]);

  const [scrollY, setScrollY] = useState(0); //스크롤 위치 값
  const [scrollButtonStatus, setScrollButtonStatus] = useState(true); //스크롤 상태

  const animatedItem = {
    0: useScrollFadeIn(1, 0.1),
    1: useScrollFadeIn(1, 0.1),
  };
  /**
   * @name : Teawon
   * @function handleScroll : 화면이동에 따른 스크롤 값을 가져오고 일정 값 이상이라면 스크롤 상태를 숨김
   * @create-date 2022-09-08
   */
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setScrollY(scrollPosition);
    if (scrollY > 3 * window.innerHeight) {
      setScrollButtonStatus(false);
    } else {
      setScrollButtonStatus(true);
    }
  };

  /**
   * @name : Teawon
   * @function useMoveScrool : 현재 스크롤값이 화면길이의 일정 값을 넘어가면 버튼클릭 시 이동할 컴포넌트를 변경
   * @create-date 2022-09-08
   */

  const useMoveScrool = () => {
    if (scrollY < window.innerHeight) {
      scrollRef.current[0]?.scrollIntoView({ behavior: "smooth" });
    } else if (scrollY < 2 * window.innerHeight) {
      scrollRef.current[1]?.scrollIntoView({ behavior: "smooth" });
    } else {
      scrollRef.current[2]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <div>
        <CommonNavbar />
        {scrollButtonStatus && (
          <div className="fixed left-1/2 bottom-10 z-0 opacity-30 hover:opacity-100 ">
            <button onClick={useMoveScrool}>
              <img
                className="w-16 -translate-x-1/2"
                src={BottomArrowIcon}
                alt="arrowIcon"
              ></img>
            </button>
          </div>
        )}

        <div className="w-full commonHeight mainBanner">
          <div className="m-auto sm:pt-52 sm:pl-20 pt-60 pl-10">
            <div className="text-left">
              <h1 className="sm:text-8xl text-6xl font-serif font-light text-white drop-shadow-md">
                Meet The Past
              </h1>
              <p className="text-2xl text-white pt-10">
                찢기고 구겨진 추억을 되살려드립니다
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={(el) => (scrollRef.current[0] = el)}
        className="w-full bg-[url('../public/assets/images/background-2.png')]"
      >
        <div className="grid h-screen place-items-center">
          <div {...animatedItem[0]}>
            <div className="float-center sm:float-left">
              <img
                className="h-96  m-auto "
                src={MainPagePeople1}
                alt="banner_people1"
              />
            </div>

            <div className="pl-10  sm:float-right w-84 m-auto ">
              <p className="mt-20 text-3xl font-bold text-textColor">
                보기만 해도 <br></br> 가슴이 아리는 사진이 있습니까?
              </p>
              <p className="mt-5 text-xl mx-auto ">
                소중한 추억이 구겨지는 것 만큼<br></br> 안타까운 일은
                없을겁니다. <br></br>
                구겨지고 찢긴 사진을 업로드하세요.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (scrollRef.current[1] = el)}
          className="grid place-items-center h-screen"
        >
          <div {...animatedItem[1]}>
            <div className="float-center sm:float-right ml-5">
              <img
                className="h-96  m-auto "
                src={MainPagePeople2}
                alt="banner_people2"
              />
            </div>

            <div className="pl-10 float-center sm:float-left w-84 m-auto ">
              <p className="mt-20 text-3xl font-bold text-textColor">
                누군가의 기억과 가까운 모습으로 <br></br>
                추억을 되살려드리겠습니다
              </p>
              <p className="mt-5 text-xl mx-auto ">
                가장 아름답고 사랑스러운 그 순간인 <br></br>그 시절로 되돌아 간
                것처럼 도와드립니다<br></br> 사진을 원형에 가까운 모습으로
                복구합니다
              </p>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (scrollRef.current[2] = el)}
          className="flex  bg-cover mt-10 bg-[url('../public/assets/images/background-3.png')] w-full h-footer "
        >
          <div className="m-auto ">
            <h1 className="text-5xl font-bold text-white drop-shadow-md">
              과거를 만나보시겠습니까?
            </h1>
            <div className="mt-5 flex items-center justify-center">
              <Link to="/upload">
                <button className=" opacity-70 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                  만나러가기
                </button>
              </Link>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
    </div>
  );
}

export default Mainpage;
