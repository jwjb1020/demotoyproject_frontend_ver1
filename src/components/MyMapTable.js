import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../recoilState';
import MyLocationModal from './MyLocationModal'; //나중에 쓰기
import MyFestivalInfoModal from './MyFestivalInfoModal';

export default function MyMapTable(props) {
  // console.log("테이블 데이터", props);
  // console.log(props.data);



  //검색 결과 표시 해주면서 변환 안하게 만들기
  const searchResults = useRecoilValue(searchResultState);
  console.log("전역",searchResults)
  const [index, setIndex] = useState(null);
 
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  



  if (!props.data || props.data.length === 0) {
    console.log("Data not available");
    return (
      <div>검색된 결과가 없습니다. </div>
    ); // 데이터가 없을 경우 
  }
  // 축제 상세정보들 가지고 오기
  const festivalDetail = props.data.map((item) => [item.festivalName, item.place,
  item.content, item.contentInfo, item.start, item.end, item.jugwan, item.homepage, item.tel])
  console.log("상세정보", festivalDetail);

  const festivalNameAndAddress = props.data.map(item => [item.festivalName, item.address, item.latitude, item.longitude]);



  console.log("idnex정보", festivalDetail[index])




  return (
    <div className='h-[32rem] overflow-y-auto'>
      <div className="ml-4 text-black">
        <p className="text-sm font-Myfont">{searchResults.length} 개의 결과</p>
      </div>
      <table className=" border-2 rounded-md border-[#fdfdfd]  shadow shadow-black/10 ">
        <thead>
          <tr className='bg-[#d8ecf7] '>
            <th className="border border-[#ffffff] font-Myfont text-[#4F4F4F]">축제이름</th>
            <th className="border border-[#ffffff] font-Myfont text-[#4F4F4F]">주소</th>
          </tr>
        </thead>
        <tbody>
          {festivalNameAndAddress.map((festivalNameAndAddress, idex) => (

            <tr className="bg-[#f8eaf2]" key={idex}>

              <td className="border border-[#ffffff] text-[#4F4F4F] px-8 font-Myfont hover:scale-110" onClick={() => { setShowModal1(true); setIndex(idex); }} >{festivalNameAndAddress[0]}</td>
              <td className="border border-[#ffffff]  text-[#4F4F4F] px-8 font-Myfont hover:scale-110" onClick={() => { setShowModal2(true); setIndex(idex); }} >{festivalNameAndAddress[1] == null ? "위치정보가 없습니다" : festivalNameAndAddress[1]}</td>
            </tr>
          ))}

        </tbody>
      </table>
       {/* MyFestivalInfoModal 컴포넌트를 사용하면서 필요한 정보들을 props로 전달 */}
       <MyFestivalInfoModal showModal={showModal1} setShowModal={setShowModal1} index={index} festivalDetail={festivalDetail} />
       <MyLocationModal showModal={showModal2} setShowModal={setShowModal2} index={index} />
     </div>
  )
}
