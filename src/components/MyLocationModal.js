import React from 'react';
import { TEModal, TEModalBody, TEModalContent, TEModalDialog, TEModalFooter, TEModalHeader, TERipple } from 'tw-elements-react';
import MyMap from './MyMap';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../recoilState';

export default function MyLocationModal({ showModal, setShowModal, index }) {
    const searchResults = useRecoilValue(searchResultState);
    let latitude = null;
    let longitude = null;
    let festivalName = null;

    // if(index !==null ){
    // console.log("지도정보", searchResults, index);
    // console.log(searchResults[index]["address"]);
    // console.log(searchResults[index]);

    // key : value는 인덱스로 못갖고옴
    if (index !== null && searchResults[index]) {
        latitude = searchResults[index].latitude;
        longitude = searchResults[index].longitude;
        festivalName = searchResults[index].festivalName;
    }
    console.log(latitude, longitude, festivalName);


    return (
        <div>
            <TEModal show={showModal} setShow={setShowModal} staticBackdrop>
                <TEModalDialog>
                    <TEModalContent>
                        <TEModalHeader>
                            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                                축제 지도
                            </h5>
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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </TEModalHeader>
                        <TEModalBody>

                            {(latitude == null || longitude == null) ?
                                <div>위치데이터가 없습니다.</div> :
                                <MyMap latitude={latitude} longitude={longitude} festivalName={festivalName} />}

                        </TEModalBody>
                        <TEModalFooter>
                            <TERipple rippleColor="light">
                                <button
                                    type="button"
                                    className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                    onClick={() => {
                                        setShowModal(false);
                                    }}
                                >
                                    Close
                                </button>
                            </TERipple>
                        </TEModalFooter>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </div>
    );
}