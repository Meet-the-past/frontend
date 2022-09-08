import React, { useState, useRef, useEffect } from "react";

function HistoryImageList() {
  const [imageList, setImageList] = useState<any>([]); // history이미지 리스트
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [characterPerPage, setCharacterPerPage] = useState(7); //페이지당 원하는개수
  //   const indexOfLastVideo = currentPage * characterPerPage;
  //   const indexOfFirstVideo = indexOfLastVideo - characterPerPage;

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

  const deleteImage = (ImageId: number) => {
    setImageList(
      imageList.filter((historyImg: any) => historyImg.imageId !== ImageId)
    );
  };

  return (
    <div className="relative inline-flex w-full justify-center items-center ">
      <div className="grid grid-cols-4 gap-20">
        {imageList &&
          imageList.map((img: any) => (
            <div className="relative w-60 h-60" key={img.imageId}>
              <img
                className="flex object-cover h-60 w-60"
                alt="sample"
                src={img.after_url}
              />

              <button onClick={() => deleteImage(img.imageId)}>
                <img
                  className="absolute w-8 h-8 right-0 top-0"
                  alt="deleteBtn"
                  src="/images/negative.png"
                />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HistoryImageList;
