import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchResultState } from '../recoilState';

export default function SearchButton() {
  const [festivalName, setFestivalName] = useState("")
  const [searchResults, setSearchResult] = useRecoilState(searchResultState);
  const navigate = useNavigate();

  //enter누르면 검색버튼 누르도록 설정
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      FindHandler()
    }
  };

  const FindHandler = () => {
    axios.get(`http://localhost:8080/search/findall?festivalName=${festivalName}`)
      .then((response) => {
        //만약에 입력칸에 아무것도 없으면 알림 띄우기
        if (!festivalName) {
          console.log("축제를 입력해주세요.");
          alert("축제를 입력해주세요.")
          return;
        }

        const responseData = response.data;
        console.log('Response:', responseData);

        // navigate로 데이터 넣어서 전달할때 이런형식으로 보내야함
        // navigate("/searchPage",
        //   {state : {
        //     data: responseData
        //   }})
        setSearchResult(responseData);
        navigate("/searchPage");

      })
      .catch((error) => {
        console.log('Error:', error);
      })
  };

  return (


    <div className="space-y-6" >
      <hr
        className="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-80 dark:opacity-100"
      />
      <div className='flex justify-evenly w-full bg-[#dfc5df] py-8 opacity-70 '>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            festival
          </label>
          <input
            id=" festival"
            name=" festival"
            type="text"
            placeholder='축제를 입력해주세요.'
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setFestivalName(e.target.value)}
            onKeyDown={handleEnter}
          />
        </div>

        <button onClick={FindHandler} className=' bg-[#FFCCCC] rounded-lg border-double border-2 w-40 font-Cafe24Shiningstar font-bold text-xl' >
          검색
        </button>

      </div>
      <hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-80 dark:opacity-100"
      />

    </div>



  )
}
