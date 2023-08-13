import React from 'react'
import { TEModal, TEModalBody, TEModalContent, TEModalDialog, TEModalFooter, TEModalHeader, TERipple } from 'tw-elements-react';
export default function MyAcoModal(props) {
    console.log(props.index);
    console.log(props.acommodationData);
    const showModal =props.showModal;
    const setShowModal = props.setShowModal;
    const index = props.index;
    const acommodationData = props.acommodationData;
   
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
              {acommodationData[index]["acommodationName"]}
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

          <p>업종: {acommodationData[index]["acoclass"]} </p>
          <hr className="h-px my-2 bg-gray-200 " />
          <p>건물층: 지하 {acommodationData[index]["downstair"]} ~ 지상 {acommodationData[index]["upstair"]} 층 </p>
          <hr className="h-px my-2 bg-gray-200 " />
          <p>소유층: {acommodationData[index]["startstair"]}~{acommodationData[index]["endstair"]} 층</p>
          <hr className="h-px my-2 bg-gray-200 " />
          <p>한실 수: {acommodationData[index]["hansil"]} 개</p>
          <hr className="h-px my-2 bg-gray-200 " />
          <p>양실 수: {acommodationData[index]["yangsil"]} 개</p>
          <hr className="h-px my-2 bg-gray-200 " />
          <p>전화번호: {acommodationData[index]["tel"]}</p>
          <hr className="h-px my-2 bg-gray-200 " />
          <p>상세주소: {acommodationData[index]["address"]}</p>

        </TEModalBody></div>)}
        <TEModalFooter>
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
