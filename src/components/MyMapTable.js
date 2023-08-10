import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../recoilState';

export default function MyMapTable(props) {
  console.log("테이블 데이터", props);
  console.log(props.data);

  //검색 결과 표시 해주기
  const searchResults = useRecoilValue(searchResultState);

  if (props.data == "") {
    console.log("Data not available");
    return (
      <div>검색된 결과가 없습니다. </div>
    ); // 데이터가 없을 경우 
  }

  const festivalNameAndAddress = props.data.map(item => [item.festivalName, item.address]);


  console.log(festivalNameAndAddress)

  return (
    <div className='h-[32rem] overflow-y-auto'>
      <div className="ml-4 text-black">
        <span className="text-sm">{searchResults.length} 개의 결과</span>
      </div>
      <table className="border-collapse border border-slate-400 ...  ">
        <thead>
          <tr>
            <th className="border border-slate-300 ...">축제이름</th>
            <th className="border border-slate-300 ...">주소</th>
          </tr>
        </thead>
        <tbody>
          {festivalNameAndAddress.map((festivalNameAndAddress, idex) => (

            <tr key={idex}>

              <td className="border border-slate-300 ... hover:scale-110" > <Link to="/DetailPage">{festivalNameAndAddress[0]}</Link></td>
              <td className="border border-slate-300 ...">{festivalNameAndAddress[1] == null ? "위치정보가 없습니다" : festivalNameAndAddress[1]}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}
