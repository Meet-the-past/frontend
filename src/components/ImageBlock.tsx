import React from "react";
import { authAxios } from "../utils/axios";
import { ImageDto } from "../utils/types";

import xButtonIcon from "../assets/images/xIcon.svg";

/**
 * @name : Teawon
 * @component : history이미지 리스트들 중 하나의 이미지
 * @update-date : 2022-09-13
 */

/**
 * @param deleteImageFuc - 부모 컴포넌트로부터 받은 삭제 함수
 * @param imageInfo - 특정 이미지에 대한 정보 (id, url)가 담겨있는 DTO
 */
interface ImageBlockProps {
  deleteImageFuc: (id: string) => void;
  imageInfo: ImageDto;
  clickFun: any;
}

function ImageBlock({ deleteImageFuc, imageInfo, clickFun }: ImageBlockProps) {
  const useConfirm = (message: string, onConfirm: any) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }

    /**
     * @name : Teawon
     * @function confirmAction: 삭제 팝업창 확인
     *  * @update-date 2022-09-13
     */
    const confirmAction = () => {
      if (window.confirm(message!)) {
        onConfirm();
      }
    };

    return confirmAction;
  };

  /**
   * @name : Teawon
   * @function deleteConfirm: 팝업창에서 확인 시 삭제함수 실행
   *  * @update-date 2022-09-13
   */
  const deleteRequest = async (image_id: string) => {
    await authAxios
      .delete(`images/${image_id}`, {})
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteConfirm = () => {
    deleteRequest(imageInfo.id);
    deleteImageFuc(imageInfo.id);
  };

  const confirmDelete = useConfirm("정말 삭제하시겠습니까?", deleteConfirm);

  return (
    <div className="relative" key={imageInfo.id}>
      <img
        className="flex object-cover borderImage object-center aspect-square hover:scale-105"
        onClick={() => clickFun()}
        alt="sample"
        src={imageInfo.converted_url}
      />
      <button onClick={confirmDelete}>
        <img
          className="absolute w-8 h-8 right-0 top-0"
          alt="deleteBtn"
          src={xButtonIcon}
        />
      </button>
    </div>
  );
}

export default ImageBlock;
