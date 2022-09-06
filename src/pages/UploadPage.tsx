import React from "react";
import CommonNavbar from "../components/CommonNavbar";

function UploadPage() {
  return (
    <div className="">
      <CommonNavbar />
      <div className="flex bg-[url('../public/assets/images/background-1.png')] w-full h-92">
        <div
          className="bg-white rounded-md my-16 mx-12 w-full"
          style={{ height: 500, color: "#561D1D" }}
        >
          <p className="text-center ">이미지를 복원하시겠습니까?</p>
          <button className="py-2 px-6 text-center">네</button>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
