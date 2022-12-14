// Modal.js
import React from "react";
import "./Modal.css";

function Modal(props: any) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <div className="Modal h-screen" onClick={closeModal}>
      <div className="modalBody " onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
