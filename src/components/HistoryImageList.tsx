import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import ImageBlock from "../components/ImageBlock";
import Loading from "../components/Loading";
import ImageModalScreen from "components/ImageModalScreen";

import { authAxios } from "../utils/axios";

import { ImageDto } from "../utils/types";
import leftArrowIcon from "../assets/images/leftArrowIcon.svg";
import rightArrowIcon from "../assets/images/rightArrowIcon.svg";
/**
 * @name : Teawon
 * @component : historyPage에서 사용하는 이미지들의 리스트 컴포넌트
 */
function HistoryImageList() {
  const [imageList, setImageList] = useState<ImageDto[]>([]); // history이미지 리스트
  const [currentPage, setCurrentPage] = useState<number>(1); //현재 페이지
  const isPc = useMediaQuery({ query: "(min-width: 1024px)" }); // pc뷰
  const isLaptop = useMediaQuery({ query: "(min-width: 768px)" }); // laptop뷰
  const maxCountPerPage = isPc ? 8 : isLaptop ? 6 : 4; // 현재 화면에 따라 보여줄 이미지 개수를 지정
  const indexOfLastVideo = currentPage * maxCountPerPage;
  const indexOfFirstVideo = indexOfLastVideo - maxCountPerPage;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [openModal, setOpenModal] = useState<boolean>(false); // 모달 활성화 여부
  const [selectedImage, setSelectedImage] = useState<string>(""); // 모달창에 띄울 이미지 url

  /**
   * @name : Teawon
   * @function deleteImage: 특정 이미지를 삭제 (향후 axios를 통한 api연결 필요)
   *  * @update-date 2022-09-13
   */
  const deleteImage = (id: string) => {
    setImageList(
      imageList.filter((historyImg: ImageDto) => historyImg.id !== id)
    );
  };

  const closeImageModal = () => {
    setOpenModal(!openModal);
  };

  const clickEvent = (url: string) => {
    setOpenModal(true);
    setSelectedImage(url);
  };

  /**
   * @name : Teawon
   * @function currentImageList: 전체 이미지리스트 중 한 화면에 보여줄 이미지들을 잘라 return
   *  * @update-date 2022-09-13
   */
  const currentImageList = (characterImage: ImageDto[]) => {
    return characterImage.slice(indexOfFirstVideo, indexOfLastVideo);
  };

  useEffect(() => {
    const fetchData = async () => {
      await authAxios
        .get(`images/list/history`, {})
        .then(function (response) {
          setImageList(response.data.data);
          setIsLoading(false);
        })
        .catch(function (error) {
          setImageList([]);
          setIsLoading(true);
        });
      //향후 axios를 통해 값 가져오기 (지금은 고정값)
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = () => {
  //     //향후 axios를 통해 값 가져오기 (지금은 고정값)
  //     setImageList([
  //       {
  //         image_id: 1,
  //         after_url:
  //           "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
  //       },
  //       {
  //         image_id: 2,
  //         after_url:
  //           "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
  //       },
  //       {
  //         image_id: 3,
  //         after_url:
  //           "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
  //       },
  //       {
  //         image_id: 4,
  //         after_url:
  //           "https://item.kakaocdn.net/do/00e5cab858701cae162b9ff35f22bab6f43ad912ad8dd55b04db6a64cddaf76d",
  //       },
  //       {
  //         image_id: 5,
  //         after_url:
  //           "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
  //       },
  //       {
  //         image_id: 6,
  //         after_url:
  //           "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
  //       },
  //       {
  //         image_id: 7,
  //         after_url:
  //           "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
  //       },
  //       {
  //         image_id: 8,
  //         after_url:
  //           "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
  //       },
  //       {
  //         image_id: 9,
  //         after_url:
  //           "https://cdn.imweb.me/thumbnail/20220217/e870e65d082d7.png",
  //       },
  //     ]);
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="inline-flex max-w-screen-xl m-auto items-center">
      {isLoading ? (
        <Loading text="데이터를 불러오는 중 입니다" />
      ) : (
        <>
          {openModal && (
            <ImageModalScreen
              imageInfo={selectedImage}
              closeFuc={closeImageModal}
            />
          )}
          {imageList && imageList.length === 0 ? (
            <p className="text-2xl">
              "업로드한 이미지데이터가 존재하지 않습니다."
            </p>
          ) : (
            <>
              {imageList && (
                <>
                  {" "}
                  <div className={currentPage > 1 ? "" : "invisible"}>
                    <button
                      className="flex mr-10 ml-2 justify-center"
                      onClick={() =>
                        setCurrentPage((currentPage) =>
                          currentPage > 1 ? currentPage - 1 : currentPage
                        )
                      }
                    >
                      <img
                        className="w-16"
                        src={leftArrowIcon}
                        alt="leftArrowIcon"
                      ></img>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-24">
                    {imageList &&
                      currentImageList(imageList).map((img: ImageDto) => (
                        <ImageBlock
                          key={img.id}
                          imageInfo={img}
                          deleteImageFuc={deleteImage}
                          clickFun={() => clickEvent(img.converted_url)}
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
                      <img
                        className="w-16"
                        src={rightArrowIcon}
                        alt="rightArrowIcon"
                      ></img>
                    </button>
                  </div>{" "}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default HistoryImageList;
