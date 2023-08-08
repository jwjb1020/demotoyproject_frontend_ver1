import React from "react";
import { slideArr, PaginationBtnType } from "./interface";

function Pagination({ slideIndex, setSlideIndex }: PaginationBtnType) {
  const slideLength = slideArr.length;

  // 개수를 동적으로 변경하기 위해서 slideLength만큼의 배열 원소를 가지는 배열 생성
  let paginationArr = new Array(slideLength);
  paginationArr.fill(1);

  // pagenation 버튼을 클릭하면 해당 버튼의 index에 맞는 슬라이드로 이동
  // setSlideIndex를 해당 버튼의 index로 맞춰주면 됨
  // 조심해야할 것은, Pagenation.tsx에서 사용 중인 배열은 앞 뒤에 복제본이 없는 오리지널 배열이라는 것. 따라서 버튼 index + 1을 해줘야지 의도한대로 움직임.
  const paginationHandler = (index: number) => {
    setSlideIndex(index + 1);
  };

  return (
    <div className="absolute z-10 justify-center hidden w-screen bottom-2 group-hover:flex">
      <ol className="flex">
        {paginationArr.map((item, index) => (
          <li
            className="w-[15px] h-[15px] rounded-full bg-[rgba(255,255,255,0.5)] mx-1 hover:bg-[rgba(255,255,255,0.8)] hover:cursor-pointer"
            style={{
              backgroundColor: `${
                slideIndex === index + 1 ? "rgba(255,255,255,0.8)" : ""
              }`,
            }}
            key={index}
            onClick={() => paginationHandler(index)}
          ></li>
        ))}
      </ol>
    </div>
  );
}

export default Pagination;