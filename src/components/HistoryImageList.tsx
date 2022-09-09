import React, { useState, useRef, useEffect } from "react";
import ImageBlock from "../components/ImageBlock";

import leftArrowIcon from "../assets/images/leftArrowIcon.svg";
import rightArrowIcon from "../assets/images/rightArrowIcon.svg";

function HistoryImageList() {
  const [imageList, setImageList] = useState<any>([]); // history이미지 리스트
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxCountPerPage, setmaxCountPerPage] = useState<number>(8); //페이지당 원하는개수
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
    <div className="relative inline-flex w-full justify-center items-center ">
      <div>
        <button
          className="show flex items-center justify-center"
          onClick={() =>
            setCurrentPage((currentPage) =>
              currentPage > 1 ? currentPage - 1 : currentPage
            )
          }
        >
          <img src={leftArrowIcon} alt="ads"></img>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-20">
        {imageList &&
          currentImageList(imageList).map((img: any) => (
            <ImageBlock
              key={img.imageId}
              ImageDto={img}
              deleteImageFuc={deleteImage}
            />
          ))}
      </div>
      <div>
        <button
          className="show flex items-center justify-center"
          onClick={() =>
            setCurrentPage((currentPage) =>
              imageList.length > maxCountPerPage &&
              imageList.length > currentPage * maxCountPerPage
                ? currentPage + 1
                : currentPage
            )
          }
        >
          <img src={rightArrowIcon} alt="ads"></img>
        </button>
      </div>
    </div>
  );
}

export default HistoryImageList;
