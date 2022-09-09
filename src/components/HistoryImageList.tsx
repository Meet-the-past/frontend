import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import ImageBlock from "../components/ImageBlock";

import leftArrowIcon from "../assets/images/leftArrowIcon.svg";
import rightArrowIcon from "../assets/images/rightArrowIcon.svg";

function HistoryImageList() {
  const [imageList, setImageList] = useState<any>([]); // history이미지 리스트
  const [currentPage, setCurrentPage] = useState<number>(1); //현재 페이지
  const isPc = useMediaQuery({ query: "(min-width: 1024px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 768px)" });
  const maxCountPerPage = isPc ? 8 : isLaptop ? 6 : 4;
  const indexOfLastVideo = currentPage * maxCountPerPage;
  const indexOfFirstVideo = indexOfLastVideo - maxCountPerPage;

  const deleteImage = (ImageId: number) => {
    setImageList(
      imageList.filter((historyImg: any) => historyImg.imageId !== ImageId)
    );
  };

  const currentImageList = (characterImage: any) => {
    return characterImage.slice(indexOfFirstVideo, indexOfLastVideo);
  };

  useEffect(() => {
    const fetchData = () => {
      //향후 axios를 통해 값 가져오기
      setImageList([
        {
          imageId: 1,
          after_url:
            "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
        },
        {
          imageId: 2,
          after_url:
            "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
        },
        {
          imageId: 3,
          after_url:
            "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
        },
        {
          imageId: 4,
          after_url:
            "https://item.kakaocdn.net/do/00e5cab858701cae162b9ff35f22bab6f43ad912ad8dd55b04db6a64cddaf76d",
        },
        {
          imageId: 5,
          after_url:
            "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
        },
        {
          imageId: 6,
          after_url:
            "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
        },
        {
          imageId: 7,
          after_url:
            "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
        },
        {
          imageId: 8,
          after_url:
            "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
        },
        {
          imageId: 9,
          after_url:
            "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
        },
      ]);
    };

    fetchData();
  }, []);

  return (
    <div className="inline-flex max-w-screen-xl m-auto items-center m-16">
      <div className={currentPage > 1 ? "" : "invisible"}>
        <button
          className="flex mr-10 ml-2 justify-center"
          onClick={() =>
            setCurrentPage((currentPage) =>
              currentPage > 1 ? currentPage - 1 : currentPage
            )
          }
        >
          <img className="w-16" src={leftArrowIcon} alt="leftArrowIcon"></img>
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-24">
        {imageList &&
          currentImageList(imageList).map((img: any) => (
            <ImageBlock
              key={img.imageId}
              ImageDto={img}
              deleteImageFuc={deleteImage}
            />
          ))}
      </div>
      <div
        className={
          imageList.length > maxCountPerPage &&
          imageList.length > currentPage * maxCountPerPage
            ? ""
            : "invisible"
        }
      >
        <button
          className="flex ml-10 mr-2 items-center justify-center"
          onClick={() =>
            setCurrentPage((currentPage) =>
              imageList.length > maxCountPerPage &&
              imageList.length > currentPage * maxCountPerPage
                ? currentPage + 1
                : currentPage
            )
          }
        >
          <img className="w-16" src={rightArrowIcon} alt="rightArrowIcon"></img>
        </button>
      </div>
    </div>
  );
}

export default HistoryImageList;
