import React, { useState, useRef, useEffect } from "react";

interface ImageBlockProps {
  deleteImageFuc: (id: number) => void;
  ImageDto: any;
}

function ImageBlock({ deleteImageFuc, ImageDto }: ImageBlockProps) {
  return (
    <div className="relative w-60 h-60" key={ImageDto.imageId}>
      <img
        className="flex object-cover h-60 w-60"
        alt="sample"
        src={ImageDto.after_url}
      />
      <button onClick={() => deleteImageFuc(ImageDto.imageId)}>
        <img
          className="absolute w-8 h-8 right-0 top-0"
          alt="deleteBtn"
          src="/images/negative.png"
        />
      </button>
    </div>
  );
}

export default ImageBlock;
