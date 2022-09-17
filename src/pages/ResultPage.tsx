import React, { useState, useEffect } from "react";
import CommonNavbar from "../components/CommonNavbar";
import Loading from "../components/Loading";
import Modal from "components/Modal";

function ResultPage() {
  const [isLoding, setIsLoading] = useState<boolean>(true); // AI처리 로딩 여부
  const [imgData, setImgData] = useState<any>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const downloadImage = (url: any) => {
    fetch(url, { method: "GET" })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resultImage";
        document.body.appendChild(a);
        a.click();
        setTimeout((_) => {
          window.URL.revokeObjectURL(url);
        }, 60000);
        a.remove();
      })
      .catch((err) => {
        console.error("err: ", err);
      });
  };

  const clickEvent = (url: any) => {
    setOpenModal(true);
    setSelectedImage(url);
  };

  useEffect(() => {
    const fetchData = () => {
      //향후 axios를 통해 값 가져오기 (지금은 고정값)
      setImgData({
        origin_url:
          // "https://cdn.crowdpic.net/detail-thumb/thumb_d_2949A746EBDFDBE19879F8F24728B0FC.jpg",
          "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg",
        after_url:
          //  "https://cdn.crowdpic.net/detail-thumb/thumb_d_2949A746EBDFDBE19879F8F24728B0FC.jpg",
          //   "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg",
          "https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png",
      });
      setIsLoading(false);
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
                  <div className="mt-10 flex justify-center items-center">
                    <img className="" alt="sample" src={imgData.origin_url} />
                  </div>
                  <button
                    className="mt-20 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                    onClick={() => downloadImage(imgData.after_url)}
                  >
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Download</span>
                  </button>
                </Modal>
              )}

              <div className="relative">
                <div
                  className="pr-32 float-left"
                  onClick={() => clickEvent(imgData.after_url)}
                >
                  <img
                    className="borderImage flex resultImageSize object-cover object-center aspect-square"
                    alt="sample"
                    src={imgData.origin_url}
                  />
                </div>
                <div className="pl-32 float-right">
                  <img
                    className="borderImage flex resultImageSize object-cover object-center aspect-square"
                    alt="sample"
                    src={imgData.after_url}
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
