import React, { useEffect } from 'react'
import axios from "axios";
export default function FestivalListSeachButton(props) {
    const sido = props.selectedSido;
    const sigungu = props.selectedSigungu;

    console.log(sido,sigungu);

    const searchFestival = () =>{
      axios.get(`http://localhost:8080/search/findFestivalAllList?address=${sido+" "+sigungu}`)
      .then((res)=>{
        console.log("가져온 축제 리스트",res);
        // 검색 결과를 부모 컴포넌트로 전달
        console.log(res.data)
        props.onSearch(res.data);

      })
    }

    return (
      <header className='flex '>
        <input type="text" placeholder="지역을 입력해주세요."></input>
        <button onClick={searchFestival}>검색</button>
       </header>
    )
}
