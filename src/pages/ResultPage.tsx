import React, { useState, useEffect } from "react";
import CommonNavbar from "../components/CommonNavbar";
import Loading from "../components/Loading";
import Modal from "components/Modal";
import DownloadImageButton from "components/DownloadImageButton";
import { ResultImageDto } from "../utils/types";

function ResultPage() {
  const [isLoding, setIsLoading] = useState<boolean>(true); // AI처리 로딩 여부
  const [imgData, setImgData] = useState<ResultImageDto>({
    // 받아올 이미지
    origin_url: "",
    processed_url: "",
  });
  const [openModal, setOpenModal] = useState<boolean>(false); // 모달 활성화 여부
  const [selectedImage, setSelectedImage] = useState<string>(""); // 모달창에 띄울 이미지 url

  /**
   * @name : Teawon
   * @function clickEvent: 이미지 클릭시 해당 Modal창을 활성화
   * @create-date 2022-09-17
   */
  const clickEvent = (url: string) => {
    setOpenModal(true);
    setSelectedImage(url);
  };

  useEffect(() => {
    const fetchData = () => {
      //향후 axios를 통해 값 가져오기 (지금은 고정값), 이미지 크기별 테스트
      setImgData({
        origin_url:
          // "https://cdn.crowdpic.net/detail-thumb/thumb_d_2949A746EBDFDBE19879F8F24728B0FC.jpg",
          "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg",
        processed_url:
          //  "https://cdn.crowdpic.net/detail-thumb/thumb_d_2949A746EBDFDBE19879F8F24728B0FC.jpg",
          //"https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg",
          //"https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png",
          "http://i.imgur.com/A3f9Xyj.gif",
      });
      setIsLoading(true);
    };

    fetchData();
  }, []);

  return (
    <div>
      <CommonNavbar />
      <div className="bg-[url('../public/assets/images/background-1.png')]">
        <div className="flex justify-center items-center commonHeight">
          {isLoding ? (
            <Loading text="데이터를 처리중입니다..." />
          ) : (
            <>
              {openModal && (
                <Modal closeModal={() => setOpenModal(!openModal)}>
                  <div className="mt-16">
                    <div className="flex justify-center items-center">
                      <img
                        className="object-contain modalImageSize"
                        alt="sample"
                        src={selectedImage}
                      />
                    </div>
                    <DownloadImageButton
                      image_url={selectedImage}
                      color="gray"
                    />
                  </div>
                </Modal>
              )}

              <div className="relative">
                <div
                  className="pr-32 float-left"
                  onClick={() => clickEvent(imgData.origin_url)}
                >
                  <img
                    className="borderImage flex resultImageSize object-cover object-center aspect-square"
                    alt="sample"
                    src={imgData.origin_url}
                  />
                </div>
                <div
                  className="pl-32 float-right"
                  onClick={() => clickEvent(imgData.processed_url)}
                >
                  <img
                    className="borderImage flex resultImageSize object-cover object-center aspect-square"
                    alt="sample"
                    src={imgData.processed_url}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
