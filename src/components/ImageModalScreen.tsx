import React from "react";

import Modal from "components/Modal";
import DownloadImageButton from "components/DownloadImageButton";

interface ImageModalScreenProps {
  imageInfo: string;
  closeFuc: any;
}

function ImageModalScreen({ imageInfo, closeFuc }: ImageModalScreenProps) {
  return (
    <Modal closeModal={() => closeFuc()}>
      <div className="mt-16">
        <div className="flex justify-center items-center">
          <img
            className="object-contain modalImageSize"
            alt="sample"
            src={imageInfo}
          />
        </div>
        <DownloadImageButton image_url={imageInfo} color="gray" />
      </div>
    </Modal>
  );
}

export default ImageModalScreen;
