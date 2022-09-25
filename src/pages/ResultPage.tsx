import React, { useState, useEffect } from "react";
import CommonNavbar from "../components/CommonNavbar";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import ImageModalScreen from "components/ImageModalScreen";

import { authAxios } from "../utils/axios";
import { useSelector, useDispatch } from "react-redux";
import { task_end } from "../redux/actions/TaskActions";

import { ResultImageDto } from "../utils/types";

function ResultPage() {
  const taskId = useSelector((state: any) => state.Task.task_id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const closeImageModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const checkValidation = () => {
      if (taskId == null) {
        alert("유효하지 않은 접근입니다."); //처리중인 taskId값이 없는데 현재 페이지로 왔을 때
        navigate("/");
      }
    };

    const getResult: () => Promise<any> = async () => {
      const checkResult = () => {
        authAxios
          .get(`images/results/tasks/${taskId}`)
          .then((response) => {
            console.log(response.data);

            if (response.data.data !== "RUNNING") {
              console.log("성공 if문 진입");
              setImgData({
                origin_url: response.data.data.origin_url,
                processed_url: response.data.data.converted_url,
              });
              clearInterval(timer);
              setIsLoading(false);
            }
          })
          .catch((error) => {
            console.log("Error발생");
            dispatch(task_end());
            clearInterval(timer);
          });
      };
      const timer = setInterval(checkResult, 2000);
      return () => clearInterval(timer);
    };

    // const fetchData = () => {
    //   //향후 axios를 통해 값 가져오기 (지금은 고정값), 이미지 크기별 테스트
    //   setImgData({
    //     origin_url:
    //       // "https://cdn.crowdpic.net/detail-thumb/thumb_d_2949A746EBDFDBE19879F8F24728B0FC.jpg",
    //       "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg",
    //     processed_url:
    //       //  "https://cdn.crowdpic.net/detail-thumb/thumb_d_2949A746EBDFDBE19879F8F24728B0FC.jpg",
    //       //"https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg",
    //       //"https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png",
    //       "http://i.imgur.com/A3f9Xyj.gif",
    //   });
    //   setIsLoading(true);
    // };
    checkValidation();
    getResult();
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
                <ImageModalScreen
                  imageInfo={selectedImage}
                  closeFuc={closeImageModal}
                />
              )}

              <div className="relative">
                <div
                  className="pr-32 float-left hover:scale-105"
                  onClick={() => clickEvent(imgData.origin_url)}
                >
                  <img
                    className="borderImage flex resultImageSize object-cover object-center aspect-square"
                    alt="sample"
                    src={imgData.origin_url}
                  />
                </div>
                <div
                  className="pl-32 float-right hover:scale-105"
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
