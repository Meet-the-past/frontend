import React, { useState, useRef, useEffect } from "react";
import ImageBlock from "../components/ImageBlock";

function HistoryImageList() {
  const [imageList, setImageList] = useState<any>([]); // history이미지 리스트
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [characterPerPage, setCharacterPerPage] = useState(7); //페이지당 원하는개수
  //   const indexOfLastVideo = currentPage * characterPerPage;
  //   const indexOfFirstVideo = indexOfLastVideo - characterPerPage;

  const deleteImage = (ImageId: number) => {
    setImageList(
      imageList.filter((historyImg: any) => historyImg.imageId !== ImageId)
    );
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
      ]);
    };

    fetchData();
  }, []);

  return (
    <div className="relative inline-flex w-full justify-center items-center ">
      <div className="grid grid-cols-4 gap-20">
        {imageList &&
          imageList.map((img: any) => (
            <ImageBlock ImageDto={img} deleteImageFuc={deleteImage} />
          ))}
      </div>
    </div>
  );
}

export default HistoryImageList;
