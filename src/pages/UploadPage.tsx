import { useState } from "react";
import Resizer from "react-image-file-resizer";
import CommonNavbar from "../components/CommonNavbar";
import FormButton from "../components/FormButton";

import CloudUploadIcon from "../assets/images/CloudUploadIcon";

function UploadPage() {
  const [isImg, setIsImg] = useState(null);
  const [urlImg, setUrlImg] = useState("");
  const [respondImg, setRespondImg] = useState(null);

  const resizeFile = (file: Blob) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        500, // max width
        250, // max height
        "JPEG",
        513, // min width
        0, // min height
        (uri) => {
          resolve(uri);
        },
        "file" // 저장 형식
      );
    });

  const onChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file: any =
        event.target.files instanceof FileList ? event.target.files[0] : null;

      setRespondImg(file);

      const img: any = await resizeFile(file);
      setIsImg(img);
      setUrlImg(URL.createObjectURL(img));
      console.log("success upload image!");
    } catch (error) {
      alert("파일 형식이 잘못되었습니다.");
      console.log("file Type error", error);
    }
  };

  return (
    <div className="">
      <CommonNavbar />
      <div className="flex bg-[url('../public/assets/images/background-1.png')] w-full h-92">
        <div
          className="bg-white rounded-md my-16 mx-12 w-full flex flex-col justify-center"
          style={{ height: 500, color: "#561D1D" }}
        >
          <button className="flex justify-center border-2 rounded-lg mx-16 my-8 py-36">
            <img src={urlImg}></img>
            <input
              type="file"
              hidden
              required
              onChange={(e) => onChangeImage(e)}
            />
            {isImg ? null : (
              <div>
                {" "}
                <CloudUploadIcon className="flex" />
                <div style={{ color: "#561D1D" }}>Click to Upload</div>
              </div>
            )}
          </button>
          <p className="text-center text-xl">이미지를 복원하시겠습니까?</p>
          <FormButton text="네" height="h-10" width="w-20" color="#8F7C5A" />
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
