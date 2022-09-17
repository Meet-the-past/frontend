import React, { useState, useEffect } from "react";
import CommonNavbar from "../components/CommonNavbar";
import Loading from "../components/Loading";

function ResultPage() {
  const [isLoding, setIsLoading] = useState<boolean>(true); // AI처리 로딩 여부
  const [imgData, setImgData] = useState<any>();

  useEffect(() => {
    const fetchData = () => {
      //향후 axios를 통해 값 가져오기 (지금은 고정값)
      setImgData({
        origin_url:
          // "https://cdn.crowdpic.net/detail-thumb/thumb_d_2949A746EBDFDBE19879F8F24728B0FC.jpg",
          "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg",
        after_url:
          //  "https://cdn.crowdpic.net/detail-thumb/thumb_d_2949A746EBDFDBE19879F8F24728B0FC.jpg",
          "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg",
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
            <div className="relative">
              <div className="pr-32 float-left">
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
                  src={imgData.origin_url}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
