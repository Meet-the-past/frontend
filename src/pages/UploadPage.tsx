import React from "react";
import CommonNavbar from "../components/CommonNavbar";
import { Link } from "react-router-dom";

function UploadPage() {
  return (
    <div className="bg-mainPageBackground">
      <CommonNavbar />
      <div>
        <img
          className="w-full h-44"
          src="/assets/images/banner.png"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default UploadPage;
