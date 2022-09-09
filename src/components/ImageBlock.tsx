import React from "react";

import xButtonIcon from "../assets/images/xIcon.svg";

interface ImageBlockProps {
  deleteImageFuc: (id: number) => void;
  ImageDto: any;
}

function ImageBlock({ deleteImageFuc, ImageDto }: ImageBlockProps) {
  const useConfirm = (message: string, onConfirm: any) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message!)) {
        onConfirm();
      }
    };

    return confirmAction;
  };

  const deleteConfirm = () => {
    deleteImageFuc(ImageDto.imageId);
  };

  const confirmDelete = useConfirm("정말 삭제하시겠습니까?", deleteConfirm);

  return (
    <div className="relative" key={ImageDto.imageId}>
      <img
        className="flex object-cover object-center aspect-square"
        alt="sample"
        src={ImageDto.after_url}
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
