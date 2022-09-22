import React, { useRef, useState } from "react";
import { authAxios } from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { task_end, task_start } from "../redux/actions/TaskActions";

function VideoUploadPage() {
  const fileInput = useRef<any>(); // 외부 이미지 클릭 시  <input>가 눌리도록 설정하기 위한 변수
  const [imageObject, setImageObject] = useState<any>(); //화면에 보여 줄 이미지 오브젝트

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveFile = (event: any) => {
    setImageObject(event.target.files[0]);
  };

  const deleteTaskId = () => {
    dispatch(task_end());
  };

  const makeFormData = () => {
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

  return (
    <div>
      <div className="fixed bottom-0 right-0 p-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={makeFormData}
        >
          {" "}
          이미지 업로드
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={deleteTaskId}
        >
          {" "}
          taskId삭제 (기능구현 테스트버튼)
        </button>
      </div>

      <div className="wrapVideo">
        {imageObject ? (
          <div className="w-7/12">
            <img
              alt="images"
              className="w-full h-full"
              id="video"
              src={window.URL.createObjectURL(imageObject)}
              style={{ margin: "auto" }}
            ></img>
            <div className="videoBtn flex justify-end pb-16">
              <span
                className="uploadButton flex mt-3 mr-3 "
                onClick={() => fileInput.current.click()}
              >
                <button>CHANGE</button>
              </span>
            </div>
          </div>
        ) : (
          <div className="flex cc items-center justify-center w-3/4 h-64 mt-9">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col justify-center items-center pt-8 pb-6">
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

                <p className="mb-2 w-80 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  MP4, AVI , WMV , MKV , MOV
                </p>
              </div>
              <input
                id="dropzone-file"
                className="cursor-pointer absolute block p-20 z-50 opacity-0"
                name="imageUpload"
                type="file"
                accept="image/*"
                onChange={saveFile}
              />
            </label>
          </div>
        )}
      </div>
      {}

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

export default VideoUploadPage;
