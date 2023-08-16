import React, { useEffect, useState } from 'react'
import axios from "axios";
export default function FestivalListSeachButton(props) {
  const [addressText, setAddressText] = useState("");
  const sido = props.selectedSido;
  const sigungu = props.selectedSigungu;

  console.log(sido, sigungu);
  const onChangeAddressText = (e) => {
    setAddressText(e.target.value);

  }

  //enter누르면 검색버튼 누르도록 설정
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      searchFestival()
    }
  };

  const searchFestival = () => {

    {
      !addressText ? axios.get(`http://localhost:8080/search/findFestivalAllList?address=${sido + " " + sigungu}`)
        .then((res) => {
          console.log("가져온 축제 리스트", res);
          // 검색 결과를 부모 컴포넌트로 전달
          console.log(res.data)
          console.log("addresstext", addressText);
          setAddressText('');
          props.onSearch(res.data);

          // props.onSearch(addressText);
        }).catch((error) => { console.log(error); })
        : axios.get(`http://localhost:8080/search/findFestivalAllList?address=${addressText}`)
          .then((res) => {
            console.log("가져온 축제 리스트", res);
            // 검색 결과를 부모 컴포넌트로 전달
            console.log(res.data)
            console.log("addresstext1", addressText);

            props.onSearch(res.data);
            setAddressText("");
            props.resetSelectedValues();

            // props.onSearch(addressText);
          }).catch((error) => { console.log(error); })
    }
  }

  return (
    <header className='flex gap-x-4'>
      <input type="text" placeholder="지역을 입력해주세요." value={addressText} onKeyDown={handleEnter} onChange={onChangeAddressText} className='rounded-lg'></input>
      <button onClick={searchFestival} className='rounded-lg  bg-[#9a7ba8] hover:bg-[#bc97c4] px-4 text-white'>검색</button>
    </header>
  )
}
