import Resizer from "react-image-file-resizer";
import CommonNavbar from "../components/CommonNavbar";
import FormButton from "../components/FormButton";

import changeIcon from "../assets/images/changeIcon.svg";
import cancellIcon from "../assets/images/cancellIcon.svg";

import React, { useRef, useState } from "react";
import { authAxios } from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { task_start } from "../redux/actions/TaskActions";

function UploadPage() {
  const fileInput = useRef<any>(); // 외부 이미지 클릭 시  <input>가 눌리도록 설정하기 위한 변수
  const [imageObject, setImageObject] = useState<any>(); //화면에 보여 줄 이미지 오브젝트

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveFile = (event: any) => {
    setImageObject(event.target.files[0]);
  };

  const requestTaskId = () => {
    const formData = new FormData();
    formData.append("filename", imageObject);

    authAxios
      .post(`images/`, formData)
      .then(function (response) {
        console.log(response.data);
        dispatch(task_start(response.data.task_id));
        navigate("/result");
      })
      .catch(function (error) {
        alert("제대로된 이미지 맞아요?");
        console.log(error);
      });
  };

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

  // const onChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   try {
  //     const file: any =
  //       event.target.files instanceof FileList ? event.target.files[0] : null;

  //     setRespondImg(file);

  //     const img: any = await resizeFile(file);
  //     setIsImg(img);
  //     setUrlImg(URL.createObjectURL(img));
  //     console.log("success upload image!");
  //   } catch (error) {
  //     alert("파일 형식이 잘못되었습니다.");
  //     console.log("file Type error", error);
  //   }
  // };

  return (
    <div className="">
      <CommonNavbar />
      <div className="flex bg-[url('../public/assets/images/background-1.png')] w-full commonHeight">
        <div
          className="bg-white bg-opacity-80 rounded-md m-auto w-11/12 flex flex-col justify-center "
          style={{ height: "80vh" }}
        >
          <div>
            <div
              className={
                imageObject
                  ? "transform -translate-y-10 duration-1000  w-7/12 m-auto"
                  : "transform transition duration-1000  w-7/12 m-auto"
              }
            >
              {imageObject ? (
                <div className="ml-20">
                  <img
                    className="w-full h-96 object-cover object-center aspect-square border-2"
                    alt="images"
                    src={window.URL.createObjectURL(imageObject)}
                    style={{ margin: "auto" }}
                  ></img>
                  <div className=" flex justify-end  float-right">
                    <span
                      className="flex mt-9 mr-3 hover:bg-gray-100"
                      onClick={() => fileInput.current.click()}
                    >
                      <img
                        src={changeIcon}
                        alt="changeIcon"
                        className="w-8 h-8"
                      />
                    </span>
                    <span
                      className="flex mt-9 mr-3 hover:bg-gray-100"
                      onClick={() => setImageObject(null)}
                    >
                      <img
                        src={cancellIcon}
                        alt="cancellIcon"
                        className="w-8 h-8"
                      />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="ml-20">
                  <label
                    htmlFor="dropzone-file"
                    className="flex justify-center items-center h-96 w-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col justify-center items-center ">
                      <svg
                        aria-hidden="true"
                        className="mb-3 w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>

                      <p className="mb-2 w-80 text-sm text-center text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        JPG, PNG , GIF
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      className="cursor-pointer absolute block z-50 opacity-0"
                      name="imageUpload"
                      type="file"
                      accept="image/*"
                      onChange={saveFile}
                    />
                  </label>
                </div>
              )}
            </div>
            {imageObject && (
              <div className="flex float-center mt-20 animate-fade-in-down">
                <div className=" m-auto">
                  <div className="m-auto">
                    <p className="text-center text-3xl">
                      이미지를 복원하시겠습니까?
                    </p>
                    <FormButton
                      text="네"
                      height="h-10"
                      width="w-20"
                      color="gray"
                      onClick={requestTaskId}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <input //uploadimage클릭 시 해당 input이 Click
        ref={fileInput}
        className="hidden"
        name="imageUpload"
        type="file"
        accept="image/*"
        onChange={saveFile}
      />
    </div>
  );
}

export default UploadPage;
