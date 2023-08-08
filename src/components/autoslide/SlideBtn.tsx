import React from "react";
import { DirectionBtnType } from "./interface";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function SlideBtn({ direction, onClick }: DirectionBtnType) {
  return (
    <div
      className={
        direction === "left"
          ? "hidden md:absolute md:top-1/2 md:left-2 md:text-white md:z-10 md:group-hover:block"
          : "hidden md:absolute md:top-1/2 md:right-2 md:text-white md:z-10 md:group-hover:block"
      }
    >
      <button onClick={onClick}>
        {direction === "left" ? (
          <AiOutlineLeft size="30px" />
        ) : (
          <AiOutlineRight size="30px" />
        )}
      </button>
    </div>
  );
}

export default SlideBtn;