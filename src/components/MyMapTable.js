import React from 'react'

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
            <td className="border border-slate-300 ...">{festivalNameAndAddress[0]}</td>
            <td className="border border-slate-300 ...">{festivalNameAndAddress[1]}</td> {/* 주소 데이터가 어떻게 제공되는지에 따라 수정해주세요 */}
          </tr>
        ))}
    
      </tbody>
    </table>
    </div>
  )
}
