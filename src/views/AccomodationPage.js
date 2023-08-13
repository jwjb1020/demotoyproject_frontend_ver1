import React, { useEffect, useState } from 'react';
import MyNav from '../components/MyNav';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../recoilState';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MyAcoMap from '../components/MyAcoMap';
import MyAcoModal from '../components/MyAcoModal';

export default function AccomodationPage() {
  // Recoil 상태값을 가져옵니다.
  const addressResult = useRecoilValue(searchResultState);
  const location = useLocation();

  // 숙박 시설 데이터를 저장하는 상태 변수와 로딩 여부를 관리하는 상태 변수
  const [acommodationData, setAcommodationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredMarkerIndex, setHoveredMarkerIndex] = useState(null); // 마우스 오버한 마커의 인덱스

  const [showModal,setShowModal] = useState(false);
  const [index, setIndex] = useState(null);
  useEffect(() => {
    if (!location || !addressResult) {
      // Handle cases where location or addressResult is null
      setLoading(false);
      return;
    }

    // Check if the indexkey exists in addressResult before accessing it
    if (!addressResult[location.state?.indexkey]) {
      console.log('유효하지 않은 주소 결과 또는 인덱스 키');
      setLoading(false);
      return;
    }

    // 주소 정보를 가져오기
    const addressList = addressResult[location.state.indexkey].address.split(' ');
    const addressSigungu = addressList[0] + ' ' + addressList[1];

    // 주소에 해당하는 숙박 시설 데이터를 가져오기
    axios.get(`http://localhost:8080/search/findAcommodation?address=${addressSigungu}`)
      .then((response) => {
        const responseAddress = response.data;
        console.log('숙소', responseAddress);
        setAcommodationData(responseAddress);
      })
      .catch((error) => {
        console.log('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [location, addressResult]);

  if (!location || !addressResult) {
    return <div>No address</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (acommodationData.length === 0) {
    return (
      <>
        <MyNav />
        <div>No accommodation data found</div>
      </>
    );
  }

  // 화면을 렌더링합니다.
  return (
    <div>
      <MyNav />
      {/* 여기에 넓비 높이 정해주기. 그 밑에는 오버플로우 */}
      <p className='m-1'> {acommodationData.length}개의 검색결과</p>

      <div className='flex border-1 border-black'>
        <div className='overflow-auto h-96 w-96'>
          {/* 'acommodationData' 상태에 있는 숙소 데이터를 표시합니다. */}
          {acommodationData.map((item,index) =>
            <div key={index} className='text-[#f8f0f0]  font-Myfont bg-[#9e89ce] border-1 rounded-lg m-1 p-1 hover:bg-[#c1b0e9]'
            onClick={()=>{setShowModal(true); setIndex(index)}}
            onMouseOver={() => setHoveredMarkerIndex(index)} // 마우스 오버 시 해당 인덱스를 상태 변수에 저장
            onMouseOut={() => setHoveredMarkerIndex(null)} // 마우스 아웃 시 상태 변수 초기화
            >
              {item.acommodationName}
            </div>)}
        </div>
        <div className='h-96 w-full'>
          <MyAcoMap index={location.state?.indexkey} acoData={acommodationData}  hoveredMarkerIndex={hoveredMarkerIndex} />
        </div>
      </div>
      <MyAcoModal showModal ={showModal} setShowModal ={setShowModal} index= {index} acommodationData = {acommodationData}/>
    </div>
  );
}
