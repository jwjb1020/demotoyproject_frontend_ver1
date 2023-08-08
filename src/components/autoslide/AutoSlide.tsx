import { useEffect, useRef, useState } from "react";
import { slideArr } from "./interface";
import SlideBtn from "./SlideBtn";
import Pagination from "./Pagination";
import React from "react";

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

const useInterval: IUseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    // 만약 customInterval에 10000(10초)를 넣었을 때, setInterval을 설정하지 않는다면
    // 슬라이드의 인덱스가 증가하는 동작이 멈추게 되므로,
    // 이를 마우스 오버와 결합 시키면, 슬라이드 정지를 구현할 수 있지않을까?
    // 마우스 오버시 setCustomInterval를 10000로 설정하고, 그 customInterval를 interval 인자로 받아오므로
    // 여기서 if문 처리를 해주는 거지!
    if (interval !== 10000) {
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
};

function AutoSlide() {
  // state가 1부터 시작하는 이유
  // 무한 슬라이드를 구현하기 위해서 slideArr 앞 뒤에 요소를 추가했기 때문에, 1번 인덱스가 첫번째 슬라이드가 됨.
  const [slideIndex, setSlideIndex] = useState(1);

  const outRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const SLIDE_NUM = slideArr.length;

  const beforeSlide = slideArr[SLIDE_NUM - 1];
  const afterSlide = slideArr[0];

  // 무한 슬라이드를 구현하기 위해 새롭게 배열을 만듦.
  let copiedArr = [beforeSlide, ...slideArr, afterSlide];

  const COPIED_NUM = copiedArr.length;

  // 처음 페이지가 랜더링 되었을 때, customInterval은 3000
  const [custominterval, setCustomInterval] = useState(3000);

  useInterval(
    () => setSlideIndex((slideIndex) => slideIndex + 1),
    custominterval
  );

  // 무한 슬라이드(왼쪽으로만 가는)
  // 1. last,first,...,last,first 식으로 배열을 만듦
  // 2. first부터 슬라이드 시작(인덱스 1)
  // 3. last 뒤에 있는 first 인덱스까지 간다(인덱스 1부터 마지막 인덱스까지)
  // 4. 인덱스가 last 뒤에 있는 first보다 커지면, transition을 멈추고, 앞에 있는 first로 빠르게 이동한다.
  // last 뒤에 있는 복제된 first의 인덱스가 9이므로, 9 -> 10이 되었을 때 동작한다.
  if (slideIndex === 10) {
    // transition 속성을 없앰
    if (slideRef.current) {
      slideRef.current.style.transition = "";
    }

    // slideIndex를 first 슬라이드로 변경
    // transition이 없으므로 바로 이동됨.
    // 그런데 이미지는 같기 때문에 유저 눈에는 안 바뀌는 것 처럼 보인다.
    setSlideIndex(1);

    // setTimeout을 걸지 않고 바로 다시 transition을 설정해주면
    // slideIndex가 10에서 1로 가는것보다 빨리 적용되버려서, transition 효과가 나타나버림. UX가 망가지다 못해 폭발해버린다.
    // 10 -> 1로 가는게 interval 500으로 되어 있는데, setTimeout을 안 걸면 500보다 빠르게 style이 복구되버린다는 뜻
    // setTimeout 설정을 0으로 해놔도 비동기적으로 실행되기 때문에 바로 선언하는 것과 시간 차가 있다.
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "all 500ms ease-in-out";
      }
    }, 0);
  }

  // 클릭으로 인해서 1 -> 0이 되었을 때 동작할 부분.
  // 9 -> 10이 되었을 때와 똑같은 작동 방식.
  // 즉, slideIndex가 customInterval을 조정해줘야함
  // 안됨!!!! customInterval은 증가하는 방향으로만 작동하기 때문에 뒤로 가는 효과랑은 어울리지 않음.
  // 슬라이드 방향을 탐지해서 뒤로 가기 할 때만 다른 것을 적용하도록 해야할 것 같은데?
  // 문제 원인
  // slideIndex는 1에서 0으로 즉각 떨어지는 반면 나머지 효과들은 시간차가 발생하기 때문에
  // 무한 슬라이드 효과가 아니라 끝에서 끝으로 주르륵 이동해버리는 상황이 발생함.
  if (slideIndex === 0) {
    // 과정 정리
    // 1. 뒤로 가기 버튼 누름
    // 2. slideIndex가 1에서 0으로 바뀜
    // 3. transition 효과를 가지고 이동. 500ms 소요
    // 여기부터 if문 동작
    // 4. 이동 완료 후 transition 효과 삭제
    // 5. slideIndex를 8로 옮김
    // 6. 다시 transition 효과 복구

    // transition 효과가 500ms duration이므로, 500ms 이후에 if문 동작 실행하게 setTimeout 설정
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "";
      }

      // transition 효과가 없는 상태에서 오리지널 last로 이동
      setSlideIndex(8);

      // 다시 transition 효과 복구
      // 단, 비동기 실행을 하지 않으면, transition 삭제가 바로 복구되므로
      // 비동기 처리를 해서 안정적으로 작동하게 만들자.
      // setTimeout은 time을 0으로 설정해도 비동기 처리됨.
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 500ms ease-in-out";
        }
      }, 0);
    }, 500);
  }

  // 슬라이드 버튼 클릭시 방향에 따라 슬라이드 인덱스 조정
  const slideHandler = (direction: number) => {
    setSlideIndex((slideIndex) => slideIndex + direction);
  };

  // mouseover 이벤트 발생 시 customInterval을 10000으로 바꿈.
  // 이는 useInterval에서 조건문 처리가 되어, slideIndex 증가문을 실행하지 않게함.
  const stopSlide = () => {
    setCustomInterval(10000);
  };

  // mouseLeave 이벤트 발생 시 customInterval을 원래대로 복구시킴.
  const restartSlide = () => {
    if (slideIndex === 9) {
      setCustomInterval(500);
    } else {
      setCustomInterval(3000);
    }
  };

  // 슬라이드 버튼과 페이지네이션에 mouseover 상태여도 작동하도록 가장 바깥 div에 ref를 설정해서 addEventListener 실행
  useEffect(() => {
    outRef.current?.addEventListener("mouseover", stopSlide);
    outRef.current?.addEventListener("mouseleave", restartSlide);

    return () => {
      outRef.current?.removeEventListener("mouseover", stopSlide);
      outRef.current?.removeEventListener("mouseleave", restartSlide);
    };
  }, [custominterval]);

  // 재랜더링마다 slideIndex를 확인하고, 그게 9라면 customInterval을 500으로 설정한다.
  // 만약 9가 아니라면, 3000을 설정한다.
  // 이 설정 덕분에 마우스 이벤트로 인해서 슬라이가 멈췄다가 다시 진행될 때
  // custominterval이 변해도 slideIndex를 확인해서 재설정이 가능함.
  useEffect(() => {
    // useInterval()에 사용하는 interval을 인덱스 번호에 따라 조절함으로써 UX를 키워줌.
    // 무한 슬라이드의 핵심 부분인 마지막 슬라이드와 복제된 첫 번째 슬라이드 때문에
    // 그 때의 interval을 transition의 duration과 같게 해줘야한다. 그래야 무한 슬라이드가 매끄러움.
    // last 뒤에 있는 복제된 first의 인덱스가 9이므로, 9 -> 10이 되는 것을 다른 때보다 빠르게 진행시켜서 시각적으로 슬라이드가 계속되는 것 처럼 보이게 함.
    if (slideIndex === 9) {
      setCustomInterval(500);
    } else {
      setCustomInterval(3000);
    }
  }, [slideIndex]);

  return (
    <div className="relative overflow-hidden z-[1] group" ref={outRef}>
      <SlideBtn direction="left" onClick={() => slideHandler(-1)} />
      <SlideBtn direction="right" onClick={() => slideHandler(1)} />
      <Pagination setSlideIndex={setSlideIndex} slideIndex={slideIndex} />
      <div
        className="flex"
        ref={slideRef}
        style={{
          width: `${100 * COPIED_NUM}vw`,
          transition: "all 500ms ease-in-out",
          transform: `translateX(${
            -1 * ((100 / copiedArr.length) * slideIndex)
          }%)`,
        }}
      >
        {copiedArr.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.img}
              alt="banner"
              className="h-[500px] sm:h-[655px] lg:w-screen lg:h-[700px]"
            />

            <div className="absolute px-[5%] font-bold text-white top-1/2">
              <h1 className="text-[24px] lg:text-[28px]">{item.imgTitle}</h1>
              <p className="text-[36px] lg:text-[52px]">{item.imgDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoSlide;