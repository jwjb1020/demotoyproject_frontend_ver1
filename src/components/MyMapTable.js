import React from 'react'
import { Link } from 'react-router-dom';

export default function MyMapTable(props) {
  console.log("테이블 데이터", props)
  if (!props.data) {
    console.log("Data not available");
    return null; // 데이터가 없을 경우 빈 화면을 반환
  }
 
  const festivalNameAndAddress = props.data.map(item => [item.festivalName, item.address]);

  
  console.log(festivalNameAndAddress)

  return (
    <div className='h-[32rem] overflow-y-auto'>
    <table className="border-collapse border border-slate-400 ...  ">
      <thead>
        <tr>
          <th className="border border-slate-300 ...">축제이름</th>
          <th className="border border-slate-300 ...">주소</th>
        </tr>
      </thead>
      <tbody>
      {festivalNameAndAddress.map((festivalNameAndAddress,idex) => (
        
          <tr key={idex}>
            
            <td className="border border-slate-300 ... hover:scale-110" > <Link to="/DetailPage">{festivalNameAndAddress[0]}</Link></td>
            <td className="border border-slate-300 ...">{festivalNameAndAddress[1]==null ? "위치정보가 없습니다" : festivalNameAndAddress[1]}</td>
          </tr>
        ))}
    
      </tbody>
    </table>
    </div>
  )
}
