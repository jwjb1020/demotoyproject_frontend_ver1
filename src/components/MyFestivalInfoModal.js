import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { TEModal, TEModalBody, TEModalContent, TEModalDialog, TEModalFooter, TEModalHeader, TERipple } from 'tw-elements-react';

export default function MyFestivalInfoModal({ showModal, setShowModal, index, festivalDetail }) {

  //숙소 페이지로 처음 선택된 인덱스값 보내주기
  const navigate = useNavigate();
  const goToAco = () => {
    navigate("/AccomdationPage", { state: { indexkey: index } })
  }

  // 날짜 형식 변환 함수
  function formatDate(dateISOString) {
    const date = new Date(dateISOString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  return (
    <div>
      {/* 팝업창 */}
      <TEModal show={showModal} setShow={setShowModal} staticBackdrop>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              {index !== null && (
                <h5 className="text-xl font-medium leading-normal text-black">
                  {festivalDetail[index][0]}
                </h5>)}
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}

            {index !== null && (<div className='overflow-auto'><TEModalBody>

              <p>장소: {festivalDetail[index][1]}</p>
              <hr className="h-px my-2 bg-gray-200 " />
              <p>날짜: {formatDate(festivalDetail[index][4])} ~ {formatDate(festivalDetail[index][5])}</p>
              <hr className="h-px my-2 bg-gray-200 " />
              <p>내용: {festivalDetail[index][2]}</p>
              <hr className="h-px my-2 bg-gray-200 " />
              <p>추가내용: {festivalDetail[index][3]}</p>
              <hr className="h-px my-2 bg-gray-200 " />
              <p>주관기관: {festivalDetail[index][6]}</p>
              <hr className="h-px my-2 bg-gray-200 " />
              <p>홈페이지:  <a href={festivalDetail[index][7]} target="_blank">{festivalDetail[index][7]}</a></p>
              <hr className="h-px my-2 bg-gray-200 " />
              <p>연락처: {festivalDetail[index][8]}</p>

            </TEModalBody></div>)}
            <TEModalFooter>
              <button onClick={goToAco} className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-Cafe24Shiningstar  text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 ">가장 가까운 숙소 찾기</button>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => { setShowModal(false); }}
                >
                  Close
                </button>
              </TERipple>

            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  )
}
