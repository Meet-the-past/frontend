import React from "react";
import CommonNavbar from "../components/CommonNavbar";
import HistoryImageList from "../components/HistoryImageList";

function HistoryPage() {
  return (
    <div>
      <CommonNavbar />
      <div className="bg-[url('../public/assets/images/background-1.png')] commonHeight flex">
        <HistoryImageList />
      </div>
    </div>
  );
}

export default HistoryPage;
