/* eslint-disable react/require-default-props */
import React, { useState } from "react";

interface FormButtonProps {
  text: string;
  onClick?: () => void;
  height: string;
  width: string;
  color: string;
}

export default function FormButton({
  text,
  onClick = () => {},
  height,
  width,
  color,
}: FormButtonProps) {
  return (
    <div className="mt-5 w-full items-center text-center relative flex justify-center align-middle rounded-full">
      <button
        className={`${width} ${height} border-black border-2 bg-${color}-600 hover:bg-${color}-400 text-white font-bold rounded-full`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
